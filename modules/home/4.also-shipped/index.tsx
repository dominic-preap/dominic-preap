import { CogIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Heading } from '@/components/atom/heading';

const work = [
  {
    name: 'Morea',
    meta: '2025',
    src: 'morea.png',
    href: 'https://moreakorea.com'
  },
  {
    name: 'CKT Cement',
    meta: '2025',
    src: 'ckt.png',
    href: 'https://www.facebook.com/CKTCement'
  },
  {
    name: 'WEduShare',
    meta: '2024',
    src: 'wedushare.jpg',
    href: 'https://www.wedushare.com'
  },
  {
    name: 'WEduAbroad',
    meta: '2024',
    src: 'weduaborad.png',
    href: 'https://weduabroad.com'
  },
  {
    name: 'TataExpress',
    meta: '2024',
    src: 'tataexpress.png',
    href: 'https://www.facebook.com/TaTaExpress2022'
  },
  {
    name: 'S.E.A.T.S Inc.',
    meta: '2024',
    src: 'seats.png',
    href: 'https://seats-inc.com'
  },
  {
    name: 'Biomed Phnom Penh',
    meta: '2023',
    src: 'biomed.png',
    href: 'https://www.biomedphnompenh.com'
  },
  {
    name: 'MekongNet',
    meta: '2023',
    src: 'mekongnet.png',
    href: 'https://www.mekongnet.com.kh'
  },
  {
    name: 'JCI Cambodia',
    meta: '2023',
    src: 'jci.png',
    href: 'https://www.jcicambodia.cc'
  },
  {
    name: 'eClock',
    src: 'eclock.png',
    meta: '2023 · sunset'
  },
  {
    name: 'Advan Auto',
    meta: '2022',
    src: 'advan-auto.png',
    href: 'https://advan-auto.com'
  },
  {
    name: 'OneWorld Software',
    meta: '2022',
    src: 'ow.png',
    href: 'https://www.oneworldsoftware.com'
  },
  {
    name: 'CamIDF',
    meta: '2022',
    src: 'camidf.png',
    href: 'https://camidf.net'
  },
  {
    name: 'LD Entertainment',
    meta: '2022',
    src: 'ld.jpg',
    href: 'https://ldentertainmentkh.com'
  },
  {
    name: 'Ethernom',
    meta: '2021',
    src: 'ethernom.png',
    href: 'https://ethernom.com'
  },
  {
    name: 'QwiQ',
    meta: '2020 · sunset',
    src: 'qwiq.png',
    href: 'https://www.youtube.com/@qwiq-cambodiabookingservic9537'
  },
  {
    name: 'STARS',
    meta: '2019',
    src: 'stars.png',
    href: 'https://pathmazing.com/business-ecosystem/stars'
  },
  {
    name: 'HyreCar',
    meta: '2019 · sunset',
    src: 'hyrecar.png',
    href: 'https://www.linkedin.com/company/hyrecar'
  },
  {
    name: 'Photo BPO (Homenet)',
    meta: '2018 · sunset',
    src: 'homenet.png',
    href: 'https://www.homenetauto.com/products/photo-backgrounding'
  },
  {
    name: 'Roqos VPN',
    meta: '2018',
    src: 'roqos.png',
    href: 'https://www.amazon.com/Roqos-Inc-VPN/dp/B078KC42DJ'
  },
  {
    name: 'Tesjor',
    src: 'tesjor.png',
    meta: '2017 · sunset'
  },
  {
    name: 'CauseNetwork',
    meta: '2017',
    src: 'causenetwork.png',
    href: 'https://www.causenetwork.org'
  },
  {
    name: 'MME',
    meta: '2016 · sunset',
    src: 'mme.png',
    href: 'https://mme.gov.kh'
  }
];

export const HomeAlsoWork = () => (
  <section className="flex flex-col gap-8">
    <Heading no="04" title="Also work" />

    <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2">
      {work.map(x => {
        const Comp = x.href ? Link : 'div';
        return (
          <Comp
            target="_blank"
            href={x.href || '#'}
            key={x.name}
            className="group hover:bg-foreground/2 flex items-center gap-2.5 py-3 lg:px-2"
          >
            {x.src ? (
              <Image
                fill={false}
                width={20}
                height={20}
                className="size-5 rounded transition-all group-hover:scale-110"
                alt={x.name}
                src={`/images/${x.src}`}
              />
            ) : (
              <CogIcon />
            )}

            <span className="group-hover:text-primary text-sm transition-all group-hover:font-semibold">{x.name}</span>
            <span className="flex-1 -translate-y-0.5 border-b border-dashed" />
            <span className="text-muted-foreground text-xs whitespace-nowrap">{x.meta}</span>
          </Comp>
        );
      })}
    </div>
  </section>
);
