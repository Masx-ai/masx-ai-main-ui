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

// Shared building blocks for the editorial legal pages (Privacy, Impressum).

export function LegalMeta({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l border-border pl-4">
      <p className="text-mono text-[10px] uppercase tracking-[0.25em] text-signal">{label}</p>
      <p className="mt-1 text-sm">{value}</p>
    </div>
  );
}

export function LegalSection({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid md:grid-cols-12 gap-6 md:gap-10 py-12 border-t border-border">
      <div className="md:col-span-4">
        <p className="text-mono text-xs uppercase tracking-[0.3em] text-signal">{index}</p>
        <h2 className="mt-3 text-display text-2xl md:text-3xl font-semibold leading-tight">
          {title}
        </h2>
      </div>
      <div className="md:col-span-8 space-y-5 text-muted-foreground leading-relaxed max-w-2xl">
        {children}
      </div>
    </section>
  );
}

export function LegalBullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="text-signal text-mono text-xs mt-1.5 shrink-0">→</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function MailLink({ address }: { address: string }) {
  return (
    <a
      href={`mailto:${address}`}
      className="text-foreground underline underline-offset-4 decoration-border hover:text-signal hover:decoration-signal transition-colors cursor-hover"
    >
      {address}
    </a>
  );
}
