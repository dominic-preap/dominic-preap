import { HomeBanner } from '@/modules/home/0.banner';
import { HomeWhatIDo } from '@/modules/home/1.what-i-do';
import { HomeStack } from '@/modules/home/2.stack';
import { HomeSelectedWork } from '@/modules/home/3.selected-work';
import { HomeAlsoWork } from '@/modules/home/4.also-shipped';
import { HomeContact } from '@/modules/home/5.contact';

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center pb-30 font-mono sm:px-4">
      <div className="container flex w-full flex-col gap-24">
        <HomeBanner />
        <HomeWhatIDo />
        <HomeStack />
        <HomeSelectedWork />
        <HomeAlsoWork />
        <HomeContact />

        <footer className="border-border text-muted-foreground flex flex-col justify-between gap-4 border-t pt-6 text-xs tracking-wider sm:flex-row">
          <span>Phnom Penh, Cambodia</span>
          <span>Last updated Aug 2026</span>
        </footer>
      </div>
    </div>
  );
}
