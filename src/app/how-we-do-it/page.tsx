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
import { SectionLabel } from '@/components/site/Atoms';
import { HeroSceneLoader as HeroScene } from '@/components/site/HeroSceneLoader';

export const metadata: Metadata = {
  title: 'How We Do It',
  description:
    'Explore the MASX AI forecasting architecture: autonomous ingestion, doctrine routing, anomaly detection, calibration, resolution, and Brier scoring.',
  alternates: {
    canonical: '/how-we-do-it',
  },
  openGraph: {
    title: 'How We Do It | MASX AI',
    description:
      'The MASX AI engine turns domain signals into calibrated forecasts through autonomous pipelines, mathematical grounding, and continuous resolution.',
    url: '/how-we-do-it',
  },
  twitter: {
    title: 'How We Do It | MASX AI',
    description:
      'The MASX AI engine turns domain signals into calibrated forecasts through autonomous pipelines, mathematical grounding, and continuous resolution.',
  },
};

const GEO_STEPS = [
  {
    title: 'Ingest',
    body: 'Global event streams and curated hotspot feeds flow into the system. A composite scoring engine ranks them by volume, recency, diversity, topic relevance, and velocity.',
  },
  {
    title: 'Route',
    body: 'The Doctrine Router analyzes the highest-scoring hotspots and selects the 5 most relevant doctrines from 35, using a domain matrix cross-referenced with an LLM router agent.',
  },
  {
    title: 'Council',
    body: 'Each selected doctrine agent analyzes the hotspot through its unique strategic lens via parallel retrieval-augmented generation with semantic reranking.',
  },
  {
    title: 'Forecast',
    body: 'Per question, a dedicated agent with 7 mathematical tools produces a grounded probability. A validator checks Bayesian alignment and auto-heals recoverable issues.',
  },
  {
    title: 'Advise',
    body: 'Entity-specific recommendations with urgency levels, grounded in doctrine consensus, intervention windows, and cost-of-inaction projections.',
  },
  {
    title: 'Resolve & score',
    body: 'Forecasts auto-resolve against ground truth via evidence sweeps. Brier decomposition runs weekly. Pattern accuracy rates update continuously.',
  },
];

const BT_STEPS = [
  {
    title: 'Snapshot',
    body: 'Parallel fetch from multiple data providers covering subnet metrics, token economics, social sentiment, and prediction market anchors. Snapshots persisted for historical comparison.',
  },
  {
    title: 'Detect',
    body: '10 anomaly detectors compare current vs. previous snapshots: emission drops, miner exodus, liquidity drains, staking flight, governance shifts, team abandonment, competitive displacement, rotation, and sentiment divergence.',
  },
  {
    title: 'Forecast',
    body: 'Multi-shot forecasting: a deterministic baseline plus diversity probes, aggregated via median. Recalibration applied from resolved prediction history to correct systematic bias.',
  },
  {
    title: 'Advisory',
    body: 'For the most actionable forecast, the engine generates grounded recommendations with trajectory projections, intervention windows, and cost-of-inaction context.',
  },
];

const ENGINE_TRAITS = [
  { stat: '0', label: 'Humans in the loop', sub: 'Fully autonomous end-to-end' },
  { stat: '<1m', label: 'Time to forecast', sub: 'What analysts do in months' },
  { stat: '\u221e', label: 'Learning cycles', sub: 'Every miss makes it sharper' },
  { stat: '24/7', label: 'Uptime', sub: 'No shifts. No holidays. No downtime.' },
];

