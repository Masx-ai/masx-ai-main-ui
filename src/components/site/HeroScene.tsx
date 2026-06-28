'use client';
/*
 * Copyright (c) 2025-present Ateet Vatan Bahmani
 * Project: MASX AI
 * Author: Ateet Vatan Bahmani <admin@masxai.com> | @masxai
 * All rights reserved.
 *
 * This source code is the proprietary and confidential property of
 * Ateet Vatan Bahmani. Unauthorized copying, distribution, modification,
 * or use of this file, via any medium, is strictly prohibited without
 * the prior written permission of the copyright holder.
 *
 * SPDX-License-Identifier: LicenseRef-MASX-Proprietary
 * See the LICENSE file in the project root for full terms.
 */


import { useEffect, useRef } from 'react';
import * as THREE from 'three';

type Variant = 'globe' | 'network' | 'duo';

export function HeroScene({ variant = 'duo' }: { variant?: Variant }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = () => mount.clientWidth;
    const height = () => mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width() / height(), 0.1, 1000);
    camera.position.set(0, 0, 5);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      const fallback = document.createElement('div');
      fallback.className =
        'absolute inset-0 flex items-center justify-center text-mono text-xs text-muted-foreground uppercase tracking-widest';
      fallback.textContent = 'WebGL unavailable';
      mount.replaceChildren(fallback);
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width(), height());
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const SIGNAL = new THREE.Color('#D4C49A');
    const ACCENT = new THREE.Color('#8BA4BD');

    // Wireframe globe (global intelligence)
    const globeGroup = new THREE.Group();
    const sphereGeo = new THREE.IcosahedronGeometry(1.4, 4);
    const wireMat = new THREE.LineBasicMaterial({
      color: SIGNAL,
      transparent: true,
      opacity: 0.35,
    });
    const wire = new THREE.LineSegments(new THREE.WireframeGeometry(sphereGeo), wireMat);
    globeGroup.add(wire);

    const innerSphere = new THREE.Mesh(
      new THREE.SphereGeometry(1.38, 64, 64),
      new THREE.MeshBasicMaterial({
        color: 0x0a0e18,
        transparent: true,
        opacity: 0.85,
      }),
    );
    globeGroup.add(innerSphere);

    // Dots on sphere
    const dotCount = 220;
    const dotGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(dotCount * 3);
    for (let i = 0; i < dotCount; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      const r = 1.42;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    dotGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const dots = new THREE.Points(
      dotGeo,
      new THREE.PointsMaterial({
        color: SIGNAL,
        size: 0.025,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.9,
      }),
    );
    globeGroup.add(dots);

    // Particle network (bittensor)
    const netGroup = new THREE.Group();
    const NODE_COUNT = 80;
    const nodes: THREE.Vector3[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 3,
          (Math.random() - 0.5) * 3,
        ),
      );
    }
    const nodeGeo = new THREE.BufferGeometry();
    const nodePos = new Float32Array(NODE_COUNT * 3);
    nodes.forEach((v, i) => {
      nodePos[i * 3] = v.x;
      nodePos[i * 3 + 1] = v.y;
      nodePos[i * 3 + 2] = v.z;
    });
    nodeGeo.setAttribute('position', new THREE.BufferAttribute(nodePos, 3));
    const nodePoints = new THREE.Points(
      nodeGeo,
      new THREE.PointsMaterial({
        color: ACCENT,
        size: 0.06,
        transparent: true,
        opacity: 0.95,
      }),
    );
    netGroup.add(nodePoints);

    // Edges between close nodes
    const edgePositions: number[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 0.9) {
          edgePositions.push(
            nodes[i].x, nodes[i].y, nodes[i].z,
            nodes[j].x, nodes[j].y, nodes[j].z,
          );
        }
      }
    }
    const edgeGeo = new THREE.BufferGeometry();
    edgeGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(new Float32Array(edgePositions), 3),
    );
    const edges = new THREE.LineSegments(
      edgeGeo,
      new THREE.LineBasicMaterial({ color: ACCENT, transparent: true, opacity: 0.18 }),
    );
    netGroup.add(edges);

    if (variant === 'duo') {
      globeGroup.position.set(-1.3, 0, 0);
      globeGroup.scale.setScalar(0.9);
      netGroup.position.set(1.6, 0, 0);
      netGroup.scale.setScalar(0.7);
      group.add(globeGroup, netGroup);
    } else if (variant === 'globe') {
      group.add(globeGroup);
    } else {
      group.add(netGroup);
      netGroup.scale.setScalar(1.1);
    }

    let mx = 0, my = 0, tx = 0, ty = 0;
    const onMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      mx = ((e.clientX - rect.left) / rect.width - 0.5) * 0.6;
      my = ((e.clientY - rect.top) / rect.height - 0.5) * 0.6;
    };
    window.addEventListener('mousemove', onMove);

    const onResize = () => {
      camera.aspect = width() / height();
      camera.updateProjectionMatrix();
      renderer.setSize(width(), height());
    };
    window.addEventListener('resize', onResize);

    let raf = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();
      tx += (mx - tx) * 0.05;
      ty += (my - ty) * 0.05;

      group.rotation.y = tx * 0.6;
      group.rotation.x = -ty * 0.4;

      globeGroup.rotation.y = t * 0.18;
      globeGroup.rotation.x = Math.sin(t * 0.15) * 0.12;

      netGroup.rotation.y = -t * 0.12;
      netGroup.rotation.x = Math.sin(t * 0.2) * 0.15;

      (edges.material as THREE.LineBasicMaterial).opacity = 0.12 + Math.sin(t * 1.2) * 0.08;

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      sphereGeo.dispose();
      dotGeo.dispose();
      nodeGeo.dispose();
      edgeGeo.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [variant]);

  return <div ref={mountRef} className="absolute inset-0" />;
}
