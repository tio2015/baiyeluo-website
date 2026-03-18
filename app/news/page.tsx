"use client";
import Image from "next/image";
import Link from "next/link";

const donationHistory = [
  { year: "接洽中", date: "进行中", place: "北京大学 · 清华大学", desc: "与北京大学及清华大学开展学术交流合作，具体事项接洽中。", tag: "学术合作", pending: true },
  { year: "2024", date: "2024年12月15日", place: "重庆梁平双桂堂", desc: "向重庆梁平双桂堂迎请蒲甘王朝《吉祥经》贝叶经入藏，为这座千年禅林增添旷世文献珍藏。", tag: "捐赠典藏", link: "http://bjtime.china.com.cn/2024-12/14/content_42988324.html" },
  { year: "2024", date: "2024年5月31日", place: "中国国家版本总馆（第二次）", desc: "向国家版本总馆第二次捐赠贝叶经及桦树皮文献。中央书记处书记、中宣部部长出席大会并讲话，中宣部分管日常工作的副部长向捐赠代表颁发入藏证书。", tag: "国家级典藏" },
  { year: "2023", date: "2023年7月31日", place: "中国国家版本总馆（第一次）", desc: "首次向中国国家版本总馆捐赠贝叶经及桦树皮文献，使国家版本馆的馆藏序列趋于完善，入藏证书编号 2023-FZ0011。", tag: "国家级典藏" },
  { year: "2023", date: "2023年3月6日", place: "陕西宁山寺", desc: "向陕西宁山寺捐赠佛舍利及贝叶经入藏，并对彩虹桥学生进行慈善助学。", tag: "捐赠典藏" },
  { year: "2021", date: "2021年4月8日", place: "河北保定大佛光寺", desc: "向保定大佛光寺迎请佛祖舍利，助力寺院法脉传承。", tag: "捐赠典藏" },
  { year: "2020", date: "2020年10月14日", place: "台湾十方禅林", desc: "向台湾十方禅林捐赠贝叶经入藏，推动两岸佛教文化交流。", tag: "捐赠交流" },
  { year: "2020", date: "2020年10月1日", place: "河北定兴大佛光寺", desc: "向河北定兴大佛光寺捐赠贝叶经，助力寺院文化典藏建设。", tag: "捐赠典藏" },
  { year: "2019", date: "2019年11月24日", place: "澳中佛教总会（澳大利亚）", desc: "向澳中佛教总会捐赠佛舍利及贝叶经，开展国际佛教文化交流，将中国贝叶经典藏带向海外。", tag: "国际交流" },
  { year: "2019", date: "2019年11月14日", place: "兰州大学贝叶经研究中心", desc: "与兰州大学敦煌学研究所共建贝叶经研究中心正式挂牌，成为国内首个以贝叶经为专门研究对象的学术机构，兰大敦煌学所所长郑炳林出席。", tag: "学术合作" },
  { year: "2019", date: "2019年5月12日", place: "西安大慈恩寺（大雁塔）", desc: "向大慈恩寺捐赠佛骨舍利、贝叶经及四龙护佛十二环金锡杖。大雁塔正是当年玄奘法师取经归来译经之所，此次捐赠意义深远。", tag: "捐赠典藏" },
  { year: "2018", date: "2018年11月18日", place: "洛阳师范学院大运河研究院", desc: "向河南洛阳师范学院大运河研究院捐赠大运河纪实影像文献，支持大运河文化遗产研究。", tag: "文化交流" },
  { year: "2018", date: "2018年8月11日", place: "陕西镇安兴隆寺", desc: "向陕西镇安兴隆寺迎请佛舍利，加强地方佛教文化传承。", tag: "捐赠交流" },
  { year: "2018", date: "2018年1月24日", place: "新加坡居士林", desc: "向新加坡居士林捐赠佛舍利，开展新加坡佛教界国际文化交流。", tag: "国际交流" },
  { year: "2014", date: "2014年8月3日", place: "北京房山云居寺", desc: "向云居寺捐赠宋代贝叶经入藏。云居寺是中国最重要的石经保存地之一，此次入藏为国内贝叶经保护事业奠定重要基础。", tag: "捐赠典藏" },
];

