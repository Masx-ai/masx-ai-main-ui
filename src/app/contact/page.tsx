import type { Metadata } from 'next';
import { SiteShell } from '@/components/site/SiteShell';
import { SectionLabel } from '@/components/site/Atoms';
import { ContactForm } from '@/components/site/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact MASX AI about autonomous forecasting systems, enterprise access, Bittensor intelligence, or geopolitical prediction pipelines.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact | MASX AI',
    description:
      'Reach MASX AI for enterprise forecasting systems, platform access, and autonomous intelligence partnerships.',
    url: '/contact',
  },
  twitter: {
    title: 'Contact | MASX AI',
    description:
      'Reach MASX AI for enterprise forecasting systems, platform access, and autonomous intelligence partnerships.',
  },
};

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l border-border pl-4">
      <p className="text-mono text-[10px] uppercase tracking-[0.25em] text-signal">{label}</p>
      <p className="mt-1 text-sm">{value}</p>
    </div>
  );
}

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="relative px-6 md:px-10 pt-40 pb-32 min-h-[100svh]">
        <SectionLabel index="00">Contact</SectionLabel>

        <div className="mt-6 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <h1 className="text-display text-[clamp(3rem,11vw,10rem)] font-semibold leading-[0.85]">
              Give us<br />a <span className="italic text-signal-gradient">shout.</span>
            </h1>

            <a href="mailto:admin@masxai.com" className="mt-10 inline-block text-display text-3xl md:text-5xl font-medium underline-offset-4 hover:text-signal transition-colors cursor-hover">
              admin@masxai.com
            </a>

            <div className="mt-16 grid grid-cols-2 gap-6 max-w-md">
              <Info label="Base" value="Germany / Remote" />
              <Info label="Operations" value="Worldwide" />
              <Info label="Pipelines" value="24/7 autonomous" />
              <Info label="Response" value="< 24h" />
            </div>
          </div>

          <div className="md:col-span-5">
            <ContactForm />
            <p className="mt-6 text-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Or DM us on X · @masxai</p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
