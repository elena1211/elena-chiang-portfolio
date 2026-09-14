import { CopyEmailButton } from "@/components/copy-email-button";
import { ExternalLink } from "@/components/external-link";
import { contact, links, profile } from "@/content/site";
import { pillClassName, sectionHeading, sectionSpacing } from "@/lib/styles";

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className={sectionSpacing}>
      <h2 id="contact-heading" className={sectionHeading}>
        {contact.heading}
      </h2>
      <div className="mt-4 grid max-w-[58ch] gap-3 text-lg leading-relaxed text-soft">
        {contact.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <a
        href={`mailto:${profile.email}`}
        className="mt-8 inline-block break-all text-[clamp(22px,3.4vw,34px)] font-medium underline decoration-soft decoration-2 underline-offset-8 transition-colors hover:decoration-accent"
      >
        {profile.email}
      </a>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <CopyEmailButton email={profile.email} />
        <ExternalLink
          href={links.linkedin}
          label="LinkedIn profile"
          className={pillClassName("secondary")}
        >
          LinkedIn
        </ExternalLink>
        <ExternalLink
          href={links.github}
          label="GitHub profile"
          className={pillClassName("secondary")}
        >
          GitHub
        </ExternalLink>
      </div>
    </section>
  );
}
