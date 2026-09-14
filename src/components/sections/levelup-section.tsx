import Image, { type StaticImageData } from "next/image";
import homeImage from "@/assets/levelup/home.png";
import systemImage from "@/assets/levelup/system.png";
import tasksImage from "@/assets/levelup/tasks.png";
import welcomeImage from "@/assets/levelup/welcome.png";
import { ExternalLink } from "@/components/external-link";
import { levelUp, type LevelUpScreenshotName } from "@/content/site";
import {
  pillClassName,
  sectionHeading,
  sectionLabel,
  sectionSpacing,
} from "@/lib/styles";

// The page content is at most 984px wide, so a third-width screenshot never
// renders wider than about 307px.
const thirdWidthSizes = "(min-width: 1080px) 307px, (min-width: 768px) 33vw, 100vw";

const screenshotImages: Record<LevelUpScreenshotName, StaticImageData> = {
  welcome: welcomeImage,
  home: homeImage,
  tasks: tasksImage,
  system: systemImage,
};

type ScreenshotProps = {
  name: LevelUpScreenshotName;
  sizes: string;
};

function Screenshot({ name, sizes }: ScreenshotProps) {
  const { alt, caption } = levelUp.screenshots[name];

  return (
    <figure className="grid gap-3">
      <Image
        src={screenshotImages[name]}
        alt={alt}
        sizes={sizes}
        placeholder="blur"
        className="w-full rounded-xl border border-edge"
      />
      <figcaption className="text-sm text-soft">{caption}</figcaption>
    </figure>
  );
}

export function LevelUpSection() {
  return (
    <section
      id="work"
      aria-labelledby="levelup-heading"
      className={sectionSpacing}
    >
      <p className={sectionLabel}>Featured project</p>
      <div className="mt-3 grid gap-6 md:grid-cols-2 md:items-end md:gap-16">
        <div>
          <h2 id="levelup-heading" className={sectionHeading}>
            {levelUp.name}
          </h2>
          <p className="mt-3 text-xl leading-snug text-balance">
            {levelUp.tagline}
          </p>
        </div>
        <p className="leading-relaxed text-soft">{levelUp.description}</p>
      </div>

      <div className="mt-10 grid gap-8">
        <Screenshot name="welcome" sizes="(min-width: 1080px) 984px, 100vw" />
        <div className="grid gap-8 md:grid-cols-3">
          <Screenshot name="home" sizes={thirdWidthSizes} />
          <Screenshot name="tasks" sizes={thirdWidthSizes} />
          <Screenshot name="system" sizes={thirdWidthSizes} />
        </div>
      </div>

      <div className="mt-14 grid gap-12 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:gap-16">
        <div>
          <h3 className="text-lg font-semibold">How it works</h3>
          <ul className="mt-4 divide-y divide-edge border-y border-edge">
            {levelUp.highlights.map((highlight) => (
              <li key={highlight.title} className="grid gap-1 py-5">
                <p className="font-medium">{highlight.title}</p>
                <p className="leading-relaxed text-soft">{highlight.body}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid content-start gap-8">
          <div>
            <h3 className="text-lg font-semibold">Built with</h3>
            <ul className="mt-4 grid gap-1.5 text-soft">
              {levelUp.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="grid gap-3">
            <div className="flex flex-wrap gap-3">
              <ExternalLink
                href={levelUp.demoUrl}
                className={pillClassName("primary")}
              >
                Try the demo
              </ExternalLink>
              <ExternalLink
                href={levelUp.repoUrl}
                className={pillClassName("secondary")}
              >
                Source code
              </ExternalLink>
            </div>
            <p className="text-sm text-soft">{levelUp.demoNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
