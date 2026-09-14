import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { IntroSection } from "@/components/sections/intro-section";
import { LevelUpSection } from "@/components/sections/levelup-section";
import { skipLinkLabel } from "@/content/site";

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-[1080px] px-[clamp(16px,5vw,48px)]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-10 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-ground"
      >
        {skipLinkLabel}
      </a>
      <SiteHeader />
      <main id="main">
        <IntroSection />
        <LevelUpSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