export default function NewsPage() {
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
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: "radial-gradient(ellipse at 30% 60%, rgba(196,151,58,0.06) 0%, transparent 60%)",
        }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{
            fontFamily: "'EB Garamond',serif",
            fontSize: "0.8rem",
            color: "#c4973a",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}>Cultural Exchange · Donations · Events</div>
          <h1 style={{
            fontFamily: "'Noto Serif SC',serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 400,
            letterSpacing: "0.15em",
            color: "#f4efe3",
            marginBottom: "1.5rem",
          }}>交流动态</h1>
          <p style={{
            fontFamily: "'Noto Serif SC',serif",
            fontSize: "1rem",
            color: "rgba(244,239,227,0.5)",
            maxWidth: "560px",
            lineHeight: 2.2,
          }}>
            从国内寺院到国家版本总馆，从丝路展览到梵蒂冈，贝叶经以实物为媒介，
            连接着不同时代、不同文明之间的对话。
          </p>
        </div>
      </section>

      {/* ── 梵蒂冈 ── */}
      <section id="vatican" style={{
        padding: "7rem 2rem",
        background: "#f4efe3",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, right: 0,
          fontFamily: "'EB Garamond',serif",
          fontSize: "14rem",
          color: "rgba(196,151,58,0.04)",
          lineHeight: 1,
          pointerEvents: "none",
        }}>Vatican</div>

        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "0.3rem 1rem",
            border: "1px solid rgba(196,151,58,0.5)",
            color: "#c4973a",
            fontFamily: "'Noto Serif SC',serif",
            fontSize: "0.75rem",
            letterSpacing: "0.12em",
            marginBottom: "2rem",
          }}>国际交流 · 东西文明对话</div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
            <div>
              <h2 style={{
                fontFamily: "'Noto Serif SC',serif",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontWeight: 500,
                letterSpacing: "0.1em",
                color: "#1c1c1c",
                lineHeight: 1.6,
                marginBottom: "0.75rem",
              }}>坦博艺苑向教皇方济各<br />敬赠贝叶经</h2>
              <div style={{ width: "60px", height: "1px", background: "#c4973a", marginBottom: "2rem" }} />

              <div style={{
                fontFamily: "'Noto Serif SC',serif",
                fontSize: "0.95rem",
                color: "rgba(28,28,28,0.7)",
                lineHeight: 2.4,
              }}>
                <p style={{ marginBottom: "1.5rem" }}>
                  坦博艺苑代表赴梵蒂冈，将一部珍贵的中国古代贝叶经敬呈教皇方济各（Pope Francis）。
                  这是一次跨越宗教、跨越文明的历史性会面。
                </p>
                <p style={{ marginBottom: "1.5rem" }}>
                  贝叶经起源于古印度，承载着人类最早的书写文明之一。
                  将其敬赠给世界最具影响力的宗教领袖之一，其象征意义远超文物本身——
                  它是东方古老文明向西方的一次主动叙述，是中国文化走向世界的一个实物坐标。
                </p>
                <p>
                  梵蒂冈的这次文化交流，与坦博艺苑持续推动的贝叶经国际传播使命一脉相承：
                  以贝叶经为载体，让人类最早的精神文明遗产，
                  重新进入当代世界文明对话的视野。
                </p>
              </div>

              {/* Key facts */}
              <div style={{ marginTop: "2.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {[
                  { label: "交流地点", value: "梵蒂冈" },
                  { label: "交流对象", value: "教皇方济各" },
                  { label: "交流媒介", value: "古代贝叶经" },
                  { label: "意义", value: "东西文明对话" },
                ].map(f => (
                  <div key={f.label} style={{
                    padding: "1rem",
                    background: "rgba(196,151,58,0.06)",
                    border: "1px solid rgba(196,151,58,0.2)",
                  }}>
                    <div style={{ fontFamily: "'EB Garamond',serif", fontSize: "0.65rem", color: "#9a6535", letterSpacing: "0.15em", marginBottom: "0.3rem" }}>{f.label}</div>
                    <div style={{ fontFamily: "'Noto Serif SC',serif", fontSize: "0.9rem", color: "#1c1c1c" }}>{f.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Real Vatican photos */}
            <div>
              {/* Main hero image */}
              <div style={{
                border: "1px solid rgba(196,151,58,0.25)",
                overflow: "hidden",
                marginBottom: "1rem",
                position: "relative",
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/vatican/pope-presenting-color.jpg"
                  alt="白十源向教皇方济各敬赠贝叶经"
                  style={{ width: "100%", display: "block", objectFit: "cover" }}
                />
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(transparent, rgba(14,12,9,0.85))",
                  padding: "2rem 1rem 0.75rem",
                  fontFamily: "'Noto Serif SC',serif",
                  fontSize: "0.78rem",
                  color: "rgba(244,239,227,0.85)",
                  letterSpacing: "0.08em",
                }}>白十源向教皇方济各敬赠贝叶经 · 梵蒂冈</div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                {[
                  { src: "/images/vatican/pope-presenting-bw.jpg", alt: "敬赠现场（黑白）" },
                  { src: "/images/vatican/sistine.jpg", alt: "西斯廷礼拜堂" },
                  { src: "/images/vatican/crowd-phones.jpg", alt: "圣彼得广场现场" },
                  { src: "/images/vatican/pope-presenting-color.jpg", alt: "教皇接受贝叶经" },
                ].map((img) => (
                  <div key={img.src + img.alt} style={{
                    border: "1px solid rgba(196,151,58,0.15)",
                    overflow: "hidden",
                    aspectRatio: "4/3",
                  }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.alt}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 国家版本馆 ── */}
      <section id="national-library" style={{
        padding: "7rem 2rem",
        background: "#ede5d0",
        position: "relative",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "0.3rem 1rem",
            border: "1px solid rgba(196,151,58,0.5)",
            color: "#c4973a",
            fontFamily: "'Noto Serif SC',serif",
            fontSize: "0.75rem",
            letterSpacing: "0.12em",
            marginBottom: "2rem",
          }}>国家级典藏 · 国家版本总馆</div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
            {/* Images */}
            <div>
              <div style={{ marginBottom: "1.5rem", border: "1px solid rgba(196,151,58,0.2)", overflow: "hidden" }}>
                <Image
                  src="/images/events/donation-certificate.jpg"
                  alt="中国国家版本馆捐赠证书"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
              <div style={{ border: "1px solid rgba(196,151,58,0.2)", overflow: "hidden" }}>
                <Image
                  src="/images/events/national-library-donation.png"
                  alt="向国家版本馆捐赠贝叶经"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>

            {/* Text */}
            <div>
              <h2 style={{
                fontFamily: "'Noto Serif SC',serif",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontWeight: 500,
                letterSpacing: "0.1em",
                color: "#1c1c1c",
                lineHeight: 1.6,
                marginBottom: "0.75rem",
              }}>两次捐赠<br />入藏国家版本总馆</h2>
              <div style={{ width: "60px", height: "1px", background: "#c4973a", marginBottom: "2rem" }} />

              <div style={{
                fontFamily: "'Noto Serif SC',serif",
                fontSize: "0.95rem",
                color: "rgba(28,28,28,0.7)",
                lineHeight: 2.4,
              }}>
                <p style={{ marginBottom: "1.5rem" }}>
                  坦博艺苑创始人白十源先生、董事长派驻佳女士分别于2023年7月31日、2024年5月31日，
                  向中国国家版本总馆捐赠贝叶经和桦树皮文献，
                  使国家版本馆的馆藏序列更趋完善。
                </p>
                <p style={{ marginBottom: "1.5rem" }}>
                  贝叶经和桦树皮文献，均属人类早期文明的重要载体，
                  入藏中国国家版本总馆，标志着这批珍贵文献得到国家最高级别的保护与传承。
                </p>
                <p>
                  中共中央政治局委员、中宣部部长李书磊出席第二次捐赠大会并讲话，
                  中宣部副部长胡和平向捐赠代表颁发入藏证书。
                  国家版本馆颁发的捐赠证书编号：2023-FZ0011。
                </p>
              </div>

              {/* Two event boxes */}
              <div style={{ marginTop: "2.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { date: "2023年7月31日", title: "第一次捐赠", desc: "坦博艺苑向国家版本总馆捐赠古代贝叶经（290叶）及桦树皮文献。" },
                  { date: "2024年5月31日", title: "第二次捐赠", desc: "第二次捐赠，中宣部部长出席大会。副部长颁发入藏证书。" },
                ].map(ev => (
                  <div key={ev.date} style={{
                    padding: "1.25rem 1.5rem",
                    background: "rgba(255,255,255,0.6)",
                    border: "1px solid rgba(196,151,58,0.2)",
                    borderLeft: "3px solid #c4973a",
                  }}>
                    <div style={{ fontFamily: "'EB Garamond',serif", fontSize: "0.78rem", color: "#9a6535", letterSpacing: "0.1em", marginBottom: "0.4rem" }}>{ev.date}</div>
                    <div style={{ fontFamily: "'Noto Serif SC',serif", fontSize: "0.95rem", color: "#1c1c1c", fontWeight: 500, marginBottom: "0.4rem" }}>{ev.title}</div>
                    <div style={{ fontFamily: "'Noto Serif SC',serif", fontSize: "0.82rem", color: "rgba(28,28,28,0.6)", lineHeight: 1.8 }}>{ev.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 北大数字化工程 ── */}
      <section id="digitization" style={{
        padding: "7rem 2rem",
        background: "linear-gradient(160deg, #0e0c09 0%, #1c1510 100%)",
        position: "relative",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "0.3rem 1rem",
            border: "1px solid rgba(196,151,58,0.4)",
            color: "#c4973a",
            fontFamily: "'Noto Serif SC',serif",
            fontSize: "0.75rem",
            letterSpacing: "0.12em",
            marginBottom: "2rem",
          }}>学术合作 · 进行中</div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem" }}>
            <div>
              <h2 style={{
                fontFamily: "'Noto Serif SC',serif",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontWeight: 500,
                letterSpacing: "0.1em",
                color: "#f4efe3",
                lineHeight: 1.6,
                marginBottom: "0.75rem",
              }}>贝叶经数字化<br />与研究工程</h2>
              <div style={{ width: "60px", height: "1px", background: "#c4973a", marginBottom: "2rem" }} />
              <div style={{
                fontFamily: "'Noto Serif SC',serif",
                fontSize: "0.95rem",
                color: "rgba(244,239,227,0.6)",
                lineHeight: 2.4,
              }}>
                <p style={{ marginBottom: "1.5rem" }}>
                  2025年12月30日，北京大学数字人文研究中心召开专题会议，
                  联合坦博艺苑与智贝炜叶投资有限公司，启动古贝叶经数字化识别、
                  鉴定与抢救性保护工程的合作商洽。
                </p>
                <p style={{ marginBottom: "1.5rem" }}>
                  参与机构包括北京大学信息管理系、人工智能研究院、外国语学院东语系，
                  核心团队包括北大数字人文研究中心主任王军教授、梵语学者杨浩等。
                  合作目标：建立影像数据库，训练AI模型，向全球开放学术资源。
                </p>
                <p>
                  首期计划完成一万片贝叶经的数字建档。鉴于贝叶经材质极度脆弱，
                  本工程要求达到「一次性开启、一次性完成全量扫描」的技术标准，
                  确保文物在数字化过程中得到最大限度的保护。
                </p>
              </div>
            </div>

            <div>
              {/* Phase cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { phase: "第一阶段", title: "文物鉴定与编目", desc: "碳14检测断代 + 北大东语系专家进行年代、语种、地域及文物价值初步鉴定，划分扫描优先级。" },
                  { phase: "第二阶段", title: "抢救性数字化扫描", desc: "制定严苛技术标准，确保「一次性开启、一次性扫描」，建立完整影像数据库。首期目标：一万片。" },
                  { phase: "第三阶段", title: "国际化传播与众包", desc: "影像上线学术交流平台，向全球开放，吸引泰国、缅甸、印度及西方研究机构参与识别与翻译。" },
                  { phase: "第四阶段", title: "AI模型训练", desc: "用机器学习解决手写体OCR识别，针对巴利语等稀缺语种专项训练AI模型，提高研究效率。" },
                ].map((p, i) => (
                  <div key={i} style={{
                    padding: "1.5rem",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(196,151,58,0.15)",
                    borderLeft: "2px solid rgba(196,151,58,0.6)",
                    display: "flex",
                    gap: "1.25rem",
                  }}>
                    <div style={{
                      minWidth: "32px",
                      width: "32px",
                      height: "32px",
                      border: "1px solid rgba(196,151,58,0.5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'EB Garamond',serif",
                      fontSize: "0.85rem",
                      color: "#c4973a",
                    }}>{i + 1}</div>
                    <div>
                      <div style={{ fontFamily: "'EB Garamond',serif", fontSize: "0.65rem", color: "rgba(196,151,58,0.6)", letterSpacing: "0.15em", marginBottom: "0.3rem" }}>{p.phase}</div>
                      <div style={{ fontFamily: "'Noto Serif SC',serif", fontSize: "0.9rem", color: "#f4efe3", marginBottom: "0.5rem" }}>{p.title}</div>
                      <div style={{ fontFamily: "'Noto Serif SC',serif", fontSize: "0.8rem", color: "rgba(244,239,227,0.5)", lineHeight: 1.9 }}>{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                marginTop: "1.5rem",
                padding: "1.25rem",
                background: "rgba(196,151,58,0.08)",
                border: "1px solid rgba(196,151,58,0.3)",
              }}>
                <div style={{ fontFamily: "'Noto Serif SC',serif", fontSize: "0.82rem", color: "#c4973a", marginBottom: "0.5rem" }}>合作机构</div>
                <div style={{ fontFamily: "'Noto Serif SC',serif", fontSize: "0.8rem", color: "rgba(244,239,227,0.5)", lineHeight: 2 }}>
                  北京大学数字人文研究中心 · 北大人工智能研究院<br />
                  北大外国语学院东语系 · 兰州大学贝叶经研究中心<br />
                  坦博艺苑 · 智贝炜叶投资有限公司
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 完整捐赠时间线 ── */}
      <section style={{
        padding: "7rem 2rem",
        background: "#f4efe3",
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{
              fontFamily: "'EB Garamond',serif",
              fontSize: "0.8rem",
              color: "#c4973a",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}>Donation & Exchange Timeline</div>
            <h2 style={{
              fontFamily: "'Noto Serif SC',serif",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 500,
              letterSpacing: "0.15em",
              color: "#1c1c1c",
            }}>捐赠与交流完整记录</h2>
          </div>

          <div style={{ position: "relative" }}>
            {/* Center line */}
            <div style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: 0, bottom: 0,
              width: "1px",
              background: "linear-gradient(180deg, rgba(196,151,58,0.1), rgba(196,151,58,0.5) 10%, rgba(196,151,58,0.5) 90%, rgba(196,151,58,0.1))",
            }} />

            {donationHistory.map((item, i) => (
              <div key={i} style={{
                display: "grid",
                gridTemplateColumns: "1fr 40px 1fr",
                gap: "0",
                marginBottom: "2rem",
                alignItems: "start",
              }}>
                {i % 2 === 0 ? (
                  <>
                    <div style={{
                      paddingRight: "2rem",
                      textAlign: "right",
                    }}>
                      <div style={{
                        background: "rgba(255,255,255,0.7)",
                        border: "1px solid rgba(196,151,58,0.2)",
                        padding: "1.25rem",
                      }}>
                        <div style={{
                          display: "inline-block",
                          padding: "0.15rem 0.6rem",
                          border: "1px solid rgba(196,151,58,0.4)",
                          color: "#c4973a",
                          fontSize: "0.65rem",
                          letterSpacing: "0.1em",
                          fontFamily: "'Noto Serif SC',serif",
                          marginBottom: "0.75rem",
                        }}>{item.tag}</div>
                        <div style={{ fontFamily: "'Noto Serif SC',serif", fontSize: "0.95rem", color: "#1c1c1c", fontWeight: 500, marginBottom: "0.35rem" }}>{item.place}</div>
                        <div style={{ fontFamily: "'EB Garamond',serif", fontSize: "0.78rem", color: "#9a6535", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>{item.date}</div>
                        <div style={{ fontFamily: "'Noto Serif SC',serif", fontSize: "0.8rem", color: "rgba(28,28,28,0.6)", lineHeight: 1.9 }}>{item.desc}</div>
                      </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", paddingTop: "1.25rem" }}>
                      <div style={{
                        width: "10px", height: "10px",
                        borderRadius: "50%",
                        background: "#c4973a",
                        border: "2px solid #f4efe3",
                        boxShadow: "0 0 0 3px rgba(196,151,58,0.3)",
                      }} />
                    </div>
                    <div style={{ paddingLeft: "2rem" }}>
                      <div style={{
                        fontFamily: "'EB Garamond',serif",
                        fontSize: "2rem",
                        color: "rgba(196,151,58,0.35)",
                        lineHeight: 1,
                        paddingTop: "0.6rem",
                      }}>{item.year}</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ paddingRight: "2rem", textAlign: "right" }}>
                      <div style={{
                        fontFamily: "'EB Garamond',serif",
                        fontSize: "2rem",
                        color: "rgba(196,151,58,0.35)",
                        lineHeight: 1,
                        paddingTop: "0.6rem",
                        textAlign: "right",
                      }}>{item.year}</div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", paddingTop: "1.25rem" }}>
                      <div style={{
                        width: "10px", height: "10px",
                        borderRadius: "50%",
                        background: "#c4973a",
                        border: "2px solid #f4efe3",
                        boxShadow: "0 0 0 3px rgba(196,151,58,0.3)",
                      }} />
                    </div>
                    <div style={{ paddingLeft: "2rem" }}>
                      <div style={{
                        background: "rgba(255,255,255,0.7)",
                        border: "1px solid rgba(196,151,58,0.2)",
                        padding: "1.25rem",
                      }}>
                        <div style={{
                          display: "inline-block",
                          padding: "0.15rem 0.6rem",
                          border: "1px solid rgba(196,151,58,0.4)",
                          color: "#c4973a",
                          fontSize: "0.65rem",
                          letterSpacing: "0.1em",
                          fontFamily: "'Noto Serif SC',serif",
                          marginBottom: "0.75rem",
                        }}>{item.tag}</div>
                        <div style={{ fontFamily: "'Noto Serif SC',serif", fontSize: "0.95rem", color: "#1c1c1c", fontWeight: 500, marginBottom: "0.35rem" }}>{item.place}</div>
                        <div style={{ fontFamily: "'EB Garamond',serif", fontSize: "0.78rem", color: "#9a6535", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>{item.date}</div>
                        <div style={{ fontFamily: "'Noto Serif SC',serif", fontSize: "0.8rem", color: "rgba(28,28,28,0.6)", lineHeight: 1.9 }}>{item.desc}</div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
