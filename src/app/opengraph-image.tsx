import { ImageResponse } from "next/og";
import { intro, profile } from "@/content/site";

export const alt = `${profile.name}, junior software engineer in London`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The image renderer cannot read CSS variables, so the light-theme tokens from
// globals.css are repeated here.
const colors = {
  ground: "#fafaf8",
  ink: "#1b1c20",
  soft: "#5a5d66",
};

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: 80,
          background: colors.ground,
          color: colors.ink,
        }}
      >
        <div style={{ fontSize: 32, fontWeight: 600 }}>{profile.name}</div>
        <div style={{ fontSize: 72, lineHeight: 1.05, letterSpacing: -2 }}>
          {intro.headline}
        </div>
        <div style={{ fontSize: 30, color: colors.soft }}>{intro.eyebrow}</div>
      </div>
    ),
    size,
  );
}
