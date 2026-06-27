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
import Link from 'next/link';
import { SiteShell } from '@/components/site/SiteShell';
import { SectionLabel } from '@/components/site/Atoms';
import {
  LegalMeta as Meta,
  LegalSection as Section,
  MailLink,
} from '@/components/site/Legal';

export const metadata: Metadata = {
  title: 'Impressum',
  description:
    'Legal notice (Impressum) for MASX AI as required by § 5 DDG (German Digital Services Act). Operator, contact, liability, and copyright information.',
  alternates: {
    canonical: '/impressum',
  },
  openGraph: {
    title: 'Impressum | MASX AI',
    description:
      'Legal notice (Impressum) for MASX AI under § 5 DDG - operator, contact, liability, and copyright information.',
    url: '/impressum',
  },
  twitter: {
    title: 'Impressum | MASX AI',
    description:
      'Legal notice (Impressum) for MASX AI under § 5 DDG - operator, contact, liability, and copyright information.',
  },
};

export default function ImpressumPage() {
  return (
    <SiteShell>
      <section className="relative px-6 md:px-10 pt-40 pb-16">
        <SectionLabel index="00">Legal · Impressum</SectionLabel>
        <h1 className="mt-6 text-display text-[clamp(3rem,11vw,10rem)] font-semibold leading-[0.85]">
          Legal<br />
          <span className="italic text-signal-gradient">notice.</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground">
          Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz) - the operator,
          contact, and liability information required for a German-operated
          website.
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl">
          <Meta label="Applies to" value="masxai.com" />
          <Meta label="Pursuant to" value="§ 5 DDG" />
          <Meta label="Jurisdiction" value="Germany" />
          <Meta label="Language" value="DE / EN" />
        </div>
      </section>

      <div className="px-6 md:px-10 pb-32">
        <Section index="01" title="Operator (Diensteanbieter)">
          <p>
            Information in accordance with § 5 DDG (Digitale-Dienste-Gesetz):
          </p>
          <div className="rounded-sm border border-border bg-ink/40 p-5 text-sm">
            <p className="text-foreground">MASX AI - Ateet Vatan Bahmani</p>
            <p className="mt-1">Viehofer Strasse 32</p>
            <p>45127 Essen</p>
            <p>Germany</p>
          </div>
          <p>
            MASX AI is operated as a sole proprietorship by Ateet Vatan Bahmani.
          </p>
        </Section>

        <Section index="02" title="Contact (Kontakt)">
          <div className="rounded-sm border border-border bg-ink/40 p-5 text-sm space-y-1">
            <p>
              Email: <MailLink address="admin@masxai.com" />
            </p>
            <p>
              X / Twitter:{' '}
              <a
                href="https://x.com/masxai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-4 decoration-border hover:text-signal hover:decoration-signal transition-colors cursor-hover"
              >
                @masxai
              </a>
            </p>
          </div>
        </Section>

        <Section
          index="03"
          title="Responsible for content (Inhaltlich Verantwortlicher)"
        >
          <p>
            Responsible for editorial content pursuant to § 18 (2) MStV: Ateet
            Vatan Bahmani, at the address given above.
          </p>
        </Section>

        <Section index="04" title="Liability for content">
          <p>
            The contents of this website have been prepared with the utmost care.
            However, we cannot guarantee the accuracy, completeness, or timeliness
            of the content. As a service provider, we are responsible for our own
            content on these pages under general law pursuant to § 7 (1) DDG.
            Pursuant to §§ 8 to 10 DDG, however, we are not obligated to monitor
            transmitted or stored third-party information, or to investigate
            circumstances that indicate illegal activity.
          </p>
        </Section>

        <Section index="05" title="Informational content">
          <p>
            This website presents marketing and informational material about the
            MASX AI forecasting platforms. Any forecasts, scores, figures, or
            illustrative outputs referenced here are provided for informational
            purposes only and do not constitute financial, legal, investment, or
            other professional advice. No decision should be made solely on the
            basis of content presented on this site.
          </p>
        </Section>

        <Section index="06" title="Liability for links">
          <p>
            This website may contain links to external third-party websites over
            whose content we have no influence. We therefore cannot accept any
            liability for such external content. The respective provider or
            operator of the linked pages is always responsible for their content.
            Linked pages were checked for possible legal violations at the time of
            linking; no unlawful content was apparent at that time.
          </p>
        </Section>

        <Section index="07" title="Copyright (Urheberrecht)">
          <p>
            The content and works created by the site operator on these pages are
            subject to German copyright law. Duplication, processing,
            distribution, or any form of commercialization of such material beyond
            the scope of copyright law requires the prior written consent of the
            author. Downloads and copies of this site are permitted only for
            private, non-commercial use.
          </p>
        </Section>

        <Section index="08" title="Online dispute resolution">
          <p>
            The European Commission provides a platform for online dispute
            resolution (ODR):{' '}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 decoration-border hover:text-signal hover:decoration-signal transition-colors cursor-hover"
            >
              ec.europa.eu/consumers/odr
            </a>. We are neither obligated nor willing to participate in dispute
            resolution proceedings before a consumer arbitration board.
          </p>
        </Section>

        <div className="mt-16 grid md:grid-cols-12 gap-6 md:gap-10 border-t border-border pt-12">
          <div className="md:col-span-4">
            <p className="text-mono text-xs uppercase tracking-[0.3em] text-signal">
              Related
            </p>
          </div>
          <div className="md:col-span-8 max-w-2xl">
            <p className="text-display text-3xl md:text-4xl font-semibold leading-tight">
              Looking for how we<br />
              <span className="italic text-signal-gradient">handle your data?</span>
            </p>
            <Link
              href="/privacy"
              className="mt-6 inline-flex items-center gap-3 text-mono text-sm uppercase tracking-[0.2em] text-signal hover:gap-5 transition-all cursor-hover"
            >
              <span className="h-px w-10 bg-signal" />
              <span>Read the Privacy Policy</span>
            </Link>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
