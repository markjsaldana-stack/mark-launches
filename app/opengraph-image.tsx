import { ImageResponse } from "next/og";

export const alt = "Launch with Mark, by Mark Saldaña";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #fdba74 0%, #f472b6 52%, #fb7185 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: 1,
          }}
        >
          Product Marketing · Customer Onboarding
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05 }}>
            Launch with Mark
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 34,
              fontWeight: 400,
              lineHeight: 1.35,
              maxWidth: 860,
            }}
          >
            Mark Saldaña helps companies land launches, onboard customers, and
            earn trust.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
