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

const DEFAULT_SITE_URL = 'https://masxai.com';

export const SITE_NAME = 'MASX AI';
export const SITE_TAGLINE = 'Autonomous Strategic Forecasting Engine';
export const SITE_DESCRIPTION =
  'MASX AI builds autonomous forecasting systems for geopolitical intelligence and Bittensor network health, producing calibrated, Brier-scored probabilistic predictions.';
export const SITE_FOUNDING_YEAR = '2024';
export const SITE_CONTACT_EMAIL = 'admin@masxai.com';
export const SITE_TWITTER = 'https://x.com/masxai';

export function getSiteUrl(): string {
  const rawUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_URL;

  try {
    const url = new URL(rawUrl);

    if (url.protocol !== 'https:' && url.protocol !== 'http:') {
      return DEFAULT_SITE_URL;
    }

    url.pathname = '';
    url.search = '';
    url.hash = '';

    return url.toString().replace(/\/$/, '');
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export function absoluteUrl(pathOrUrl: string, base: string = getSiteUrl()): string {
  if (!pathOrUrl) return base;
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  const path = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
  return `${base.replace(/\/$/, '')}${path}`;
}

export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value)
    .replaceAll('<', String.raw`\u003c`)
    .replaceAll('>', String.raw`\u003e`)
    .replaceAll('&', String.raw`\u0026`)
    .replaceAll('\u2028', String.raw`\u2028`)
    .replaceAll('\u2029', String.raw`\u2029`);
}

// ----------------------------------------------------------------------------
// Organization + WebSite (used by the root layout)
// ----------------------------------------------------------------------------

const ORGANIZATION_ID = (siteUrl: string) => `${siteUrl}/#organization`;
const WEBSITE_ID = (siteUrl: string) => `${siteUrl}/#website`;
const LOGO_ID = (siteUrl: string) => `${siteUrl}/#logo`;

export function buildOrganizationJsonLd(siteUrl: string = getSiteUrl()) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID(siteUrl),
    name: SITE_NAME,
    legalName: 'MASX AI',
    alternateName: 'MASX',
    url: siteUrl,
    email: SITE_CONTACT_EMAIL,
    description: SITE_DESCRIPTION,
    slogan: 'We forecast what others can\u2019t see.',
    foundingDate: SITE_FOUNDING_YEAR,
    sameAs: [SITE_TWITTER],
    logo: {
      '@type': 'ImageObject',
      '@id': LOGO_ID(siteUrl),
      url: `${siteUrl}/icon.png`,
      contentUrl: `${siteUrl}/icon.png`,
      caption: SITE_NAME,
      inLanguage: 'en',
    },
    image: { '@id': LOGO_ID(siteUrl) },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'DE',
      addressRegion: 'Germany',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: SITE_CONTACT_EMAIL,
        availableLanguage: ['en'],
      },
    ],
  } as const;
}

export function buildWebSiteJsonLd(siteUrl: string = getSiteUrl()) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID(siteUrl),
    name: SITE_NAME,
    url: siteUrl,
    description: SITE_DESCRIPTION,
    inLanguage: 'en',
    publisher: { '@id': ORGANIZATION_ID(siteUrl) },
  } as const;
}

// ----------------------------------------------------------------------------
// Event JSON-LD builder
// ----------------------------------------------------------------------------
//
// Implements every field Google flags in the "Events" rich-results report:
//   - REQUIRED:    name, startDate, location
//   - RECOMMENDED: endDate, description, image, organizer, performer,
//                  eventStatus, eventAttendanceMode, url, offers
//
// Returns `null` when required fields are missing, so callers can safely skip
// rendering instead of emitting a malformed block that triggers Search Console.

/**
 * ISO 8601 date-time string with timezone offset, e.g. `2026-05-17T18:00:00+02:00`.
 * Plain `string` alias; runtime validation is performed by `isValidIsoDate`.
 */
export type EventStatus =
  | 'EventScheduled'
  | 'EventCancelled'
  | 'EventPostponed'
  | 'EventMovedOnline'
  | 'EventRescheduled';

export type EventAttendanceMode =
  | 'OfflineEventAttendanceMode'
  | 'OnlineEventAttendanceMode'
  | 'MixedEventAttendanceMode';

export type EventLocationInput =
  | { type: 'virtual'; url: string; name?: string }
  | {
      type: 'place';
      name: string;
      address: {
        streetAddress?: string;
        addressLocality?: string;
        addressRegion?: string;
        postalCode?: string;
        addressCountry: string; // ISO 3166-1 alpha-2 preferred
      };
    };

export interface EventOrganizerInput {
  name: string;
  url?: string;
  logo?: string;
}

export interface EventPerformerInput {
  type?: 'Person' | 'Organization' | 'PerformingGroup';
  name: string;
  url?: string;
}

export interface EventOfferInput {
  name?: string;
  price: string | number;
  priceCurrency: string; // ISO 4217
  url?: string;
  availability?:
    | 'InStock'
    | 'SoldOut'
    | 'PreOrder'
    | 'OnlineOnly'
    | 'LimitedAvailability';
  /** ISO 8601 date-time, e.g. `2026-05-17T18:00:00+02:00`. */
  validFrom?: string;
}

