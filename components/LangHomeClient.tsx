"use client";
import Link from "next/link";
import { getTranslation, languages, Lang } from "@/lib/translations";

// 贝叶纹SVG装饰（叶脉图案）
function LeafVein() {
  return (
    <svg viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", opacity: 0.07, pointerEvents: "none" }}>
      <path d="M100 10 C100 10 80 80 100 200 C120 320 100 390 100 390"
        stroke="#c4973a" strokeWidth="1.5" fill="none"/>
      <path d="M100 60 C100 60 60 90 30 140" stroke="#c4973a" strokeWidth="0.8" fill="none"/>
      <path d="M100 100 C100 100 140 130 170 180" stroke="#c4973a" strokeWidth="0.8" fill="none"/>
      <path d="M100 140 C100 140 65 165 40 210" stroke="#c4973a" strokeWidth="0.8" fill="none"/>
      <path d="M100 180 C100 180 135 205 160 250" stroke="#c4973a" strokeWidth="0.8" fill="none"/>
      <path d="M100 220 C100 220 70 240 50 280" stroke="#c4973a" strokeWidth="0.8" fill="none"/>
      <path d="M100 260 C100 260 130 275 155 310" stroke="#c4973a" strokeWidth="0.8" fill="none"/>
      <path d="M100 300 C100 300 80 315 65 345" stroke="#c4973a" strokeWidth="0.8" fill="none"/>
    </svg>
  );
}

// 汉字大字装饰
function ChinaChar({ char, style }: { char: string; style?: React.CSSProperties }) {
  return (
    <div style={{
      fontFamily: "'Noto Serif SC', serif",
      fontSize: "12rem",
      color: "rgba(196,151,58,0.04)",
      position: "absolute",
      fontWeight: 700,
      lineHeight: 1,
      pointerEvents: "none",
      userSelect: "none",
      ...style,
    }}>{char}</div>
  );
}

// 统计数字卡片
function StatCard({ num, label, sublabel }: { num: string; label: string; sublabel?: string }) {
  return (
    <div style={{
      textAlign: "center",
      padding: "2rem 1.5rem",
      borderTop: "1px solid rgba(196,151,58,0.3)",
    }}>
      <div style={{
        display: "flex",
        alignItems: "baseline",
        justifyContent: "center",
        gap: "0.25rem",
        marginBottom: "0.5rem",
      }}>
        <span style={{
          fontFamily: "'EB Garamond', serif",
          fontSize: "2.5rem",
          color: "#c4973a",
          lineHeight: 1,
        }}>{num}</span>
      </div>
      <div style={{
        fontFamily: "'Noto Serif SC', serif",
        fontSize: "0.875rem",
        color: "#1c1c1c",
        letterSpacing: "0.1em",
      }}>{label}</div>
      {sublabel && <div style={{
        fontFamily: "'EB Garamond', serif",
        fontSize: "0.75rem",
        color: "#9a6535",
        marginTop: "0.25rem",
        letterSpacing: "0.1em",
      }}>{sublabel}</div>}
    </div>
  );
}

// 事件卡片
function EventCard({
  tag, title, subtitle, date, href, dark
}: {
  tag: string; title: string; subtitle: string; date: string; href: string; dark?: boolean;
}) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <div style={{
        background: dark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.7)",
        border: `1px solid ${dark ? "rgba(196,151,58,0.2)" : "rgba(196,151,58,0.15)"}`,
        padding: "2rem",
        transition: "all 0.35s ease",
        cursor: "pointer",
        height: "100%",
      }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement;
          el.style.transform = "translateY(-6px)";
          el.style.boxShadow = "0 24px 60px rgba(196,151,58,0.15)";
          el.style.borderColor = "rgba(196,151,58,0.5)";
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement;
          el.style.transform = "translateY(0)";
          el.style.boxShadow = "none";
          el.style.borderColor = dark ? "rgba(196,151,58,0.2)" : "rgba(196,151,58,0.15)";
        }}
      >
        <div style={{
          display: "inline-block",
          padding: "0.2rem 0.75rem",
          border: "1px solid rgba(196,151,58,0.5)",
          color: "#c4973a",
          fontSize: "0.7rem",
          letterSpacing: "0.12em",
          fontFamily: "'Noto Serif SC',serif",
          marginBottom: "1rem",
        }}>{tag}</div>
        <h3 style={{
          fontFamily: "'Noto Serif SC', serif",
          fontSize: "1.15rem",
          fontWeight: 500,
          color: dark ? "#f4efe3" : "#1c1c1c",
          letterSpacing: "0.08em",
          lineHeight: 1.6,
          marginBottom: "0.75rem",
        }}>{title}</h3>
        <p style={{
          fontFamily: "'Noto Serif SC', serif",
          fontSize: "0.85rem",
          color: dark ? "rgba(244,239,227,0.55)" : "rgba(28,28,28,0.6)",
          lineHeight: 1.9,
          marginBottom: "1.5rem",
        }}>{subtitle}</p>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "1rem",
          borderTop: `1px solid ${dark ? "rgba(196,151,58,0.1)" : "rgba(196,151,58,0.15)"}`,
        }}>
          <span style={{
            fontFamily: "'EB Garamond', serif",
            fontSize: "0.8rem",
            color: dark ? "rgba(196,151,58,0.7)" : "#9a6535",
            letterSpacing: "0.08em",
          }}>{date}</span>
          <span style={{ color: "#c4973a", fontSize: "1rem" }}>→</span>
        </div>
      </div>
    </Link>
  );
}

