"use client";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      {/* Page Hero */}
      <section style={{
        padding: "10rem 2rem 6rem",
        background: "linear-gradient(160deg, #0e0c09 0%, #1c1510 100%)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          fontFamily: "'Noto Serif SC',serif",
          fontSize: "20rem",
          color: "rgba(196,151,58,0.03)",
          right: "-2rem",
          top: "50%",
          transform: "translateY(-50%)",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
        }}>经</div>
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{
            fontFamily: "'EB Garamond',serif",
            fontSize: "0.8rem",
            color: "#c4973a",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}>About Palm Leaf Sutras · About Tanbo Arts</div>
          <h1 style={{
            fontFamily: "'Noto Serif SC',serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 400,
            letterSpacing: "0.15em",
            color: "#f4efe3",
            marginBottom: "1.5rem",
          }}>贝叶经与坦博</h1>
          <p style={{
            fontFamily: "'Noto Serif SC',serif",
            fontSize: "1rem",
            color: "rgba(244,239,227,0.5)",
            maxWidth: "560px",
            lineHeight: 2.2,
          }}>
            三千年前刻在树叶上的文明，如何在今天得到守护与传承。
          </p>
        </div>
      </section>

      {/* ── 贝叶经起源 ── */}
      <section style={{ padding: "7rem 2rem", background: "#f4efe3", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute",
          fontFamily: "'EB Garamond',serif",
          fontSize: "16rem",
          color: "rgba(196,151,58,0.04)",
          right: "0",
          bottom: "0",
          lineHeight: 1,
          pointerEvents: "none",
        }}>Origin</div>

        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ maxWidth: "760px" }}>
            <div style={{
              fontFamily: "'EB Garamond',serif",
              fontSize: "0.8rem",
              color: "#c4973a",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}>The Story of Palm Leaf Sutras</div>
            <h2 style={{
              fontFamily: "'Noto Serif SC',serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 500,
              letterSpacing: "0.12em",
              color: "#1c1c1c",
              lineHeight: 1.5,
              marginBottom: "0.75rem",
            }}>旷世圣典<br />贝叶经的完整故事</h2>
            <div style={{ width: "60px", height: "1px", background: "#c4973a", marginBottom: "3rem" }} />

            <div style={{
              fontFamily: "'Noto Serif SC',serif",
              fontSize: "1rem",
              color: "rgba(28,28,28,0.75)",
              lineHeight: 2.6,
            }}>
              <h3 style={{
                fontFamily: "'Noto Serif SC',serif",
                fontSize: "1.15rem",
                color: "#1c1c1c",
                letterSpacing: "0.1em",
                marginBottom: "1rem",
                marginTop: "2rem",
                paddingLeft: "1rem",
                borderLeft: "3px solid #c4973a",
              }}>起源与材质</h3>
              <p style={{ marginBottom: "1.5rem" }}>
                贝叶经（Pāli: Tipitaka on Palm Leaves）是以古印度贝多罗树（Corypha umbraculifera）
                的树叶为材料，以铁笔（Iron Stylus）刻写佛教经文，再注入朱砂或树汁加以固色而成的古代典籍。
                贝多罗树叶经过特殊处理——蒸煮、晒干、打磨——使其具备极强的耐久性，经千年而不腐。
              </p>
              <p style={{ marginBottom: "1.5rem" }}>
                两片木夹（通常经过精细雕刻）护持一束贝叶，以彩绳或丝带穿孔固定，
                形成一部完整的「经册」。这一形制在南亚及东南亚流传数千年，是人类最古老的书籍形式之一。
              </p>

              <h3 style={{
                fontFamily: "'Noto Serif SC',serif",
                fontSize: "1.15rem",
                color: "#1c1c1c",
                letterSpacing: "0.1em",
                marginBottom: "1rem",
                marginTop: "2rem",
                paddingLeft: "1rem",
                borderLeft: "3px solid #c4973a",
              }}>五次结集：口耳相传到文字固化</h3>
              <p style={{ marginBottom: "1.5rem" }}>
                公元前544年，释迦牟尼灭度。此后，弟子先后进行了五次结集（Council），
                将散乱于各地的口传教法加以整理汇编：
              </p>

              <div style={{ marginBottom: "2rem", paddingLeft: "1rem" }}>
                {[
                  { num: "第一次", place: "王舍城", detail: "灭度后三月，500比丘共诵，确立经律两藏" },
                  { num: "第二次", place: "毗舍离", detail: "灭度百年后，700比丘，解决戒律争议" },
                  { num: "第三次", place: "华氏城（阿育王时期）", detail: "确立巴利文三藏经典之基本形态" },
                  { num: "第四次", place: "斯里兰卡狮子岩寺", detail: "公元前29年，首次将口传经典以巴利语书写于贝叶之上" },
                  { num: "第五次", place: "缅甸曼德勒", detail: "1871年，阿努律陀王主持，将三藏全文刻于729块大理石碑" },
                ].map(c => (
                  <div key={c.num} style={{
                    display: "flex",
                    gap: "1rem",
                    marginBottom: "0.75rem",
                    padding: "0.75rem",
                    background: "rgba(196,151,58,0.04)",
                  }}>
                    <span style={{ color: "#c4973a", fontFamily: "'Noto Serif SC',serif", fontSize: "0.82rem", minWidth: "80px" }}>{c.num}</span>
                    <div>
                      <span style={{ color: "#1c1c1c", fontFamily: "'Noto Serif SC',serif", fontSize: "0.88rem" }}>{c.place}：</span>
                      <span style={{ color: "rgba(28,28,28,0.65)", fontFamily: "'Noto Serif SC',serif", fontSize: "0.82rem" }}>{c.detail}</span>
                    </div>
                  </div>
                ))}
              </div>

              <h3 style={{
                fontFamily: "'Noto Serif SC',serif",
                fontSize: "1.15rem",
                color: "#1c1c1c",
                letterSpacing: "0.1em",
                marginBottom: "1rem",
                marginTop: "2rem",
                paddingLeft: "1rem",
                borderLeft: "3px solid #c4973a",
              }}>传入中国：玄奘与大雁塔</h3>
              <p style={{ marginBottom: "1.5rem" }}>
                唐代贞观年间，玄奘法师历时17年西行印度取经，于公元637年归来，
                共带回梵文经典657卷，其中包含大量贝叶经原典，供奉于长安大慈恩寺（今大雁塔）。
                玄奘主持译场，将这批典籍译为汉文，奠定了中国佛教汉译经典的重要基础。
              </p>
              <p style={{ marginBottom: "1.5rem" }}>
                然而，历经千余年的战火、浩劫与流散，大雁塔所存贝叶经如今已所剩寥寥数片。
                萨迦寺的贝叶经在文化大革命中几乎散尽，仅剩21部幸存。
                敦煌藏经洞的贝叶经中，有2000余片在20世纪初被外国探险家盗走，
                分散至大英博物馆等各地。
              </p>
              <p style={{ marginBottom: "1.5rem" }}>
                正因如此稀缺、不可再生，今日世界各地的贝叶经，均被学界视为极度珍贵的历史遗存。
                中国政府已将贝叶经列为国家一级文物，联合国教科文组织亦多次发文呼吁各国加强对贝叶经的保护。
              </p>

              <h3 style={{
                fontFamily: "'Noto Serif SC',serif",
                fontSize: "1.15rem",
                color: "#1c1c1c",
                letterSpacing: "0.1em",
                marginBottom: "1rem",
                marginTop: "2rem",
                paddingLeft: "1rem",
                borderLeft: "3px solid #c4973a",
              }}>巴利语：贝叶经的主要语言</h3>
              <p style={{ marginBottom: "1.5rem" }}>
                巴利语（Pāli）是南传上座部佛教的经典语言，被认为是最接近释迦牟尼所讲方言的古代语言。
                三藏经典（律藏 Vinaya、经藏 Sutta、论藏 Abhidhamma）以巴利语书写，
                是研究原始佛教思想最直接的文献来源。
              </p>
              <p>
                除巴利语外，贝叶经亦以梵语（Sanskrit）、藏语（Tibetan）、缅语（Burmese）、
                僧伽罗语（Sinhala）等多种语言书写，记录着佛教在不同文化圈中传播与演变的完整历史。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 坦博艺苑 ── */}
      <section style={{ padding: "7rem 2rem", background: "linear-gradient(160deg, #0e0c09 0%, #1c1510 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute",
          fontFamily: "'Noto Serif SC',serif",
          fontSize: "18rem",
          color: "rgba(196,151,58,0.025)",
          left: "-2rem",
          top: "50%",
          transform: "translateY(-50%)",
          lineHeight: 1,
          pointerEvents: "none",
        }}>坦博</div>

        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem" }}>
            <div>
              <div style={{
                fontFamily: "'EB Garamond',serif",
                fontSize: "0.8rem",
                color: "#c4973a",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}>About Tanbo Arts</div>
              <h2 style={{
                fontFamily: "'Noto Serif SC',serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 500,
                letterSpacing: "0.12em",
                color: "#f4efe3",
                lineHeight: 1.5,
                marginBottom: "0.75rem",
              }}>坦博艺苑</h2>
              <div style={{ width: "60px", height: "1px", background: "#c4973a", marginBottom: "2rem" }} />

              <div style={{
                fontFamily: "'Noto Serif SC',serif",
                fontSize: "0.95rem",
                color: "rgba(244,239,227,0.65)",
                lineHeight: 2.4,
              }}>
                <p style={{ marginBottom: "1.5rem" }}>
                  坦博艺苑，由收藏家、国际策展人白十源先生创立。国学泰斗王世襄先生亲题联语
                  「坦荡真君子，博渊乃学人」，赋予「坦博」之名以人格内涵。
                </p>
                <p style={{ marginBottom: "1.5rem" }}>
                  坦博艺苑以其拥有超过150万页的古巴利文、梵文、藏文贝叶经和佛学珍品饮誉中外，
                  完整经册657部，涵盖唐宋元明清各历史时期，横跨印度、尼泊尔、巴基斯坦、
                  阿富汗、斯里兰卡等十余国来源地域，是目前国内规模最大的贝叶经私人收藏之一。
                </p>
                <p style={{ marginBottom: "1.5rem" }}>
                  坦博艺苑将收藏定位为文化守护而非商业资产。多年来持续向国内寺院、国家级文化机构
                  捐赠贝叶经，并积极开展国际文化交流，以贝叶经为载体架设东西方文明对话的桥梁。
                </p>
                <p style={{ marginBottom: "1.5rem" }}>
                  坦博艺苑主体建筑为从安徽原址整体迁建的明代万历年间徽州古祠堂，距今近500年，
                  是中国现存最完整的明代民间建筑群之一。西郊馆（北京海淀区）展览面积2,600平方米；
                  南郊馆兴善苑（北京大兴区，毗邻大兴国际机场）建成展览面积达35,000平方米，
                  设12个艺术主题展馆，是北京南中轴延长线上重要的新国门文化地标。
                </p>
                <p style={{ color: "rgba(196,151,58,0.85)", fontStyle: "normal" }}>
                  坦博艺苑的长远愿景：建立「中国贝叶经博物馆」与「世界贝叶经研究中心」，
                  为全球学者提供实物典藏与学术研究支撑，让千年圣典在当代重焕生命。
                </p>
              </div>
            </div>

            <div>
              {/* 白十源简介 */}
              <div style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(196,151,58,0.2)",
                padding: "2.5rem",
                marginBottom: "1.5rem",
              }}>
                <div style={{
                  fontFamily: "'EB Garamond',serif",
                  fontSize: "0.7rem",
                  color: "rgba(196,151,58,0.6)",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "1.5rem",
                }}>Founder · Bai Shiyuan</div>
                <h3 style={{
                  fontFamily: "'Noto Serif SC',serif",
                  fontSize: "1.5rem",
                  color: "#f4efe3",
                  letterSpacing: "0.15em",
                  marginBottom: "0.5rem",
                  fontWeight: 400,
                }}>白十源</h3>
                <div style={{
                  fontFamily: "'EB Garamond',serif",
                  fontSize: "0.8rem",
                  color: "rgba(196,151,58,0.7)",
                  letterSpacing: "0.15em",
                  marginBottom: "1.5rem",
                }}>收藏家 · 慈善家 · 国际策展人</div>

                <div style={{
                  height: "1px",
                  background: "rgba(196,151,58,0.2)",
                  marginBottom: "1.5rem",
                }} />

                <div style={{
                  fontFamily: "'Noto Serif SC',serif",
                  fontSize: "0.85rem",
                  color: "rgba(244,239,227,0.55)",
                  lineHeight: 2.2,
                }}>
                  男，回族，1962年生于北京，管理学硕士。在国学泰斗王世襄先生指导下，
                  自1980年起从事收藏，1983年初次接触贝叶经，此后三十年沿玄奘西行与
                  东归路线，遍访新疆、西藏、尼泊尔、巴基斯坦、阿富汗、斯里兰卡、缅甸等地，
                  将流散在外的稀世典籍系统性收回，被学界称为「传统文化的守望者」。
                </div>

                <div style={{ marginTop: "1.5rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {[
                    "中国社会艺术协会副主席",
                    "中国文化艺术发展促进会总顾问",
                    "北京市宗教文化研究会副会长",
                  ].map(t => (
                    <div key={t} style={{
                      padding: "0.2rem 0.75rem",
                      border: "1px solid rgba(196,151,58,0.3)",
                      color: "rgba(196,151,58,0.7)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.08em",
                      fontFamily: "'Noto Serif SC',serif",
                    }}>{t}</div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div style={{
                background: "rgba(196,151,58,0.08)",
                border: "1px solid rgba(196,151,58,0.25)",
                padding: "2rem",
                textAlign: "center",
              }}>
                <div style={{
                  fontFamily: "'Noto Serif SC',serif",
                  fontSize: "1.4rem",
                  color: "#c4973a",
                  letterSpacing: "0.3em",
                  lineHeight: 1.9,
                  marginBottom: "1rem",
                }}>坦荡真君子<br />博渊乃学人</div>
                <div style={{
                  fontFamily: "'EB Garamond',serif",
                  fontSize: "0.75rem",
                  color: "rgba(196,151,58,0.5)",
                  letterSpacing: "0.2em",
                }}>国学泰斗 王世襄 题联</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 兰州大学合作 ── */}
      <section style={{ padding: "7rem 2rem", background: "#ede5d0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{
              fontFamily: "'EB Garamond',serif",
              fontSize: "0.8rem",
              color: "#c4973a",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}>Academic Cooperation</div>
            <h2 style={{
              fontFamily: "'Noto Serif SC',serif",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 500,
              letterSpacing: "0.15em",
              color: "#1c1c1c",
            }}>学术合作</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            {[
              {
                institution: "兰州大学贝叶经研究中心",
                year: "2017 — 至今",
                desc: "2017年共建，2019年正式挂牌。国内首个以贝叶经为专门研究对象的学术机构。坦博艺苑提供实物典藏，兰州大学提供学术研究平台与专家团队。",
                status: "稳定合作中",
              },
              {
                institution: "北京大学数字人文研究中心",
                year: "2025 — 推进中",
                desc: "2025年12月启动合作洽谈，联合北大信息管理系、人工智能研究院、外国语学院东语系，推动贝叶经数字化识别、鉴定与抢救性保护工程。",
                status: "合作推进中",
              },
            ].map(c => (
              <div key={c.institution} style={{
                background: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(196,151,58,0.2)",
                padding: "2.5rem",
                transition: "all 0.3s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 50px rgba(196,151,58,0.1)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
              >
                <div style={{
                  display: "inline-block",
                  padding: "0.2rem 0.75rem",
                  background: "rgba(196,151,58,0.1)",
                  color: "#c4973a",
                  fontSize: "0.65rem",
                  letterSpacing: "0.12em",
                  fontFamily: "'Noto Serif SC',serif",
                  marginBottom: "1rem",
                }}>{c.status}</div>
                <h3 style={{
                  fontFamily: "'Noto Serif SC',serif",
                  fontSize: "1.15rem",
                  color: "#1c1c1c",
                  letterSpacing: "0.08em",
                  marginBottom: "0.35rem",
                  fontWeight: 500,
                }}>{c.institution}</h3>
                <div style={{
                  fontFamily: "'EB Garamond',serif",
                  fontSize: "0.78rem",
                  color: "#9a6535",
                  letterSpacing: "0.12em",
                  marginBottom: "1.25rem",
                }}>{c.year}</div>
                <p style={{
                  fontFamily: "'Noto Serif SC',serif",
                  fontSize: "0.875rem",
                  color: "rgba(28,28,28,0.65)",
                  lineHeight: 2.1,
                }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "5rem 2rem", background: "#f4efe3", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(196,151,58,0.4), transparent)",
            marginBottom: "3rem",
          }} />
          <h2 style={{
            fontFamily: "'Noto Serif SC',serif",
            fontSize: "1.5rem",
            fontWeight: 400,
            letterSpacing: "0.15em",
            color: "#1c1c1c",
            marginBottom: "1.5rem",
          }}>探索完整典藏</h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/collection" style={{
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
            }}>查看典藏</Link>
            <Link href="/news" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
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
