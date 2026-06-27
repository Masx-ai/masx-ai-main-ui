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


import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CustomCursor } from '@/components/site/CustomCursor';

const NAV = [
  { href: '/', label: 'Index' },
  { href: '/who-we-are', label: 'Who we are' },
  { href: '/how-we-do-it', label: 'How we do it' },
  { href: '/our-work', label: 'Our work' },
  { href: '/contact', label: 'Contact' },
] as const;

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="relative min-h-screen bg-background text-foreground grain">
      <CustomCursor />
      <BackgroundFX />
      <Header open={open} setOpen={setOpen} />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
}

function Header({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  const pathname = usePathname();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2.5 cursor-hover">
          <LogoMark />
          <span className="text-mono text-xs uppercase tracking-[0.28em]">
            MASX<span className="text-signal">.AI</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 glass rounded-full px-2 py-1.5">
          {NAV.map((item) => {
            const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-mono text-[11px] uppercase tracking-[0.2em] px-4 py-2 rounded-full transition-colors cursor-hover ${isActive
                    ? 'bg-signal text-signal-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <a
          href="mailto:admin@masxai.com"
          className="hidden md:inline-flex text-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground hover:text-signal transition-colors cursor-hover"
        >
          admin@masxai.com
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden glass rounded-full px-4 py-2 text-mono text-[11px] uppercase tracking-[0.2em]"
          aria-label="Menu"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </header>


      <div
        className={`md:hidden fixed inset-0 z-40 bg-ink transition-opacity ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex flex-col h-full pt-28 px-6">
          {NAV.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-display text-5xl font-semibold py-4 border-b border-border [animation-delay:${i * 60}ms]`}
            >
              <span className="text-mono text-signal text-xs mr-3">
                0{i + 1}
              </span>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  async function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const raw = new FormData(form).get('email');
    const email = (typeof raw === 'string' ? raw : '').trim();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ kind: 'subscribe', email }),
      });
      if (res.ok) {
        setSubscribed(true);
        form.reset();
      }
    } catch {
      // Low-stakes convenience: fail quietly rather than disrupt the footer.
    }
  }

  return (
    <footer className="relative z-10 mt-32 border-t border-border bg-ink">
      <div className="px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <p className="text-mono text-xs uppercase tracking-[0.3em] text-signal">
              Where will the next signal come from?
            </p>
            <h2 className="mt-4 text-display text-5xl md:text-7xl font-semibold leading-[0.95]">
              Let&apos;s forecast<br />what others miss.
            </h2>
            <a
              href="mailto:admin@masxai.com"
              className="mt-8 inline-flex items-center gap-3 text-mono text-sm uppercase tracking-[0.2em] text-signal hover:gap-5 transition-all cursor-hover"
            >
              <span className="h-px w-10 bg-signal" />
              admin@masxai.com
            </a>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 gap-8">
            <div>
              <p className="text-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Platforms
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://forecast.masxai.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-signal transition-colors cursor-hover"
                  >
                    Geopolitical Forecast ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://bt.masxai.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-signal transition-colors cursor-hover"
                  >
                    Bittensor Forecast ↗
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Subscribe
              </p>
              {subscribed ? (
                <p className="text-sm text-muted-foreground border-b border-border pb-2">
                  ✓ Thanks — we&apos;ll be in touch.
                </p>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex border-b border-border pb-2"
                >
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="email@domain.com"
                    className="flex-1 bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="text-mono text-xs uppercase tracking-[0.2em] text-signal cursor-hover"
                  >
                    →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="mt-20 pt-6 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          <div className="flex items-center gap-3">
            <LogoMark />
            <span>© {new Date().getFullYear()} MASX AI · Germany / Remote</span>
          </div>
          <div className="flex gap-6">
            <Link className="hover:text-signal cursor-hover" href="/privacy">
              Privacy
            </Link>
            <Link className="hover:text-signal cursor-hover" href="/impressum">
              Impressum
            </Link>
            <a className="hover:text-signal cursor-hover" href="https://x.com/masxai" target="_blank" rel="noopener noreferrer">
              X / Twitter
            </a>
            <a className="hover:text-signal cursor-hover" href="https://linkedin.com/company/masxai" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={`h-5 w-5 ${className}`}
      fill="none"
      aria-hidden
    >
      <circle
        cx="16"
        cy="16"
        r="14"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="1"
      />
      <path
        d="M4 20 L10 12 L16 18 L22 8 L28 16"
        stroke="oklch(0.88 0.10 90)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="22" cy="8" r="1.6" fill="oklch(0.88 0.10 90)" />
    </svg>
  );
}

function BackgroundFX() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0 bg-aurora" />
      <div className="pointer-events-none fixed inset-0 z-0 grid-lines opacity-60" />
    </>
  );
}
