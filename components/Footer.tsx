import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      background: "#0e0c09",
      borderTop: "1px solid rgba(196,151,58,0.2)",
      padding: "4rem 2rem 2rem",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Top row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: "3rem",
          marginBottom: "3rem",
        }}>
          {/* Brand */}
          <div>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.25rem",
            }}>
              <div style={{
                width: "32px", height: "32px",
                border: "1px solid rgba(196,151,58,0.5)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ color: "#c4973a", fontSize: "1rem", fontFamily: "'Noto Serif SC',serif" }}>叶</span>
              </div>
              <span style={{
                color: "#f4efe3",
                fontSize: "1rem",
                fontFamily: "'Noto Serif SC',serif",
                letterSpacing: "0.15em",
              }}>旷世圣典·贝叶经</span>
            </div>
            <p style={{
              color: "rgba(244,239,227,0.45)",
              fontSize: "0.85rem",
              lineHeight: 2,
              maxWidth: "320px",
              fontFamily: "'Noto Serif SC',serif",
            }}>
              贝叶经，古代佛教典籍的物质载体，人类文明的共同遗产。
              坦博艺苑致力于贝叶经的保护、研究与国际传播。
            </p>
            <div style={{ marginTop: "1.5rem" }}>
              <a
                href="https://tanbo.art"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  color: "#c4973a",
                  fontSize: "0.8rem",
                  letterSpacing: "0.12em",
                  textDecoration: "none",
                  fontFamily: "'EB Garamond',serif",
                  borderBottom: "1px solid rgba(196,151,58,0.3)",
                  paddingBottom: "2px",
                }}
              >
                坦博艺苑官网 tanbo.art
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 8L8 2M8 2H4M8 2V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div style={{
              color: "#c4973a",
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              marginBottom: "1.25rem",
              fontFamily: "'EB Garamond',serif",
              textTransform: "uppercase",
            }}>导航</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { href: "/", label: "首页" },
                { href: "/about", label: "贝叶经与坦博" },
                { href: "/collection", label: "典藏" },
                { href: "/news", label: "交流动态" },
              ].map(link => (
                <Link key={link.href} href={link.href} style={{
                  color: "rgba(244,239,227,0.55)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontFamily: "'Noto Serif SC',serif",
                  letterSpacing: "0.05em",
                  transition: "color 0.3s",
                }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact/Institution */}
          <div>
            <div style={{
              color: "#c4973a",
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              marginBottom: "1.25rem",
              fontFamily: "'EB Garamond',serif",
              textTransform: "uppercase",
            }}>机构</div>
            <div style={{
              color: "rgba(244,239,227,0.45)",
              fontSize: "0.82rem",
              lineHeight: 2.2,
              fontFamily: "'Noto Serif SC',serif",
            }}>
              <div>坦博艺苑</div>
              <div>北京 · 大兴</div>
              <div style={{ marginTop: "0.75rem", color: "rgba(196,151,58,0.7)", fontSize: "0.75rem" }}>
                兰州大学贝叶经研究中心
              </div>
              <div style={{ color: "rgba(196,151,58,0.7)", fontSize: "0.75rem" }}>
                北京大学数字人文研究中心
              </div>
            </div>
          </div>
        </div>

        {/* Gold divider */}
        <div style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(196,151,58,0.4), transparent)",
          marginBottom: "1.5rem",
        }} />

        {/* Bottom */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}>
          <div style={{
            color: "rgba(244,239,227,0.3)",
            fontSize: "0.75rem",
            fontFamily: "'EB Garamond',serif",
            letterSpacing: "0.05em",
          }}>
            © 2026 坦博艺苑 · 贝叶经文化展示平台
          </div>
          <div style={{
            color: "rgba(244,239,227,0.2)",
            fontSize: "0.7rem",
            fontFamily: "'EB Garamond',serif",
            letterSpacing: "0.15em",
          }}>
            TANBO ARTS · PALM LEAF SUTRA CULTURE
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
