"use client";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

type GalleryItem = {
  src: string;
  alt: string;
  category: string;
  span?: boolean;
};

const allImages: GalleryItem[] = [
  { src: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&w=800&q=80", alt: "Bridal updo with fresh flowers", category: "Hair" },
  { src: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80", alt: "Indian bridal makeup look", category: "Bridal", span: true },
  { src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80", alt: "Rose gold nail art", category: "Nails" },
  { src: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=800&q=80", alt: "Smoky eye party makeup", category: "Makeup" },
  { src: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80", alt: "Balayage hair color", category: "Hair", span: true },
  { src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80", alt: "Salon reception area", category: "Interior" },
  { src: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80", alt: "Engagement makeup look", category: "Bridal" },
  { src: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80", alt: "Ombre acrylic nail extensions", category: "Nails" },
  { src: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80", alt: "HD makeup with highlight", category: "Makeup", span: true },
  { src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80", alt: "Styling stations inside salon", category: "Interior" },
  { src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80", alt: "Keratin treated silky hair", category: "Hair" },
  { src: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80", alt: "Reception bridal look", category: "Bridal" },
];

const filters = ["All", "Hair", "Bridal", "Makeup", "Nails", "Interior"];

// Fallback gradient colors per category for placeholder display
const catColors: Record<string, string> = {
  Hair: "linear-gradient(135deg, #f4a8c9 0%, #e05490 100%)",
  Bridal: "linear-gradient(135deg, #e5b94d 0%, #b8831a 100%)",
  Makeup: "linear-gradient(135deg, #9b59b6 0%, #e05490 100%)",
  Nails: "linear-gradient(135deg, #f4a8c9 0%, #f9d0e3 100%)",
  Interior: "linear-gradient(135deg, #241528 0%, #4a2d54 100%)",
};

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState("");

  const filtered = activeFilter === "All"
    ? allImages
    : allImages.filter(img => img.category === activeFilter);

  const openLightbox = (src: string, alt: string) => { setLightboxSrc(src); setLightboxAlt(alt); };
  const closeLightbox = () => setLightboxSrc(null);

  return (
    <>
      <section id="gallery" className="section" style={{ background: "white" }}>
        <div className="container">
          {/* Header */}
          <AnimatedSection className="section-header">
            <p className="section-label">Our Work</p>
            <div className="section-divider" />
            <h2 className="heading-xl" style={{ color: "var(--text-primary)", marginTop: "1rem" }}>
              Gallery
            </h2>
            <p style={{ marginTop: "1rem", color: "var(--text-muted)", fontSize: "1.05rem", maxWidth: 540, margin: "1rem auto 0" }}>
              A glimpse into the transformations we create every day — from bridal looks to everyday glam.
            </p>
          </AnimatedSection>

          {/* Filter Tabs — onPointerUp for reliable mobile taps */}
          <div
            style={{
              display: "flex",
              gap: "0.6rem",
              overflowX: "auto",
              padding: "0.5rem 0.25rem 0.75rem",
              marginBottom: "1.5rem",
              scrollbarWidth: "none" as const,
            }}
          >
            {filters.map(f => {
              const isActive = activeFilter === f;
              return (
                <button
                  key={f}
                  type="button"
                  onPointerUp={() => setActiveFilter(f)}
                  style={{
                    padding: "0.6rem 1.4rem",
                    borderRadius: "50px",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    border: isActive ? "1.5px solid transparent" : "1.5px solid rgba(244,168,201,0.3)",
                    background: isActive
                      ? "linear-gradient(135deg, #e05490, #cc3575)"
                      : "transparent",
                    color: isActive ? "white" : "var(--text-secondary)",
                    boxShadow: isActive ? "0 4px 16px rgba(224,84,144,0.35)" : "none",
                    cursor: "pointer",
                    whiteSpace: "nowrap" as const,
                    flexShrink: 0,
                    touchAction: "manipulation",
                    userSelect: "none",
                    transition: "all 0.2s ease",
                  }}
                >
                  {f}
                </button>
              );
            })}
          </div>

          {/* Masonry Grid */}
          <div key={activeFilter} className="gallery-grid animate-fade-up">
            {filtered.map((img, idx) => (
              <div
                key={img.alt + idx}
                className="gallery-item"
                onClick={() => openLightbox(img.src, img.alt)}
                title={img.alt}
              >
                <div
                  style={{
                    background: catColors[img.category],
                    minHeight: img.span ? 320 : 220,
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    style={{
                      width: "100%",
                      minHeight: img.span ? 320 : 220,
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <div className="gallery-overlay">
                    <div>
                      <p style={{ color: "white", fontWeight: 600, fontSize: "0.95rem", marginBottom: "0.2rem" }}>{img.alt}</p>
                      <span
                        style={{
                          background: "rgba(255,255,255,0.15)", color: "white",
                          padding: "0.2rem 0.6rem", borderRadius: "50px",
                          fontSize: "0.7rem", fontWeight: 500,
                        }}
                      >
                        {img.category}
                      </span>
                    </div>
                    <div
                      style={{
                        marginLeft: "auto", width: 36, height: 36,
                        background: "rgba(255,255,255,0.2)", borderRadius: "50%",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" />
                        <line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <AnimatedSection>
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <p style={{ color: "var(--text-muted)", marginBottom: "1rem", fontSize: "0.95rem" }}>
                See more of our work on Instagram
              </p>
              <a
                href="https://www.instagram.com/"
                target="_blank" rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                Follow on Instagram
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Lightbox */}
      <div
        className={`lightbox ${lightboxSrc ? "active" : ""}`}
        onClick={closeLightbox}
        role="dialog"
        aria-modal="true"
        aria-label="Image lightbox"
      >
        {lightboxSrc && (
          <>
            <button
              onClick={closeLightbox}
              style={{
                position: "absolute", top: "1.5rem", right: "1.5rem",
                width: 44, height: 44, borderRadius: "50%",
                background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)",
                color: "white", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.2rem", backdropFilter: "blur(8px)",
                zIndex: 1,
              }}
              aria-label="Close lightbox"
            >
              ✕
            </button>
            <img src={lightboxSrc} alt={lightboxAlt} onClick={e => e.stopPropagation()} />
            <p
              style={{
                position: "absolute", bottom: "2rem", left: "50%",
                transform: "translateX(-50%)",
                color: "rgba(255,255,255,0.7)", fontSize: "0.9rem",
                background: "rgba(0,0,0,0.4)", padding: "0.4rem 1rem",
                borderRadius: "50px", backdropFilter: "blur(8px)",
                whiteSpace: "nowrap",
              }}
            >
              {lightboxAlt}
            </p>
          </>
        )}
      </div>
    </>
  );
}
