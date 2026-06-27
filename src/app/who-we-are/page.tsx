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

import type { Metadata } from 'next';
import { SiteShell } from '@/components/site/SiteShell';
import { Marquee, SectionLabel } from '@/components/site/Atoms';
import { HeroSceneLoader as HeroScene } from '@/components/site/HeroSceneLoader';

export const metadata: Metadata = {
  title: 'Who We Are',
  description:
    'Meet MASX AI, the forecasting studio building autonomous, self-correcting intelligence systems with Brier-scored predictions and 35 doctrine agents.',
  alternates: {
    canonical: '/who-we-are',
  },
  openGraph: {
    title: 'Who We Are | MASX AI',
    description:
      'A forecasting studio building autonomous intelligence systems that score every prediction, resolve against ground truth, and improve over time.',
    url: '/who-we-are',
  },
  twitter: {
    title: 'Who We Are | MASX AI',
    description:
      'A forecasting studio building autonomous intelligence systems that score every prediction, resolve against ground truth, and improve over time.',
  },
};

const PRINCIPLES = [
  {
    title: 'Score everything.',
    body: "Every forecast carries a Brier score. Decomposed into reliability, resolution, and uncertainty. If we can't measure it, we don't ship it.",
  },
  {
    title: 'Resolve against ground truth.',
    body: 'Geopolitical forecasts resolve via search-powered evidence sweeps. Bittensor predictions resolve programmatically against subnet snapshots.',
  },
  {
    title: 'Publish the misses.',
    body: "Calibration only matters if you see when we're wrong. Both platforms publish their full track record: every hit, every miss, every Brier decomposition.",
  },
  {
    title: 'Multi-doctrine adversarial.',
    body: '35 doctrine agents, spanning classical statecraft to crisis economics, analyze from opposing lenses. Disagreement is the signal.',
  },
  {
    title: 'Mathematically grounded.',
    body: 'Bayesian updating, Fermi decomposition, temporal projection, evidence weighting. 7 mathematical tools anchor every probability. No vibes.',
  },
  {
    title: 'Self-correcting.',
    body: 'Isotonic recalibration, pattern rate updates, and calibration feedback loops ensure each pipeline run is informed by every prior outcome.',
  },
];

const DOMAINS = [
  { label: 'Geopolitics & Strategy', count: 11 },
  { label: 'Hybrid & Cognitive Warfare', count: 7 },
  { label: 'Economics & Systems', count: 5 },
  { label: 'Civilizational & Environmental', count: 5 },
  { label: 'Classical Statecraft', count: 5 },
];

export default function WhoWeArePage() {
  return (
    <SiteShell>
      <section className="relative min-h-[80svh] flex items-end px-6 md:px-10 pb-20 pt-40 overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <HeroScene variant="globe" />
        </div>
        <div className="relative z-10">
          <SectionLabel index="00">Who we are</SectionLabel>
          <h1 className="mt-6 text-display text-[clamp(3rem,12vw,12rem)] font-semibold leading-[0.85]">
            A studio for<br />
            <span className="italic text-signal-gradient">forecasting.</span>
          </h1>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <SectionLabel index="01">Mission</SectionLabel>
        </div>
        <div className="md:col-span-7">
          <p className="text-display text-3xl md:text-5xl leading-[1.1] font-medium">
            Enterprises spend months producing forecasts by hand. We built an
            engine that does it <span className="italic text-signal">autonomously, in seconds</span>,
            across any domain you point it at.
          </p>
          <p className="mt-8 text-muted-foreground max-w-xl text-lg">
            MASX AI was built on a simple conviction: forecasting shouldn&apos;t
            require armies of analysts. One agentic engine, running 24/7,
            producing scored predictions that improve with every resolution.
            Geopolitics and Bittensor are the first two verticals. The architecture
            is domain-agnostic by design.
          </p>
        </div>
      </section>

      <Marquee
        items={[
          'Calibrated',
          'Probabilistic',
          'Brier-scored',
          'Adversarial',
          'Self-correcting',
          'Autonomous',
        ]}
      />

      <section className="px-6 md:px-10 py-24 md:py-32">
        <SectionLabel index="02">Principles</SectionLabel>
        <div className="mt-12 grid md:grid-cols-3 gap-px bg-border border border-border">
          {PRINCIPLES.map((p, i) => (
            <div key={p.title} className="bg-background p-8 md:p-10 min-h-[260px] flex flex-col">
              <p className="text-mono text-xs uppercase tracking-[0.3em] text-signal">
                0{i + 1}
              </p>
              <h3 className="mt-4 text-display text-2xl md:text-3xl font-semibold leading-tight">
                {p.title}
              </h3>
              <p className="mt-auto pt-6 text-sm text-muted-foreground">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-border bg-ink/40">
        <SectionLabel index="03">The doctrine engine</SectionLabel>
        <div className="mt-8 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-5">
            <p className="text-display text-[clamp(6rem,18vw,14rem)] font-semibold leading-[0.8] text-signal-gradient">
              35
            </p>
            <p className="mt-4 text-display text-3xl md:text-4xl font-semibold leading-tight">
              autonomous doctrine<br />agents, trained on<br />centuries of strategy.
            </p>
          </div>
          <div className="md:col-span-7">
            <p className="text-lg text-muted-foreground max-w-lg">
              Each agent carries a dedicated knowledge base built from its source
              material, with enriched metadata on every chunk. When a hotspot is
              detected, the router selects the most relevant agents for
              multi-perspective analysis. They argue. They disagree. The
              disagreement is the signal.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {DOMAINS.map((d) => (
                <span key={d.label} className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-mono text-[10px] uppercase tracking-[0.2em]">
                  <span className="text-signal">{d.count}</span>
                  {d.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-32 border-t border-border">
        <div className="max-w-4xl">
          <p className="text-display text-5xl md:text-8xl font-semibold leading-[0.92]">
            The best forecast<br />is the one that<br />
            <span className="italic text-signal-gradient">corrects itself.</span>
          </p>
          <p className="mt-8 text-lg text-muted-foreground max-w-lg">
            No analyst team. No quarterly reports. Just an engine that
            runs, learns, and improves every single day.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
