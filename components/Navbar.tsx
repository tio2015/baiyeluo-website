"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "首页" },
    { href: "/about", label: "贝叶经与坦博" },
    { href: "/collection", label: "典藏" },
    { href: "/news", label: "交流动态" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.4s ease",
        background: scrolled
          ? "rgba(14,12,9,0.92)"
          : "linear-gradient(180deg,rgba(14,12,9,0.7) 0%,transparent 100%)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(196,151,58,0.2)" : "none",
      }}
    >
      <nav style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 2rem",
        height: "72px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div style={{
            width: "36px", height: "36px",
            border: "1px solid rgba(196,151,58,0.6)",
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative",
          }}>
            <span style={{
              fontSize: "1.1rem",
              color: "#c4973a",
              fontFamily: "'Noto Serif SC', serif",
              lineHeight: 1,
            }}>叶</span>
            <div style={{
              position: "absolute", top: "-2px", left: "-2px",
              width: "8px", height: "8px",
              borderTop: "1.5px solid #c4973a", borderLeft: "1.5px solid #c4973a",
            }} />
            <div style={{
              position: "absolute", bottom: "-2px", right: "-2px",
              width: "8px", height: "8px",
              borderBottom: "1.5px solid #c4973a", borderRight: "1.5px solid #c4973a",
            }} />
          </div>
          <div>
            <div style={{
              fontSize: "1rem",
              fontFamily: "'Noto Serif SC', serif",
              color: "#f4efe3",
              letterSpacing: "0.15em",
              lineHeight: 1.2,
            }}>贝叶经</div>
            <div style={{
              fontSize: "0.6rem",
              color: "#c4973a",
              letterSpacing: "0.25em",
              fontFamily: "'EB Garamond', serif",
              textTransform: "uppercase",
            }}>Palm Leaf Sutras</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }} className="hidden-mobile">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
          <a
            href="https://tanbo.art"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.45rem 1.1rem",
              border: "1px solid rgba(196,151,58,0.6)",
              color: "#c4973a",
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              textDecoration: "none",
              transition: "all 0.3s",
              fontFamily: "'Noto Serif SC', serif",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "#c4973a";
              (e.currentTarget as HTMLElement).style.color = "#fff";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "#c4973a";
            }}
          >
            坦博艺苑官网
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 8L8 2M8 2H4M8 2V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "#f4efe3",
            cursor: "pointer",
            padding: "0.5rem",
          }}
          className="show-mobile"
        >
          <div style={{ width: "22px", display: "flex", flexDirection: "column", gap: "5px" }}>
            <div style={{ height: "1px", background: menuOpen ? "#c4973a" : "#f4efe3", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(4px,4px)" : "none" }} />
            <div style={{ height: "1px", background: "#f4efe3", opacity: menuOpen ? 0 : 1, transition: "all 0.3s" }} />
            <div style={{ height: "1px", background: menuOpen ? "#c4973a" : "#f4efe3", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(4px,-4px)" : "none" }} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: "rgba(14,12,9,0.97)",
          borderTop: "1px solid rgba(196,151,58,0.2)",
          padding: "1.5rem 2rem",
        }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: "block",
                color: "rgba(244,239,227,0.8)",
                textDecoration: "none",
                padding: "0.75rem 0",
                borderBottom: "1px solid rgba(196,151,58,0.1)",
                fontSize: "0.95rem",
                letterSpacing: "0.08em",
                fontFamily: "'Noto Serif SC', serif",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://tanbo.art"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              color: "#c4973a",
              textDecoration: "none",
              padding: "0.75rem 0",
              fontSize: "0.95rem",
              letterSpacing: "0.08em",
              fontFamily: "'Noto Serif SC', serif",
            }}
          >
            坦博艺苑官网 ↗
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </header>
  );
}
