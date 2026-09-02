import { Heading } from '@/components/atom/heading';

const work = [
  {
    name: 'Foreign Trade Bank of Cambodia',
    meta: '2025 - 2026',
    icon: 'ftb.png',
    color: 'blue',
    href: 'https://ftb.com.kh',
    description:
      "Full redesign of the bank's website on a headless CMS. Decoupled the frontend from content so marketing ships pages without a deploy; rebuilt on a modern stack end-to-end."
  },
  {
    name: 'Smart Axiata',
    meta: '2023 - 2024',
    icon: 'smart.png',
    color: 'blue',
    href: 'https://www.smart.com.kh',
    description:
      'Full redesign of the site on a headless CMS, rebuilt from the ground up on a modern stack. Content and frontend decoupled for fast iteration without touching code.'
  },
  {
    name: 'RedBox',
    meta: '2023 - Present',
    icon: 'redbox.png',
    color: 'blue',
    href: 'https://redbox.menu',
    description:
      'Product catalog system for SME businesses, built to let owners manage their own products and display them as digital menus. Integrated ABA for online payment so customers can check out directly.'
  },
  {
    name: 'AngkorDC',
    meta: '2022 - Present',
    icon: 'adc.png',
    color: 'blue',
    href: 'https://www.angkordc.com',
    description:
      'End-to-end system built from scratch: backend, admin dashboard, and a mobile app sharing the same API, a single codebase for iOS and Android. Deployed on a managed cloud setup with CI/CD, and monitoring baked in.'
  }
];

export const HomeSelectedWork = () => (
  <section className="flex flex-col gap-8">
    <Heading no="03" title="Selected work" />

    <div className="flex flex-col">
      {work.map(x => (
        <a
          key={x.name}
          href={x.href}
          target="_blank"
          className="border-border hover:bg-foreground/2 group grid grid-cols-[1fr_auto] gap-x-6 gap-y-2 border-b px-1 py-5.5 transition-all md:px-2"
        >
          <span className="flex items-center space-x-3 text-base font-medium">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="size-6 rounded transition-transform group-hover:scale-110"
              alt={x.name}
              src={`/images/${x.icon}`}
            />
            <span className="group-hover:text-primary transition-colors">{x.name}</span>
          </span>
          <span className="text-muted-foreground text-xs">{x.meta}</span>
          <span className="text-foreground/80 col-span-2 max-w-[75ch] text-xs leading-relaxed font-light">
            {x.description}
          </span>
        </a>
      ))}
    </div>
  </section>
);
