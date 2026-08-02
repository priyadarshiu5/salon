"use client";
import { useEffect, useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { number: 10,  suffix: "+", label: "Years of Experience" },
  { number: 5000, suffix: "+", label: "Happy Clients" },
  { number: 200, suffix: "+", label: "Bridal Makeovers" },
  { number: 15,  suffix: "",  label: "Expert Artists" },
];

const amenities = [
  { icon: "❄️", label: "Air Conditioned" },
  { icon: "🅿️", label: "Parking Available" },
  { icon: "📶", label: "Free Wi-Fi" },
  { icon: "♀️", label: "Ladies Only" },
  { icon: "✅", label: "Certified Products" },
  { icon: "🧴", label: "Hygiene Standards" },
  { icon: "💳", label: "Card Accepted" },
  { icon: "📸", label: "Bridal Portfolio" },
];

const whyUs = [
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: "Premium Experience",
    desc: "Every service is crafted with luxury-grade products and meticulous attention to detail.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
    title: "Certified Artists",
    desc: "Our makeup & beauty experts are trained by leading industry professionals.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "100% Hygienic",
    desc: "Hospital-grade sanitation protocols for all tools, equipment, and workstations.",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: "On-Time Service",
    desc: "Respect for your time with punctual appointments and no unnecessary wait.",
  },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1800;
        const steps    = 60;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);
      }
    }, { threshold: 0.4 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="stat-number">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section" style={{ background: "white" }}>
      <div className="container">
        {/* Section Header */}
        <AnimatedSection className="section-header">
          <p className="section-label">Our Story</p>
          <div className="section-divider" />
          <h2 className="heading-xl" style={{ color: "var(--text-primary)", marginTop: "1rem" }}>
            About Styllex Beauty Parlour
          </h2>
          <p style={{ marginTop: "1rem", color: "var(--text-muted)", fontSize: "1.05rem", maxWidth: 640, margin: "1rem auto 0" }}>
            Born from a passion for beauty in Gaya, Bihar — transforming lives one look at a time with artistry, premium products, and warm hospitality.
          </p>
        </AnimatedSection>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-12 md:mb-20">
          {/* Image */}
          <AnimatedSection animation="reveal-left">
            <div style={{ position: "relative" }}>
              <div
                style={{
                  borderRadius: "var(--radius-xl)", overflow: "hidden",
                  boxShadow: "var(--shadow-xl)",
                  aspectRatio: "4/5",
                  background: "linear-gradient(135deg, #fce7f0 0%, #f9d0e3 100%)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
                  alt="Styllex Beauty Parlour interior"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              {/* Floating badge */}
              <div
                className="glass-card animate-float"
                style={{
                  position: "absolute", bottom: "1.5rem", right: "1rem",
                  padding: "1rem 1.25rem",
                  background: "white",
                  borderRadius: "var(--radius-lg)",
                  boxShadow: "var(--shadow-lg)",
                  textAlign: "center",
                  minWidth: 120,
                }}
              >
                <div className="stat-number" style={{ fontSize: "1.75rem" }}>10+</div>
                <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.15rem" }}>Years of Excellence</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection animation="reveal-right">
            <span className="badge badge-pink" style={{ marginBottom: "1rem", display: "inline-block" }}>
              🌸 Gaya&apos;s Premier Salon
            </span>
            <h3 className="heading-lg" style={{ color: "var(--text-primary)", marginBottom: "1rem" }}>
              Where Beauty Meets Elegance &amp; Passion
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              Styllex Beauty Parlour was founded with a single vision — to bring world-class beauty services to Gaya. Over the past decade, we&apos;ve grown into a trusted name for brides, professionals, and beauty enthusiasts alike.
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.75rem" }}>
              Every service is delivered with high hygiene standards, skin-tested products, and specialized care tailored to your unique beauty.
            </p>

            {/* Amenities Grid */}
            <div className="grid grid-cols-2 gap-2.5">
              {amenities.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5"
                  style={{
                    padding: "0.5rem 0.75rem",
                    background: "var(--pink-50)",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid rgba(244,168,201,0.2)",
                  }}
                >
                  <span style={{ fontSize: "1rem" }}>{item.icon}</span>
                  <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--text-secondary)" }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-12 md:mb-20">
          {stats.map((s, i) => (
            <AnimatedSection key={i} delay={(i + 1) as 1 | 2 | 3 | 4}>
              <div className="stat-card">
                <Counter target={s.number} suffix={s.suffix} />
                <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginTop: "0.35rem", fontWeight: 500 }}>
                  {s.label}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Why Choose Us */}
        <AnimatedSection className="section-header">
          <p className="section-label">Why Choose Us</p>
          <div className="section-divider" />
          <h2 className="heading-xl" style={{ color: "var(--text-primary)", marginTop: "1rem" }}>
            The Styllex Difference
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {whyUs.map((item, i) => (
            <AnimatedSection key={i} delay={(i + 1) as 1 | 2 | 3 | 4} animation="reveal-scale">
              <div
                style={{
                  padding: "1.25rem 1rem",
                  background: "white",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid rgba(244,168,201,0.15)",
                  boxShadow: "var(--shadow-sm)",
                  transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
                }}
                className="group why-card"
              >
                <div
                  className="why-icon"
                  style={{
                    width: 44, height: 44, borderRadius: "var(--radius-md)",
                    background: "linear-gradient(135deg, #e05490, #d4a029)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "0.85rem",
                    boxShadow: "0 4px 12px rgba(224,84,144,0.3)",
                  }}
                >
                  {item.icon}
                </div>
                <h4 className="heading-md" style={{ fontSize: "0.95rem", marginBottom: "0.4rem" }}>{item.title}</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
