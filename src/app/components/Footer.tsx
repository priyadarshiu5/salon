"use client";

const quickLinks = [
  { label: "Home",           href: "#home" },
  { label: "About Us",       href: "#about" },
  { label: "Our Services",   href: "#services" },
  { label: "Bridal Packages",href: "#bridal" },
  { label: "Gallery",        href: "#gallery" },
  { label: "Meet Our Experts",href: "#experts" },
  { label: "Contact Us",     href: "#contact" },
];

const serviceLinks = [
  "Hair Styling & Spa",
  "Hair Coloring & Keratin",
  "Bridal Makeup",
  "HD & Party Makeup",
  "Facials & Skincare",
  "Nail Art & Extensions",
  "Spa & Massage",
  "Men's Grooming",
];

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.41 19.1C5.12 19.56 12 19.56 12 19.56s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95 29 29 0 00.46-5.25 29 29 0 00-.46-5.48z"/>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"/>
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919999999999",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "var(--dark-900)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      {/* Main Footer */}
      <div className="container" style={{ paddingTop: "4rem", paddingBottom: "3rem" }}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div style={{ marginBottom: "1.25rem" }}>
              <div className="flex items-center gap-2" style={{ marginBottom: "0.75rem" }}>
                <div
                  style={{
                    width: 40, height: 40,
                    background: "linear-gradient(135deg, #e05490, #d4a029)",
                    borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8 2 5 5.5 5 8.5c0 4.5 7 13.5 7 13.5s7-9 7-13.5C19 5.5 16 2 12 2z" fill="white"/>
                    <circle cx="12" cy="9" r="2.5" fill="rgba(255,255,255,0.6)"/>
                  </svg>
                </div>
                <div>
                  <p className="font-display" style={{ color: "white", fontSize: "1.15rem", fontWeight: 700, lineHeight: 1.1 }}>
                    Styllex Beauty Parlour
                  </p>
                  <p style={{ color: "var(--gold-400)", fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 500 }}>
                    Beauty &amp; Wellness • Gaya
                  </p>
                </div>
              </div>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.875rem", lineHeight: 1.7, maxWidth: 260 }}>
                Gaya&apos;s premier beauty salon where luxury meets artistry. Transforming beauty, one client at a time since 2014.
              </p>
            </div>

            {/* Socials */}
            <div style={{ display: "flex", gap: "0.6rem" }}>
              {socials.map(s => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank" rel="noopener noreferrer"
                  aria-label={s.name}
                  style={{
                    width: 38, height: 38, borderRadius: "50%",
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "rgba(255,255,255,0.55)",
                    transition: "all 0.25s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #e05490, #d4a029)";
                    (e.currentTarget as HTMLElement).style.color = "white";
                    (e.currentTarget as HTMLElement).style.borderColor = "transparent";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: "white", fontWeight: 700, fontSize: "1rem", marginBottom: "1.25rem", fontFamily: "var(--font-display)" }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {quickLinks.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    style={{
                      background: "none", border: "none", cursor: "pointer",
                      color: "rgba(255,255,255,0.45)", fontSize: "0.875rem",
                      padding: 0, fontFamily: "var(--font-body)",
                      display: "flex", alignItems: "center", gap: "0.4rem",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--pink-300)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                  >
                    <span style={{ color: "var(--pink-500)", fontSize: "0.6rem" }}>◆</span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: "white", fontWeight: 700, fontSize: "1rem", marginBottom: "1.25rem", fontFamily: "var(--font-display)" }}>
              Our Services
            </h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {serviceLinks.map(s => (
                <li key={s} style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.875rem", color: "rgba(255,255,255,0.45)" }}>
                  <span style={{ color: "var(--gold-500)", fontSize: "0.6rem" }}>◆</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 style={{ color: "white", fontWeight: 700, fontSize: "1rem", marginBottom: "1.25rem", fontFamily: "var(--font-display)" }}>
              Contact & Hours
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {[
                { icon: "📍", text: "White House Compound Road, Gaya, Bihar – 823001" },
                { icon: "📞", text: "+91 95460 25569", href: "tel:+919546025569" },
                { icon: "💬", text: "+91 95460 25569 (WhatsApp)", href: "https://wa.me/919546025569" },
                { icon: "📧", text: "styllexunisexsalon@gmail.com", href: "mailto:styllexunisexsalon@gmail.com" },
                { icon: "⏰", text: "Mon–Sun: 10 AM – 9 PM | Closed Tuesday" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "0.9rem", flexShrink: 0, marginTop: "0.1rem" }}>{item.icon}</span>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                      style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.845rem", lineHeight: 1.5, textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--pink-300)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                    >
                      {item.text}
                    </a>
                  ) : (
                    <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.845rem", lineHeight: 1.5 }}>{item.text}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "1.25rem 0" }}>
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.82rem" }}>
              © {new Date().getFullYear()} Styllex Beauty Parlour. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              {["Privacy Policy", "Terms of Service"].map(t => (
                <a
                  key={t} href="#"
                  style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.82rem", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--pink-300)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
                >
                  {t}
                </a>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.75rem" }}>Made with</span>
              <span style={{ color: "var(--pink-500)", fontSize: "0.8rem" }}>♥</span>
              <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.75rem" }}>for beauty</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
