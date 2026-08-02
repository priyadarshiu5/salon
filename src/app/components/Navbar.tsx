"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home",     href: "#home" },
  { label: "About",    href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Bridal",   href: "#bridal" },
  { label: "Gallery",  href: "#gallery" },
  { label: "Experts",  href: "#experts" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [progress, setProgress]     = useState(0);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop    = window.scrollY;
      const docHeight    = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPct    = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrolled(scrollTop > 40);
      setProgress(scrollPct);

      // Active link detection
      const sections = navLinks.map(l => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveLink(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll Progress */}
      <div id="scroll-progress" style={{ width: `${progress}%` }} />

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-nav" : "glass-nav-dark"
        }`}
        style={{ paddingTop: "3px" }}
      >
        <div className="container">
          <div className="flex items-center justify-between" style={{ height: "72px" }}>
            {/* Logo */}
            <button
              onClick={() => scrollTo("#home")}
              className="flex items-center gap-2 text-left"
              style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  width: 40, height: 40,
                  background: "linear-gradient(135deg, #e05490, #d4a029)",
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8 2 5 5.5 5 8.5c0 4.5 7 13.5 7 13.5s7-9 7-13.5C19 5.5 16 2 12 2z" fill="white"/>
                  <circle cx="12" cy="9" r="2.5" fill="rgba(255,255,255,0.6)"/>
                </svg>
              </div>
              <div>
                <div
                  className="font-display"
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: scrolled ? "var(--text-primary)" : "white",
                    lineHeight: 1.1,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Styllex Beauty Parlour
                </div>
                <div
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: scrolled ? "var(--text-gold)" : "rgba(244,168,201,0.9)",
                    fontWeight: 500,
                  }}
                >
                  Beauty &amp; Wellness
                </div>
              </div>
            </button>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center" style={{ gap: "0.25rem" }}>
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  style={{
                    border: "none",
                    cursor: "pointer",
                    padding: "0.4rem 0.9rem",
                    borderRadius: "50px",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color:
                      activeLink === link.href.replace("#", "")
                        ? "var(--pink-600)"
                        : scrolled
                        ? "var(--text-secondary)"
                        : "rgba(255,255,255,0.85)",
                    background:
                      activeLink === link.href.replace("#", "")
                        ? "rgba(224,84,144,0.1)"
                        : "transparent",
                    transition: "all 0.2s",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+919999999999"
                className="btn btn-primary btn-sm hidden md:inline-flex"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 13a19.8 19.8 0 01-3.07-8.67A2 2 0 013.62 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 9.91a16 16 0 006.29 6.29l.98-.98a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 17z"/>
                </svg>
                Call Now
              </a>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(v => !v)}
                className="md:hidden flex flex-col justify-center items-center"
                style={{
                  width: 40, height: 40,
                  background: scrolled ? "rgba(224,84,144,0.08)" : "rgba(255,255,255,0.1)",
                  border: "none", borderRadius: 10, cursor: "pointer", gap: 5,
                }}
                aria-label="Toggle menu"
              >
                {[0,1,2].map(i => (
                  <span
                    key={i}
                    style={{
                      display: "block", height: 2, borderRadius: 2,
                      background: scrolled ? "var(--pink-600)" : "white",
                      width: i === 1 ? (menuOpen ? 24 : 18) : 24,
                      transition: "width 0.2s",
                    }}
                  />
                ))}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          style={{
            overflow: "hidden",
            maxHeight: menuOpen ? "400px" : "0",
            transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
            background: "rgba(255,248,252,0.97)",
            backdropFilter: "blur(20px)",
          }}
        >
          <div className="container" style={{ paddingBottom: "1.5rem", paddingTop: "0.5rem" }}>
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                style={{
                  display: "block", width: "100%", textAlign: "left",
                  padding: "0.85rem 0.5rem", background: "none", border: "none",
                  cursor: "pointer", fontSize: "1rem", fontWeight: 500,
                  color: activeLink === link.href.replace("#", "") ? "var(--pink-600)" : "var(--text-secondary)",
                  fontFamily: "var(--font-body)",
                  borderBottom: "1px solid rgba(244,168,201,0.15)",
                }}
              >
                {link.label}
              </button>
            ))}
            <div style={{ marginTop: "1rem", display: "flex", gap: "0.75rem" }}>
              <a href="tel:+919999999999" className="btn btn-primary btn-sm" style={{ flex: 1, justifyContent: "center" }}>
                Call Now
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-sm"
                style={{ flex: 1, justifyContent: "center" }}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
