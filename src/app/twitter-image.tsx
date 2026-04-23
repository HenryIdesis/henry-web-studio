import { ImageResponse } from "next/og";
import { siteName } from "@/data/site";

export const alt = `${siteName} Twitter card image`;
export const size = {
  width: 1200,
  height: 600,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(135deg, #08111d 0%, #0d1727 100%)",
          color: "#f7f1e7",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(247,241,231,0.72)",
          }}
        >
          <span>{siteName}</span>
          <span>Premium home service web design</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              width: 110,
              height: 6,
              borderRadius: 999,
              background: "#d6b46a",
            }}
          />
          <div style={{ fontSize: 74, lineHeight: 1.03, fontWeight: 700 }}>
            Websites that turn local searches into more calls.
          </div>
          <div
            style={{
              fontSize: 26,
              lineHeight: 1.45,
              maxWidth: 900,
              color: "rgba(247,241,231,0.78)",
            }}
          >
            Built for plumbers, electricians, HVAC companies, and other local
            service businesses.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
