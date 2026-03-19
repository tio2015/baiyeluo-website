"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const QRCode = dynamic(() => import("qrcode.react").then(m => m.QRCodeSVG), { ssr: false });

const SITE_URL = "http://pattra.yiyeguizhen.com";
const SITE_NAME = "旷世圣典·贝叶经";

export default function SharePage() {
  const [copied, setCopied] = useState(false);
  const [isWeChat, setIsWeChat] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    setIsWeChat(ua.includes("micromessenger"));
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(SITE_URL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div style={{ background: "#0e0c09", minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <section style={{
        padding: "8rem 2rem 4rem",
        background: "linear-gradient(160deg, #0e0c09 0%, #1c1510 60%, #2a1f13 100%)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* 背景大字 */}
        <div style={{
          position: "absolute", right: "-2rem", top: "10%",
          fontFamily: "'Noto Serif SC',serif", fontSize: "24rem",
          color: "rgba(196,151,58,0.03)", lineHeight: 1,
          pointerEvents: "none", userSelect: "none",
        }}>分</div>
        <div style={{
          position: "absolute", left: "-2rem", bottom: "-2rem",
          fontFamily: "'Noto Serif SC',serif", fontSize: "18rem",
          color: "rgba(196,151,58,0.03)", lineHeight: 1,
          pointerEvents: "none", userSelect: "none",
        }}>享</div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.75rem",
            marginBottom: "2rem",
          }}>
            <div style={{ width: "28px", height: "1px", background: "#c4973a" }} />
            <span style={{
              fontFamily: "'EB Garamond',serif", fontSize: "0.75rem",
              color: "#c4973a", letterSpacing: "0.35em", textTransform: "uppercase",
            }}>Share · 分享</span>
            <div style={{ width: "28px", height: "1px", background: "#c4973a" }} />
          </div>

          <h1 style={{
            fontFamily: "'Noto Serif SC',serif",
            fontSize: "clamp(2rem, 6vw, 3.5rem)",
            fontWeight: 400, letterSpacing: "0.2em",
            color: "#f4efe3", marginBottom: "1rem", lineHeight: 1.3,
          }}>
            分享这份<br />
            <span style={{
              background: "linear-gradient(135deg, #c4973a 0%, #e6c05f 50%, #b8860b 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>千年圣典</span>
          </h1>
          <p style={{
            fontFamily: "'Noto Serif SC',serif", fontSize: "0.95rem",
            color: "rgba(244,239,227,0.45)", lineHeight: 2.2, maxWidth: "440px",
            margin: "0 auto",
          }}>
            一片贝叶，三千年文明。<br />
            扫码或复制链接，分享给更多人。
          </p>
        </div>
      </section>

      {/* ── 二维码 + 海报卡片 ── */}
      <section style={{ padding: "3rem 2rem 5rem" }}>
        <div style={{ maxWidth: "480px", margin: "0 auto" }}>

          {/* 可截图分享的卡片 */}
          <div id="share-card" style={{
            background: "linear-gradient(145deg, #1c1510 0%, #2a1f13 50%, #1c1510 100%)",
            border: "1px solid rgba(196,151,58,0.35)",
            padding: "2.5rem 2rem",
            position: "relative",
            overflow: "hidden",
            marginBottom: "2rem",
          }}>
            {/* 四角装饰 */}
            {[
              { top: "-2px", left: "-2px", borderTop: "2px solid #c4973a", borderLeft: "2px solid #c4973a" },
              { top: "-2px", right: "-2px", borderTop: "2px solid #c4973a", borderRight: "2px solid #c4973a" },
              { bottom: "-2px", left: "-2px", borderBottom: "2px solid #c4973a", borderLeft: "2px solid #c4973a" },
              { bottom: "-2px", right: "-2px", borderBottom: "2px solid #c4973a", borderRight: "2px solid #c4973a" },
            ].map((s, i) => (
              <div key={i} style={{ position: "absolute", width: "18px", height: "18px", ...s }} />
            ))}

            {/* 背景纹理文字 */}
            <div style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              fontFamily: "'Noto Serif SC',serif", fontSize: "14rem",
              color: "rgba(196,151,58,0.03)", lineHeight: 1,
              pointerEvents: "none", userSelect: "none", whiteSpace: "nowrap",
            }}>经</div>

            {/* 顶部标识 */}
            <div style={{ textAlign: "center", marginBottom: "2rem", position: "relative" }}>
              <div style={{
                fontFamily: "'EB Garamond',serif", fontSize: "0.65rem",
                color: "rgba(196,151,58,0.5)", letterSpacing: "0.35em",
                textTransform: "uppercase", marginBottom: "0.75rem",
              }}>Palm Leaf Sutras · Tanbo Arts</div>
              <div style={{
                fontFamily: "'Noto Serif SC',serif", fontSize: "1.5rem",
                fontWeight: 500, letterSpacing: "0.2em",
                color: "#f4efe3", lineHeight: 1.4,
              }}>旷世圣典</div>
              <div style={{
                fontFamily: "'Noto Serif SC',serif",
                fontSize: "2.25rem", fontWeight: 400,
                letterSpacing: "0.15em",
                background: "linear-gradient(135deg, #c4973a, #e6c05f, #b8860b)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>贝叶经</div>

              <div style={{
                height: "1px", margin: "1.25rem auto",
                background: "linear-gradient(90deg, transparent, rgba(196,151,58,0.4), transparent)",
              }} />

              {/* 关键数字 */}
              <div style={{
                display: "flex", justifyContent: "center", gap: "2.5rem",
                flexWrap: "wrap",
              }}>
                {[
                  { num: "657", unit: "部", label: "馆藏经册" },
                  { num: "150万+", unit: "页", label: "贝叶珍品" },
                  { num: "30年+", unit: "", label: "守望文明" },
                ].map(s => (
                  <div key={s.label} style={{ textAlign: "center" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "2px", justifyContent: "center" }}>
                      <span style={{ fontFamily: "'EB Garamond',serif", fontSize: "1.5rem", color: "#c4973a", lineHeight: 1 }}>{s.num}</span>
                      <span style={{ fontFamily: "'Noto Serif SC',serif", fontSize: "0.75rem", color: "#c4973a" }}>{s.unit}</span>
                    </div>
                    <div style={{ fontFamily: "'Noto Serif SC',serif", fontSize: "0.65rem", color: "rgba(244,239,227,0.4)", letterSpacing: "0.1em", marginTop: "0.2rem" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 金色分隔线 */}
            <div style={{
              height: "1px", marginBottom: "2rem",
              background: "linear-gradient(90deg, transparent, rgba(196,151,58,0.3), transparent)",
            }} />

            {/* 二维码居中 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.25rem" }}>
              <div style={{
                padding: "1rem",
                background: "#fff",
                border: "4px solid rgba(196,151,58,0.5)",
                position: "relative",
              }}>
                {/* 二维码四角金色标记 */}
                {[
                  { top: "-6px", left: "-6px", borderTop: "3px solid #c4973a", borderLeft: "3px solid #c4973a" },
                  { top: "-6px", right: "-6px", borderTop: "3px solid #c4973a", borderRight: "3px solid #c4973a" },
                  { bottom: "-6px", left: "-6px", borderBottom: "3px solid #c4973a", borderLeft: "3px solid #c4973a" },
                  { bottom: "-6px", right: "-6px", borderBottom: "3px solid #c4973a", borderRight: "3px solid #c4973a" },
                ].map((s, i) => (
                  <div key={i} style={{ position: "absolute", width: "12px", height: "12px", ...s }} />
                ))}
                <QRCode
                  value={SITE_URL}
                  size={160}
                  fgColor="#1c1510"
                  bgColor="#ffffff"
                  level="M"
                />
              </div>

              <div style={{ textAlign: "center" }}>
                <div style={{
                  fontFamily: "'Noto Serif SC',serif", fontSize: "0.8rem",
                  color: "rgba(244,239,227,0.5)", letterSpacing: "0.1em",
                  marginBottom: "0.35rem",
                }}>微信扫码 · 立即访问</div>
                <div style={{
                  fontFamily: "'EB Garamond',serif", fontSize: "0.75rem",
                  color: "rgba(196,151,58,0.5)", letterSpacing: "0.15em",
                }}>{SITE_URL.replace("http://", "")}</div>
              </div>
            </div>

            {/* 底部文字 */}
            <div style={{
              marginTop: "2rem",
              paddingTop: "1.25rem",
              borderTop: "1px solid rgba(196,151,58,0.1)",
              textAlign: "center",
            }}>
              <div style={{
                fontFamily: "'Noto Serif SC',serif", fontSize: "0.72rem",
                color: "rgba(244,239,227,0.25)", letterSpacing: "0.12em",
                lineHeight: 1.8,
              }}>
                坦博艺苑 · 贝叶经文化展示与学术交流平台<br />
                <span style={{ color: "rgba(196,151,58,0.3)" }}>一叶归真 · Palm Leaf Sutras</span>
              </div>
            </div>
          </div>

          {/* 操作按钮 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>

            {/* 微信内置浏览器提示 */}
            {isWeChat && (
              <div style={{
                padding: "1rem 1.25rem",
                background: "rgba(7,193,96,0.08)",
                border: "1px solid rgba(7,193,96,0.25)",
                display: "flex", alignItems: "flex-start", gap: "0.75rem",
              }}>
                <div style={{ fontSize: "1.2rem", lineHeight: 1 }}>💬</div>
                <div>
                  <div style={{ fontFamily: "'Noto Serif SC',serif", fontSize: "0.85rem", color: "rgba(244,239,227,0.8)", marginBottom: "0.3rem" }}>
                    在微信中分享
                  </div>
                  <div style={{ fontFamily: "'Noto Serif SC',serif", fontSize: "0.78rem", color: "rgba(244,239,227,0.45)", lineHeight: 1.8 }}>
                    点击右上角 <strong style={{ color: "rgba(196,151,58,0.7)" }}>「···」</strong> → 发送给朋友 / 分享到朋友圈
                  </div>
                </div>
              </div>
            )}

            {/* 复制链接 */}
            <button onClick={handleCopy} style={{
              width: "100%",
              padding: "1rem",
              background: copied ? "rgba(7,193,96,0.15)" : "#c4973a",
              border: copied ? "1px solid rgba(7,193,96,0.4)" : "1px solid #c4973a",
              color: copied ? "rgba(244,239,227,0.8)" : "#fff",
              fontFamily: "'Noto Serif SC',serif",
              fontSize: "0.9rem", letterSpacing: "0.15em",
              cursor: "pointer",
              transition: "all 0.3s",
              display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
            }}>
              {copied ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8L6.5 11.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  链接已复制
                </>
              ) : (
                <>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <rect x="1" y="4" width="9" height="10" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M5 4V3a1 1 0 011-1h7a1 1 0 011 1v8a1 1 0 01-1 1h-1" stroke="currentColor" strokeWidth="1.2"/>
                  </svg>
                  复制网址链接
                </>
              )}
            </button>

            {/* 长按保存提示 */}
            <div style={{
              padding: "0.875rem 1.25rem",
              background: "rgba(196,151,58,0.05)",
              border: "1px solid rgba(196,151,58,0.15)",
              display: "flex", alignItems: "center", gap: "0.75rem",
            }}>
              <div style={{ fontSize: "1.1rem" }}>📱</div>
              <div style={{ fontFamily: "'Noto Serif SC',serif", fontSize: "0.78rem", color: "rgba(244,239,227,0.45)", lineHeight: 1.8 }}>
                长按上方卡片可截图保存，发送至微信朋友圈
              </div>
            </div>
          </div>

          {/* 分享步骤说明 */}
          <div style={{ marginTop: "3rem" }}>
            <div style={{
              fontFamily: "'EB Garamond',serif", fontSize: "0.72rem",
              color: "rgba(196,151,58,0.4)", letterSpacing: "0.3em",
              textTransform: "uppercase", textAlign: "center", marginBottom: "1.5rem",
            }}>How to Share</div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              {[
                { step: "01", icon: "📷", title: "扫码访问", desc: "打开微信，点击「扫一扫」，扫描上方二维码即可直接访问" },
                { step: "02", icon: "🔗", title: "复制链接", desc: "点击「复制网址链接」，粘贴至微信对话框发送给好友" },
                { step: "03", icon: "🖼", title: "截图分享", desc: "截取上方海报卡片，保存至相册，发至朋友圈或私聊分享" },
              ].map((s) => (
                <div key={s.step} style={{
                  display: "flex", gap: "1.25rem", alignItems: "flex-start",
                  padding: "1.25rem 1rem",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(196,151,58,0.1)",
                  borderBottom: "none",
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(196,151,58,0.04)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)"}
                >
                  <div style={{
                    minWidth: "36px", width: "36px", height: "36px",
                    border: "1px solid rgba(196,151,58,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "'EB Garamond',serif", fontSize: "0.85rem",
                    color: "#c4973a", flexShrink: 0,
                  }}>{s.step}</div>
                  <div>
                    <div style={{
                      fontFamily: "'Noto Serif SC',serif", fontSize: "0.9rem",
                      color: "#f4efe3", marginBottom: "0.3rem", letterSpacing: "0.06em",
                    }}>
                      <span style={{ marginRight: "0.5rem" }}>{s.icon}</span>{s.title}
                    </div>
                    <div style={{
                      fontFamily: "'Noto Serif SC',serif", fontSize: "0.78rem",
                      color: "rgba(244,239,227,0.4)", lineHeight: 1.9,
                    }}>{s.desc}</div>
                  </div>
                </div>
              ))}
              <div style={{ borderBottom: "1px solid rgba(196,151,58,0.1)" }} />
            </div>
          </div>

          {/* 返回首页 */}
          <div style={{ textAlign: "center", marginTop: "3rem", paddingBottom: "2rem" }}>
            <Link href="/" style={{
              fontFamily: "'Noto Serif SC',serif", fontSize: "0.82rem",
              color: "rgba(196,151,58,0.5)", letterSpacing: "0.12em",
              textDecoration: "none", borderBottom: "1px solid rgba(196,151,58,0.2)",
              paddingBottom: "2px", transition: "color 0.3s",
            }}>← 返回首页</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
