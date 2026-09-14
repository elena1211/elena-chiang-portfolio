import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import { profile } from "@/content/site";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.name}, junior software engineer`,
  description:
    "Elena Chiang is a junior software engineer in London with an MSc in Computer Science (Distinction) from Queen Mary University of London. See LevelUp, her full-stack MSc project.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${hankenGrotesk.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-ground font-sans text-ink">{children}</body>
    </html>
  );
}
