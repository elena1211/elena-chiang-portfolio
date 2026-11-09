import Image from "next/image";
import portrait from "@/assets/elena-chiang.jpg";
import { ExternalLink } from "@/components/external-link";
import { intro, links, profile } from "@/content/site";
import { pillClassName } from "@/lib/styles";

// The first paragraph and the buttons sit together so the main actions stay
// above the fold on a laptop screen; the remaining paragraphs are supporting detail.
export function IntroSection() {
  const [lead, ...details] = intro.paragraphs;

  return (
    <section
      aria-labelledby="intro-heading"
      className="grid items-center gap-10 pb-16 pt-8 md:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] md:gap-16 md:pb-24 md:pt-14"
    >
      <div className="grid animate-fade-in gap-6">
        <p className="text-soft">{intro.eyebrow}</p>
        <h1
          id="intro-heading"
          className="text-[clamp(36px,4.8vw,52px)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance"
        >
          {intro.headline}
        </h1>
        <p className="max-w-[58ch] text-lg leading-relaxed text-soft">{lead}</p>
        <div className="flex flex-wrap gap-3">
          <a href="#work" className={pillClassName("primary")}>
            {intro.primaryCta}
          </a>
          <div className="flex gap-3">
            <ExternalLink
              href={links.cv}
              label="CV (PDF)"
              className={pillClassName("secondary")}
            >
              CV
            </ExternalLink>
            <ExternalLink
              href={links.github}
              label="GitHub profile"
              className={pillClassName("secondary")}
            >
              GitHub
            </ExternalLink>
            <ExternalLink
              href={links.linkedin}
              label="LinkedIn profile"
              className={pillClassName("secondary")}
            >
              LinkedIn
            </ExternalLink>
          </div>
        </div>
        <div className="grid max-w-[58ch] gap-4 text-lg leading-relaxed text-soft">
          {details.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
      <Image
        src={portrait}
        alt={`Portrait of ${profile.name}`}
        priority
        placeholder="blur"
        sizes="(min-width: 1080px) 410px, (min-width: 768px) 40vw, (min-width: 480px) 384px, calc(100vw - 32px)"
        className="aspect-[4/5] w-full rounded-2xl object-cover object-top max-md:max-w-sm"
      />
    </section>
  );
}