export default function LangHomeClient({ lang }: { lang: string }) {
  const t = getTranslation(lang as Lang);

  return (
    <div>
      {/* ── HERO ── */}
      <section style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(160deg, #0e0c09 0%, #1c1510 45%, #2a1f13 100%)",
        overflow: "hidden",
      }}>
        {/* Background decorations */}
        <ChinaChar char="经" style={{ right: "-2rem", top: "10%", fontSize: "28rem", opacity: 0.03 }} />
        <ChinaChar char="叶" style={{ left: "-3rem", bottom: "5%", fontSize: "22rem", opacity: 0.03 }} />

        {/* Leaf vein decorations */}
        <div style={{ position: "absolute", right: "8%", top: "10%", height: "400px", width: "200px" }}>
          <LeafVein />
        </div>
        <div style={{ position: "absolute", left: "3%", bottom: "15%", height: "300px", width: "150px", transform: "scaleX(-1)" }}>
          <LeafVein />
        </div>

        {/* Gold horizontal lines */}
        <div style={{
          position: "absolute", top: "28%", left: 0, right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(196,151,58,0.15) 30%, rgba(196,151,58,0.15) 70%, transparent 100%)",
        }} />
        <div style={{
          position: "absolute", bottom: "22%", left: 0, right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(196,151,58,0.1) 30%, rgba(196,151,58,0.1) 70%, transparent 100%)",
        }} />

        {/* Pali script decoration (background text) */}
        <div style={{
          position: "absolute",
          top: "15%", right: "5%",
          fontFamily: "'EB Garamond', serif",
          fontSize: "0.7rem",
          color: "rgba(196,151,58,0.12)",
          letterSpacing: "0.3em",
          lineHeight: 2.5,
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          userSelect: "none",
          pointerEvents: "none",
        }}>
          Namo tassa bhagavato arahato sammāsambuddhassa
        </div>

        {/* Hero Content */}
        <div style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "8rem 2rem 4rem",
          width: "100%",
        }}>
          {/* Tag line */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "2.5rem",
          }}>
            <div style={{ width: "32px", height: "1px", background: "#c4973a" }} />
            <span style={{
              fontFamily: "'EB Garamond', serif",
              fontSize: "0.8rem",
              color: "#c4973a",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
            }}>{t.hero.badge}</span>
          </div>

          {/* Main title */}
          <h1 style={{
            fontFamily: "'Noto Serif SC', serif",
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            fontWeight: 400,
            letterSpacing: "0.2em",
            lineHeight: 1.2,
            marginBottom: "1rem",
          }}>
            <span style={{ color: "#f4efe3", display: "block" }}>{t.hero.title1}</span>
            <span style={{
              background: "linear-gradient(135deg, #c4973a 0%, #e6c05f 50%, #b8860b 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "block",
            }}>{t.hero.title2}</span>
          </h1>

          <div style={{
            width: "80px", height: "1px",
            background: "linear-gradient(90deg, #c4973a, rgba(196,151,58,0.3))",
            marginBottom: "1.5rem",
          }} />

          <p style={{
            fontFamily: "'Noto Serif SC', serif",
            fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
            color: "rgba(244,239,227,0.65)",
            lineHeight: 2.2,
            maxWidth: "520px",
            marginBottom: "3rem",
          }}>
            {t.hero.desc}
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href={`/${lang}/about`} style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.85rem 2.25rem",
              background: "#c4973a",
              color: "#fff",
              fontFamily: "'Noto Serif SC',serif",
              fontSize: "0.875rem",
              letterSpacing: "0.15em",
              textDecoration: "none",
              transition: "all 0.3s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#b8860b"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#c4973a"; }}
            >
              {t.nav.about}
            </Link>
            <Link href={`/${lang}/collection`} style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.85rem 2.25rem",
              background: "transparent",
              color: "rgba(244,239,227,0.8)",
              fontFamily: "'Noto Serif SC',serif",
              fontSize: "0.875rem",
              letterSpacing: "0.15em",
              textDecoration: "none",
              border: "1px solid rgba(244,239,227,0.3)",
              transition: "all 0.3s",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "#c4973a";
                (e.currentTarget as HTMLElement).style.color = "#c4973a";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(244,239,227,0.3)";
                (e.currentTarget as HTMLElement).style.color = "rgba(244,239,227,0.8)";
              }}
            >
              {t.hero.btnCollection}
            </Link>
          </div>

          {/* Scroll indicator */}
          <div style={{
            position: "absolute",
            bottom: "-3rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            animation: "scrollBounce 2s infinite",
          }}>
            <span style={{
              fontFamily: "'EB Garamond',serif",
              fontSize: "0.65rem",
              color: "rgba(196,151,58,0.5)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}>scroll</span>
            <div style={{
              width: "1px", height: "40px",
              background: "linear-gradient(180deg, rgba(196,151,58,0.5), transparent)",
            }} />
          </div>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section style={{
        background: "#f4efe3",
        borderTop: "1px solid rgba(196,151,58,0.2)",
        borderBottom: "1px solid rgba(196,151,58,0.2)",
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
          display: "grid",
        }} className="m-grid-4">
          <StatCard num={t.stats.pages} label={t.stats.pagesLabel} sublabel="FOLIOS" />
          <StatCard num={t.stats.volumes} label={t.stats.volumesLabel} sublabel="VOLUMES" />
          <StatCard num={t.stats.scripts} label={t.stats.scriptsLabel} sublabel="SCRIPTS" />
          <StatCard num={t.stats.countries} label={t.stats.countriesLabel} sublabel="EXCHANGES" />
        </div>
      </section>

      {/* ── WHAT IS Palm Leaf Sutras ── */}
      <section style={{
        position: "relative",
        padding: "8rem 2rem",
        background: "#f4efe3",
        overflow: "hidden",
      }}>
        <ChinaChar char="佛" style={{ right: "5%", top: "5%", fontSize: "20rem", opacity: 0.025 }} />

        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gap: "3rem", alignItems: "center" }} className="m-grid-2">
            {/* Left: Text */}
            <div>
              <div style={{
                fontFamily: "'EB Garamond',serif",
                fontSize: "0.8rem",
                color: "#c4973a",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}>{t.intro.sectionLabel}</div>
              <h2 style={{
                fontFamily: "'Noto Serif SC',serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 500,
                letterSpacing: "0.12em",
                color: "#1c1c1c",
                lineHeight: 1.5,
                marginBottom: "0.75rem",
              }}>{t.intro.title}</h2>
              <div style={{
                width: "60px", height: "1px",
                background: "#c4973a",
                marginBottom: "2rem",
              }} />
              <div style={{
                fontFamily: "'Noto Serif SC',serif",
                fontSize: "0.95rem",
                color: "rgba(28,28,28,0.7)",
                lineHeight: 2.4,
              }}>
                <p style={{ marginBottom: "1.25rem" }}>{t.intro.p1}</p>
                <p style={{ marginBottom: "1.25rem" }}>{t.intro.p2}</p>
              </div>
              <div style={{ marginTop: "2.5rem" }}>
                <Link href={`/${lang}/about`} style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#c4973a",
                  fontFamily: "'Noto Serif SC',serif",
                  fontSize: "0.875rem",
                  letterSpacing: "0.12em",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(196,151,58,0.4)",
                  paddingBottom: "3px",
                  transition: "border-color 0.3s",
                }}>
                  {t.intro.learnMore} →
                </Link>
              </div>
            </div>

            {/* Right: Visual */}
            <div style={{ position: "relative" }}>
              {/* Decorative frame */}
              <div style={{
                position: "relative",
                background: "linear-gradient(135deg, #2a1f13, #1c1510)",
                padding: "3rem",
                border: "1px solid rgba(196,151,58,0.3)",
              }}>
                {/* Corner ornaments */}
                {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map((pos, i) => (
                  <div key={i} style={{
                    position: "absolute",
                    [pos.includes("top") ? "top" : "bottom"]: "-3px",
                    [pos.includes("left") ? "left" : "right"]: "-3px",
                    width: "16px", height: "16px",
                    borderTop: pos.includes("top") ? "2px solid #c4973a" : "none",
                    borderBottom: pos.includes("bottom") ? "2px solid #c4973a" : "none",
                    borderLeft: pos.includes("left") ? "2px solid #c4973a" : "none",
                    borderRight: pos.includes("right") ? "2px solid #c4973a" : "none",
                  }} />
                ))}

                <div style={{
                  fontFamily: "'EB Garamond', serif",
                  fontSize: "0.75rem",
                  color: "rgba(196,151,58,0.5)",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  marginBottom: "2rem",
                }}>Pāli Language · Palm Leaf · Iron Stylus</div>

                {/* Mock palm leaf content */}
                <div style={{
                  background: "linear-gradient(135deg, #8b6914 0%, #c4973a 30%, #a07824 60%, #8b6914 100%)",
                  padding: "2rem",
                  marginBottom: "1.5rem",
                  position: "relative",
                  overflow: "hidden",
                }}>
                  <div style={{
                    fontFamily: "'EB Garamond', serif",
                    fontSize: "0.7rem",
                    color: "rgba(14,12,9,0.5)",
                    lineHeight: 2.5,
                    letterSpacing: "0.2em",
                  }}>
                    namo tassa bhagavato<br />
                    arahato sammāsambuddhassa<br />
                    iti pi so bhagavā arahaṃ<br />
                    sammāsambuddho vijjācaraṇasampanno
                  </div>
                  {/* Leaf vein lines */}
                  <div style={{
                    position: "absolute",
                    top: "50%", left: 0, right: 0,
                    height: "1px",
                    background: "rgba(14,12,9,0.15)",
                    transform: "translateY(-50%)",
                  }} />
                </div>

                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                }}>
                  {[
                    { label: "Material", value: "Palm Leaf" },
                    { label: "Tool", value: "Iron Stylus" },
                    { label: "Languages", value: "Pali · Sanskrit" },
                    { label: "Preservation", value: "Cinnabar · Wood Covers" },
                  ].map(item => (
                    <div key={item.label} style={{
                      padding: "0.75rem",
                      background: "rgba(196,151,58,0.08)",
                      border: "1px solid rgba(196,151,58,0.15)",
                    }}>
                      <div style={{
                        fontFamily: "'EB Garamond',serif",
                        fontSize: "0.65rem",
                        color: "rgba(196,151,58,0.6)",
                        letterSpacing: "0.15em",
                        marginBottom: "0.3rem",
                      }}>{item.label}</div>
                      <div style={{
                        fontFamily: "'Noto Serif SC',serif",
                        fontSize: "0.82rem",
                        color: "#f4efe3",
                      }}>{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 四重价值 ── */}
      <section style={{
        padding: "7rem 2rem",
        background: "#ede5d0",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{
              fontFamily: "'EB Garamond',serif",
              fontSize: "0.8rem",
              color: "#c4973a",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}>{t.values.sectionLabel}</div>
            <h2 style={{
              fontFamily: "'Noto Serif SC',serif",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 500,
              letterSpacing: "0.15em",
              color: "#1c1c1c",
            }}>{t.values.title}</h2>
          </div>

          <div style={{
            display: "grid",
            gap: "0",
            border: "1px solid rgba(196,151,58,0.25)",
          }} className="m-grid-4">
            {t.values.items.map((item, i) => (
              <div key={i} style={{
                padding: "2.5rem 2rem",
                borderRight: i < 3 ? "1px solid rgba(196,151,58,0.2)" : "none",
                background: "rgba(255,255,255,0.5)",
                transition: "background 0.3s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.85)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.5)"; }}
              >
                <div style={{
                  fontFamily: "'EB Garamond',serif",
                  fontSize: "0.7rem",
                  color: "#c4973a",
                  letterSpacing: "0.2em",
                  marginBottom: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}>
                  <span style={{ fontSize: "0.9rem" }}>{["⊕", "◈", "◇", "◯"][i]}</span>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 style={{
                  fontFamily: "'Noto Serif SC',serif",
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  color: "#1c1c1c",
                  letterSpacing: "0.12em",
                  marginBottom: "1.25rem",
                }}>{item.title}</h3>
                <p style={{
                  fontFamily: "'Noto Serif SC',serif",
                  fontSize: "0.82rem",
                  color: "rgba(28,28,28,0.65)",
                  lineHeight: 2.2,
                }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 重要事件 (dark section) ── */}
      <section style={{
        padding: "8rem 2rem",
        background: "linear-gradient(160deg, #0e0c09 0%, #1c1510 100%)",
        position: "relative",
        overflow: "hidden",
      }}>
        <ChinaChar char="传" style={{ left: "3%", top: "10%", fontSize: "18rem", opacity: 0.025 }} />

        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Section header */}
          <div style={{ marginBottom: "4rem" }}>
            <div style={{
              fontFamily: "'EB Garamond',serif",
              fontSize: "0.8rem",
              color: "#c4973a",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}>{t.events.sectionLabel}</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <h2 style={{
                fontFamily: "'Noto Serif SC',serif",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontWeight: 500,
                letterSpacing: "0.12em",
                color: "#f4efe3",
              }}>{t.events.title}</h2>
              <Link href={`/${lang}/news`} style={{
                color: "#c4973a",
                fontFamily: "'Noto Serif SC',serif",
                fontSize: "0.82rem",
                letterSpacing: "0.12em",
                textDecoration: "none",
                borderBottom: "1px solid rgba(196,151,58,0.4)",
                paddingBottom: "2px",
              }}>{t.events.viewAll} →</Link>
            </div>
          </div>

          {/* Event cards */}
          <div style={{
            display: "grid",
            gap: "1.5rem",
          }} className="m-grid-3">
            <EventCard
              tag="National Collection"
              title="Donation of Palm Leaf Sutras to the National Archives of China"
              subtitle="Tanbo Arts made two donations to the National Archives in 2023 and 2024, completing a key sequence in the national collection. The Minister of Propaganda attended the second ceremony."
              date="2023 · 2024"
              href={`/${lang}/news#national-library`}
              dark
            />
            <EventCard
              tag="International Exchange"
              title="Tanbo Arts Presents Palm Leaf Sutras to Pope Francis"
              subtitle="Representatives of Tanbo Arts traveled to the Vatican to present Palm Leaf Sutras preserved in China to Pope Francis, using the sutras as a bridge for dialogue between ancient Eastern and Western civilizations."
              date="Vatican"
              href={`/${lang}/news#vatican`}
              dark
            />
            <EventCard
              tag="Academic Collaboration"
              title="Peking University Digital Humanities Center · Palm Leaf Sutra Digitization Project"
              subtitle="Tanbo Arts joined Peking University's Digital Humanities Research Center to launch a digital identification, authentication, and emergency preservation project for ancient Palm Leaf Sutras, with an initial plan to digitally archive 10,000 folios."
              date="2025 — Ongoing"
              href={`/${lang}/news#digitization`}
              dark
            />
          </div>
        </div>
      </section>

      {/* ── 坦博艺苑 ── */}
      <section style={{
        padding: "8rem 2rem",
        background: "#f4efe3",
        position: "relative",
        overflow: "hidden",
      }}>
        <ChinaChar char="苑" style={{ right: "2%", bottom: "5%", fontSize: "18rem", opacity: 0.025 }} />

        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gap: "3rem", alignItems: "center" }} className="m-grid-2">
            {/* Left: Visual */}
            <div style={{ position: "relative" }}>
              <div style={{
                background: "linear-gradient(135deg, #1c1510, #0e0c09)",
                padding: "3rem",
                border: "1px solid rgba(196,151,58,0.25)",
                position: "relative",
              }}>
                {/* Quote */}
                <div style={{
                  fontFamily: "'Noto Serif SC',serif",
                  fontSize: "1.5rem",
                  color: "#c4973a",
                  letterSpacing: "0.25em",
                  lineHeight: 1.8,
                  marginBottom: "1.5rem",
                  textAlign: "center",
                }}>
                  坦荡真君子<br />博渊乃学人
                </div>
                <div style={{
                  height: "1px",
                  background: "rgba(196,151,58,0.3)",
                  marginBottom: "1.5rem",
                }} />
                <div style={{
                  fontFamily: "'EB Garamond',serif",
                  fontSize: "0.8rem",
                  color: "rgba(196,151,58,0.6)",
                  letterSpacing: "0.2em",
                  textAlign: "center",
                }}>Wang Shixiang · National Scholar</div>

                {/* Donor highlights */}
                <div style={{ marginTop: "2.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {[
                    { place: "National Archives of China", year: "2023-2024", note: "National" },
                    { place: "Vatican · Pope Francis", year: "International", note: "Dialogue" },
                    { place: "Lanzhou University Research Center", year: "2017-2019", note: "Academic" },
                  ].map(d => (
                    <div key={d.place} style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "0.75rem 1rem",
                      background: "rgba(196,151,58,0.06)",
                      border: "1px solid rgba(196,151,58,0.15)",
                    }}>
                      <div>
                        <div style={{ fontFamily: "'Noto Serif SC',serif", fontSize: "0.85rem", color: "#f4efe3" }}>{d.place}</div>
                        <div style={{ fontFamily: "'EB Garamond',serif", fontSize: "0.7rem", color: "rgba(196,151,58,0.6)", letterSpacing: "0.1em" }}>{d.year}</div>
                      </div>
                      <div style={{
                        padding: "0.15rem 0.6rem",
                        border: "1px solid rgba(196,151,58,0.4)",
                        color: "#c4973a",
                        fontSize: "0.65rem",
                        letterSpacing: "0.1em",
                        fontFamily: "'Noto Serif SC',serif",
                      }}>{d.note}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Text */}
            <div>
              <div style={{
                fontFamily: "'EB Garamond',serif",
                fontSize: "0.8rem",
                color: "#c4973a",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}>{t.tanbo.sectionLabel}</div>
              <h2 style={{
                fontFamily: "'Noto Serif SC',serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 500,
                letterSpacing: "0.12em",
                color: "#1c1c1c",
                lineHeight: 1.5,
                marginBottom: "0.75rem",
              }}>{t.tanbo.title}</h2>
              <div style={{
                width: "60px", height: "1px",
                background: "#c4973a",
                marginBottom: "2rem",
              }} />
              <div style={{
                fontFamily: "'Noto Serif SC',serif",
                fontSize: "0.95rem",
                color: "rgba(28,28,28,0.7)",
                lineHeight: 2.4,
              }}>
                <p>{t.tanbo.desc}</p>
              </div>

              <div style={{ display: "flex", gap: "1rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
                <Link href={`/${lang}/about`} style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#c4973a",
                  fontFamily: "'Noto Serif SC',serif",
                  fontSize: "0.875rem",
                  letterSpacing: "0.12em",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(196,151,58,0.4)",
                  paddingBottom: "3px",
                }}>{t.nav.about} →</Link>
                <a href="http://www.tempoart.cn/" target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "rgba(28,28,28,0.5)",
                  fontFamily: "'Noto Serif SC',serif",
                  fontSize: "0.875rem",
                  letterSpacing: "0.12em",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(28,28,28,0.2)",
                  paddingBottom: "3px",
                }}>{t.tanbo.visitSite} ↗</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{
        padding: "6rem 2rem",
        background: "linear-gradient(135deg, #1c1510 0%, #2a1f13 50%, #1c1510 100%)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: "radial-gradient(ellipse at center, rgba(196,151,58,0.08) 0%, transparent 70%)",
        }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "700px", margin: "0 auto" }}>
          <div style={{
            width: "1px", height: "60px",
            background: "linear-gradient(180deg, transparent, rgba(196,151,58,0.5))",
            margin: "0 auto 2rem",
          }} />
          <h2 style={{
            fontFamily: "'Noto Serif SC',serif",
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            fontWeight: 400,
            letterSpacing: "0.2em",
            color: "#f4efe3",
            marginBottom: "1.5rem",
          }}>{t.tanbo.title}</h2>
          <p style={{
            fontFamily: "'Noto Serif SC',serif",
            fontSize: "0.95rem",
            color: "rgba(244,239,227,0.55)",
            lineHeight: 2.2,
            marginBottom: "3rem",
          }}>
            {t.tanbo.desc}
          </p>
          <a href="http://www.tempoart.cn/" target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "1rem 2.5rem",
            background: "rgba(196,151,58,0.15)",
            border: "1px solid rgba(196,151,58,0.5)",
            color: "#c4973a",
            fontFamily: "'Noto Serif SC',serif",
            fontSize: "0.9rem",
            letterSpacing: "0.2em",
            textDecoration: "none",
            transition: "all 0.3s",
          }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "#c4973a";
              (e.currentTarget as HTMLElement).style.color = "#fff";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "rgba(196,151,58,0.15)";
              (e.currentTarget as HTMLElement).style.color = "#c4973a";
            }}
          >
            {t.nav.tanboSite}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 10L10 2M10 2H5M10 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
