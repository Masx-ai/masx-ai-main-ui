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

import { NextResponse } from 'next/server';

// Contact + subscribe submissions are delivered by email via Resend's REST API.
// No submission is persisted: the worker forwards it and forgets it.
const RESEND_ENDPOINT = 'https://api.resend.com/emails';
const DEFAULT_TO = 'admin@masxai.com';
// `from` must be a domain you have verified in Resend.
const DEFAULT_FROM = 'MASX AI Website <no-reply@masxai.com>';

const MAX = { name: 200, interest: 200, message: 5000, email: 320 } as const;

interface ContactPayload {
  kind?: 'contact' | 'subscribe';
  name?: string;
  email?: string;
  interest?: string;
  message?: string;
  company?: string; // honeypot - must stay empty
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= MAX.email;
}

function escapeHtml(value: string): string {
  return value.replace(
    /[&<>"']/g,
    (c) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      })[c] as string,
  );
}

export async function POST(request: Request): Promise<Response> {
  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot: real users never see or fill this field. Silently accept + drop.
  if (typeof payload.company === 'string' && payload.company.trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  const kind = payload.kind === 'subscribe' ? 'subscribe' : 'contact';
  const email = (payload.email ?? '').trim();
  if (!isEmail(email)) {
    return NextResponse.json(
      { error: 'A valid email address is required.' },
      { status: 422 },
    );
  }

  const name = (payload.name ?? '').trim().slice(0, MAX.name);
  const interest = (payload.interest ?? '').trim().slice(0, MAX.interest);
  const message = (payload.message ?? '').trim().slice(0, MAX.message);

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not configured.');
    return NextResponse.json(
      { error: 'Messaging is temporarily unavailable - please email admin@masxai.com.' },
      { status: 503 },
    );
  }

  const to = process.env.CONTACT_TO || DEFAULT_TO;
  const from = process.env.CONTACT_FROM || DEFAULT_FROM;

  const subject =
    kind === 'subscribe'
      ? `New subscription request - ${email}`
      : `New website enquiry - ${interest || 'General'}`;

  const lines =
    kind === 'subscribe'
      ? [`Please add this address to MASX AI updates:`, email]
      : [
          `Name: ${name || '-'}`,
          `Email: ${email}`,
          `Interested in: ${interest || '-'}`,
          '',
          message || '(no message)',
        ];

  const text = lines.join('\n');
  const html = `<pre style="font:14px/1.5 ui-monospace,monospace;white-space:pre-wrap">${escapeHtml(
    text,
  )}</pre>`;

  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ from, to, reply_to: email, subject, text, html }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => '');
      console.error('[contact] Resend responded', res.status, detail);
      return NextResponse.json(
        { error: 'We could not send your message - please email admin@masxai.com.' },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error('[contact] delivery failed', err);
    return NextResponse.json(
      { error: 'We could not send your message - please email admin@masxai.com.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
