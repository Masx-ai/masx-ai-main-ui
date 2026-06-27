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

# MASX AI Main UI

Next.js application prepared for deployment to Cloudflare Workers through the OpenNext Cloudflare adapter.

## Development

```bash
npm install
npm run dev
```

The local Next.js dev server uses `.env` as usual. Cloudflare Worker preview uses `.dev.vars`; copy `.dev.vars.example` if you need to recreate it.

## Cloudflare Preview

```bash
npm run preview
```

This builds the app with OpenNext and serves it in the Cloudflare Workers runtime through Wrangler.

## Deploy

```bash
npm run deploy
```

For CI or Cloudflare Workers Builds, use:

- Build command: `npm run deploy`
- Output directory: not required for Workers
- Environment variables:
  - `NEXT_PUBLIC_SITE_URL=https://masxai.com`

## Useful Commands

```bash
npm run build
npm run upload
npm run cf-typegen
```

`npm run upload` uploads a Worker version without immediately deploying it. `npm run cf-typegen` generates local Cloudflare binding types in `cloudflare-env.d.ts`.

---

## License

Proprietary — Copyright (c) 2025-present Ateet Vatan Bahmani. All rights reserved.

See [LICENSE](LICENSE) for terms; use of the Service is governed by the [EULA & Subscription Agreement](EULA.md).
