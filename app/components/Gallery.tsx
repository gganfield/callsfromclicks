import { config } from "@/client.config";
import Image from "next/image";

export default function Gallery() {
  return (
    <section id="gallery" style={{ background: "#070b14", padding: "100px 24px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", maxWidth: "520px", margin: "0 auto 56px" }}>
          <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--primary)", marginBottom: "14px" }}>
            Our Work
          </p>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(28px, 4.5vw, 42px)", fontWeight: 800, letterSpacing: "-0.04em", color: "#fff", lineHeight: 1.1, margin: 0 }}>
            Recent Projects
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }} className="demo-gallery-grid">
          {config.gallery.map((photo, i) => (
            <div
              key={photo.src}
              className={`reveal reveal-delay-${(i % 3) + 1} demo-gallery-item`}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "14px",
                aspectRatio: "4/3",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="demo-gallery-img"
                style={{ objectFit: "cover", transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)" }}
                sizes="(max-width: 640px) 50vw, 33vw"
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.6) 100%)",
                opacity: 0, transition: "opacity 0.3s",
              }} className="demo-gallery-overlay" />
              <p style={{
                position: "absolute", bottom: "14px", left: "16px", right: "16px",
                fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.9)",
                margin: 0, opacity: 0, transition: "opacity 0.3s", transform: "translateY(4px)",
              }} className="demo-gallery-label">
                {photo.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .demo-gallery-item:hover .demo-gallery-img { transform: scale(1.05) !important; }
        .demo-gallery-item:hover .demo-gallery-overlay { opacity: 1 !important; }
        .demo-gallery-item:hover .demo-gallery-label { opacity: 1 !important; transform: translateY(0) !important; }
        @media (max-width: 640px) {
          .demo-gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
