import { FaGithub, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa6';

import { ModeToggle } from '@/components/theme/theme-toggle';

import { HomeNotification } from './notification';

const links = [
  { name: 'email', icon: FaRegEnvelope, href: 'mailto:preapchanoudom@gmail.com' },
  { name: 'gitHub', icon: FaGithub, href: 'https://github.com/dominic-preap' },
  { name: 'linkedin', icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/dominic-preap' }
  // { name: 'cv.pdf', icon: FaRegFileLines, href: '#' }
];

export const HomeBanner = () => (
  <header className="flex flex-col gap-7 pt-12">
    <div className="flex justify-between">
      <HomeNotification />
      <ModeToggle />
    </div>

    <h1 className="m-0 text-[34px] leading-tight font-semibold tracking-[-0.02em]">Dominic Preap</h1>
    <p className="text-foreground/80 m-0 max-w-[58ch] text-base leading-[1.75]">
      Full-stack engineer. I build product across the whole surface — GraphQL, REST APIs in NestJS, React on the web,
      React Native on phones. Ten years of shipping, mostly to small teams who needed one person to cover a lot of
      ground.
    </p>

    <nav className="flex flex-wrap gap-6 pt-2 text-sm">
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
