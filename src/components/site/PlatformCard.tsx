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

import Link from 'next/link';
import { FrameCorners } from '@/components/site/Atoms';
import { HeroSceneLoader as HeroScene } from '@/components/site/HeroSceneLoader';

interface PlatformCardProps {
  tag: string;
  title: string;
  blurb: string;
  href: string;
  sceneVariant: 'globe' | 'network';
}

export function PlatformCard({ tag, title, blurb, href, sceneVariant }: PlatformCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative aspect-[4/5] md:aspect-[5/6] overflow-hidden rounded-sm border border-border bg-card cursor-hover"
    >
      <div className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity">
        <HeroScene variant={sceneVariant} />
      </div>
      <FrameCorners />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

      <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-10">
        <p className="text-mono text-[10px] uppercase tracking-[0.3em] text-signal">
          {tag}
        </p>
        <div>
          <h3 className="text-display text-4xl md:text-6xl font-semibold leading-[0.95]">
            {title}
          </h3>
          <p className="mt-4 max-w-md text-muted-foreground">{blurb}</p>
          <div className="mt-6 inline-flex items-center gap-3 text-mono text-xs uppercase tracking-[0.25em] text-signal group-hover:gap-5 transition-all">
            Visit platform <span>↗</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
