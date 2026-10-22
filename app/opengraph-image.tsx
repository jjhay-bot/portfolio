import { ImageResponse } from "next/og";

export const alt = "JHAY. Frontend & Full-Stack Developer Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 76, background: "#0b0e14", color: "#f5f5f4", fontFamily: "sans-serif", position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", fontSize: 32, fontWeight: 800, letterSpacing: -1 }}>JHAY<span style={{ color: "#a3e635" }}>.</span></div>
        <div style={{ display: "flex", fontSize: 20, color: "#a3e635" }}>PORTFOLIO / 2026</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <div style={{ display: "flex", color: "#a3e635", fontSize: 23, letterSpacing: 3 }}>DESIGN → DEVELOPMENT → DEPLOY</div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 800, lineHeight: 1.04, letterSpacing: -3 }}>Building digital<br/>experiences that work.</div>
        <div style={{ display: "flex", fontSize: 29, color: "#aab1bc" }}>Frontend-focused Full-Stack Developer</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#b0b7c3", borderTop: "1px solid #303743", paddingTop: 28 }}>
        <div style={{ display: "flex" }}>React · Next.js · TypeScript · Node.js</div>
        <div style={{ display: "flex" }}>jhay.alcorcon.dev ↗</div>
      </div>
    </div>,
    size,
  );
}
