import { CloudCogIcon, MonitorIcon, ServerIcon, TabletSmartphoneIcon } from 'lucide-react';

import { Heading } from '@/components/atom/heading';

const data = [
  {
    icon: ServerIcon,
    title: 'Backend',
    desc: 'NestJS services with a typed GraphQL layer. schema design, performance, relational database, background jobs, and the deployment pipeline around them.'
  },
  {
    icon: MonitorIcon,
    title: 'Frontend',
    desc: 'React apps that stay readable past year one. Component systems, data fetching, accessibility, and the unglamorous work of keeping bundles small.'
  },
  {
    icon: TabletSmartphoneIcon,
    title: 'Mobile',
    desc: 'React Native for iOS and Android from one codebase. Native modules when needed, offline-first data, and release management on both stores.'
  },
  {
    icon: CloudCogIcon,
    title: 'Server & DevOps',
    desc: 'Provisioning and running the boxes the backend lives on. Docker images, CI pipelines, zero-downtime deploys, TLS and reverse proxies, backups, logs and alerts.'
  }
];

export const HomeWhatIDo = () => (
  <section className="flex flex-col gap-8">
    <Heading no="01" title="What I do" />

    <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
      {data.map(x => (
        <div key={x.title} className="flex flex-col gap-3">
          <div>
            <x.icon strokeWidth={1.5} className="text-primary" />
          </div>
          <h3 className="text-base font-medium">{x.title}</h3>
          <p className="text-sm leading-[1.8] font-light">{x.desc}</p>
        </div>
      ))}
    </div>
  </section>
);
