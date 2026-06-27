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

export function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 text-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
      <span className="text-signal">[{index}]</span>
      <span className="h-px w-10 bg-border" />
      <span>{children}</span>
    </div>
  );
}

export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border py-6 bg-ink/40">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((it, i) => (
          <span
            key={i}
            className="text-display text-3xl md:text-5xl font-semibold uppercase mx-8 text-foreground/80"
          >
            {it}{' '}
            <span className="text-signal mx-2">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function FrameCorners({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`}>
      <Corner className="top-0 left-0" />
      <Corner className="top-0 right-0 rotate-90" />
      <Corner className="bottom-0 right-0 rotate-180" />
      <Corner className="bottom-0 left-0 -rotate-90" />
    </div>
  );
}

function Corner({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`absolute h-5 w-5 text-signal ${className}`}
      fill="none"
    >
      <path d="M0 8V0h8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
