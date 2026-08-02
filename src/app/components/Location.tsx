"use client";
import AnimatedSection from "./AnimatedSection";

export default function Location() {
  return (
    <section
      id="location"
      className="section"
      style={{ background: "var(--pink-50)" }}
    >
      <div className="container">
        {/* Header */}
        <AnimatedSection className="section-header">
          <p className="section-label">Find Us</p>
          <div className="section-divider" />
          <h2 className="heading-xl" style={{ color: "var(--text-primary)", marginTop: "1rem" }}>
            Our Location
          </h2>
          <p style={{ marginTop: "1rem", color: "var(--text-muted)", fontSize: "1.05rem", maxWidth: 500, margin: "1rem auto 0" }}>
            Conveniently located in Gaya, Bihar with easy access and dedicated parking.
          </p>
        </AnimatedSection>

        {/* Map + Info */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Map */}
          <AnimatedSection animation="reveal-left" className="lg:col-span-2">
            <div
              style={{
                borderRadius: "var(--radius-xl)", overflow: "hidden",
                boxShadow: "var(--shadow-xl)", border: "1px solid rgba(244,168,201,0.2)",
              }}
            >
              <iframe
                title="Styllex Beauty Parlour Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115858.63660505166!2d84.9220977209355!3d24.79515091763785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32a567635e9cb%3A0x6b4fb24e62243d99!2sGaya%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="420"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimatedSection>

          {/* Sidebar */}
          <AnimatedSection animation="reveal-right">
            <div
              style={{
                background: "white", borderRadius: "var(--radius-xl)",
                padding: "1.5rem", boxShadow: "var(--shadow-lg)",
                border: "1px solid rgba(244,168,201,0.2)",
              }}
            >
              <h3 className="heading-md" style={{ marginBottom: "1rem" }}>
                Get There
              </h3>

              {/* Address */}
              <div
                style={{
                  padding: "0.85rem", background: "var(--pink-50)",
                  borderRadius: "var(--radius-md)", marginBottom: "1.25rem",
                  border: "1px solid rgba(244,168,201,0.2)",
                }}
              >
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 36, height: 36, background: "linear-gradient(135deg, #e05490, #cc3575)",
                      borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: "0.875rem", marginBottom: "0.25rem" }}>Styllex Beauty Parlour</p>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", lineHeight: 1.6 }}>
                      Main Road, Near Tower Chowk,<br />Gaya, Bihar – 823001
                    </p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <a
                  href="https://maps.google.com/?q=Styllex+Beauty+Parlour+Gaya+Bihar"
                  target="_blank" rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                  </svg>
                  Get Directions
                </a>

                <a
                  href="https://maps.google.com/?q=Styllex+Beauty+Parlour+Gaya+Bihar"
                  target="_blank" rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  Open in Google Maps
                </a>
              </div>

              {/* Landmarks */}
              <div style={{ marginTop: "1.25rem" }}>
                <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-gold)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                  Nearby Landmarks
                </p>
                {[
                  "📍  Near Tower Chowk, Gaya",
                  "🅿️  Parking available at parlour front",
                  "🚆  10 min from Gaya Junction Railway Station",
                ].map((item, i) => (
                  <p key={i} style={{ fontSize: "0.82rem", color: "var(--text-muted)", padding: "0.25rem 0", borderBottom: "1px solid rgba(244,168,201,0.1)" }}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
