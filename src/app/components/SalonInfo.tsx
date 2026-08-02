"use client";
import AnimatedSection from "./AnimatedSection";

const infoItems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--pink-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "Address",
    value: "White House Compound Road, Gaya, Bihar – 823001",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--pink-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 13a19.8 19.8 0 01-3.07-8.67A2 2 0 013.62 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 9.91a16 16 0 006.29 6.29l.98-.98a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 17z"/>
      </svg>
    ),
    label: "Phone",
    value: "+91 95460 25569",
    href: "tel:+919546025569",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#25d366">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    label: "WhatsApp",
    value: "+91 95460 25569",
    href: "https://wa.me/919546025569",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--pink-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: "Email",
    value: "styllexunisexsalon@gmail.com",
    href: "mailto:styllexunisexsalon@gmail.com",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--pink-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    label: "Hours",
    value: "Mon – Sun: 10:00 AM – 9:00 PM",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--pink-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    label: "Weekly Holiday",
    value: "Tuesday (Closed)",
  },
];

const amenities = [
  { icon: "❄️", label: "Air Conditioned" },
  { icon: "🅿️", label: "Parking Available" },
  { icon: "📶", label: "Free Wi-Fi" },
  { icon: "♀️", label: "Ladies Only" },
  { icon: "✅", label: "Certified Products" },
  { icon: "🧴", label: "Strict Hygiene" },
  { icon: "💳", label: "Cards Accepted" },
  { icon: "📸", label: "Bridal Portfolio" },
];

export default function SalonInfo() {
  return (
    <section id="info" className="section" style={{ background: "white" }}>
      <div className="container">
        {/* Header */}
        <AnimatedSection className="section-header">
          <p className="section-label">Find Us</p>
          <div className="section-divider" />
          <h2 className="heading-xl" style={{ color: "var(--text-primary)", marginTop: "1rem" }}>
            Salon Information
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <AnimatedSection animation="reveal-left">
            <div
              style={{
                background: "var(--pink-50)", borderRadius: "var(--radius-xl)",
                padding: "2rem", border: "1px solid rgba(244,168,201,0.2)",
              }}
            >
              <h3 className="heading-md" style={{ marginBottom: "1.5rem" }}>Contact Details</h3>
              {infoItems.map((item, i) => (
                <div key={i} className="info-row">
                  <div className="info-icon">{item.icon}</div>
                  <div>
                    <p style={{ fontSize: "0.72rem", fontWeight: 600, color: "var(--text-gold)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.2rem" }}>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                        style={{ color: "var(--text-primary)", fontWeight: 500, fontSize: "0.95rem", textDecoration: "none" }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p style={{ color: "var(--text-primary)", fontWeight: 500, fontSize: "0.95rem" }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Amenities */}
          <AnimatedSection animation="reveal-right">
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {/* Hours card */}
              <div
                style={{
                  background: "var(--dark-900)", borderRadius: "var(--radius-xl)",
                  padding: "2rem", position: "relative", overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute", top: "-40px", right: "-40px",
                    width: 140, height: 140, borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(224,84,144,0.15) 0%, transparent 70%)",
                  }}
                />
                <h3 className="heading-md" style={{ color: "white", marginBottom: "1.25rem" }}>Opening Hours</h3>
                {[
                  ["Monday",    "10:00 AM – 9:00 PM"],
                  ["Tuesday",   "Closed"],
                  ["Wednesday", "10:00 AM – 9:00 PM"],
                  ["Thursday",  "10:00 AM – 9:00 PM"],
                  ["Friday",    "10:00 AM – 9:00 PM"],
                  ["Saturday",  "10:00 AM – 9:00 PM"],
                  ["Sunday",    "10:00 AM – 7:00 PM"],
                ].map(([day, time]) => (
                  <div
                    key={day}
                    style={{
                      display: "flex", justifyContent: "space-between",
                      padding: "0.5rem 0",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                      fontSize: "0.875rem",
                    }}
                  >
                    <span style={{ color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>{day}</span>
                    <span style={{
                      color: time === "Closed" ? "#f87171" : "rgba(255,255,255,0.9)",
                      fontWeight: 600,
                    }}>
                      {time}
                    </span>
                  </div>
                ))}
              </div>

              {/* Amenities */}
              <div
                style={{
                  background: "var(--pink-50)", borderRadius: "var(--radius-xl)",
                  padding: "1.75rem", border: "1px solid rgba(244,168,201,0.2)",
                }}
              >
                <h3 className="heading-md" style={{ marginBottom: "1.25rem" }}>Facilities</h3>
                <div className="grid grid-cols-2 gap-3">
                  {amenities.map((a, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex", alignItems: "center", gap: "0.6rem",
                        padding: "0.65rem 0.85rem", background: "white",
                        borderRadius: "var(--radius-md)", border: "1px solid rgba(244,168,201,0.2)",
                      }}
                    >
                      <span style={{ fontSize: "1.1rem" }}>{a.icon}</span>
                      <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--text-secondary)" }}>{a.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
