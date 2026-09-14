import { profile } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-edge py-8 text-sm text-soft">
      {profile.name}, {profile.location}
    </footer>
  );
}
