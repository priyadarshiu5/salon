"use client";
import { useEffect, useState } from "react";

function getOpenStatus() {
  const now   = new Date();
  const day   = now.getDay();   // 0=Sun
  const hours = now.getHours();
  const mins  = now.getMinutes();
  const time  = hours * 60 + mins;

  // Closed on Tuesdays (day=2)
  if (day === 2) return { open: false, label: "Closed Today (Tuesday)" };

  // Open 10:00 AM – 9:00 PM
  const openTime  = 10 * 60;
  const closeTime = 21 * 60;

  if (time >= openTime && time < closeTime) {
    return { open: true, label: "Open Now • Closes at 9:00 PM" };
  }
  return { open: false, label: time < openTime ? "Opens at 10:00 AM" : "Closed • Opens Tomorrow 10 AM" };
}

export default function Hero() {
  const [status, setStatus] = useState({ open: false, label: "" });

  useEffect(() => {
    setStatus(getOpenStatus());
  }, []);

  return (
    <section id="home" className="hero">
      {/* Background */}
      <div
        className="hero-bg"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      {/* Dark overlay */}
      <div className="hero-overlay" />

      {/* Decorative floating circles */}
      <div
        className="animate-float"
        style={{
          position: "absolute", top: "15%", right: "8%",
          width: 200, height: 200, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(244,168,201,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        className="animate-float-delay"
        style={{
          position: "absolute", bottom: "20%", left: "5%",
          width: 150, height: 150, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,160,41,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Decorative ring */}
      <div
        style={{
          position: "absolute", top: "10%", left: "3%",
          width: 120, height: 120, borderRadius: "50%",
          border: "1px solid rgba(244,168,201,0.15)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute", bottom: "15%", right: "5%",
          width: 80, height: 80, borderRadius: "50%",
          border: "1px solid rgba(212,160,41,0.15)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div className="container hero-content" style={{ paddingTop: "6rem", paddingBottom: "4rem" }}>
        <div style={{ maxWidth: 740 }}>
          {/* Section label */}
          <div
            className="animate-fade-up"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(244,168,201,0.25)",
              borderRadius: "50px",
              padding: "0.4rem 1rem",
              marginBottom: "1.5rem",
            }}
          >
            <span style={{ color: "var(--gold-300)", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600 }}>
              ✦ Styllex Unisex Salon • Gaya
            </span>
            <span style={{ background: "rgba(225,160,41,0.25)", color: "#facc15", padding: "0.15rem 0.5rem", borderRadius: "20px", fontSize: "0.7rem", fontWeight: 700 }}>
              ★ 4.7 Google Rated
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="heading-hero animate-fade-up"
            style={{
              color: "white",
              marginBottom: "1rem",
              animationDelay: "0.1s",
              animationFillMode: "both",
            }}
          >
            Styllex Beauty
            <span
              style={{
                display: "block",
                background: "linear-gradient(135deg, #f4a8c9 0%, #e0a070 50%, #d4a029 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Parlour Gaya
            </span>
          </h1>

          {/* Tagline */}
          <p
            className="animate-fade-up"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "rgba(255,255,255,0.75)",
              marginBottom: "1.5rem",
              fontFamily: "var(--font-accent)",
              fontStyle: "italic",
              lineHeight: 1.6,
              animationDelay: "0.2s",
              animationFillMode: "both",
            }}
          >
            Premier beauty salon in Gaya offering hair styling, Indian bridal makeup, skincare, nail art &amp; spa — crafted for your glow.
          </p>

          {/* Address */}
          <div
            className="animate-fade-up"
            style={{
              display: "flex", alignItems: "center", gap: "0.5rem",
              color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", marginBottom: "1rem",
              animationDelay: "0.25s", animationFillMode: "both",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(244,168,201,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            White House Compound Road, Gaya, Bihar – 823001
          </div>

          {/* Open Status */}
          <div
            className="animate-fade-up"
            style={{ marginBottom: "2.5rem", animationDelay: "0.3s", animationFillMode: "both" }}
          >
            {status.label && (
              <span className={status.open ? "status-open" : "status-closed"}>
                <span className="status-dot" />
                {status.label}
              </span>
            )}
          </div>

          {/* CTA Buttons */}
          <div
            className="animate-fade-up"
            style={{
              display: "flex", flexWrap: "wrap", gap: "0.75rem",
              animationDelay: "0.4s", animationFillMode: "both",
            }}
          >
            <a href="tel:+919546025569" className="btn btn-primary btn-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 13a19.8 19.8 0 01-3.07-8.67A2 2 0 013.62 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 9.91a16 16 0 006.29 6.29l.98-.98a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 17z"/>
              </svg>
              Call Now
            </a>

            <a
              href="https://wa.me/919546025569?text=Hi! I'd like to book an appointment at Styllex Unisex Salon Gaya."
              target="_blank" rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>

            <a
              href="https://maps.google.com/?q=Styllex+Unisex+Salon+White+House+Compound+Road+Gaya+Bihar"
              target="_blank" rel="noopener noreferrer"
              className="btn btn-outline-white btn-lg"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="3 11 22 2 13 21 11 13 3 11"/>
              </svg>
              Get Directions
            </a>

            <a href="mailto:glamourstudio@gmail.com" className="btn btn-outline-white btn-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Email Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        style={{
          position: "absolute", bottom: "2rem", left: "50%",
          transform: "translateX(-50%)", display: "flex",
          flexDirection: "column", alignItems: "center", gap: "0.5rem",
          color: "rgba(255,255,255,0.5)", fontSize: "0.7rem",
          letterSpacing: "0.15em", textTransform: "uppercase",
        }}
      >
        <span>Scroll</span>
        <div
          style={{
            width: 24, height: 38, border: "1.5px solid rgba(255,255,255,0.3)",
            borderRadius: 12, display: "flex", justifyContent: "center",
            paddingTop: "6px",
          }}
        >
          <div
            className="animate-float"
            style={{
              width: 4, height: 8, borderRadius: 2,
              background: "rgba(244,168,201,0.7)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
