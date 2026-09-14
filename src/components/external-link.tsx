import type { ReactNode } from "react";

const NEW_TAB_HINT = "(opens in a new tab)";

type ExternalLinkProps = {
  href: string;
  className?: string;
  // Accessible name when the visible text alone is not descriptive enough.
  label?: string;
  children: ReactNode;
};

export function ExternalLink({ href, className, label, children }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label ? `${label} ${NEW_TAB_HINT}` : undefined}
      className={className}
    >
      {children}
      <span className="sr-only"> {NEW_TAB_HINT}</span>
    </a>
  );
}
