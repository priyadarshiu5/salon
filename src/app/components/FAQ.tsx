"use client";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    q: "Do I need an appointment?",
    a: "Appointments are highly recommended to ensure we can accommodate you at your preferred time. However, we also welcome walk-ins based on availability. You can book via WhatsApp, call, or our contact form.",
  },
  {
    q: "Can I walk in without an appointment?",
    a: "Yes! Walk-ins are always welcome. We'll do our best to accommodate you promptly. For peak hours (weekends & evenings), booking in advance is advised to avoid wait time.",
  },
  {
    q: "Do you provide bridal makeup?",
    a: "Absolutely! Bridal makeup is our specialty. We offer HD Bridal, Classic Bridal, Engagement, Reception, and Party Makeup packages. All bridal packages include a complimentary trial session.",
  },
  {
    q: "What are your opening hours?",
    a: "We're open Monday to Sunday from 10:00 AM to 9:00 PM (Sunday until 7:00 PM). We are closed on Tuesdays. Festive season hours may vary — please check with us before visiting.",
  },
  {
    q: "Is parking available?",
    a: "Yes, free parking is available inside the Rose Garden Complex. We also have a two-wheeler parking area right at our entrance.",
  },
  {
    q: "What products do you use?",
    a: "We use premium certified products from globally trusted brands including L'Oréal, Schwarzkopf, MAC, KIKO Milano, Kérastase, Rica Wax, and more — all 100% skin-safe.",
  },
  {
    q: "Do you offer home services?",
    a: "Currently our services are offered exclusively in-salon for the best experience. However, we do offer home bridal makeup for local areas — contact us for availability.",
  },
  {
    q: "Is the salon ladies-only?",
    a: "Our salon primarily caters to women and brides. However, we also offer a dedicated Men's Grooming service by appointment.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="section"
      style={{ background: "var(--pink-50)" }}
    >
      <div className="container-sm">
        {/* Header */}
        <AnimatedSection className="section-header">
          <p className="section-label">Got Questions?</p>
          <div className="section-divider" />
          <h2 className="heading-xl" style={{ color: "var(--text-primary)", marginTop: "1rem" }}>
            Frequently Asked Questions
          </h2>
          <p style={{ marginTop: "1rem", color: "var(--text-muted)", fontSize: "1.05rem", maxWidth: 500, margin: "1rem auto 0" }}>
            Everything you need to know before your visit. Can&apos;t find an answer? Contact us directly.
          </p>
        </AnimatedSection>

        {/* FAQ Items */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={((i % 4) + 1) as 1|2|3|4}>
              <div className={`faq-item ${openIndex === i ? "open" : ""}`}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setOpenIndex(prev => (prev === i ? null : i))}
                  aria-expanded={openIndex === i}
                  id={`faq-btn-${i}`}
                >
                  <span>{faq.q}</span>
                  <div className="faq-icon">
                    <svg
                      width="14" height="14" viewBox="0 0 24 24"
                      fill="none"
                      stroke={openIndex === i ? "white" : "var(--pink-600)"}
                      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"/>
                      <line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                  </div>
                </button>
                <div
                  className="faq-answer"
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                >
                  {faq.a}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Still have questions */}
        <AnimatedSection>
          <div
            style={{
              marginTop: "3rem", textAlign: "center",
              padding: "2rem", background: "white",
              borderRadius: "var(--radius-xl)",
              boxShadow: "var(--shadow-md)",
              border: "1px solid rgba(244,168,201,0.2)",
            }}
          >
            <p style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.5rem" }}>
              Still have questions?
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "1.5rem" }}>
              Our team is here to help. Reach out via WhatsApp or call us directly.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                Chat on WhatsApp
              </a>
              <a href="tel:+919999999999" className="btn btn-primary">
                Call Now
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
