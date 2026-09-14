export const sectionSpacing = "scroll-mt-4 border-t border-edge py-16 md:py-24";

export const sectionHeading =
  "text-3xl font-semibold tracking-[-0.02em] md:text-4xl";

export const sectionLabel = "text-sm text-soft";

export type PillVariant = "primary" | "secondary";

const pillBase =
  "inline-flex h-11 items-center justify-center whitespace-nowrap rounded-full border px-5 text-sm font-medium transition-colors active:scale-[0.98] md:h-10";

const pillVariants: Record<PillVariant, string> = {
  primary: "border-ink bg-ink text-ground hover:border-accent hover:bg-accent",
  secondary: "border-soft text-ink hover:border-ink",
};

export function pillClassName(variant: PillVariant) {
  return `${pillBase} ${pillVariants[variant]}`;
}
