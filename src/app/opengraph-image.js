import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Suryodaya Pandey — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#090b10",
          color: "#ede8df",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 20,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "#c8956c",
            marginBottom: 24,
          }}
        >
          Software Engineer · Mumbai
        </div>
        <div style={{ fontSize: 72, lineHeight: 1.1, marginBottom: 32 }}>
          Suryodaya Pandey
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#6b7280",
            maxWidth: 700,
            lineHeight: 1.5,
          }}
        >
          Building scalable systems, backend APIs, and AI-driven applications at
          Nielsen (Gracenote).
        </div>
      </div>
    ),
    { ...size }
  );
}
