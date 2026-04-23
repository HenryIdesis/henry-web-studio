import { ImageResponse } from "next/og";
import { siteName } from "@/data/site";

export const alt = `${siteName} social preview`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(180deg, #0c1524 0%, #08111d 50%, #050b15 100%)",
          color: "#f7f1e7",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 24,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(247,241,231,0.72)",
          }}
        >
          <span>{siteName}</span>
          <span>Home service websites</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              width: 120,
              height: 6,
              borderRadius: 999,
              background: "#d6b46a",
            }}
          />
          <div
            style={{
              fontSize: 84,
              lineHeight: 1.02,
              fontWeight: 700,
              maxWidth: 920,
            }}
          >
            Premium websites that get more local calls.
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.5,
              maxWidth: 900,
              color: "rgba(247,241,231,0.78)",
            }}
          >
            Fast, trustworthy websites for plumbers, electricians, HVAC teams,
            and other service businesses.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            fontSize: 22,
            color: "rgba(247,241,231,0.78)",
          }}
        >
          <span>Mobile-first</span>
          <span>SEO-ready</span>
          <span>Built for leads</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
