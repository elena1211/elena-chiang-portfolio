import { about } from "@/content/site";
import { sectionHeading, sectionSpacing } from "@/lib/styles";

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className={sectionSpacing}>
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <h2 id="about-heading" className={sectionHeading}>
            About
          </h2>
          <div className="mt-6 grid max-w-[58ch] gap-4 leading-relaxed text-soft">
            {about.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <ol className="divide-y divide-edge border-y border-edge md:mt-2">
          {about.timeline.map((item) => (
            <li
              key={item.title}
              className="grid grid-cols-[96px_minmax(0,1fr)] gap-4 py-4"
            >
              <span className="text-sm tabular-nums text-soft">{item.years}</span>
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-soft">{item.place}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
