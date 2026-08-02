"use client";
import AnimatedSection from "./AnimatedSection";

const experts = [
  {
    name: "Priya Sharma",
    designation: "Senior Makeup Artist & Bridal Specialist",
    experience: "8 Years",
    specialization: "Bridal Makeup, HD Makeup, Airbrush",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    gradient: "linear-gradient(135deg, #e05490 0%, #9a1b5a 100%)",
    emoji: "💄",
  },
  {
    name: "Anita Kapoor",
    designation: "Master Hair Stylist",
    experience: "10 Years",
    specialization: "Hair Color, Keratin, Balayage, Highlights",
    img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
    gradient: "linear-gradient(135deg, #d4a029 0%, #8a5e10 100%)",
    emoji: "✂",
  },
  {
    name: "Sneha Rao",
    designation: "Skin & Nail Specialist",
    experience: "6 Years",
    specialization: "HydraFacial, Skin Treatments, Nail Art",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    gradient: "linear-gradient(135deg, #9b59b6 0%, #e05490 100%)",
    emoji: "✨",
  },
  {
    name: "Meera Patel",
    designation: "Spa Therapist & Wellness Expert",
    experience: "7 Years",
    specialization: "Spa, Massage, Aromatherapy, Body Treatments",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    gradient: "linear-gradient(135deg, #e0a070 0%, #d4a029 100%)",
    emoji: "🧖",
  },
];

export default function Experts() {
  return (
    <section
      id="experts"
      className="section"
      style={{ background: "var(--pink-50)" }}
    >
      <div className="container">
        {/* Header */}
        <AnimatedSection className="section-header">
          <p className="section-label">Our Team</p>
          <div className="section-divider" />
          <h2 className="heading-xl" style={{ color: "var(--text-primary)", marginTop: "1rem" }}>
            Meet Our Experts
          </h2>
          <p style={{ marginTop: "1rem", color: "var(--text-muted)", fontSize: "1.05rem", maxWidth: 540, margin: "1rem auto 0" }}>
            Passionate, certified beauty professionals dedicated to making you look and feel extraordinary.
          </p>
        </AnimatedSection>

        {/* Expert Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {experts.map((expert, i) => (
            <AnimatedSection key={i} delay={((i % 4) + 1) as 1|2|3|4} animation="reveal-scale">
              <div className="expert-card h-full">
                {/* Photo */}
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <div
                    className="expert-img-wrapper"
                    style={{
                      background: expert.gradient,
                      height: 240,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "4rem",
                    }}
                  >
                    {/* Try real image first, fallback to emoji */}
                    <img
                      src={expert.img}
                      alt={expert.name}
                      loading="lazy"
                      style={{
                        width: "100%", height: "100%",
                        objectFit: "cover",
                        objectPosition: "center top",
                        position: "absolute",
                        inset: 0,
                      }}
                      onError={e => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                    <span style={{ position: "relative", zIndex: 1 }}>{expert.emoji}</span>
                  </div>

                  {/* Experience badge */}
                  <div
                    style={{
                      position: "absolute", bottom: "0.5rem", right: "0.5rem",
                      background: expert.gradient,
                      color: "white", borderRadius: "50px",
                      padding: "0.15rem 0.5rem",
                      fontSize: "0.65rem", fontWeight: 700,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    }}
                  >
                    {expert.experience}
                  </div>
                </div>

                {/* Info */}
                <div style={{ padding: "0.85rem 0.65rem" }}>
                  <h4
                    className="font-display"
                    style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.2rem" }}
                  >
                    {expert.name}
                  </h4>
                  <p
                    style={{ fontSize: "0.75rem", color: "var(--pink-600)", fontWeight: 600, marginBottom: "0.5rem" }}
                  >
                    {expert.designation}
                  </p>
                  <div
                    style={{
                      display: "flex", alignItems: "flex-start", gap: "0.3rem",
                      padding: "0.4rem 0.5rem",
                      background: "var(--pink-50)", borderRadius: "var(--radius-sm)",
                    }}
                  >
                    <span style={{ fontSize: "0.75rem" }}>⭐</span>
                    <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", lineHeight: 1.4 }}>
                      {expert.specialization}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Careers nudge */}
        <AnimatedSection>
          <div
            style={{
              marginTop: "3rem", padding: "2rem 2.5rem",
              background: "white", borderRadius: "var(--radius-xl)",
              boxShadow: "var(--shadow-md)", border: "1px solid rgba(244,168,201,0.2)",
              textAlign: "center",
            }}
          >
            <h3 className="heading-md" style={{ marginBottom: "0.5rem" }}>Join Our Team</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "1.25rem", maxWidth: 460, margin: "0 auto 1.25rem" }}>
              Are you a passionate beauty professional? We&apos;re always looking for talented artists to join our growing family.
            </p>
            <a
              href="mailto:careers@glamourstudio.com?subject=Job Application"
              className="btn btn-primary"
            >
              Apply Now
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
