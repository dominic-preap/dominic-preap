import { FaGithub, FaLinkedinIn, FaRegEnvelope, FaRegFileLines } from 'react-icons/fa6';

import { ModeToggle } from '@/components/theme/theme-toggle';
import { siteConfig } from '@/config/site';

import { HomeNotification } from './notification';
import { HomeProfile } from './profile';

const links = [
  { name: 'email', icon: FaRegEnvelope, href: 'mailto:preapchanoudom@gmail.com' },
  { name: 'gitHub', icon: FaGithub, href: 'https://github.com/dominic-preap' },
  { name: 'linkedin', icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/dominic-preap' },

  // https://rxresu.me/builder/01a05db0-9c62-7547-a6f3-29f842cdbc82
  { name: 'cv.pdf', icon: FaRegFileLines, href: '/cv.pdf' }
];

export const HomeBanner = () => (
  <header className="relative flex flex-col gap-7 md:pt-12">
    <HomeProfile />

    <div className="flex justify-between">
      <HomeNotification />
      <ModeToggle />
    </div>

    <h1 className="m-0 text-[34px] leading-tight font-semibold tracking-[-0.02em]">{siteConfig.name}</h1>
    <p className="text-foreground/80 m-0 max-w-[54ch] text-base leading-[1.75]">{siteConfig.description}</p>

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
