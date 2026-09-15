import type { MetadataRoute } from "next";
import { profile } from "@/content/site";

// The site is a single page, so the sitemap lists only the home page.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: profile.siteUrl }];
}
