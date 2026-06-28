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
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  buildOrganizationJsonLd,
  buildWebSiteJsonLd,
  getSiteUrl,
  serializeJsonLd,
} from '@/lib/site';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const siteUrl = getSiteUrl();
const siteName = SITE_NAME;
const defaultDescription = SITE_DESCRIPTION;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: 'MASX AI | Autonomous Forecasting Engine',
    template: '%s | MASX AI',
  },
  description: defaultDescription,
  keywords: [
    'MASX AI',
    'strategic forecasting',
    'global intelligence',
    'Bittensor',
    'prediction calibration',
    'probabilistic forecasts',
    'AI agents',
    'subnet analytics',
    'Brier score',
    'doctrine agents',
    'anomaly detection',
    'decentralized AI',
    'forecasting engine',
  ],
  authors: [{ name: 'MASX AI' }],
  creator: 'MASX AI',
  publisher: 'MASX AI',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName,
    title: 'MASX AI | Autonomous Strategic Forecasting Engine',
    description: defaultDescription,
  },
  twitter: {
    card: 'summary_large_image',
    site: '@masxai',
    creator: '@masxai',
    title: 'MASX AI | Autonomous Strategic Forecasting Engine',
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

const organizationJsonLd = buildOrganizationJsonLd(siteUrl);
const websiteJsonLd = buildWebSiteJsonLd(siteUrl);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
