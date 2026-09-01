import { Heading } from '@/components/atom/heading';
import { siteConfig } from '@/config/site';

export const HomeContact = () => (
  <section className="flex flex-col gap-8">
    <Heading no="05" title="Contact" />

    <div className="flex flex-col gap-5">
      <p className="m-0 max-w-[56ch] text-sm leading-relaxed font-light">
        Open to contract work. Happiest on a small team where the API, the web app, and the phone app are all one
        problem.
      </p>
      <a
        href={`mailto:${siteConfig.email}`}
        className="border-primary self-start border-b pb-1 text-xl tracking-[-0.01em]"
      >
        {siteConfig.email}
      </a>
    </div>
  </section>
);
