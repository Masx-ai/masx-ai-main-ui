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


import dynamic from 'next/dynamic';

const HeroScene = dynamic(
  () => import('@/components/site/HeroScene').then((m) => m.HeroScene),
  { ssr: false },
);

type Variant = 'globe' | 'network' | 'duo';

export function HeroSceneLoader({ variant = 'duo' }: { variant?: Variant }) {
  return <HeroScene variant={variant} />;
}
