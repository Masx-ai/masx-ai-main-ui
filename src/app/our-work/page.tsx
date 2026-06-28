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
import { SectionLabel } from '@/components/site/Atoms';
import { CaseStudy } from '@/components/site/CaseStudy';

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'See the MASX AI platforms for Global Intelligence Forecasting and Bittensor intelligence, both running autonomous, calibrated prediction pipelines.',
  alternates: {
    canonical: '/our-work',
  },
  openGraph: {
    title: 'Our Work | MASX AI',
    description:
      'Two production MASX AI platforms run daily forecasting pipelines for global events and Bittensor subnet intelligence.',
    url: '/our-work',
  },
  twitter: {
    title: 'Our Work | MASX AI',
    description:
      'Two production MASX AI platforms run daily forecasting pipelines for global events and Bittensor subnet intelligence.',
  },
};

export default function OurWorkPage() {
  return (
    <SiteShell>
      <section className="relative px-6 md:px-10 pt-40 pb-12">
        <SectionLabel index="00">Our work</SectionLabel>
        <h1 className="mt-6 text-display text-[clamp(3rem,12vw,12rem)] font-semibold leading-[0.85]">
          O · U · R<br />
          <span className="italic text-signal-gradient">work.</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground">
          Two production platforms running autonomous forecasting pipelines daily.
          Brier-scored and fully traceable. More verticals launching soon.
        </p>
      </section>

      <CaseStudy
        index="01"
        eyebrow="Platform · Global Intelligence"
        title="Global Intelligence Forecasting"
        subtitle="A daily-updated probabilistic view of the world's flashpoints."
        body="Conflicts, elections, sanctions, summits. MASX generates calibrated forecasts on the events that move markets and policy desks. 35 doctrine agents, each with a unique strategic lens, analyze hotspots through a Council of Doctrines. The result: multi-perspective intelligence grounded in 7 mathematical tools including Bayesian updating and temporal projection."
        bullets={[
          '35 doctrine agents spanning classical strategy to modern game theory',
          '7 domains, 115+ sub-domains covering conflict, governance, economy, tech, environment, society, and infrastructure',
          'Grounding validator with Bayesian tolerance checks and auto-heal',
          'Daily podcast + email newsletter distribution',
          'Multi-provider LLM routing with automatic fallback',
          'Public Brier-score track record with calibration decomposition',
        ]}
        href="https://forecast.masxai.com/"
        sceneVariant="globe"
      />

      <CaseStudy
        index="02"
        flipped
        eyebrow="Platform · Decentralized AI"
        title="Bittensor Intelligence"
        subtitle="The signal layer for the Bittensor subnet economy."
        body="MASX monitors every active Bittensor subnet: emissions, pool liquidity, miner counts, validator behavior, staking flows. Current snapshots are compared against previous ones through 10 anomaly detectors. When dislocations surface, the engine generates multi-shot forecasts with resolution criteria that can be verified programmatically."
        bullets={[
          '50+ subnets tracked with daily snapshot persistence',
          '10 signal types: emission drops, miner exodus, liquidity drains, team abandonment, rotation, and more',
          'Multi-shot forecasting: deterministic baseline + diversity probes, aggregated via median',
          'Recalibration from resolved prediction history',
          'Advisory engine with intervention windows and cost-of-inaction analysis',
          'Multi-source data fusion from leading blockchain analytics providers',
        ]}
        href="https://bt.masxai.com/"
        sceneVariant="network"
      />

      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-border">
        <SectionLabel index="03">Distribution</SectionLabel>
        <h2 className="mt-6 text-display text-5xl md:text-7xl font-semibold leading-[0.95] max-w-5xl">
          Intelligence,<br /><span className="italic text-signal">delivered.</span>
        </h2>
        <div className="mt-16 grid md:grid-cols-4 gap-px bg-border border border-border">
          {[
            { label: 'Podcast', detail: 'Daily and weekly recap episodes auto-generated and published. No human editing required.' },
            { label: 'Newsletter', detail: 'HTML intelligence briefings delivered to subscribers. Cross-cutting theme analysis with linked forecasts.' },
            { label: 'LinkedIn', detail: 'Automated post drafts generated for manual review. Formatted for maximum engagement.' },
            { label: 'Discord', detail: 'Pipeline summaries posted to configured channels after each forecasting run.' },
          ].map((ch) => (
            <div key={ch.label} className="bg-background p-6 md:p-8 min-h-[180px] flex flex-col">
              <p className="text-mono text-[10px] uppercase tracking-[0.3em] text-signal">{ch.label}</p>
              <p className="mt-auto pt-4 text-sm text-muted-foreground">{ch.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 py-32 border-t border-border bg-ink/40">
        <SectionLabel index="04">Next</SectionLabel>
        <div className="mt-6 grid md:grid-cols-12 gap-10 items-end">
          <h2 className="md:col-span-7 text-display text-5xl md:text-7xl font-semibold leading-[0.95]">
            More domains<br />in <span className="italic text-signal">orbit.</span>
          </h2>
          <p className="md:col-span-5 text-muted-foreground text-lg">
            Energy markets, sovereign credit, and an enterprise API for
            third-party forecasters are on the roadmap. The engine is
            domain-agnostic. Point it at a new vertical and it starts.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/contact" className="inline-flex items-center gap-3 rounded-full bg-signal text-signal-foreground px-6 py-3 text-mono text-xs uppercase tracking-[0.2em] hover:gap-5 transition-all cursor-hover">
            Request access →
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-3 rounded-full border border-border px-6 py-3 text-mono text-xs uppercase tracking-[0.2em] hover:border-signal hover:text-signal transition-colors cursor-hover">
            Enterprise API waitlist
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
