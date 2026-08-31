import { FaGithub, FaLinkedinIn, FaRegEnvelope, FaRegFileLines } from 'react-icons/fa6';

import { ModeToggle } from '@/components/theme/theme-toggle';

const links = [
  { name: 'email', icon: FaRegEnvelope, href: 'mailto:preapchanoudom@gmail.com' },
  { name: 'gitHub', icon: FaGithub, href: 'https://github.com/dominic-preap' },
  { name: 'linkedin', icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/dominic-preap' }
  // { name: 'cv.pdf', icon: FaRegFileLines, href: '#' }
];

export const HomBanner = () => (
  <header className="flex flex-col gap-7 pt-12">
    <div className="flex justify-between">
      <div className="flex w-fit items-center gap-3 rounded-none border px-4 py-2 text-xs tracking-widest uppercase">
        <span className="relative flex size-2">
          <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
          <span className="bg-primary/80 relative inline-flex size-2 rounded-full"></span>
        </span>
        <span>available for work {/* — remote */}</span>
      </div>

      <ModeToggle />
    </div>

    <h1 className="m-0 text-[34px] leading-tight font-semibold tracking-[-0.02em]">Dominic Preap</h1>
    <p className="m-0 max-w-[58ch] text-base leading-[1.75]">
      Full-stack engineer. I build product across the whole surface — GraphQL, REST APIs in NestJS, React on the web,
      React Native on phones. Ten years of shipping, mostly to small teams who needed one person to cover a lot of
      ground.
    </p>

    <nav className="flex gap-6 pt-2 text-sm">
      {links.map(x => (
        <a
          key={x.name}
          href={x.href}
          target="_blank"
          className="border-foreground/25 hover:border-primary hover:text-primary flex items-center space-x-2 border-b pb-0.75 transition-all"
        >
          <x.icon className="text-primary" />
          <span>{x.name}</span>
        </a>
      ))}
    </nav>
  </header>
);
