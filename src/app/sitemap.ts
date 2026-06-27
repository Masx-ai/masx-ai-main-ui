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

import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/site';

const siteUrl = getSiteUrl();

const routes = ['', '/who-we-are', '/how-we-do-it', '/our-work', '/contact', '/privacy', '/impressum'];

const LEGAL_ROUTES = new Set(['/privacy', '/impressum']);

function priorityFor(route: string): number {
  if (route === '') return 1;
  if (LEGAL_ROUTES.has(route)) return 0.3;
  return 0.8;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: priorityFor(route),
  }));
}