export interface EventInput {
  name: string;
  /** ISO 8601 date-time with timezone, e.g. `2026-05-17T18:00:00+02:00`. */
  startDate: string;
  /** ISO 8601 date-time. Defaults to `startDate` when omitted. */
  endDate?: string;
  description?: string;
  image?: string | string[];
  url?: string;
  location?: EventLocationInput;
  organizer?: EventOrganizerInput;
  performer?: EventPerformerInput;
  eventStatus?: EventStatus;
  eventAttendanceMode?: EventAttendanceMode;
  offers?: EventOfferInput[];
  inLanguage?: string;
}

const DEFAULT_ORGANIZER: EventOrganizerInput = {
  name: SITE_NAME,
  url: DEFAULT_SITE_URL,
};

function isValidIsoDate(value: string): boolean {
  if (typeof value !== 'string' || value.length === 0) return false;
  const ts = Date.parse(value);
  return Number.isFinite(ts);
}

function normalizeImages(
  image: string | string[] | undefined,
  siteUrl: string,
): string[] | undefined {
  if (!image) return undefined;
  const arr = Array.isArray(image) ? image : [image];
  const out = arr
    .filter((src) => typeof src === 'string' && src.trim().length > 0)
    .map((src) => absoluteUrl(src, siteUrl));
  return out.length > 0 ? out : undefined;
}

function buildLocation(
  location: EventLocationInput | undefined,
  fallbackUrl: string,
  attendanceMode: EventAttendanceMode,
) {
  if (location?.type === 'place') {
    return {
      '@type': 'Place',
      name: location.name,
      address: {
        '@type': 'PostalAddress',
        ...location.address,
      },
    };
  }

  // Offline attendance requires a real Place; refuse to fabricate a virtual one.
  if (attendanceMode === 'OfflineEventAttendanceMode') {
    return null;
  }

  const virtualUrl = location?.type === 'virtual' ? location.url : fallbackUrl;
  const virtualName =
    (location?.type === 'virtual' && location.name) || `${SITE_NAME} (online)`;

  return {
    '@type': 'VirtualLocation',
    name: virtualName,
    url: virtualUrl,
  };
}

export function buildEventJsonLd(
  input: EventInput,
  siteUrl: string = getSiteUrl(),
) {
  if (!input || typeof input !== 'object') return null;
  if (!input.name || input.name.trim().length === 0) return null;
  if (!input.startDate || !isValidIsoDate(input.startDate)) return null;
  if (input.endDate && !isValidIsoDate(input.endDate)) return null;
  if (
    input.endDate &&
    Date.parse(input.endDate) < Date.parse(input.startDate)
  ) {
    return null;
  }

  const eventStatus: EventStatus = input.eventStatus ?? 'EventScheduled';
  const eventAttendanceMode: EventAttendanceMode =
    input.eventAttendanceMode ??
    (input.location?.type === 'place'
      ? 'OfflineEventAttendanceMode'
      : 'OnlineEventAttendanceMode');

  const canonicalUrl = absoluteUrl(input.url ?? '/', siteUrl);

  const location = buildLocation(input.location, canonicalUrl, eventAttendanceMode);
  if (!location) return null;

  const organizerInput = input.organizer ?? DEFAULT_ORGANIZER;
  const performerInput =
    input.performer ?? {
      type: 'Organization' as const,
      name: organizerInput.name,
      url: organizerInput.url,
    };

  const images = normalizeImages(input.image, siteUrl) ?? [
    absoluteUrl('/icon.png', siteUrl),
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: input.name.trim(),
    startDate: input.startDate,
    endDate: input.endDate ?? input.startDate,
    description: (input.description ?? SITE_DESCRIPTION).trim(),
    image: images,
    url: canonicalUrl,
    inLanguage: input.inLanguage ?? 'en',
    eventStatus: `https://schema.org/${eventStatus}`,
    eventAttendanceMode: `https://schema.org/${eventAttendanceMode}`,
    location,
    organizer: {
      '@type': 'Organization',
      name: organizerInput.name,
      url: organizerInput.url ?? siteUrl,
      ...(organizerInput.logo
        ? { logo: absoluteUrl(organizerInput.logo, siteUrl) }
        : {}),
    },
    performer: {
      '@type': performerInput.type ?? 'Organization',
      name: performerInput.name,
      ...(performerInput.url ? { url: performerInput.url } : {}),
    },
    ...(input.offers && input.offers.length > 0
      ? {
          offers: input.offers.map((offer) => ({
            '@type': 'Offer',
            ...(offer.name ? { name: offer.name } : {}),
            price: String(offer.price),
            priceCurrency: offer.priceCurrency,
            ...(offer.url ? { url: offer.url } : {}),
            ...(offer.availability
              ? { availability: `https://schema.org/${offer.availability}` }
              : {}),
            ...(offer.validFrom ? { validFrom: offer.validFrom } : {}),
          })),
        }
      : {}),
  } as const;
}
