import { Heading } from '@/components/atom/heading';

const stack = [
  {
    label: 'core',
    items: [
      { name: 'TypeScript', slug: 'typescript' },
      { name: 'Expo', slug: 'expo' },
      // { name: 'React Native', slug: 'react' },
      // { name: 'React', slug: 'react' },
      { name: 'Next.js', slug: 'nextdotjs' },
      { name: 'NestJS', slug: 'nestjs' },
      { name: 'GraphQL', slug: 'graphql' }
    ]
  },
  {
    label: 'data',
    items: [
      { name: 'MariaDB', slug: 'mariadb' },
      { name: 'Meilisearch', slug: 'meilisearch' },
      { name: 'MongoDB', slug: 'mongodb' },
      { name: 'MySQL', slug: 'mysql' },
      { name: 'Redis', slug: 'redis' }
    ]
  },
  {
    label: 'platforms',
    items: [
      { name: 'Directus', slug: 'directus' },
      { name: 'Novu', slug: 'Novu' },
      { name: 'Portainer', slug: 'portainer' },
      { name: 'Strapi', slug: 'strapi' }
      // { name: 'Vendure', slug: 'vendure' },
    ]
  },
  {
    label: 'ui',
    items: [
      { name: 'Mantine', slug: 'mantine' },
      { name: 'shadcn/ui', slug: 'shadcnui' },
      { name: 'TailwindCSS', slug: 'tailwindcss' }
    ]
  },
  {
    label: 'cloud',
    items: [
      { name: 'DigitalOcean', slug: 'digitalocean' },
      { name: 'Google Cloud', slug: 'googlecloud' },
      { name: 'Netlify', slug: 'netlify' },
      { name: 'Vercel', slug: 'vercel' }
    ]
  },
  {
    label: 'infra',
    items: [
      { name: 'Docker', slug: 'docker' },
      { name: 'GitHub Actions', slug: 'githubactions' },
      { name: 'SonarQube', slug: 'sonarqubeserver' },
      { name: 'Expo EAS', slug: 'expo' }
    ]
  }
];

export const HomeStack = () => (
  <section className="flex flex-col gap-8">
    <Heading no="02" title="Stack" />

    <div className="flex flex-col gap-5">
      {stack.map(row => (
        <div key={row.label} className="grid grid-cols-1 items-baseline gap-4 sm:grid-cols-5">
          <div className="text-muted-foreground text-sm tracking-[0.06em]">{row.label}</div>
          <div className="flex flex-wrap gap-2 sm:col-span-4">
            {row.items.map(x => (
              <span
                key={x.name}
                className="border-border inline-flex items-center gap-1.75 border px-2.5 py-1.25 text-xs whitespace-nowrap"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://cdn.simpleicons.org/${x.slug}/55524a/eee?size=20`}
                  alt={x.name}
                  width={13}
                  height={13}
                  className="block opacity-85"
                />
                {x.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);
