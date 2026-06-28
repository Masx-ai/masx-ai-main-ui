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


import { useState } from 'react';

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}

function readField(data: FormData, key: string): string {
  const value = data.get(key);
  return typeof value === 'string' ? value : '';
}

type Status = 'idle' | 'sending' | 'sent' | 'error';

function submitLabel(status: Status): string {
  if (status === 'sent') return '✓ Message sent';
  if (status === 'sending') return 'Sending…';
  return 'Send signal';
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      kind: 'contact' as const,
      name: readField(data, 'name'),
      email: readField(data, 'email'),
      interest: readField(data, 'interest'),
      message: readField(data, 'message'),
      company: readField(data, 'company'), // honeypot
    };

    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error ?? 'Something went wrong.');
      }
      setStatus('sent');
      form.reset();
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  const sending = status === 'sending';

  return (
    <form onSubmit={handleSubmit} className="border border-border bg-card/40 backdrop-blur-md p-6 md:p-8 rounded-sm space-y-5">
      <p className="text-mono text-[10px] uppercase tracking-[0.3em] text-signal">[ Brief us ]</p>
      <Field label="Name"><input name="name" required className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-signal text-foreground" /></Field>
      <Field label="Email"><input name="email" type="email" required className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-signal text-foreground" /></Field>
      <Field label="I'm interested in">
        <select name="interest" className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-signal text-foreground">
          <option className="bg-background">Global Intelligence Forecasting Platform</option>
          <option className="bg-background">Bittensor Intelligence Platform</option>
          <option className="bg-background">Custom forecasting pipeline</option>
          <option className="bg-background">Partnership / Integration</option>
          <option className="bg-background">Investment inquiry</option>
          <option className="bg-background">Just saying hi</option>
        </select>
      </Field>
      <Field label="Tell us more"><textarea name="message" rows={4} className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-signal text-foreground resize-none" /></Field>
      {/* Honeypot: hidden from people; bots that fill it are silently dropped. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <button
        type="submit"
        disabled={sending || status === 'sent'}
        className="w-full mt-2 inline-flex items-center justify-between rounded-full bg-signal text-signal-foreground px-6 py-3 text-mono text-xs uppercase tracking-[0.2em] hover:bg-signal/90 transition cursor-hover disabled:opacity-60"
      >
        {submitLabel(status)}
        <span>→</span>
      </button>
      {status === 'error' && (
        <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-destructive">
          {error}
        </p>
      )}
      {status === 'sent' && (
        <p className="text-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Thanks - we&apos;ll reply within 24 hours.
        </p>
      )}
    </form>
  );
}
