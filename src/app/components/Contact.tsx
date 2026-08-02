"use client";
import { useState, FormEvent } from "react";
import AnimatedSection from "./AnimatedSection";

const services = [
  "Hair Styling", "Hair Spa", "Hair Coloring", "Hair Straightening", "Keratin Treatment",
  "Bridal Makeup", "HD Makeup", "Party Makeup", "Engagement Makeup", "Reception Makeup",
  "Facial", "Hydra Facial", "Cleanup", "Skin Care", "Waxing",
  "Nail Art", "Acrylic Nails", "Manicure", "Pedicure",
  "Spa Services", "Men's Grooming",
];

const contactMethods = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 13a19.8 19.8 0 01-3.07-8.67A2 2 0 013.62 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 9.91a16 16 0 006.29 6.29l.98-.98a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 17z"/>
      </svg>
    ),
    label: "Call Us",
    value: "+91 95460 25569",
    href: "tel:+919546025569",
    gradient: "linear-gradient(135deg, #e05490, #cc3575)",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    label: "WhatsApp",
    value: "+91 95460 25569",
    href: "https://wa.me/919546025569",
    gradient: "linear-gradient(135deg, #25d366, #128c7e)",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: "Email",
    value: "styllexunisexsalon@gmail.com",
    href: "mailto:styllexunisexsalon@gmail.com",
    gradient: "linear-gradient(135deg, #d4a029, #b8831a)",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "Visit Us",
    value: "White House Compound Road, Gaya, Bihar – 823001",
    href: "https://maps.google.com/?q=Styllex+Unisex+Salon+White+House+Compound+Road+Gaya+Bihar",
    gradient: "linear-gradient(135deg, #9b59b6, #e05490)",
  },
];

type FormState = {
  name: string;
  phone: string;
  service: string;
  date: string;
  message: string;
};

export default function Contact() {
  const [form, setForm]       = useState<FormState>({ name: "", phone: "", service: "", date: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message
    const msg = `Hello Styllex Beauty Parlour Gaya! 🌸\n\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nPreferred Date: ${form.date}\nMessage: ${form.message}`;
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="section"
      style={{ background: "var(--dark-900)", position: "relative", overflow: "hidden" }}
    >
      {/* Decorative */}
      <div
        style={{
          position: "absolute", top: "-80px", right: "-80px",
          width: 350, height: 350, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(224,84,144,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute", bottom: "-60px", left: "-60px",
          width: 260, height: 260, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,160,41,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container">
        {/* Header */}
        <AnimatedSection className="section-header">
          <p className="section-label" style={{ color: "var(--gold-300)" }}>Book an Appointment</p>
          <div className="section-divider" />
          <h2 className="heading-xl" style={{ color: "white", marginTop: "1rem" }}>
            Get In Touch
          </h2>
          <p style={{ marginTop: "1rem", color: "rgba(255,255,255,0.55)", fontSize: "1.05rem", maxWidth: 520, margin: "1rem auto 0" }}>
            Ready to book? Fill out the form and we&apos;ll get back to you on WhatsApp within minutes.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <AnimatedSection animation="reveal-left">
            <div
              style={{
                background: "rgba(255,255,255,0.04)", backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius-xl)",
                padding: "2.5rem",
              }}
            >
              <h3 className="heading-md" style={{ color: "white", marginBottom: "1.75rem" }}>
                Book an Appointment
              </h3>

              {submitted && (
                <div
                  style={{
                    background: "rgba(37,211,102,0.12)", border: "1px solid rgba(37,211,102,0.3)",
                    borderRadius: "var(--radius-md)", padding: "1rem 1.25rem",
                    color: "#4ade80", fontSize: "0.9rem", marginBottom: "1.5rem",
                    display: "flex", alignItems: "center", gap: "0.5rem",
                  }}
                >
                  ✅ Opening WhatsApp with your details...
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {/* Name */}
                <div className="form-group">
                  <label className="form-label" style={{ color: "rgba(255,255,255,0.7)" }} htmlFor="contact-name">
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    className="form-input"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      border: "1.5px solid rgba(255,255,255,0.12)",
                      color: "white",
                    }}
                  />
                </div>

                {/* Phone */}
                <div className="form-group">
                  <label className="form-label" style={{ color: "rgba(255,255,255,0.7)" }} htmlFor="contact-phone">
                    Phone Number *
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91 99999 99999"
                    value={form.phone}
                    onChange={handleChange}
                    className="form-input"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      border: "1.5px solid rgba(255,255,255,0.12)",
                      color: "white",
                    }}
                  />
                </div>

                {/* Service */}
                <div className="form-group">
                  <label className="form-label" style={{ color: "rgba(255,255,255,0.7)" }} htmlFor="contact-service">
                    Service Interested In
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="form-select"
                    style={{
                      background: "rgba(30,12,40,0.95)",
                      border: "1.5px solid rgba(255,255,255,0.12)",
                      color: "white",
                    }}
                  >
                    <option value="">Select a service</option>
                    {services.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div className="form-group">
                  <label className="form-label" style={{ color: "rgba(255,255,255,0.7)" }} htmlFor="contact-date">
                    Preferred Date
                  </label>
                  <input
                    id="contact-date"
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                    className="form-input"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      border: "1.5px solid rgba(255,255,255,0.12)",
                      color: "white",
                    }}
                  />
                </div>

                {/* Message */}
                <div className="form-group">
                  <label className="form-label" style={{ color: "rgba(255,255,255,0.7)" }} htmlFor="contact-message">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Any special requirements or questions..."
                    value={form.message}
                    onChange={handleChange}
                    className="form-textarea"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      border: "1.5px solid rgba(255,255,255,0.12)",
                      color: "white",
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-gold btn-lg" style={{ width: "100%", justifyContent: "center" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </AnimatedSection>

          {/* Contact Methods */}
          <AnimatedSection animation="reveal-right">
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <h3 className="heading-md" style={{ color: "white", marginBottom: "0.5rem" }}>
                Other Ways to Reach Us
              </h3>
              {contactMethods.map((method, i) => (
                <a
                  key={i}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: "1rem",
                    padding: "1.25rem 1.5rem",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "var(--radius-lg)",
                    textDecoration: "none",
                    transition: "all 0.3s",
                    backdropFilter: "blur(8px)",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
                    (e.currentTarget as HTMLElement).style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.transform = "";
                  }}
                >
                  <div
                    style={{
                      width: 48, height: 48, borderRadius: "var(--radius-md)",
                      background: method.gradient,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                      boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
                    }}
                  >
                    {method.icon}
                  </div>
                  <div>
                    <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.72rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.2rem" }}>
                      {method.label}
                    </p>
                    <p style={{ color: "white", fontWeight: 500, fontSize: "0.9rem" }}>{method.value}</p>
                  </div>
                </a>
              ))}

              {/* Hours reminder */}
              <div
                style={{
                  marginTop: "0.5rem", padding: "1.25rem 1.5rem",
                  background: "rgba(212,160,41,0.08)", border: "1px solid rgba(212,160,41,0.2)",
                  borderRadius: "var(--radius-lg)",
                }}
              >
                <p style={{ color: "var(--gold-400)", fontWeight: 600, fontSize: "0.875rem", marginBottom: "0.4rem" }}>
                  ⏰ Response Time
                </p>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.845rem", lineHeight: 1.6 }}>
                  We typically respond within 15–30 minutes during salon hours (10 AM – 9 PM). WhatsApp is the fastest way to reach us!
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
