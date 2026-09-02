import { Heading } from '@/components/atom/heading';
import IconAzure from '@/public/icons/azure.svg';
import IconCSharp from '@/public/icons/csharp.svg';
import IconSqlServer from '@/public/icons/sql-server.svg';
import IconVendure from '@/public/icons/vendure.svg';

const stack = [
  {
    label: 'Language',
    items: [{ name: 'TypeScript', slug: 'typescript' }]
  },
  {
    label: 'Backend',
    items: [
      { name: 'Node.js', slug: 'nodedotjs' },
      { name: 'NestJS', slug: 'nestjs' },
      { name: 'GraphQL', slug: 'graphql' }
    ]
  },
  {
    label: 'Frontend',
    items: [
      { name: 'React', slug: 'react' },
      { name: 'Next.js', slug: 'nextdotjs' },
      { name: 'React Native', slug: 'react' },
      { name: 'Expo', slug: 'expo' },
      { name: 'Mantine', slug: 'mantine' },
      { name: 'shadcn/ui', slug: 'shadcnui' },
      { name: 'TailwindCSS', slug: 'tailwindcss' }
    ]
  },
  {
    label: 'Data',
    items: [
      { name: 'Apollo', slug: 'apollographql' },
      { name: 'Elasticsearch', slug: 'elasticsearch' },
      { name: 'Firebase', slug: 'firebase' },
      { name: 'MariaDB', slug: 'mariadb' },
      { name: 'Meilisearch', slug: 'meilisearch' },
      { name: 'MongoDB', slug: 'mongodb' },
      { name: 'MySQL', slug: 'mysql' },
      { name: 'Postgres', slug: 'postgresql' },
      { name: 'Redis', slug: 'redis' },
      { name: 'SQL Server', icon: IconSqlServer }
    ]
  },
  {
    label: 'Platforms',
    items: [
      { name: 'Directus', slug: 'directus' },
      { name: 'Novu', slug: 'Novu' },
      { name: 'Portainer', slug: 'portainer' },
      { name: 'Strapi', slug: 'strapi' },
      { name: 'Vendure', icon: IconVendure }
    ]
  },
  {
    label: 'Cloud',
    items: [
      { name: 'DigitalOcean', slug: 'digitalocean' },
      { name: 'Google Cloud', slug: 'googlecloud' },
      { name: 'Huawei Cloud', slug: 'huawei' },
      { name: 'Microsoft Azure', icon: IconAzure },
      { name: 'Netlify', slug: 'netlify' },
      { name: 'Vercel', slug: 'vercel' }
    ]
  },
  {
    label: 'Infra',
    items: [
      { name: 'Docker', slug: 'docker' },
      { name: 'GitHub Actions', slug: 'githubactions' },
      { name: 'SonarQube', slug: 'sonarqubeserver' },
      { name: 'Expo EAS', slug: 'expo' }
    ]
  },
  {
    label: 'Previously',
    items: [
      { name: 'C#', icon: IconCSharp },
      { name: 'ASP.NET', slug: 'dotnet' },
      { name: 'WPF', slug: 'dotnet' },
      { name: 'Go', slug: 'go' }
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
                className="border-border text-foreground inline-flex items-center gap-1.75 border px-2.5 py-1.25 text-xs whitespace-nowrap"
              >
                {x.icon ? (
                  <x.icon className="size-3.25 fill-[#706d65] dark:fill-[#d0d0d0]" />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={`https://cdn.simpleicons.org/${x.slug}/706d65/d0d0d0?size=20`}
                    alt={x.name}
                    width={13}
                    height={13}
                    className="block"
                  />
                )}
                {x.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);
