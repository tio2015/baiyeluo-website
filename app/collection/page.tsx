"use client";
import Link from "next/link";

const collectionHighlights = [
  { lang: "巴利语", region: "斯里兰卡 / 缅甸", period: "宋代至明代", count: "数十部", desc: "南传上座部佛教经典原典，以贝多罗树叶刻写，是三藏经典（律藏、经藏、论藏）的最早书写载体。" },
  { lang: "梵语", region: "古印度 / 尼泊尔", period: "唐代至元代", count: "若干部", desc: "大乘佛教经典的原始语言版本，包含般若经、华严经等重要典籍，具有极高的语言学与哲学研究价值。" },
  { lang: "藏语", region: "西藏 / 尼泊尔", period: "元代至清代", count: "若干部", desc: "藏传佛教密乘经典，经由西藏译师翻译自梵文，保留了大量失传于印度本土的宗教文献。" },
  { lang: "缅语", region: "缅甸", period: "明代至清代", count: "若干部", desc: "东南亚上座部佛教传统，以缅文字母刻写，记录着缅甸佛教弘法的历史脉络与地方宗教传统。" },
];

export default function CollectionPage() {
  return (
    <div>
      {/* Page Hero */}
      <section style={{
        padding: "10rem 2rem 6rem",
        background: "linear-gradient(160deg, #0e0c09 0%, #2a1f13 100%)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          fontFamily: "'Noto Serif SC',serif",
          fontSize: "22rem",
          color: "rgba(196,151,58,0.03)",
          right: "-3rem",
          bottom: "-3rem",
          lineHeight: 1,
          pointerEvents: "none",
        }}>藏</div>
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{
            fontFamily: "'EB Garamond',serif",
            fontSize: "0.8rem",
            color: "#c4973a",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}>Collection · Digital Archive · Phase One</div>
          <h1 style={{
            fontFamily: "'Noto Serif SC',serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 400,
            letterSpacing: "0.15em",
            color: "#f4efe3",
            marginBottom: "1.5rem",
          }}>典藏</h1>
          <p style={{
            fontFamily: "'Noto Serif SC',serif",
            fontSize: "1rem",
            color: "rgba(244,239,227,0.5)",
            maxWidth: "560px",
            lineHeight: 2.2,
          }}>
            657部贝叶经，唐宋元明清五朝，巴利梵藏缅多语种，
            数字化首期目标一万片，向全球学术界开放。
          </p>
        </div>
      </section>

      {/* ── 馆藏概述 ── */}
      <section style={{
        padding: "6rem 2rem",
        background: "#f4efe3",
        borderBottom: "1px solid rgba(196,151,58,0.15)",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "0" }}>
            {[
              { num: "150万+", unit: "页", label: "馆藏总量", note: "古巴利文·梵文·藏文佛学珍品" },
              { num: "657", unit: "部", label: "完整经册", note: "与玄奘取经数量一致" },
              { num: "4+", unit: "语种", label: "书写语言", note: "巴利 · 梵 · 藏 · 缅" },
              { num: "10+", unit: "国", label: "来源地域", note: "印度·尼泊尔·斯里兰卡·巴基斯坦·阿富汗" },
            ].map((s, i) => (
              <div key={i} style={{
                padding: "2.5rem 2rem",
                textAlign: "center",
                borderRight: i < 3 ? "1px solid rgba(196,151,58,0.2)" : "none",
                borderTop: "1px solid rgba(196,151,58,0.2)",
                borderBottom: "1px solid rgba(196,151,58,0.2)",
              }}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "0.25rem", marginBottom: "0.5rem" }}>
                  <span style={{ fontFamily: "'EB Garamond',serif", fontSize: "3rem", color: "#c4973a", lineHeight: 1 }}>{s.num}</span>
                  <span style={{ fontFamily: "'Noto Serif SC',serif", fontSize: "0.95rem", color: "#c4973a" }}>{s.unit}</span>
                </div>
                <div style={{ fontFamily: "'Noto Serif SC',serif", fontSize: "0.9rem", color: "#1c1c1c", letterSpacing: "0.1em", marginBottom: "0.3rem" }}>{s.label}</div>
                <div style={{ fontFamily: "'EB Garamond',serif", fontSize: "0.72rem", color: "#9a6535", letterSpacing: "0.1em" }}>{s.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 馆藏介绍 ── */}
      <section style={{ padding: "7rem 2rem", background: "#f4efe3" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{
              fontFamily: "'EB Garamond',serif",
              fontSize: "0.8rem",
              color: "#c4973a",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}>Collection by Language & Region</div>
            <h2 style={{
              fontFamily: "'Noto Serif SC',serif",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 500,
              letterSpacing: "0.15em",
              color: "#1c1c1c",
            }}>馆藏语种与地域分布</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            {collectionHighlights.map((item, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(196,151,58,0.15)",
                padding: "2.5rem",
                transition: "all 0.35s",
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "0 24px 60px rgba(196,151,58,0.1)";
                  el.style.borderColor = "rgba(196,151,58,0.4)";
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "none";
                  el.style.borderColor = "rgba(196,151,58,0.15)";
                  el.style.transform = "translateY(0)";
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                  <div>
                    <h3 style={{
                      fontFamily: "'Noto Serif SC',serif",
                      fontSize: "1.25rem",
                      color: "#1c1c1c",
                      letterSpacing: "0.12em",
                      fontWeight: 500,
                      marginBottom: "0.35rem",
                    }}>{item.lang}</h3>
                    <div style={{
                      fontFamily: "'EB Garamond',serif",
                      fontSize: "0.75rem",
                      color: "#9a6535",
                      letterSpacing: "0.12em",
                    }}>{item.region}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{
                      padding: "0.2rem 0.75rem",
                      border: "1px solid rgba(196,151,58,0.4)",
                      color: "#c4973a",
                      fontSize: "0.7rem",
                      letterSpacing: "0.1em",
                      fontFamily: "'Noto Serif SC',serif",
                      marginBottom: "0.3rem",
                    }}>{item.period}</div>
                  </div>
                </div>
                <div style={{
                  height: "1px",
                  background: "rgba(196,151,58,0.15)",
                  marginBottom: "1.25rem",
                }} />
                <p style={{
                  fontFamily: "'Noto Serif SC',serif",
                  fontSize: "0.875rem",
                  color: "rgba(28,28,28,0.65)",
                  lineHeight: 2.1,
                }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 数字典藏项目 ── */}
      <section style={{
        padding: "7rem 2rem",
        background: "linear-gradient(160deg, #0e0c09 0%, #1c1510 100%)",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
            <div>
              <div style={{
                fontFamily: "'EB Garamond',serif",
                fontSize: "0.8rem",
                color: "#c4973a",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}>Digital Archive · Phase One</div>
              <h2 style={{
                fontFamily: "'Noto Serif SC',serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 500,
                letterSpacing: "0.12em",
                color: "#f4efe3",
                lineHeight: 1.5,
                marginBottom: "0.75rem",
              }}>数字典藏<br />首期一万片</h2>
              <div style={{ width: "60px", height: "1px", background: "#c4973a", marginBottom: "2rem" }} />
              <div style={{
                fontFamily: "'Noto Serif SC',serif",
                fontSize: "0.95rem",
                color: "rgba(244,239,227,0.6)",
                lineHeight: 2.4,
              }}>
                <p style={{ marginBottom: "1.5rem" }}>
                  联合北京大学数字人文研究中心，坦博艺苑正在推进中国规模最大的
                  贝叶经数字化工程。首期目标：完成一万片贝叶经的高精度影像建档，
                  向全球学术界开放访问。
                </p>
                <p style={{ marginBottom: "1.5rem" }}>
                  数字化工程采用严苛的技术标准：「一次性开启、一次性完成全量扫描」，
                  以最大限度保护脆弱的贝叶原件。每片贝叶的数字档案将包含：
                  高精度影像、语种标注、年代信息、来源地域等完整元数据。
                </p>
                <p>
                  数字典藏建成后，研究者可以在不接触实物的前提下，
                  对贝叶经原典进行文字识别、语言研究、历史考证等学术工作，
                  打通贝叶经与全球学术界之间最后的物理隔阂。
                </p>
              </div>
              <div style={{ marginTop: "2.5rem" }}>
                <Link href="/news#digitization" style={{
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
                }}>了解数字化工程详情 →</Link>
              </div>
            </div>

            {/* Right: progress visualization */}
            <div>
              <div style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(196,151,58,0.2)",
                padding: "2.5rem",
              }}>
                <div style={{
                  fontFamily: "'EB Garamond',serif",
                  fontSize: "0.7rem",
                  color: "rgba(196,151,58,0.6)",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "2rem",
                }}>Phase One Target</div>

                {/* Big number */}
                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                  <div style={{
                    fontFamily: "'EB Garamond',serif",
                    fontSize: "5rem",
                    color: "#c4973a",
                    lineHeight: 1,
                  }}>10,000</div>
                  <div style={{
                    fontFamily: "'Noto Serif SC',serif",
                    fontSize: "0.9rem",
                    color: "rgba(244,239,227,0.5)",
                    letterSpacing: "0.15em",
                    marginTop: "0.5rem",
                  }}>片 · 首期数字建档目标</div>
                </div>

                <div style={{ height: "1px", background: "rgba(196,151,58,0.2)", marginBottom: "2rem" }} />

                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {[
                    { label: "技术标准", value: "一次性开启 · 全量扫描" },
                    { label: "合作机构", value: "北京大学数字人文研究中心" },
                    { label: "数据格式", value: "高精度影像 + 完整元数据" },
                    { label: "开放范围", value: "全球学术界开放访问" },
                    { label: "项目进度", value: "推进中（2025 — ）" },
                  ].map(f => (
                    <div key={f.label} style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "0.75rem 0",
                      borderBottom: "1px solid rgba(196,151,58,0.1)",
                    }}>
                      <span style={{ fontFamily: "'EB Garamond',serif", fontSize: "0.72rem", color: "rgba(196,151,58,0.6)", letterSpacing: "0.15em" }}>{f.label}</span>
                      <span style={{ fontFamily: "'Noto Serif SC',serif", fontSize: "0.82rem", color: "rgba(244,239,227,0.6)" }}>{f.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 贝叶经制作工艺 ── */}
      <section style={{ padding: "7rem 2rem", background: "#f4efe3" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{ fontFamily: "'EB Garamond',serif", fontSize: "0.8rem", color: "#c4973a", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "1rem" }}>Craft & Preservation</div>
            <h2 style={{ fontFamily: "'Noto Serif SC',serif", fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 500, letterSpacing: "0.15em", color: "#1c1c1c", marginBottom: "1rem" }}>千年不腐的制作工艺</h2>
            <p style={{ fontFamily: "'Noto Serif SC',serif", fontSize: "0.95rem", color: "rgba(28,28,28,0.55)", lineHeight: 2, maxWidth: "520px", margin: "0 auto" }}>
              贝叶经的制作需经六道工序，成品防虫、防水、防变形，经年不腐，堪称古代文明的保存奇迹。
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }}>
            {[
              { step: "01", title: "采叶", desc: "取贝多罗树（棕榈科）宽大叶片，砍下后修割整齐，选取纹理均匀、厚薄一致者备用。" },
              { step: "02", title: "煮制", desc: "与酸角或柠檬同煮，至表皮脱落，叶片呈淡绿白色，质地柔韧，去除杂质与虫卵。" },
              { step: "03", title: "晒干", desc: "细沙搓洗，反复压平，在阴凉通风处自然晾晒，直至叶片平整光滑、不易卷曲。" },
              { step: "04", title: "装订", desc: "在叶片两端精准钻孔，以丝线或绳索串联成册，通常每册数十至数百片不等。" },
              { step: "05", title: "刻写", desc: "以铁制铁簪在叶片两面刻写经文，字迹细密工整，每行约二三十字，笔法因语种而异。" },
              { step: "06", title: "涂油", desc: "涂抹植物果油与碳粉混合物，碳粉渗入刻槽显字，果油封护叶面，形成天然防护层。" },
            ].map((item) => (
              <div key={item.step} style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(196,151,58,0.15)", padding: "2rem" }}>
                <div style={{ fontFamily: "'EB Garamond',serif", fontSize: "2.5rem", color: "rgba(196,151,58,0.2)", lineHeight: 1, marginBottom: "1rem" }}>{item.step}</div>
                <h3 style={{ fontFamily: "'Noto Serif SC',serif", fontSize: "1.1rem", fontWeight: 500, color: "#1c1c1c", letterSpacing: "0.15em", marginBottom: "0.75rem" }}>{item.title}</h3>
                <div style={{ height: "1px", background: "rgba(196,151,58,0.2)", marginBottom: "0.75rem" }} />
                <p style={{ fontFamily: "'Noto Serif SC',serif", fontSize: "0.85rem", color: "rgba(28,28,28,0.6)", lineHeight: 2 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 特色藏品：宋代舌血彩绘贝叶经 ── */}
      <section style={{ padding: "6rem 2rem", background: "#2a1f13" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
            <div>
              <div style={{ fontFamily: "'EB Garamond',serif", fontSize: "0.75rem", color: "rgba(196,151,58,0.6)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "1.5rem" }}>Featured · Song Dynasty</div>
              <h2 style={{ fontFamily: "'Noto Serif SC',serif", fontSize: "clamp(1.4rem,3vw,1.9rem)", fontWeight: 400, letterSpacing: "0.12em", color: "#f4efe3", lineHeight: 1.8, marginBottom: "2rem" }}>
                宋代<br />舌血彩绘贝叶经
              </h2>
              <div style={{ height: "1px", background: "linear-gradient(90deg,#c4973a,transparent)", marginBottom: "2rem" }} />
              <p style={{ fontFamily: "'Noto Serif SC',serif", fontSize: "0.92rem", color: "rgba(244,239,227,0.65)", lineHeight: 2.3, marginBottom: "1.5rem" }}>
                高僧以虔诚之心，刺破舌尖，以鲜血混合珍珠、玛瑙、朱砂，在贝叶上书写经文。
                血书经典，是佛教传统中最高级别的礼仪，象征以生命供养佛法。
              </p>
              <p style={{ fontFamily: "'Noto Serif SC',serif", fontSize: "0.92rem", color: "rgba(244,239,227,0.65)", lineHeight: 2.3 }}>
                此件宋代孤本距今逾千年，历经朝代更迭而完整留存，
                是坦博艺苑最具代表性的镇馆之宝，见证人类信仰文明的极致表达。
              </p>
            </div>
            <div style={{ border: "1px solid rgba(196,151,58,0.25)", padding: "3rem", textAlign: "center" }}>
              <div style={{ fontFamily: "'Noto Serif SC',serif", fontSize: "4rem", color: "rgba(196,151,58,0.15)", lineHeight: 1, marginBottom: "2rem" }}>經</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  ["年代", "宋代（公元960—1279年）"],
                  ["材质", "贝叶 · 舌血 · 珍珠 · 朱砂"],
                  ["性质", "孤本 · 镇馆之宝"],
                  ["意义", "佛教至高礼仪的实物见证"],
                ].map(([k,v]) => (
                  <div key={k} style={{ display: "flex", justifyContent: "space-between", paddingBottom: "0.75rem", borderBottom: "1px solid rgba(196,151,58,0.1)" }}>
                    <span style={{ fontFamily: "'EB Garamond',serif", fontSize: "0.72rem", color: "rgba(196,151,58,0.5)", letterSpacing: "0.15em" }}>{k}</span>
                    <span style={{ fontFamily: "'Noto Serif SC',serif", fontSize: "0.82rem", color: "rgba(244,239,227,0.55)" }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 国家一级文物说明 ── */}
      <section style={{ padding: "5rem 2rem", background: "#ede5d0" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}>
            <div style={{ width: "40px", height: "1px", background: "#c4973a" }} />
            <span style={{ fontFamily: "'Noto Serif SC',serif", fontSize: "0.8rem", color: "#9a6535", letterSpacing: "0.2em" }}>国家一级文物</span>
            <div style={{ width: "40px", height: "1px", background: "#c4973a" }} />
          </div>
          <blockquote style={{
            fontFamily: "'Noto Serif SC',serif",
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            color: "rgba(28,28,28,0.75)",
            lineHeight: 2.4,
            fontStyle: "normal",
            letterSpacing: "0.05em",
          }}>
            贝叶经具有集中性、唯一性、不可再生性，是珍贵文物中的珍贵文物。
            中国政府已将贝叶经列为国家一级文物，每一片贝叶的保护，
            都是对人类共同文明记忆的守护。
          </blockquote>
          <div style={{
            width: "1px", height: "50px",
            background: "linear-gradient(180deg, rgba(196,151,58,0.4), transparent)",
            margin: "2.5rem auto 0",
          }} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem 2rem", background: "#f4efe3", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "'Noto Serif SC',serif",
            fontSize: "1.5rem",
            fontWeight: 400,
            letterSpacing: "0.15em",
            color: "#1c1c1c",
            marginBottom: "1.5rem",
          }}>了解更多</h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/about" style={{
              display: "inline-flex",
              padding: "0.85rem 2.25rem",
              background: "#c4973a",
              color: "#fff",
              fontFamily: "'Noto Serif SC',serif",
              fontSize: "0.875rem",
              letterSpacing: "0.15em",
              textDecoration: "none",
            }}>贝叶经故事</Link>
            <Link href="/news" style={{
              display: "inline-flex",
              padding: "0.85rem 2.25rem",
              background: "transparent",
              color: "#1c1c1c",
              fontFamily: "'Noto Serif SC',serif",
              fontSize: "0.875rem",
              letterSpacing: "0.15em",
              textDecoration: "none",
              border: "1px solid rgba(28,28,28,0.25)",
            }}>交流动态</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
