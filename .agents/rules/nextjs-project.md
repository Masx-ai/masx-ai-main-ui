<!--
Copyright (c) 2025-present Ateet Vatan Bahmani
Project: MASX AI
Author: Ateet Vatan Bahmani <admin@masxai.com> | @masxai
All rights reserved.

This source code is the proprietary and confidential property of
Ateet Vatan Bahmani. Unauthorized copying, distribution, modification,
or use of this file, via any medium, is strictly prohibited without
the prior written permission of the copyright holder.

SPDX-License-Identifier: LicenseRef-MASX-Proprietary
See the LICENSE file in the project root for full terms.
-->

---
trigger: glob
globs: **/*.ts, **/*.tsx, **/*.js, **/*.jsx, **/*.css, next.config.ts
---

# MASX-AI-UI Rules

## Architecture
- Feature-based folders under `app/`; shared UI in `components/`; data/types/hooks in `lib/`.
- App Router, Server Components by default. `'use client'` only when hooks/browser APIs are needed.
- Path alias `@/*` maps to project root. Use it for all imports.
- Server Actions for mutations. `next/image` and `next/link` always.

## TypeScript
- Strict mode, no `any`. Interfaces for props. Shared types in `lib/types.ts`.
- Zod for runtime validation at data boundaries. Discriminated unions over boolean flags.

## Components & Hooks
- Functional only, aim <=50 LOC. Single responsibility. Composition over inheritance.
- Custom hooks: `use*` prefix, live in `lib/hooks.ts` or co-located. Exhaustive deps, cleanup in useEffect.
- Framer Motion for animations. `React.memo` only for measured bottlenecks.

## State & Data
- `useState` for UI. Context for cross-cutting. Supabase queries only in `lib/` server modules.
- Server Components fetch at page/layout level. `loading.tsx` skeletons + `<Suspense>` boundaries.
- Parallel fetches with `Promise.all`. No waterfalls.

## Styling
- CSS in `app/globals.css` (tokens + utilities) and route-scoped `.css` files. No inline styles.
- Dark mode default. WCAG AA contrast. Mobile-first responsive design.

## Errors & Perf
- `error.tsx` per route. try/catch in async with user-friendly messages. Never swallow errors.
- `next/dynamic` for heavy components (Globe, Recharts). Code-split naturally via file convention.

## Human-Style
- Zero AI trace or chatter in code or comments. No "here's the code", "as requested", "I've added".
- No obvious comments that restate what the code does. Comment only when the *why* isn't clear.
- Idiomatic naming: `props` not `componentProps`, `err` not `error`, `el` not `element`.
- Pragmatic, non-robotic flow. Write like a senior dev, not a tutorial.

## AI Conduct
- Before edits: 3-5 line plan with component/state impact. Atomic changes, no drive-by refactors.
