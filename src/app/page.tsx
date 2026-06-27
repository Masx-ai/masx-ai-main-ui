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
import type { Metadata } from 'next';
import { SiteShell } from '@/components/site/SiteShell';
import { Marquee, SectionLabel } from '@/components/site/Atoms';
import { PlatformCard } from '@/components/site/PlatformCard';
import { HeroSceneLoader as HeroScene } from '@/components/site/HeroSceneLoader';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <SiteShell>
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <HeroScene variant="duo" />

        <div className="relative z-10 w-full px-6 md:px-10 pb-16 md:pb-24">
          <div className="flex items-center gap-3 text-mono text-xs uppercase tracking-[0.3em] text-signal">
            <span className="h-2 w-2 rounded-full bg-signal animate-pulse" />
            <span>Live · Predictive intelligence engine</span>
          </div>

          <h1 className="mt-6 text-display font-semibold leading-[0.88] text-[clamp(3rem,11vw,11rem)]">
            We forecast<br />
            what others<br />
            <span className="text-signal-gradient italic">can&apos;t see.</span>
          </h1>

          <div className="mt-10 grid md:grid-cols-12 gap-6 items-end">
            <p className="md:col-span-5 text-lg md:text-xl text-muted-foreground max-w-xl">
              What enterprises do manually in months, MASX does autonomously in
              seconds. One engine, any domain. It calibrates from every outcome
              and gets sharper with each cycle.
            </p>
            <div className="md:col-span-7 md:justify-self-end flex flex-wrap gap-3">
              <Link
                href="/our-work"
                className="group inline-flex items-center gap-3 rounded-full bg-signal text-signal-foreground px-6 py-3 text-mono text-xs uppercase tracking-[0.2em] hover:gap-5 transition-all cursor-hover"
              >
                See the platforms
                <span>→</span>
              </Link>
              <Link
                href="/how-we-do-it"
                className="inline-flex items-center gap-3 rounded-full border border-border px-6 py-3 text-mono text-xs uppercase tracking-[0.2em] hover:border-signal hover:text-signal transition-colors cursor-hover"
              >
                Our method
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Marquee
        items={[
          '35 Doctrine Agents',
          'Bittensor Subnet Intelligence',
          '10 Signal Detectors',
          'Brier-scored',
          'Calibrated Probabilities',
          'Daily Podcasts',
        ]}
      />

      <section className="px-6 md:px-10 py-24 md:py-40">
        <SectionLabel index="01">One engine · Any domain</SectionLabel>
        <h2 className="mt-6 text-display text-5xl md:text-8xl font-semibold leading-[0.95] max-w-5xl">
          Months of manual work,{' '}
          <span className="italic text-signal">done in seconds.</span>
        </h2>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <PlatformCard
            tag="01 / Geopolitics"
            title="Geopolitical Forecast"
            blurb="Daily probabilistic forecasts on conflicts, elections, and macro events. 35 doctrine agents analyze hotspots through a Council of Doctrines, producing Bayesian-grounded predictions across 7 domains."
            href="https://forecast.masxai.com/"
            sceneVariant="globe"
          />
          <PlatformCard
            tag="02 / Decentralized AI"
            title="Bittensor Intelligence"
            blurb="Anomaly detection across 50+ Bittensor subnets: emissions, dTAO liquidity, miner trajectories, validator behavior. Dislocations surface as calibrated forecasts with intervention advisories."
            href="https://bt.masxai.com/"
            sceneVariant="network"
          />
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 border-y border-border bg-ink/40">
        <div className="grid md:grid-cols-4 gap-10">
          {([
            ['35', 'Doctrine agents'],
            ['50+', 'Bittensor subnets monitored'],
            ['10', 'Anomaly signal types'],
            ['24/7', 'Autonomous pipelines'],
          ] as const).map(([n, l]) => (
            <div key={l}>
              <p className="text-display text-6xl md:text-8xl font-semibold text-signal-gradient">
                {n}
              </p>
              <p className="mt-3 text-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {l}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 md:py-40">
        <SectionLabel index="02">How it works</SectionLabel>
        <h2 className="mt-6 text-display text-5xl md:text-8xl font-semibold leading-[0.95] max-w-5xl">
          Fully agentic,{' '}
          <span className="italic text-signal">zero humans in the loop.</span>
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-px bg-border border border-border">
          {[
            {
              label: 'Domain Layer',
              detail:
                'Pure logic: Bayesian calculations, signal detection, calibration, grounding validators. Zero I/O dependencies.',
            },
            {
              label: 'Infrastructure',
              detail:
                'LLM agents, retrieval-augmented generation with semantic reranking, persistent storage, and multi-source data adapters.',
            },
            {
              label: 'Orchestration',
              detail:
                'Concurrent pipeline runners with bounded semaphores, cross-provider LLM routing with automatic fallback, round-robin model assignment.',
            },
            {
              label: 'Distribution',
              detail:
                'Auto-generated podcasts, email newsletters, LinkedIn draft posts, Discord pipeline summaries. All autonomous.',
            },
            {
              label: 'Calibration',
              detail:
                'Brier score decomposition, isotonic recalibration from resolved history, pattern empirical rate updates, and automated accuracy tracking.',
            },
            {
              label: 'Resolution',
              detail:
                'Programmatic resolution against ground truth for both geopolitical events and Bittensor subnet metrics. Every forecast is scored.',
            },
          ].map((item) => (
            <div key={item.label} className="bg-background p-8 md:p-10 min-h-[200px] flex flex-col">
              <p className="text-mono text-[10px] uppercase tracking-[0.3em] text-signal">
                {item.label}
              </p>
              <p className="mt-auto pt-6 text-sm text-muted-foreground">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 py-32 md:py-48">
        <SectionLabel index="03">The bigger picture</SectionLabel>
        <h2 className="mt-6 text-display text-6xl md:text-9xl font-semibold leading-[0.9]">
          Any domain.{' '}<br />
          <span className="italic text-signal-gradient">Same engine.</span>
        </h2>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground">
          Geopolitics and Bittensor are live. Energy markets, sovereign credit,
          supply chain risk, and more are next. Every forecast is resolved against
          ground truth, scored, and fed back into the engine. The more it runs,
          the better it gets.
        </p>
        <div className="mt-10">
          <Link
            href="/who-we-are"
            className="inline-flex items-center gap-3 text-mono text-sm uppercase tracking-[0.2em] text-signal hover:gap-6 transition-all cursor-hover"
          >
            <span className="h-px w-10 bg-signal" />
            Who we are
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
