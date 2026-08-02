"use client";
import AnimatedSection from "./AnimatedSection";

const packages = [
  {
    tag: "Most Popular",
    name: "HD Bridal Makeup",
    desc: "High-definition airbrushed bridal look that photographs beautifully and lasts all day. Includes skincare prep, HD foundation, contouring, eye makeup, and hair setting.",
    price: "₹8,999",
    duration: "4–5 hrs",
    includes: ["Pre-Bridal Skincare", "HD Foundation & Airbrush", "Eye & Lip Artistry", "Bridal Hairstyle", "Draping Assistance"],
    img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    gradient: "linear-gradient(135deg, #e05490 0%, #9a1b5a 100%)",
  },
  {
    tag: "Premium",
    name: "Bridal Makeup",
    desc: "Classic bridal look with premium products. Elegant and timeless, designed to keep you glowing from the mandap to the reception.",
    price: "₹5,999",
    duration: "3 hrs",
    includes: ["Full Bridal Look", "Premium Products", "Hair Styling", "Mehendi Touch-up", "Trial Makeup"],
    img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80",
    gradient: "linear-gradient(135deg, #d4a029 0%, #8a5e10 100%)",
  },
  {
    tag: "Special",
    name: "Engagement Makeup",
    desc: "Romantic and radiant look for your special engagement day. Dewy skin, flawless base, and beautifully defined eyes.",
    price: "₹3,999",
    duration: "2.5 hrs",
    includes: ["Flawless Base", "Romantic Eye Look", "Berry/Nude Lips", "Light Hairstyle", "Setting Spray"],
    img: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80",
    gradient: "linear-gradient(135deg, #f4a8c9 0%, #e05490 100%)",
  },
  {
    tag: "Glam",
    name: "Reception Makeup",
    desc: "Bold, dramatic reception look with intense eyes, highlighted cheekbones, and bold lips — perfect for the big celebration.",
    price: "₹4,499",
    duration: "3 hrs",
    includes: ["Bold Glam Look", "Intense Smoky/Cut-crease", "Glow Highlights", "Dramatic Hair", "Touch-up Kit"],
    img: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=800&q=80",
    gradient: "linear-gradient(135deg, #9b59b6 0%, #e05490 100%)",
  },
  {
    tag: "Fun",
    name: "Party Makeup",
    desc: "Glamorous evening makeup for parties, events, and special occasions. Look and feel your best all night long.",
    price: "₹1,999",
    duration: "60 min",
    includes: ["Glam Party Look", "Contouring", "Lashes", "Lip Art", "Long-wear Setting"],
    img: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&w=800&q=80",
    gradient: "linear-gradient(135deg, #e0a070 0%, #d4a029 100%)",
  },
];

export default function BridalPackages() {
  return (
    <section
      id="bridal"
      className="section"
      style={{
        background: "var(--dark-900)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blobs */}
      <div
        style={{
          position: "absolute", top: "-100px", right: "-100px",
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(224,84,144,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute", bottom: "-80px", left: "-80px",
          width: 300, height: 300, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,160,41,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container">
        {/* Header */}
        <AnimatedSection className="section-header">
          <p className="section-label" style={{ color: "var(--gold-300)" }}>Bridal Services</p>
          <div className="section-divider" />
          <h2
            className="heading-xl"
            style={{
              color: "white", marginTop: "1rem",
            }}
          >
            Bridal Packages
          </h2>
          <p style={{ marginTop: "1rem", color: "rgba(255,255,255,0.6)", fontSize: "1.05rem", maxWidth: 560, margin: "1rem auto 0" }}>
            Your wedding day deserves perfection. We offer premium bridal packages crafted with love, luxury, and lasting beauty.
          </p>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {packages.map((pkg, i) => (
            <AnimatedSection key={i} delay={((i % 5) + 1) as 1|2|3|4|5} animation="reveal-scale">
              <div className="bridal-card h-full">
                {/* Image Wrapper */}
                <div className="bridal-img-wrapper">
                  <img
                    src={pkg.img}
                    alt={pkg.name}
                    loading="lazy"
                    className="bridal-card-img"
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(16,8,20,0.85) 0%, rgba(16,8,20,0.1) 60%, transparent 100%)",
                    }}
                  />
                  {/* Tag Badge */}
                  <div
                    className="bridal-tag"
                    style={{ background: pkg.gradient }}
                  >
                    {pkg.tag}
                  </div>
                  {/* Duration Badge on Top Right */}
                  <div className="bridal-duration">
                    ⏱ {pkg.duration}
                  </div>
                </div>

                {/* Body */}
                <div className="bridal-card-body flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      className="font-display"
                      style={{ fontSize: "1.1rem", fontWeight: 700, color: "white", marginBottom: "0.25rem" }}
                    >
                      {pkg.name}
                    </h3>

                    <p
                      className="line-clamp-2"
                      style={{
                        color: "rgba(255,255,255,0.6)",
                        fontSize: "0.78rem",
                        lineHeight: "1.45",
                        marginBottom: "0.75rem",
                      }}
                    >
                      {pkg.desc}
                    </p>

                    {/* Includes Features as Modern Compact Chips */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "0.85rem" }}>
                      {pkg.includes.map((item, j) => (
                        <span key={j} className="bridal-chip">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--gold-400)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price + Action Button Row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
  justifyContent: "space-between",
                      gap: "0.5rem",
                      paddingTop: "0.65rem",
                      borderTop: "1px solid rgba(255,255,255,0.08)",
                      marginTop: "auto",
                    }}
                  >
                    <div>
                      <p style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.4)", marginBottom: "0.05rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        Starting from
                      </p>
                      <p
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: 700,
                          background: pkg.gradient,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                          lineHeight: 1.1,
                        }}
                      >
                        {pkg.price}
                      </p>
                    </div>

                    <a
                      href={`https://wa.me/919546025569?text=Hi! I'm interested in the ${pkg.name} package.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-gold btn-sm"
                      style={{
                        padding: "0.4rem 0.85rem",
                        fontSize: "0.75rem",
                        borderRadius: "50px",
                        fontWeight: 600,
                      }}
                    >
                      Book Package
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Note */}
        <AnimatedSection>
          <div
            style={{
              marginTop: "3rem", textAlign: "center", padding: "1.5rem 2rem",
              background: "rgba(255,255,255,0.04)", borderRadius: "var(--radius-lg)",
              border: "1px solid rgba(244,168,201,0.12)",
            }}
          >
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem" }}>
              💍 All bridal packages include a complimentary trial session. Prices may vary based on customization. Contact us for custom quotes.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
