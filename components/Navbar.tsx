"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { languages, Lang } from "@/lib/translations";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  // Detect current language from pathname
  const getCurrentLang = (): Lang => {
    const segments = pathname.split("/").filter(Boolean);
    const firstSegment = segments[0] as Lang;
    if (languages.some((l) => l.code === firstSegment)) {
      return firstSegment;
    }
    return "zh";
  };

  const currentLang = getCurrentLang();
  const currentLangObj = languages.find((l) => l.code === currentLang);

  // Switch language: rebuild path for new lang
  const switchLang = (code: Lang) => {
    const segments = pathname.split("/").filter(Boolean);
    const firstSegment = segments[0] as Lang;
    const isLangSegment = languages.some((l) => l.code === firstSegment);

    let rest: string[];
    if (isLangSegment) {
      rest = segments.slice(1);
    } else {
      rest = segments;
    }

    let newPath: string;
    if (code === "zh") {
      newPath = rest.length > 0 ? "/" + rest.join("/") : "/";
    } else {
      newPath = "/" + [code, ...rest].join("/");
    }

    setLangOpen(false);
    setMenuOpen(false);
    router.push(newPath);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close lang dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const buildLocalizedHref = (path: string) => {
    if (currentLang === "zh") return path;
    return `/${currentLang}${path}`;
  };

  const links = [
    { href: buildLocalizedHref("/"), label: currentLang === "zh" ? "首页" : "Home" },
    { href: buildLocalizedHref("/about"), label: currentLang === "zh" ? "贝叶经与坦博" : "About" },
    { href: buildLocalizedHref("/collection"), label: currentLang === "zh" ? "典藏" : "Collection" },
    { href: buildLocalizedHref("/news"), label: currentLang === "zh" ? "交流动态" : "News" },
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
        <Link href={buildLocalizedHref("/")} style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}>
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

          {/* Language Switcher */}
          <div ref={langRef} style={{ position: "relative" }}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.45rem 1rem",
                border: "1px solid rgba(196,151,58,0.4)",
                color: "rgba(196,151,58,0.85)",
                fontSize: "0.78rem",
                letterSpacing: "0.08em",
                background: "transparent",
                cursor: "pointer",
                transition: "all 0.3s",
                fontFamily: "'EB Garamond', serif",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "#c4973a";
                (e.currentTarget as HTMLElement).style.color = "#c4973a";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(196,151,58,0.4)";
                (e.currentTarget as HTMLElement).style.color = "rgba(196,151,58,0.85)";
              }}
            >
              🌐 {currentLangObj?.localName ?? "Language"}
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" style={{ transition: "transform 0.2s", transform: langOpen ? "rotate(180deg)" : "none" }}>
                <path d="M1 2L4 5L7 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </button>

            {langOpen && (
              <div style={{
                position: "absolute",
                top: "calc(100% + 8px)",
                right: 0,
                background: "rgba(14,12,9,0.97)",
                border: "1px solid rgba(196,151,58,0.25)",
                minWidth: "160px",
                zIndex: 200,
                boxShadow: "0 16px 40px rgba(0,0,0,0.5)",
              }}>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => switchLang(lang.code)}
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "left",
                      padding: "0.6rem 1.1rem",
                      background: lang.code === currentLang ? "rgba(196,151,58,0.12)" : "transparent",
                      border: "none",
                      borderBottom: "1px solid rgba(196,151,58,0.08)",
                      color: lang.code === currentLang ? "#c4973a" : "rgba(244,239,227,0.75)",
                      fontSize: "0.82rem",
                      letterSpacing: "0.05em",
                      cursor: "pointer",
                      fontFamily: "'Noto Serif SC', serif",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={e => {
                      if (lang.code !== currentLang) {
                        (e.currentTarget as HTMLElement).style.background = "rgba(196,151,58,0.08)";
                        (e.currentTarget as HTMLElement).style.color = "#c4973a";
                      }
                    }}
                    onMouseLeave={e => {
                      if (lang.code !== currentLang) {
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                        (e.currentTarget as HTMLElement).style.color = "rgba(244,239,227,0.75)";
                      }
                    }}
                  >
                    {lang.localName}
                  </button>
                ))}
              </div>
            )}
          </div>

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

          {/* Mobile Language Options */}
          <div style={{
            padding: "0.75rem 0",
            borderBottom: "1px solid rgba(196,151,58,0.1)",
          }}>
            <div style={{
              fontSize: "0.7rem",
              color: "rgba(196,151,58,0.6)",
              letterSpacing: "0.2em",
              marginBottom: "0.75rem",
              fontFamily: "'EB Garamond', serif",
              textTransform: "uppercase",
            }}>🌐 Language</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => switchLang(lang.code)}
                  style={{
                    padding: "0.3rem 0.75rem",
                    border: `1px solid ${lang.code === currentLang ? "#c4973a" : "rgba(196,151,58,0.25)"}`,
                    background: lang.code === currentLang ? "rgba(196,151,58,0.15)" : "transparent",
                    color: lang.code === currentLang ? "#c4973a" : "rgba(244,239,227,0.6)",
                    fontSize: "0.78rem",
                    cursor: "pointer",
                    fontFamily: "'Noto Serif SC', serif",
                    letterSpacing: "0.05em",
                  }}
                >
                  {lang.localName}
                </button>
              ))}
            </div>
          </div>

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
