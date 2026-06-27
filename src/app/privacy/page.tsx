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
import {
  LegalBullets as Bullets,
  LegalMeta as Meta,
  LegalSection as Section,
  MailLink,
} from '@/components/site/Legal';

const LAST_UPDATED = 'June 27, 2026';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How MASX AI collects, uses, and protects personal data on masxai.com. A GDPR-aligned privacy notice — no tracking cookies, no third-party analytics.',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | MASX AI',
    description:
      'How MASX AI handles personal data on masxai.com. GDPR-aligned, privacy-first: no tracking cookies, no third-party analytics.',
    url: '/privacy',
  },
  twitter: {
    title: 'Privacy Policy | MASX AI',
    description:
      'How MASX AI handles personal data on masxai.com. GDPR-aligned, privacy-first: no tracking cookies, no third-party analytics.',
  },
};

export default function PrivacyPage() {
  return (
    <SiteShell>
      <section className="relative px-6 md:px-10 pt-40 pb-16">
        <SectionLabel index="00">Legal · Privacy</SectionLabel>
        <h1 className="mt-6 text-display text-[clamp(3rem,11vw,10rem)] font-semibold leading-[0.85]">
          Privacy<br />
          <span className="italic text-signal-gradient">policy.</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground">
          We keep this short and honest. This site runs without tracking cookies,
          advertising, or third-party analytics. Here is exactly what we collect,
          why, and the rights you have over it.
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl">
          <Meta label="Last updated" value={LAST_UPDATED} />
          <Meta label="Applies to" value="masxai.com" />
          <Meta label="Framework" value="EU GDPR / BDSG" />
          <Meta label="Jurisdiction" value="Germany" />
        </div>
      </section>

      <div className="px-6 md:px-10 pb-32">
        <Section index="01" title="Who we are">
          <p>
            This website, <span className="text-foreground">masxai.com</span>, is
            operated by Ateet Vatan Bahmani, trading as{' '}
            <span className="text-foreground">MASX AI</span> (&quot;MASX AI&quot;,
            &quot;we&quot;, &quot;us&quot;). We are the data controller responsible
            for personal data processed through this site under the EU General Data
            Protection Regulation (GDPR).
          </p>
          <div className="rounded-sm border border-border bg-ink/40 p-5 text-sm">
            <p className="text-foreground">MASX AI — Ateet Vatan Bahmani</p>
            <p className="mt-1">Viehofer Strasse 32, 45127 Essen, Germany</p>
            <p className="mt-1">
              Contact: <MailLink address="admin@masxai.com" />
            </p>
          </div>
        </Section>

        <Section index="02" title="Scope of this policy">
          <p>
            This policy covers our corporate website at{' '}
            <span className="text-foreground">masxai.com</span> only. Our product
            platforms — the Geopolitical Forecast and Bittensor Forecast
            applications — are operated on separate domains and are governed by
            their own privacy notices presented within those services.
          </p>
        </Section>

        <Section index="03" title="What we collect">
          <p>We deliberately collect as little as possible.</p>
          <Bullets
            items={[
              <>
                <span className="text-foreground">Information you send us.</span>{' '}
                When you submit the contact or subscribe form — or email us
                directly — we receive what you choose to share (typically your
                name, email address, the topic, and your message). Submissions are
                delivered to our inbox by our email provider; we do not store them
                in a database, and we never use them for advertising or profiling.
              </>,
              <>
                <span className="text-foreground">Technical access data.</span> Like
                any website, our hosting infrastructure automatically records
                limited technical information needed to deliver pages securely —
                such as your IP address, browser and device type, the page
                requested, and a timestamp. These appear in short-lived server logs.
              </>,
              <>
                <span className="text-foreground">Nothing more.</span> We do not run
                account systems, profiling, or behavioural advertising on this site,
                and we do not knowingly collect special-category (sensitive)
                personal data.
              </>,
            ]}
          />
        </Section>

        <Section index="04" title="Cookies & analytics">
          <p>
            This website does <span className="text-foreground">not</span> use
            tracking cookies, advertising cookies, or third-party analytics. There
            is no cross-site tracking and no consent banner to dismiss, because we do
            not set non-essential cookies in the first place.
          </p>
          <p>
            We enforce a strict Content-Security-Policy and a restrictive
            Permissions-Policy (camera, microphone, geolocation, and interest-based
            cohorts are all disabled) so the browser cannot load hidden trackers.
          </p>
        </Section>

        <Section index="05" title="Why we use it & legal bases">
          <p>
            Under Article 6(1) GDPR, we rely on the following legal bases:
          </p>
          <Bullets
            items={[
              <>
                <span className="text-foreground">To respond to your enquiry</span>{' '}
                — to take steps at your request prior to any agreement, Art. 6(1)(b),
                and/or your consent in sending us the message, Art. 6(1)(a).
              </>,
              <>
                <span className="text-foreground">To operate and secure the site</span>{' '}
                — our legitimate interest in delivering content reliably and
                preventing abuse, Art. 6(1)(f).
              </>,
            ]}
          />
        </Section>

        <Section index="06" title="Service providers">
          <p>
            We use a small number of carefully chosen processors who act on our
            instructions under data-processing agreements:
          </p>
          <Bullets
            items={[
              <>
                <span className="text-foreground">Cloudflare</span> — hosting,
                content delivery, and edge security for this site. Cloudflare may
                process technical access data on our behalf to serve and protect the
                site.
              </>,
              <>
                <span className="text-foreground">Resend</span> — our email-delivery
                provider (Resend, Inc.). When you submit a form, it transmits your
                message and email address to our inbox so we can read and reply.
              </>,
            ]}
          />
          <p>
            We do not sell personal data, and we do not share it with third parties
            for their own marketing.
          </p>
        </Section>

        <Section index="07" title="International transfers">
          <p>
            Some providers may process data outside the European Economic Area.
            Where that happens, the transfer is protected by an adequacy decision or
            by the European Commission&apos;s Standard Contractual Clauses (SCCs)
            together with appropriate supplementary safeguards.
          </p>
        </Section>

        <Section index="08" title="How long we keep it">
          <p>
            We keep correspondence only for as long as needed to handle your enquiry
            and any reasonable follow-up, after which it is deleted or archived in
            line with legal retention obligations. Technical server logs are
            retained for a short period for security and troubleshooting and then
            discarded.
          </p>
        </Section>

        <Section index="09" title="Your rights">
          <p>
            Where the GDPR applies, you have the right to:
          </p>
          <Bullets
            items={[
              'Access the personal data we hold about you;',
              'Have inaccurate data corrected (rectification);',
              'Have your data erased (the right to be forgotten);',
              'Restrict or object to processing;',
              'Receive your data in a portable format;',
              'Withdraw consent at any time, without affecting prior processing.',
            ]}
          />
          <p>
            To exercise any of these, email <MailLink address="admin@masxai.com" />.
            You also have the right to lodge a complaint with a supervisory
            authority. As we are based in Essen, the competent authority is the{' '}
            <span className="text-foreground">
              Landesbeauftragte für Datenschutz und Informationsfreiheit
              Nordrhein-Westfalen (LDI NRW)
            </span>, though you may contact the authority in your own country of
            residence.
          </p>
        </Section>

        <Section index="10" title="Security">
          <p>
            The site is served exclusively over HTTPS with HSTS, and we apply
            industry-standard security headers including a strict
            Content-Security-Policy, frame-ancestor restrictions, and
            cross-origin isolation. No method of transmission is perfectly secure,
            but we take appropriate technical and organisational measures to protect
            your data.
          </p>
        </Section>

        <Section index="11" title="Children">
          <p>
            This site is intended for a professional audience and is not directed to
            children. We do not knowingly collect personal data from anyone under 16.
          </p>
        </Section>

        <Section index="12" title="Changes to this policy">
          <p>
            We may update this policy as our practices or legal obligations evolve.
            The &quot;Last updated&quot; date at the top reflects the current
            version. Material changes will be made prominent on this page.
          </p>
        </Section>

        <div className="mt-16 grid md:grid-cols-12 gap-6 md:gap-10 border-t border-border pt-12">
          <div className="md:col-span-4">
            <p className="text-mono text-xs uppercase tracking-[0.3em] text-signal">
              Questions?
            </p>
          </div>
          <div className="md:col-span-8 max-w-2xl">
            <p className="text-display text-3xl md:text-4xl font-semibold leading-tight">
              Privacy questions go<br />
              <span className="italic text-signal-gradient">straight to us.</span>
            </p>
            <a
              href="mailto:admin@masxai.com"
              className="mt-6 inline-flex items-center gap-3 text-mono text-sm uppercase tracking-[0.2em] text-signal hover:gap-5 transition-all cursor-hover"
            >
              <span className="h-px w-10 bg-signal" />
              <span>admin@masxai.com</span>
            </a>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