export default function HowWeDoItPage() {
  return (
    <SiteShell>
      <section className="relative min-h-[80svh] flex items-end px-6 md:px-10 pb-20 pt-40 overflow-hidden">
        <div className="absolute inset-0 opacity-60">
          <HeroScene variant="network" />
        </div>
        <div className="relative z-10">
          <SectionLabel index="00">How we do it</SectionLabel>
          <h1 className="mt-6 text-display text-[clamp(3rem,12vw,12rem)] font-semibold leading-[0.85]">
            Stack of<br />
            <span className="italic text-signal-gradient">signal.</span>
          </h1>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <SectionLabel index="01">Global Intelligence pipeline</SectionLabel>
            <h2 className="mt-6 text-display text-4xl md:text-6xl font-semibold leading-[0.95]">
              Six steps,<br /> from hotspot<br />to forecast.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md">
              Each hotspot runs through the full pipeline concurrently. 35 doctrine
              agents, 7 mathematical tools, multi-provider LLM routing with automatic
              fallback, and a grounding validator that rejects ungrounded outputs.
            </p>
          </div>
          <div className="md:col-span-7">
            <ol className="divide-y divide-border border-y border-border">
              {GEO_STEPS.map((s, i) => (
                <li key={s.title} className="group grid grid-cols-12 gap-4 py-8 hover:bg-ink/40 transition-colors px-2">
                  <span className="col-span-2 text-mono text-xs uppercase tracking-[0.25em] text-signal">0{i + 1}</span>
                  <div className="col-span-10">
                    <h3 className="text-display text-2xl md:text-3xl font-semibold">{s.title}</h3>
                    <p className="mt-2 text-muted-foreground max-w-xl">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 border-t border-border">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <SectionLabel index="02">Bittensor pipeline</SectionLabel>
            <h2 className="mt-6 text-display text-4xl md:text-6xl font-semibold leading-[0.95]">
              Four phases,<br />from subnet<br />to advisory.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md">
              An independent pipeline that monitors 50+ subnets
              for anomalies, generates data-driven predictions, and
              maintains a full resolution + calibration lifecycle.
            </p>
          </div>
          <div className="md:col-span-7">
            <ol className="divide-y divide-border border-y border-border">
              {BT_STEPS.map((s, i) => (
                <li key={s.title} className="group grid grid-cols-12 gap-4 py-8 hover:bg-ink/40 transition-colors px-2">
                  <span className="col-span-2 text-mono text-xs uppercase tracking-[0.25em] text-signal">0{i + 1}</span>
                  <div className="col-span-10">
                    <h3 className="text-display text-2xl md:text-3xl font-semibold">{s.title}</h3>
                    <p className="mt-2 text-muted-foreground max-w-xl">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-32 border-y border-border bg-ink/40">
        <SectionLabel index="03">The agentic difference</SectionLabel>
        <h2 className="mt-6 text-display text-5xl md:text-7xl font-semibold leading-[0.95] max-w-5xl">
          No dashboards to check.<br />
          No reports to read.<br />
          <span className="italic text-signal">It just runs.</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl">
          Every agent in the system decides what to analyze, how to weight
          evidence, and when to escalate. If an LLM fails, another takes over.
          If a source goes dark, the pipeline adapts. The engine doesn&apos;t wait
          for instructions. It hunts for signals.
        </p>
        <div className="mt-16 grid md:grid-cols-4 gap-px bg-border border border-border">
          {ENGINE_TRAITS.map((t) => (
            <div key={t.label} className="bg-background p-8 min-h-[180px] flex flex-col">
              <p className="text-display text-5xl md:text-7xl font-semibold text-signal-gradient">{t.stat}</p>
              <p className="mt-auto text-mono text-[10px] uppercase tracking-[0.25em] text-foreground">{t.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t.sub}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 py-32">
        <SectionLabel index="04">Architecture</SectionLabel>
        <div className="mt-8 grid md:grid-cols-2 gap-10 items-start">
          <h2 className="text-display text-5xl md:text-7xl font-semibold leading-[0.95]">
            Clean / Hexagonal.<br /><span className="italic text-signal-gradient">By design.</span>
          </h2>
          <ul className="space-y-4 text-lg">
            {[
              'Domain layer is pure logic with zero I/O. All business rules, calculations, and signal detection live here, completely testable in isolation.',
              'Infrastructure layer uses protocol-based adapters. Swap any provider, any database, any API without touching a single line of domain logic.',
              'Orchestration layer runs concurrent pipelines with bounded concurrency and automatic provider failover.',
              'Every data model is schema-validated at runtime. Strict type enforcement from ingestion to output.',
              'Multi-provider LLM routing with automatic fallback. If one model goes down, the next picks up mid-pipeline.',
              'Comprehensive test coverage with isolated domain tests. No test touches the network.',
            ].map((line) => (
              <li key={line} className="flex gap-3 border-b border-border pb-4">
                <span className="text-signal text-mono text-xs mt-1.5">→</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteShell>
  );
}
