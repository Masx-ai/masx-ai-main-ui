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
import { HeroSceneLoader as HeroScene } from '@/components/site/HeroSceneLoader';

interface CaseStudyProps {
  index: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  body: string;
  bullets: string[];
  href: string;
  sceneVariant: 'globe' | 'network';
  flipped?: boolean;
}

export function CaseStudy({ index, eyebrow, title, subtitle, body, bullets, href, sceneVariant, flipped = false }: CaseStudyProps) {
  return (
    <section className="px-6 md:px-10 py-24 md:py-32 border-t border-border">
      <div className="grid md:grid-cols-12 gap-10 items-center">
        <div className={`md:col-span-7 relative aspect-[4/3] md:aspect-[16/11] overflow-hidden rounded-sm border border-border bg-card ${flipped ? 'md:order-2' : ''}`}>
          <HeroScene variant={sceneVariant} />
          <div className="absolute inset-0 bg-gradient-to-tr from-ink/60 via-transparent to-transparent" />
          <div className="absolute top-4 left-4 text-mono text-[10px] uppercase tracking-[0.25em] text-signal">{eyebrow}</div>
          <div className="absolute bottom-4 right-4 text-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">● Live</div>
        </div>
        <div className={`md:col-span-5 ${flipped ? 'md:order-1' : ''}`}>
          <p className="text-mono text-xs uppercase tracking-[0.3em] text-signal">[Case · {index}]</p>
          <h3 className="mt-4 text-display text-5xl md:text-7xl font-semibold leading-[0.9]">{title}</h3>
          <p className="mt-4 text-xl text-foreground/80 italic">{subtitle}</p>
          <p className="mt-6 text-muted-foreground">{body}</p>
          <ul className="mt-6 space-y-2 text-sm">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3 border-b border-border pb-2 text-foreground/90">
                <span className="text-signal text-mono text-xs mt-1">→</span>{b}
              </li>
            ))}
          </ul>
          <Link href={href} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-3 text-mono text-xs uppercase tracking-[0.2em] text-signal hover:gap-5 transition-all cursor-hover">
            <span className="h-px w-10 bg-signal" />Visit platform ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
