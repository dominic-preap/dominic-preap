import { Heading } from '@/components/atom/heading';

const work = [
  {
    name: 'FTB Bank',
    meta: '2026',
    icon: 'ftb.png',
    color: 'blue',
    href: 'https://ftb.com.kh',
    description:
      'Offline-first inspection app for utility crews. Local-first sync layer over a NestJS API; 4,000 daily field users.'
  },
  {
    name: 'Smart Axiata',
    meta: '2024',
    icon: 'smart.png',
    color: 'blue',
    href: 'https://www.smart.com.kh',
    description:
      'Reconciliation engine for a payments startup. Replaced a nightly batch job with a streaming pipeline and cut close time from six hours to twenty minutes.'
  },
  {
    name: 'RedBox',
    meta: '2023',
    icon: 'redbox.png',
    color: 'blue',
    href: 'https://redbox.menu',
    description:
      'Internal admin surface for a logistics platform. Design system, permissions model, and a schema-driven form layer used by nine product teams.'
  },
  {
    name: 'AngkorDC',
    meta: '2022',
    icon: 'adc.png',
    color: 'blue',
    href: 'https://www.angkordc.com',
    description:
      'Internal admin surface for a logistics platform. Design system, permissions model, and a schema-driven form layer used by nine product teams.'
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
          className="border-border hover:bg-foreground/2 group grid grid-cols-[1fr_auto] gap-x-6 gap-y-2 border-b px-1 py-5.5 transition-all"
        >
          <span className="flex items-center space-x-3 text-base font-medium">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="size-6 grayscale transition-all group-hover:grayscale-0"
              alt={x.name}
              src={`/images/${x.icon}`}
            />
            <span>{x.name}</span>
          </span>
          <span className="text-xs">{x.meta}</span>
          <span className="col-span-2 max-w-[70ch] text-xs leading-relaxed font-light">{x.description}</span>
        </a>
      ))}
    </div>
  </section>
);
