"use client";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

type Service = {
  name: string;
  desc: string;
  price: string;
  duration: string;
  img: string;
};

type Category = {
  key: string;
  label: string;
  services: Service[];
};

const categories: Category[] = [
  {
    key: "hair",
    label: "✂ Hair",
    services: [
      { name: "Hair Styling", desc: "Blowouts, curls, crimps & signature styles for every occasion.", price: "₹399", duration: "45 min", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80" },
      { name: "Hair Spa", desc: "Deep conditioning spa treatment to revive and nourish your hair.", price: "₹599", duration: "60 min", img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80" },
      { name: "Hair Coloring", desc: "Balayage, highlights, ombre & global color with premium products.", price: "₹999", duration: "90 min", img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80" },
      { name: "Hair Straightening", desc: "Long-lasting Japanese and Brazilian straightening techniques.", price: "₹2499", duration: "3–4 hrs", img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80" },
      { name: "Keratin Treatment", desc: "Frizz-free, silky smooth hair with professional keratin care.", price: "₹3499", duration: "3–4 hrs", img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80" },
      { name: "Hair Treatments", desc: "Scalp care, protein treatment & growth serums for healthy hair.", price: "₹799", duration: "60 min", img: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80" },
    ],
  },
  {
    key: "makeup",
    label: "💄 Makeup",
    services: [
      { name: "Bridal Makeup", desc: "Traditional & contemporary bridal looks with airbrushing.", price: "₹4999", duration: "3 hrs", img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80" },
      { name: "HD Makeup", desc: "High-definition makeup for perfect close-up photography.", price: "₹2499", duration: "90 min", img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80" },
      { name: "Party Makeup", desc: "Glamorous evening & party looks for any special occasion.", price: "₹1499", duration: "60 min", img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80" },
      { name: "Engagement Makeup", desc: "Elegant and romantic looks crafted for your engagement day.", price: "₹2999", duration: "2 hrs", img: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80" },
      { name: "Reception Makeup", desc: "Bold, long-wearing reception looks with luxe products.", price: "₹3499", duration: "2.5 hrs", img: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80" },
    ],
  },
  {
    key: "skin",
    label: "✨ Skincare",
    services: [
      { name: "Facial", desc: "Classic deep cleansing facial for a radiant, glowing complexion.", price: "₹699", duration: "60 min", img: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=800&q=80" },
      { name: "Hydra Facial", desc: "HydraFacial with exfoliation, extraction & deep hydration.", price: "₹2499", duration: "75 min", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80" },
      { name: "Cleanup", desc: "Refreshing skin cleanup for clear and smooth skin.", price: "₹399", duration: "45 min", img: "https://images.unsplash.com/photo-1512290900673-7002b521761c?auto=format&fit=crop&w=800&q=80" },
      { name: "Skin Care", desc: "Customized skincare protocols for acne, pigmentation & glow.", price: "₹999", duration: "60 min", img: "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=800&q=80" },
      { name: "Waxing", desc: "Full body waxing with premium Rica & chocolate wax options.", price: "₹299", duration: "30 min", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80" },
    ],
  },
  {
    key: "nails",
    label: "💅 Nails",
    services: [
      { name: "Nail Art", desc: "Intricate custom nail art designs by our trained nail artists.", price: "₹499", duration: "45 min", img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80" },
      { name: "Acrylic Nails", desc: "Full set acrylic extensions with gel overlay & custom design.", price: "₹999", duration: "60 min", img: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80" },
      { name: "Manicure", desc: "Classic & spa manicure with buffing, massage & nail paint.", price: "₹349", duration: "40 min", img: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=800&q=80" },
      { name: "Pedicure", desc: "Relaxing spa pedicure with scrub, mask, massage & nail care.", price: "₹449", duration: "50 min", img: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=800&q=80" },
    ],
  },
  {
    key: "spa",
    label: "🧖 Spa & More",
    services: [
      { name: "Spa Services", desc: "Full body relaxation spa with aromatherapy & hot stone massage.", price: "₹1999", duration: "90 min", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80" },
      { name: "Men's Grooming", desc: "Haircut, beard styling, facial & grooming packages for men.", price: "₹799", duration: "60 min", img: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80" },
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState("hair");
  const current = categories.find(c => c.key === active) || categories[0];

  return (
    <section
      id="services"
      className="section"
      style={{ background: "var(--pink-50)" }}
    >
      <div className="container">
        {/* Header */}
        <AnimatedSection className="section-header">
          <p className="section-label">What We Offer</p>
          <div className="section-divider" />
          <h2 className="heading-xl" style={{ color: "var(--text-primary)", marginTop: "1rem" }}>
            Our Services
          </h2>
          <p style={{ marginTop: "1rem", color: "var(--text-muted)", fontSize: "1.05rem", maxWidth: 560, margin: "1rem auto 0" }}>
            Explore our full range of premium beauty services, each crafted to make you feel extraordinary.
          </p>
        </AnimatedSection>

        {/* Category Tabs — uses onPointerUp which works reliably on mobile */}
        <div
          style={{
            display: "flex",
            gap: "0.6rem",
            overflowX: "auto",
            padding: "0.5rem 0.25rem 0.75rem",
            marginBottom: "1.5rem",
            scrollbarWidth: "none" as const,
            msOverflowStyle: "none" as const,
            WebkitOverflowScrolling: "touch" as never,
          }}
        >
          {categories.map(cat => {
            const isActive = active === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onPointerUp={() => setActive(cat.key)}
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
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Service Cards Grid */}
        <div key={active} className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {current.services.map((service) => (
            <div key={service.name} className="service-card h-full">
              <div className="card-img">
                <img src={service.img} alt={service.name} loading="lazy" />
              </div>
              <div style={{ padding: "1.1rem 1rem" }}>
                <h4
                  className="font-display"
                  style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.3rem" }}
                >
                  {service.name}
                </h4>
                <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.5, marginBottom: "0.85rem" }}>
                  {service.desc}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <p style={{ fontSize: "0.65rem", color: "var(--text-muted)", fontWeight: 500, marginBottom: "0.1rem" }}>Starting from</p>
                    <p style={{ fontSize: "1.15rem", fontWeight: 700, background: "var(--gradient-pink-gold)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                      {service.price}
                    </p>
                  </div>
                  <span
                    className="badge badge-pink"
                    style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.7rem", padding: "0.2rem 0.5rem" }}
                  >
                    ⏱ {service.duration}
                  </span>
                </div>
                <a
                  href={`https://wa.me/919546025569?text=Hi! I'd like to book ${service.name}`}
                  target="_blank" rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                  style={{ width: "100%", marginTop: "0.85rem", justifyContent: "center" }}
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <p style={{ color: "var(--text-muted)", marginBottom: "1.25rem" }}>
              Want a custom package or can&apos;t find what you&apos;re looking for?
            </p>
            <a
              href="https://wa.me/919546025569?text=Hi! I want to inquire about your services."
              target="_blank" rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              Chat With Us on WhatsApp
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}