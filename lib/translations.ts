export type Lang = 'zh' | 'zh-TW' | 'en' | 'it' | 'th' | 'my' | 'fr' | 'pt' | 'hi'

export const languages = [
  { code: 'zh' as Lang, name: '简体中文', localName: '简体中文' },
  { code: 'zh-TW' as Lang, name: '繁體中文', localName: '繁體中文' },
  { code: 'en' as Lang, name: 'English', localName: 'English' },
  { code: 'it' as Lang, name: 'Italiano', localName: 'Italiano' },
  { code: 'th' as Lang, name: 'ภาษาไทย', localName: 'ภาษาไทย' },
  { code: 'my' as Lang, name: 'မြန်မာ', localName: 'မြန်မာဘာသာ' },
  { code: 'fr' as Lang, name: 'Français', localName: 'Français' },
  { code: 'pt' as Lang, name: 'Português', localName: 'Português' },
  { code: 'hi' as Lang, name: 'हिन्दी', localName: 'हिन्दी' },
]

export interface TranslationSchema {
  // 导航
  nav: {
    home: string
    about: string
    collection: string
    news: string
    tanboSite: string
  }
  // 首页 Hero
  hero: {
    badge: string
    title1: string
    title2: string
    subtitle: string
    desc: string
    btnCollection: string
    btnVatican: string
  }
  // 统计
  stats: {
    pages: string
    pagesLabel: string
    volumes: string
    volumesLabel: string
    scripts: string
    scriptsLabel: string
    countries: string
    countriesLabel: string
  }
  // 介绍
  intro: {
    sectionLabel: string
    title: string
    p1: string
    p2: string
    learnMore: string
  }
  // 四重价值
  values: {
    sectionLabel: string
    title: string
    items: Array<{
      title: string
      desc: string
    }>
  }
  // 交流活动
  events: {
    sectionLabel: string
    title: string
    viewAll: string
  }
  // 坦博介绍
  tanbo: {
    sectionLabel: string
    title: string
    desc: string
    visitSite: string
  }
  // 页脚
  footer: {
    tagline: string
    rights: string
  }
  // 关于页面
  about: {
    title: string
    subtitle: string
  }
  // 典藏页面
  collection: {
    title: string
    subtitle: string
  }
  // 新闻页面
  news: {
    title: string
    subtitle: string
  }
  // 分享页面
  share: {
    title: string
    scanQR: string
    copyLink: string
    copied: string
  }
}

export const translations: Record<Lang, TranslationSchema> = {
  zh: {
    nav: {
      home: '首页',
      about: '贝叶经与坦博',
      collection: '典藏',
      news: '交流动态',
      tanboSite: '坦博艺苑官网',
    },
    hero: {
      badge: '人类文明最古老的书写载体之一',
      title1: '旷世圣典',
      title2: '贝叶经',
      subtitle: 'Palm Leaf Sutras',
      desc: '三千年前，古代圣者将佛法智慧刻录于贝叶之上。坦博艺苑珍藏657部贝叶经，是对人类最珍贵文明遗产的守望与传承。',
      btnCollection: '探索典藏',
      btnVatican: '梵蒂冈之献',
    },
    stats: {
      pages: '150万+',
      pagesLabel: '贝叶珍品',
      volumes: '657',
      volumesLabel: '馆藏经册',
      scripts: '4',
      scriptsLabel: '经文语言',
      countries: '10',
      countriesLabel: '国际交流',
    },
    intro: {
      sectionLabel: 'Palm Leaf Sutras',
      title: '一片贝叶，承载三千年文明',
      p1: '贝叶经是以贝多罗树叶为材料，经特殊工艺处理后书写或刻写的古代典籍。距今已有三千余年历史，是人类现存最古老的书写载体之一。',
      p2: '坦博艺苑历时三十余年，广泛收集整理来自东南亚、南亚各国的贝叶经珍品，涵盖缅甸、泰国、斯里兰卡、尼泊尔等地，经文语种包括巴利文、梵文、傣文、缅文等多种古典文字。',
      learnMore: '了解贝叶经历史',
    },
    values: {
      sectionLabel: '四重价值',
      title: '为何贝叶经是人类文明的奇迹',
      items: [
        {
          title: '文献价值',
          desc: '记载最原始佛教经典，是研究早期佛法思想与传播的第一手文献资料。',
        },
        {
          title: '艺术价值',
          desc: '精美书法与装帧艺术，展现古代匠人对神圣典籍的虔诚与卓越技艺。',
        },
        {
          title: '历史价值',
          desc: '见证佛教传播路径，呈现亚洲文明交流互鉴的珍贵历史脉络。',
        },
        {
          title: '科学价值',
          desc: '研究古代植物制作工艺，探索传统保存技术的科学智慧与生态意义。',
        },
      ],
    },
    events: {
      sectionLabel: '近期活动',
      title: '推介与学术交流',
      viewAll: '查看全部动态',
    },
    tanbo: {
      sectionLabel: '关于坦博',
      title: '坦博艺苑',
      desc: '坦博艺苑由白十源先生创立，三十余年深耕文化收藏与研究领域。致力于贝叶经的保护、研究与国际传播，推动贝叶经走向世界学术舞台。',
      visitSite: '访问坦博官网',
    },
    footer: {
      tagline: '一叶归真 · 守望文明',
      rights: '© 2025 坦博艺苑 版权所有',
    },
    about: {
      title: '贝叶经与坦博',
      subtitle: '探寻古老智慧的守护者',
    },
    collection: {
      title: '馆藏典藏',
      subtitle: '657部贝叶经珍品，150万余页人类文明的印记',
    },
    news: {
      title: '交流动态',
      subtitle: '推介活动与国际学术交流最新资讯',
    },
    share: {
      title: '分享页面',
      scanQR: '扫码访问',
      copyLink: '复制链接',
      copied: '已复制',
    },
  },

  'zh-TW': {
    nav: {
      home: '首頁',
      about: '貝葉經與坦博',
      collection: '典藏',
      news: '交流動態',
      tanboSite: '坦博藝苑官網',
    },
    hero: {
      badge: '人類文明最古老的書寫載體之一',
      title1: '曠世聖典',
      title2: '貝葉經',
      subtitle: 'Palm Leaf Sutras',
      desc: '三千年前，古代聖者將佛法智慧刻錄於貝葉之上。坦博藝苑珍藏657部貝葉經，是對人類最珍貴文明遺產的守望與傳承。',
      btnCollection: '探索典藏',
      btnVatican: '梵蒂岡之獻',
    },
    stats: {
      pages: '150萬+',
      pagesLabel: '貝葉珍品',
      volumes: '657',
      volumesLabel: '館藏經冊',
      scripts: '4',
      scriptsLabel: '經文語言',
      countries: '10',
      countriesLabel: '國際交流',
    },
    intro: {
      sectionLabel: 'Palm Leaf Sutras',
      title: '一片貝葉，承載三千年文明',
      p1: '貝葉經是以貝多羅樹葉為材料，經特殊工藝處理後書寫或刻寫的古代典籍。距今已有三千餘年歷史，是人類現存最古老的書寫載體之一。',
      p2: '坦博藝苑歷時三十餘年，廣泛收集整理來自東南亞、南亞各國的貝葉經珍品，涵蓋緬甸、泰國、斯里蘭卡、尼泊爾等地，經文語種包括巴利文、梵文、傣文、緬文等多種古典文字。',
      learnMore: '了解貝葉經歷史',
    },
    values: {
      sectionLabel: '四重價值',
      title: '為何貝葉經是人類文明的奇蹟',
      items: [
        {
          title: '文獻價值',
          desc: '記載最原始佛教經典，是研究早期佛法思想與傳播的第一手文獻資料。',
        },
        {
          title: '藝術價值',
          desc: '精美書法與裝幀藝術，展現古代匠人對神聖典籍的虔誠與卓越技藝。',
        },
        {
          title: '歷史價值',
          desc: '見證佛教傳播路徑，呈現亞洲文明交流互鑒的珍貴歷史脈絡。',
        },
        {
          title: '科學價值',
          desc: '研究古代植物製作工藝，探索傳統保存技術的科學智慧與生態意義。',
        },
      ],
    },
    events: {
      sectionLabel: '近期活動',
      title: '推介與學術交流',
      viewAll: '查看全部動態',
    },
    tanbo: {
      sectionLabel: '關於坦博',
      title: '坦博藝苑',
      desc: '坦博藝苑由白十源先生創立，三十餘年深耕文化收藏與研究領域。致力於貝葉經的保護、研究與國際傳播，推動貝葉經走向世界學術舞台。',
      visitSite: '訪問坦博官網',
    },
    footer: {
      tagline: '一葉歸真 · 守望文明',
      rights: '© 2025 坦博藝苑 版權所有',
    },
    about: {
      title: '貝葉經與坦博',
      subtitle: '探尋古老智慧的守護者',
    },
    collection: {
      title: '館藏典藏',
      subtitle: '657部貝葉經珍品，150萬餘頁人類文明的印記',
    },
    news: {
      title: '交流動態',
      subtitle: '推介活動與國際學術交流最新資訊',
    },
    share: {
      title: '分享頁面',
      scanQR: '掃碼訪問',
      copyLink: '複製連結',
      copied: '已複製',
    },
  },

  en: {
    nav: {
      home: 'Home',
      about: 'Palm Leaf Sutras & Tanbo',
      collection: 'Collection',
      news: 'Events & News',
      tanboSite: 'Tanbo Arts Official Site',
    },
    hero: {
      badge: 'One of Humanity\'s Oldest Written Records',
      title1: 'Sacred Scriptures',
      title2: 'Palm Leaf Sutras',
      subtitle: 'Palm Leaf Sutras',
      desc: 'Three millennia ago, ancient sages inscribed the wisdom of the Dharma upon palm leaves. Tanbo Arts preserves 657 volumes of Palm Leaf Sutras — a steadfast guardianship of humanity\'s most precious cultural heritage.',
      btnCollection: 'Explore the Collection',
      btnVatican: 'The Vatican Offering',
    },
    stats: {
      pages: '1.5M+',
      pagesLabel: 'Palm Leaf Folios',
      volumes: '657',
      volumesLabel: 'Volumes Preserved',
      scripts: '4+',
      scriptsLabel: 'Script Languages',
      countries: '10+',
      countriesLabel: 'International Exchanges',
    },
    intro: {
      sectionLabel: 'Palm Leaf Sutras',
      title: 'A Single Leaf, Bearing Three Thousand Years of Civilization',
      p1: 'Palm Leaf Sutras are ancient manuscripts written or inscribed on specially treated leaves of the talipot or palmyra palm. With a history spanning over three thousand years, they represent one of the oldest surviving written media in human history.',
      p2: 'Over more than three decades, Tanbo Arts has collected and catalogued precious Palm Leaf Sutras from across Southeast and South Asia — including Myanmar, Thailand, Sri Lanka, and Nepal — encompassing texts in Pali, Sanskrit, Dai, Burmese, and other classical scripts.',
      learnMore: 'Learn the History of Palm Leaf Sutras',
    },
    values: {
      sectionLabel: 'Fourfold Significance',
      title: 'Why Palm Leaf Sutras Are a Marvel of Human Civilization',
      items: [
        {
          title: 'Documentary Value',
          desc: 'Preserving the most original Buddhist scriptures, they serve as primary source material for the study of early Dharma thought and its transmission.',
        },
        {
          title: 'Artistic Value',
          desc: 'Exquisite calligraphy and binding craftsmanship reveal the devotion and extraordinary skill of ancient artisans in the service of sacred texts.',
        },
        {
          title: 'Historical Value',
          desc: 'Tracing the pathways of Buddhist transmission, they illuminate the precious historical tapestry of civilizational exchange across Asia.',
        },
        {
          title: 'Scientific Value',
          desc: 'Studying the ancient craft of botanical preparation unlocks the scientific wisdom and ecological significance of traditional preservation techniques.',
        },
      ],
    },
    events: {
      sectionLabel: 'Recent Events',
      title: 'Presentations & Academic Exchange',
      viewAll: 'View All Updates',
    },
    tanbo: {
      sectionLabel: 'About Tanbo',
      title: 'Tanbo Arts',
      desc: 'Founded by Mr. Bai Shiyuan, Tanbo Arts has dedicated over three decades to cultural collection and scholarship. Committed to the protection, research, and international dissemination of Palm Leaf Sutras, Tanbo Arts works to bring these treasures to the world\'s academic stage.',
      visitSite: 'Visit the Tanbo Arts Website',
    },
    footer: {
      tagline: 'One Leaf Returns to Truth · Guardians of Civilization',
      rights: '© 2025 Tanbo Arts. All Rights Reserved.',
    },
    about: {
      title: 'Palm Leaf Sutras & Tanbo Arts',
      subtitle: 'Guardians of Ancient Wisdom',
    },
    collection: {
      title: 'The Collection',
      subtitle: '657 volumes of Palm Leaf Sutras — over 1.5 million pages of human civilization',
    },
    news: {
      title: 'Events & News',
      subtitle: 'The latest in presentations, activities, and international academic exchange',
    },
    share: {
      title: 'Share This Page',
      scanQR: 'Scan QR Code',
      copyLink: 'Copy Link',
      copied: 'Copied',
    },
  },

  it: {
    nav: {
      home: 'Home',
      about: 'Sutras su Foglie di Palma & Tanbo',
      collection: 'Collezione',
      news: 'Eventi & Notizie',
      tanboSite: 'Sito Ufficiale Tanbo Arts',
    },
    hero: {
      badge: 'Uno dei Più Antichi Supporti Scrittori dell\'Umanità',
      title1: 'Sacre Scritture',
      title2: 'Sutras su Foglie di Palma',
      subtitle: 'Palm Leaf Sutras',
      desc: 'Tremila anni fa, antichi saggi incisero la saggezza del Dharma su foglie di palma. Tanbo Arts custodisce 657 volumi di Sutras su Foglie di Palma — una fedele custodia del patrimonio culturale più prezioso dell\'umanità.',
      btnCollection: 'Esplora la Collezione',
      btnVatican: 'L\'Offerta al Vaticano',
    },
    stats: {
      pages: '1,5M+',
      pagesLabel: 'Fogli di Palma',
      volumes: '657',
      volumesLabel: 'Volumi Conservati',
      scripts: '4+',
      scriptsLabel: 'Lingue Scritturali',
      countries: '10+',
      countriesLabel: 'Scambi Internazionali',
    },
    intro: {
      sectionLabel: 'Palm Leaf Sutras',
      title: 'Una Singola Foglia, Portatrice di Tremila Anni di Civiltà',
      p1: 'I Sutras su Foglie di Palma sono manoscritti antichi scritti o incisi su foglie di palma talipot o palmira, trattate con tecniche speciali. Con una storia di oltre tremila anni, rappresentano uno dei supporti scrittori più antichi sopravvissuti nella storia umana.',
      p2: 'Nel corso di oltre trent\'anni, Tanbo Arts ha raccolto e catalogato preziosi Sutras su Foglie di Palma provenienti dal Sud-est e dal Sud Asia — inclusi Myanmar, Thailandia, Sri Lanka e Nepal — comprendendo testi in pali, sanscrito, dai, birmano e altre scritture classiche.',
      learnMore: 'Scopri la Storia dei Sutras su Foglie di Palma',
    },
    values: {
      sectionLabel: 'Quadruplice Significato',
      title: 'Perché i Sutras su Foglie di Palma Sono una Meraviglia della Civiltà Umana',
      items: [
        {
          title: 'Valore Documentario',
          desc: 'Conservando le scritture buddiste più originali, costituiscono fonti primarie per lo studio del pensiero dharmica delle origini e della sua trasmissione.',
        },
        {
          title: 'Valore Artistico',
          desc: 'La raffinata calligrafia e la sapiente rilegatura rivelano la devozione e la straordinaria maestria degli antichi artigiani al servizio dei testi sacri.',
        },
        {
          title: 'Valore Storico',
          desc: 'Tracciando i percorsi della diffusione del Buddhismo, illuminano il prezioso tessuto storico degli scambi civilizzatori attraverso l\'Asia.',
        },
        {
          title: 'Valore Scientifico',
          desc: 'Lo studio dell\'antico artigianato di preparazione botanica svela la saggezza scientifica e il significato ecologico delle tecniche tradizionali di conservazione.',
        },
      ],
    },
    events: {
      sectionLabel: 'Eventi Recenti',
      title: 'Presentazioni e Scambi Accademici',
      viewAll: 'Vedi Tutti gli Aggiornamenti',
    },
    tanbo: {
      sectionLabel: 'Su Tanbo',
      title: 'Tanbo Arts',
      desc: 'Fondata dal Sig. Bai Shiyuan, Tanbo Arts ha dedicato oltre trent\'anni alla raccolta culturale e alla ricerca accademica. Impegnata nella protezione, nello studio e nella diffusione internazionale dei Sutras su Foglie di Palma, Tanbo Arts opera per portare questi tesori sul palcoscenico accademico mondiale.',
      visitSite: 'Visita il Sito di Tanbo Arts',
    },
    footer: {
      tagline: 'Una Foglia Ritorna alla Verità · Custodi della Civiltà',
      rights: '© 2025 Tanbo Arts. Tutti i Diritti Riservati.',
    },
    about: {
      title: 'Sutras su Foglie di Palma & Tanbo Arts',
      subtitle: 'Custodi dell\'Antica Saggezza',
    },
    collection: {
      title: 'La Collezione',
      subtitle: '657 volumi di Sutras su Foglie di Palma — oltre 1,5 milioni di pagine di civiltà umana',
    },
    news: {
      title: 'Eventi & Notizie',
      subtitle: 'Le ultime notizie su presentazioni, attività e scambi accademici internazionali',
    },
    share: {
      title: 'Condividi questa Pagina',
      scanQR: 'Scansiona il QR Code',
      copyLink: 'Copia il Link',
      copied: 'Copiato',
    },
  },

  th: {
    nav: {
      home: 'หน้าหลัก',
      about: 'คัมภีร์ใบลาน & ตั้นโป',
      collection: 'คอลเลกชัน',
      news: 'ข่าวสาร & กิจกรรม',
      tanboSite: 'เว็บไซต์ทางการตั้นโปอาร์ต',
    },
    hero: {
      badge: 'หนึ่งในสื่อการเขียนที่เก่าแก่ที่สุดของมนุษยชาติ',
      title1: 'พระคัมภีร์ศักดิ์สิทธิ์',
      title2: 'คัมภีร์ใบลาน',
      subtitle: 'Palm Leaf Sutras',
      desc: 'เมื่อสามพันปีก่อน บรรดาปราชญ์โบราณได้จารึกพระธรรมคำสอนลงบนใบลาน ตั้นโปอาร์ตสงวนรักษาคัมภีร์ใบลาน 657 เล่ม — เพื่อเป็นเครื่องพิทักษ์มรดกทางอารยธรรมอันล้ำค่าที่สุดของมนุษยชาติ',
      btnCollection: 'สำรวจคอลเลกชัน',
      btnVatican: 'เครื่องบรรณาการแด่นครวาติกัน',
    },
    stats: {
      pages: '1.5ล้าน+',
      pagesLabel: 'แผ่นใบลาน',
      volumes: '657',
      volumesLabel: 'เล่มที่เก็บรักษา',
      scripts: '4+',
      scriptsLabel: 'ภาษาอักษร',
      countries: '10+',
      countriesLabel: 'การแลกเปลี่ยนนานาชาติ',
    },
    intro: {
      sectionLabel: 'Palm Leaf Sutras',
      title: 'ใบลานเพียงใบเดียว แบกรับอารยธรรมสามพันปี',
      p1: 'คัมภีร์ใบลานคือต้นฉบับโบราณที่เขียนหรือจารึกลงบนใบลานตาล หรือใบจากที่ผ่านการแปรรูปพิเศษ มีประวัติศาสตร์ยาวนานกว่าสามพันปี นับเป็นหนึ่งในสื่อการเขียนที่เก่าแก่ที่สุดที่ยังคงหลงเหลืออยู่ในประวัติศาสตร์มนุษย์',
      p2: 'ตลอดระยะเวลากว่าสามสิบปี ตั้นโปอาร์ตได้รวบรวมและจัดทำรายการคัมภีร์ใบลานอันล้ำค่าจากทั่วเอเชียตะวันออกเฉียงใต้และเอเชียใต้ — รวมถึงเมียนมา ไทย ศรีลังกา และเนปาล — ครอบคลุมตำราในภาษาบาลี สันสกฤต ไต พม่า และอักษรคลาสสิกอื่นๆ',
      learnMore: 'เรียนรู้ประวัติคัมภีร์ใบลาน',
    },
    values: {
      sectionLabel: 'คุณค่าสี่ประการ',
      title: 'เหตุใดคัมภีร์ใบลานจึงเป็นมหัศจรรย์แห่งอารยธรรมมนุษย์',
      items: [
        {
          title: 'คุณค่าทางเอกสาร',
          desc: 'บันทึกพระไตรปิฎกดั้งเดิมที่สุด เป็นแหล่งข้อมูลชั้นต้นสำหรับการศึกษาความคิดพระธรรมยุคต้นและการเผยแผ่',
        },
        {
          title: 'คุณค่าทางศิลปะ',
          desc: 'งานอักษรศาสตร์และการเข้าเล่มอันประณีตเปิดเผยถึงความศรัทธาและทักษะอันยอดเยี่ยมของช่างโบราณในการรับใช้คัมภีร์ศักดิ์สิทธิ์',
        },
        {
          title: 'คุณค่าทางประวัติศาสตร์',
          desc: 'ติดตามเส้นทางการเผยแผ่พระพุทธศาสนา ส่องสว่างให้เห็นผืนแพรแห่งประวัติศาสตร์การแลกเปลี่ยนอารยธรรมอันล้ำค่าทั่วเอเชีย',
        },
        {
          title: 'คุณค่าทางวิทยาศาสตร์',
          desc: 'การศึกษาหัตถกรรมโบราณในการเตรียมพืชพรรณเปิดเผยภูมิปัญญาทางวิทยาศาสตร์และนัยทางนิเวศวิทยาของเทคนิคการอนุรักษ์แบบดั้งเดิม',
        },
      ],
    },
    events: {
      sectionLabel: 'กิจกรรมล่าสุด',
      title: 'การนำเสนอและการแลกเปลี่ยนทางวิชาการ',
      viewAll: 'ดูการอัปเดตทั้งหมด',
    },
    tanbo: {
      sectionLabel: 'เกี่ยวกับตั้นโป',
      title: 'ตั้นโปอาร์ต',
      desc: 'ก่อตั้งโดยคุณไป๋ ซือหยวน ตั้นโปอาร์ตได้อุทิศเวลากว่าสามสิบปีให้กับการสะสมวัฒนธรรมและการศึกษาวิชาการ มุ่งมั่นในการปกป้อง วิจัย และเผยแพร่คัมภีร์ใบลานในระดับนานาชาติ เพื่อนำสมบัติเหล่านี้สู่เวทีวิชาการโลก',
      visitSite: 'เยี่ยมชมเว็บไซต์ตั้นโปอาร์ต',
    },
    footer: {
      tagline: 'ใบลานหนึ่งใบคืนสู่ความจริง · ผู้พิทักษ์อารยธรรม',
      rights: '© 2025 ตั้นโปอาร์ต สงวนลิขสิทธิ์',
    },
    about: {
      title: 'คัมภีร์ใบลาน & ตั้นโปอาร์ต',
      subtitle: 'ผู้พิทักษ์ภูมิปัญญาโบราณ',
    },
    collection: {
      title: 'คอลเลกชัน',
      subtitle: 'คัมภีร์ใบลาน 657 เล่ม — กว่า 1.5 ล้านหน้าแห่งอารยธรรมมนุษย์',
    },
    news: {
      title: 'ข่าวสาร & กิจกรรม',
      subtitle: 'ข่าวล่าสุดเกี่ยวกับการนำเสนอ กิจกรรม และการแลกเปลี่ยนทางวิชาการนานาชาติ',
    },
    share: {
      title: 'แชร์หน้านี้',
      scanQR: 'สแกน QR Code',
      copyLink: 'คัดลอกลิงก์',
      copied: 'คัดลอกแล้ว',
    },
  },

  my: {
    nav: {
      home: 'ပင်မစာမျက်နှာ',
      about: 'ပဲဝါးရွက်ကျမ်း & တန်ဘို',
      collection: 'စုဆောင်းမှုများ',
      news: 'သတင်းများ & ပွဲများ',
      tanboSite: 'တန်ဘိုအနုပညာ တရားဝင်ဝဘ်ဆိုဒ်',
    },
    hero: {
      badge: 'လူသားသမိုင်းတွင် အဟောင်းဆုံး စာရေးကြေးများထဲမှ တစ်ခု',
      title1: 'သန့်မြတ်သော ကျမ်းဂန်များ',
      title2: 'ပဲဝါးရွက်ကျမ်း',
      subtitle: 'Palm Leaf Sutras',
      desc: 'နှစ်သုံးထောင်ကြာ မကြာမီ ရှေးဟောင်းပညာရှင်များသည် ဓမ္မ၏ ဥာဏ်ပညာကို ပဲဝါးရွက်များပေါ်တွင် ရေးထိုးခဲ့သည်။ တန်ဘိုအနုပညာသည် ပဲဝါးရွက်ကျမ်း ၆၅၇ တွဲကို ထိန်းသိမ်းစောင့်ရှောက်ထားသည် — လူသားများ၏ အဖိုးတန်ဆုံး ယဉ်ကျေးမှုအမွေအနှစ်ကို ကာကွယ်ထိန်းသိမ်းရေးအတွက်ဖြစ်သည်',
      btnCollection: 'စုဆောင်းမှုများကို ရှာဖွေပါ',
      btnVatican: 'ဗာတီကန်သို့ ဆက်ကပ်မှု',
    },
    stats: {
      pages: '၁.၅သန်း+',
      pagesLabel: 'ပဲဝါးရွက်များ',
      volumes: '၆၅၇',
      volumesLabel: 'ထိန်းသိမ်းထားသော တွဲများ',
      scripts: '၄+',
      scriptsLabel: 'စာမျိုးများ',
      countries: '၁၀+',
      countriesLabel: 'နိုင်ငံတကာဆက်သွယ်မှုများ',
    },
    intro: {
      sectionLabel: 'Palm Leaf Sutras',
      title: 'ပဲဝါးရွက်တစ်ရွက်၊ နှစ်သုံးထောင်၏ ယဉ်ကျေးမှုကို ထမ်းဆောင်',
      p1: 'ပဲဝါးရွက်ကျမ်းများသည် အထူးကုသမှုဖြင့် ပြုပြင်ထားသော တာလီပော သို့မဟုတ် ပါလ်မိုင်ရာ ပင်ရွက်များပေါ်တွင် ရေးသားသော သို့မဟုတ် ထင်မှတ်ထားသော ရှေးဟောင်းလက်ရေးများဖြစ်သည်။ နှစ်သုံးထောင်ကျော်သမိုင်းဖြင့် လူသားသမိုင်းတွင် ကျန်ရှိသော အဟောင်းဆုံးစာရေးကြေးများထဲမှ တစ်ခုကို ကိုယ်စားပြုသည်',
      p2: 'နှစ်သုံးဆယ်ကျော်ကြာ တန်ဘိုအနုပညာသည် အရှေ့တောင်နှင့် တောင်အာရှ နိုင်ငံများမှ — မြန်မာနိုင်ငံ၊ ထိုင်းနိုင်ငံ၊ သီရိလင်္ကာ နှင့် နီပေါ အပါအဝင် — တန်ဖိုးရှိ ပဲဝါးရွက်ကျမ်းများကို စုဆောင်းပြီး မှတ်တမ်းတင်ထားသည်။ ပါဠိ၊ သင်္သကြိုက်၊ ထိုင်း၊ မြန်မာ နှင့် အခြားသော ဂန္တဝင်စာများဖြင့် ရေးထားသော ကျမ်းများ ပါဝင်သည်',
      learnMore: 'ပဲဝါးရွက်ကျမ်းသမိုင်းကို လေ့လာပါ',
    },
    values: {
      sectionLabel: 'လေးထပ်ဆင့်တန်ဖိုး',
      title: 'ပဲဝါးရွက်ကျမ်းများသည် လူသားယဉ်ကျေးမှု၏ အံ့မခန်းဖြစ်ရသည့် အကြောင်း',
      items: [
        {
          title: 'မှတ်တမ်းတန်ဖိုး',
          desc: 'အစစ်ဆုံးသော ဗုဒ္ဓဘာသာကျမ်းများကို ထိန်းသိမ်းထားပြီး အစောပိုင်း ဓမ္မ တွေးခေါ်မှုနှင့် ၎င်း၏ ဖြန့်ဝေမှုကို လေ့လာရန် ပင်မအရင်းအမြစ် ပစ္စည်းများဖြစ်သည်',
        },
        {
          title: 'အနုပညာတန်ဖိုး',
          desc: 'သိမ်မွေ့သော ကောက်ကွေးနှင့် ချည်နှောင်ဆောက်လုပ်မှုကျွမ်းကျင်ပညာသည် သန့်မြတ်သောကျမ်းများကို ဝန်ဆောင်မှုပြုရာတွင် ရှေးဟောင်းလက်မှုပညာရှင်များ၏ ဘာသာရေးသစ္စာနှင့် ထူးချွန်သောကျွမ်းကျင်မှုကို ထုတ်ဖော်ပြသသည်',
        },
        {
          title: 'သမိုင်းတန်ဖိုး',
          desc: 'ဗုဒ္ဓဘာသာ ဖြန့်ဝေမှု လမ်းကြောင်းများကို ခြေရာကောက်ကာ အာရှတစ်ဝှမ်း ယဉ်ကျေးမှုဖလှယ်မှု၏ တန်ဖိုးရှိသော သမိုင်းကြောင်းကို ထင်ရှားစေသည်',
        },
        {
          title: 'သိပ္ပံတန်ဖိုး',
          desc: 'အပင်ပြင်ဆင်မှု ရှေးဟောင်းလက်မှုပညာကို လေ့လာခြင်းဖြင့် ရိုးရာ ထိန်းသိမ်းနည်းစနစ်များ၏ သိပ္ပံဥာဏ်ပညာနှင့် ဂေဟဗေဒဆိုင်ရာ အဓိပ္ပာယ်ကို ဖွင့်ဆိုသည်',
        },
      ],
    },
    events: {
      sectionLabel: 'မကြာမီဖြစ်ရပ်များ',
      title: 'တင်ဆက်မှုများနှင့် ပညာရှင်ဖလှယ်မှု',
      viewAll: 'အပ်ဒိတ်များအားလုံးကို ကြည့်ပါ',
    },
    tanbo: {
      sectionLabel: 'တန်ဘိုအကြောင်း',
      title: 'တန်ဘိုအနုပညာ',
      desc: 'ဘိုင် ရှိုင်ယွမ်မှ တည်ထောင်ထားသော တန်ဘိုအနုပညာသည် ယဉ်ကျေးမှုစုဆောင်းမှုနှင့် ပညာရှင်နှင့် ဆိုင်သော လေ့လာမှုများတွင် နှစ်သုံးဆယ်ကျော် မွေနှစ်ဆက်ပင်ပြောင်းနေသော ခေတ်ကိုနေ၍ ဇွဲမကျ လုံ့လဝီရိယနဲ့ ကြိုးပမ်းခဲ့သည်။ ပဲဝါးရွက်ကျမ်းများကို ကာကွယ်ထိန်းသိမ်းရေး၊ သုတေသနနှင့် နိုင်ငံတကာဖြန့်ဝေရေးအတွက် မပြတ်ကြိုးပမ်းကာ ဤဘဏ္ဍာရတနာများကို ကမ္ဘာ့ပညာရှင်ဇာတ်ခင်းပေါ်သို့ ဆောင်ကြဉ်းသည်',
      visitSite: 'တန်ဘိုအနုပညာ ဝဘ်ဆိုဒ်ကို သွားရောက်ပါ',
    },
    footer: {
      tagline: 'ရွက်တစ်ရွက် အမှန်တရားသို့ ပြန်ခြင်း · ယဉ်ကျေးမှု စောင့်ရှောက်သူများ',
      rights: '© 2025 တန်ဘိုအနုပညာ။ မူပိုင်ခွင့်များ ကြိတ်ဆိုင်သည်',
    },
    about: {
      title: 'ပဲဝါးရွက်ကျမ်း & တန်ဘိုအနုပညာ',
      subtitle: 'ရှေးဟောင်းဥာဏ်ပညာ၏ စောင့်ရှောက်သူများ',
    },
    collection: {
      title: 'စုဆောင်းမှုများ',
      subtitle: 'ပဲဝါးရွက်ကျမ်း ၆၅၇ တွဲ — လူသားယဉ်ကျေးမှု၏ စာမျက်နှာ ၁.၅ သန်းကျော်',
    },
    news: {
      title: 'သတင်းများ & ပွဲများ',
      subtitle: 'တင်ဆက်မှုများ၊ လှုပ်ရှားမှုများနှင့် နိုင်ငံတကာပညာရှင်ဖလှယ်မှုဆိုင်ရာ နောက်ဆုံးရသတင်းများ',
    },
    share: {
      title: 'ဤစာမျက်နှာကို မျှဝေပါ',
      scanQR: 'QR ကုဒ်ကို စကင်ဖတ်ပါ',
      copyLink: 'လင့်ကိုကူးပါ',
      copied: 'ကူးပြီး',
    },
  },

  fr: {
    nav: {
      home: 'Accueil',
      about: 'Sutras sur Feuille de Palmier & Tanbo',
      collection: 'Collection',
      news: 'Actualités & Événements',
      tanboSite: 'Site Officiel de Tanbo Arts',
    },
    hero: {
      badge: 'L\'un des Plus Anciens Supports d\'Écriture de l\'Humanité',
      title1: 'Écritures Sacrées',
      title2: 'Sutras sur Feuille de Palmier',
      subtitle: 'Palm Leaf Sutras',
      desc: 'Il y a trois mille ans, d\'anciens sages gravèrent la sagesse du Dharma sur des feuilles de palmier. Tanbo Arts préserve 657 volumes de Sutras sur Feuille de Palmier — une veille fidèle sur le patrimoine culturel le plus précieux de l\'humanité.',
      btnCollection: 'Explorer la Collection',
      btnVatican: 'L\'Offrande au Vatican',
    },
    stats: {
      pages: '1,5M+',
      pagesLabel: 'Feuillets de Palmier',
      volumes: '657',
      volumesLabel: 'Volumes Conservés',
      scripts: '4+',
      scriptsLabel: 'Langues d\'Écriture',
      countries: '10+',
      countriesLabel: 'Échanges Internationaux',
    },
    intro: {
      sectionLabel: 'Palm Leaf Sutras',
      title: 'Une Seule Feuille, Portant Trois Mille Ans de Civilisation',
      p1: 'Les Sutras sur Feuille de Palmier sont des manuscrits anciens écrits ou gravés sur des feuilles de palmier talipot ou palmyra, traitées selon des techniques spéciales. Forts d\'une histoire de plus de trois mille ans, ils représentent l\'un des supports d\'écriture les plus anciens encore conservés dans l\'histoire humaine.',
      p2: 'Au fil de plus de trente ans, Tanbo Arts a collecté et catalogué de précieux Sutras sur Feuille de Palmier provenant de tout le Sud-Est et du Sud de l\'Asie — notamment du Myanmar, de Thaïlande, du Sri Lanka et du Népal — comprenant des textes en pali, sanscrit, dai, birman et d\'autres scripts classiques.',
      learnMore: 'Découvrir l\'Histoire des Sutras sur Feuille de Palmier',
    },
    values: {
      sectionLabel: 'Quadruple Signification',
      title: 'Pourquoi les Sutras sur Feuille de Palmier Sont une Merveille de la Civilisation Humaine',
      items: [
        {
          title: 'Valeur Documentaire',
          desc: 'Préservant les écritures bouddhistes les plus originelles, ils constituent des sources primaires pour l\'étude de la pensée dharmique des origines et de sa transmission.',
        },
        {
          title: 'Valeur Artistique',
          desc: 'La calligraphie raffinée et la reliure artisanale révèlent la dévotion et le savoir-faire extraordinaire des artisans anciens au service des textes sacrés.',
        },
        {
          title: 'Valeur Historique',
          desc: 'Retraçant les voies de propagation du bouddhisme, ils éclairent la précieuse trame historique des échanges civilisationnels à travers l\'Asie.',
        },
        {
          title: 'Valeur Scientifique',
          desc: 'L\'étude de l\'artisanat ancien de préparation botanique dévoile la sagesse scientifique et la portée écologique des techniques de conservation traditionnelles.',
        },
      ],
    },
    events: {
      sectionLabel: 'Événements Récents',
      title: 'Présentations et Échanges Académiques',
      viewAll: 'Voir Toutes les Actualités',
    },
    tanbo: {
      sectionLabel: 'À Propos de Tanbo',
      title: 'Tanbo Arts',
      desc: 'Fondée par M. Bai Shiyuan, Tanbo Arts a consacré plus de trente ans à la collection culturelle et à la recherche savante. Engagée dans la protection, l\'étude et la diffusion internationale des Sutras sur Feuille de Palmier, Tanbo Arts œuvre à porter ces trésors sur la scène académique mondiale.',
      visitSite: 'Visiter le Site de Tanbo Arts',
    },
    footer: {
      tagline: 'Une Feuille Retourne à la Vérité · Gardiens de la Civilisation',
      rights: '© 2025 Tanbo Arts. Tous Droits Réservés.',
    },
    about: {
      title: 'Sutras sur Feuille de Palmier & Tanbo Arts',
      subtitle: 'Gardiens de l\'Antique Sagesse',
    },
    collection: {
      title: 'La Collection',
      subtitle: '657 volumes de Sutras sur Feuille de Palmier — plus de 1,5 million de pages de civilisation humaine',
    },
    news: {
      title: 'Actualités & Événements',
      subtitle: 'Les dernières nouvelles sur les présentations, activités et échanges académiques internationaux',
    },
    share: {
      title: 'Partager cette Page',
      scanQR: 'Scanner le QR Code',
      copyLink: 'Copier le Lien',
      copied: 'Copié',
    },
  },

  pt: {
    nav: {
      home: 'Início',
      about: 'Sutras em Folha de Palmeira & Tanbo',
      collection: 'Coleção',
      news: 'Notícias & Eventos',
      tanboSite: 'Site Oficial da Tanbo Arts',
    },
    hero: {
      badge: 'Um dos Mais Antigos Suportes de Escrita da Humanidade',
      title1: 'Escrituras Sagradas',
      title2: 'Sutras em Folha de Palmeira',
      subtitle: 'Palm Leaf Sutras',
      desc: 'Há três mil anos, sábios da Antiguidade inscreveram a sabedoria do Dharma em folhas de palmeira. A Tanbo Arts preserva 657 volumes de Sutras em Folha de Palmeira — uma vigilância fiel sobre o patrimônio cultural mais precioso da humanidade.',
      btnCollection: 'Explorar a Coleção',
      btnVatican: 'A Oferta ao Vaticano',
    },
    stats: {
      pages: '1,5M+',
      pagesLabel: 'Fólios de Palmeira',
      volumes: '657',
      volumesLabel: 'Volumes Preservados',
      scripts: '4+',
      scriptsLabel: 'Línguas Escriturais',
      countries: '10+',
      countriesLabel: 'Intercâmbios Internacionais',
    },
    intro: {
      sectionLabel: 'Palm Leaf Sutras',
      title: 'Uma Única Folha, Portando Três Mil Anos de Civilização',
      p1: 'Os Sutras em Folha de Palmeira são manuscritos antigos escritos ou inscritos em folhas de palmeira talipot ou palmira, tratadas com técnicas especiais. Com uma história de mais de três mil anos, representam um dos suportes de escrita mais antigos ainda preservados na história humana.',
      p2: 'Ao longo de mais de trinta anos, a Tanbo Arts coletou e catalogou preciosos Sutras em Folha de Palmeira provenientes de todo o Sudeste e Sul da Ásia — incluindo Mianmar, Tailândia, Sri Lanka e Nepal — abrangendo textos em páli, sânscrito, dai, birmanês e outros scripts clássicos.',
      learnMore: 'Conhecer a História dos Sutras em Folha de Palmeira',
    },
    values: {
      sectionLabel: 'Quádruplo Significado',
      title: 'Por que os Sutras em Folha de Palmeira São uma Maravilha da Civilização Humana',
      items: [
        {
          title: 'Valor Documental',
          desc: 'Preservando as escrituras budistas mais originais, constituem fontes primárias para o estudo do pensamento dhármico das origens e de sua transmissão.',
        },
        {
          title: 'Valor Artístico',
          desc: 'A refinada caligrafia e a encadernação artesanal revelam a devoção e a extraordinária habilidade dos artesãos antigos a serviço dos textos sagrados.',
        },
        {
          title: 'Valor Histórico',
          desc: 'Rastreando os caminhos da difusão do budismo, iluminam o precioso tecido histórico dos intercâmbios civilizacionais pela Ásia.',
        },
        {
          title: 'Valor Científico',
          desc: 'O estudo do artesanato antigo de preparação botânica desvela a sabedoria científica e o significado ecológico das técnicas tradicionais de conservação.',
        },
      ],
    },
    events: {
      sectionLabel: 'Eventos Recentes',
      title: 'Apresentações e Intercâmbio Acadêmico',
      viewAll: 'Ver Todas as Atualizações',
    },
    tanbo: {
      sectionLabel: 'Sobre a Tanbo',
      title: 'Tanbo Arts',
      desc: 'Fundada pelo Sr. Bai Shiyuan, a Tanbo Arts dedicou mais de trinta anos à coleção cultural e à pesquisa acadêmica. Comprometida com a proteção, o estudo e a divulgação internacional dos Sutras em Folha de Palmeira, a Tanbo Arts trabalha para levar esses tesouros ao palco acadêmico mundial.',
      visitSite: 'Visitar o Site da Tanbo Arts',
    },
    footer: {
      tagline: 'Uma Folha Retorna à Verdade · Guardiões da Civilização',
      rights: '© 2025 Tanbo Arts. Todos os Direitos Reservados.',
    },
    about: {
      title: 'Sutras em Folha de Palmeira & Tanbo Arts',
      subtitle: 'Guardiões da Sabedoria Antiga',
    },
    collection: {
      title: 'A Coleção',
      subtitle: '657 volumes de Sutras em Folha de Palmeira — mais de 1,5 milhão de páginas de civilização humana',
    },
    news: {
      title: 'Notícias & Eventos',
      subtitle: 'As últimas notícias sobre apresentações, atividades e intercâmbio acadêmico internacional',
    },
    share: {
      title: 'Compartilhar esta Página',
      scanQR: 'Escanear QR Code',
      copyLink: 'Copiar Link',
      copied: 'Copiado',
    },
  },

  hi: {
    nav: {
      home: 'मुखपृष्ठ',
      about: 'ताड़पत्र सूत्र & तानबो',
      collection: 'संग्रह',
      news: 'समाचार & कार्यक्रम',
      tanboSite: 'तानबो आर्ट्स आधिकारिक वेबसाइट',
    },
    hero: {
      badge: 'मानवता के सबसे प्राचीन लेखन माध्यमों में से एक',
      title1: 'पवित्र शास्त्र',
      title2: 'ताड़पत्र सूत्र',
      subtitle: 'Palm Leaf Sutras',
      desc: 'तीन हजार वर्ष पूर्व, प्राचीन ऋषि-मुनियों ने धर्म की बुद्धिमत्ता को ताड़पत्रों पर उत्कीर्ण किया। तानबो आर्ट्स ताड़पत्र सूत्रों के 657 खंडों की रक्षा करता है — मानवता की सबसे बहुमूल्य सांस्कृतिक धरोहर की अभिरक्षा और संरक्षण के लिए।',
      btnCollection: 'संग्रह का अन्वेषण करें',
      btnVatican: 'वेटिकन को अर्पण',
    },
    stats: {
      pages: '15 लाख+',
      pagesLabel: 'ताड़पत्र',
      volumes: '657',
      volumesLabel: 'संरक्षित खंड',
      scripts: '4+',
      scriptsLabel: 'लिपि भाषाएँ',
      countries: '10+',
      countriesLabel: 'अंतर्राष्ट्रीय आदान-प्रदान',
    },
    intro: {
      sectionLabel: 'Palm Leaf Sutras',
      title: 'एक ताड़पत्र, तीन हजार वर्षों की सभ्यता का वाहक',
      p1: 'ताड़पत्र सूत्र वे प्राचीन पांडुलिपियाँ हैं जो विशेष तकनीकों से उपचारित ताड़ या पाल्मीरा पत्रों पर लिखी या उत्कीर्ण की गई हैं। तीन हजार वर्षों से अधिक के इतिहास के साथ, ये मानव इतिहास में अब तक संरक्षित सबसे प्राचीन लेखन माध्यमों में से एक का प्रतिनिधित्व करते हैं।',
      p2: 'तीन दशकों से अधिक समय में, तानबो आर्ट्स ने दक्षिण-पूर्व और दक्षिण एशिया के देशों — म्यांमार, थाईलैंड, श्रीलंका और नेपाल सहित — से बहुमूल्य ताड़पत्र सूत्रों का संग्रह और सूचीकरण किया है। इनमें पालि, संस्कृत, दाई, बर्मी और अन्य शास्त्रीय लिपियों में लिखे ग्रंथ सम्मिलित हैं।',
      learnMore: 'ताड़पत्र सूत्रों का इतिहास जानें',
    },
    values: {
      sectionLabel: 'चतुर्विध महत्त्व',
      title: 'क्यों ताड़पत्र सूत्र मानव सभ्यता का अद्भुत चमत्कार हैं',
      items: [
        {
          title: 'दस्तावेजी महत्त्व',
          desc: 'सबसे मूल बौद्ध धर्मग्रंथों को संरक्षित करते हुए, ये प्रारंभिक धर्म-विचार और उसके प्रसार के अध्ययन के लिए प्रथमिक स्रोत सामग्री हैं।',
        },
        {
          title: 'कलात्मक महत्त्व',
          desc: 'सुंदर सुलेखन और जिल्दसाजी की कारीगरी प्राचीन शिल्पकारों की पवित्र ग्रंथों के प्रति श्रद्धा और असाधारण कौशल को प्रकट करती है।',
        },
        {
          title: 'ऐतिहासिक महत्त्व',
          desc: 'बौद्ध धर्म के प्रसार के मार्गों का अनुसरण करते हुए, ये एशिया में सभ्यतागत आदान-प्रदान की बहुमूल्य ऐतिहासिक परंपरा को आलोकित करते हैं।',
        },
        {
          title: 'वैज्ञानिक महत्त्व',
          desc: 'वनस्पति तैयारी की प्राचीन कारीगरी का अध्ययन पारंपरिक संरक्षण तकनीकों की वैज्ञानिक बुद्धिमत्ता और पारिस्थितिक महत्त्व को उद्घाटित करता है।',
        },
      ],
    },
    events: {
      sectionLabel: 'हाल के कार्यक्रम',
      title: 'प्रस्तुतियाँ और शैक्षणिक आदान-प्रदान',
      viewAll: 'सभी अपडेट देखें',
    },
    tanbo: {
      sectionLabel: 'तानबो के बारे में',
      title: 'तानबो आर्ट्स',
      desc: 'श्री बाई शियुआन द्वारा स्थापित, तानबो आर्ट्स ने सांस्कृतिक संग्रह और विद्वत्तापूर्ण शोध के लिए तीन दशक से अधिक समर्पित किए हैं। ताड़पत्र सूत्रों की सुरक्षा, शोध और अंतर्राष्ट्रीय प्रसार के प्रति प्रतिबद्ध, तानबो आर्ट्स इन खजानों को विश्व के शैक्षणिक मंच पर लाने का प्रयास करती है।',
      visitSite: 'तानबो आर्ट्स वेबसाइट पर जाएँ',
    },
    footer: {
      tagline: 'एक पत्र सत्य की ओर लौटता है · सभ्यता के संरक्षक',
      rights: '© 2025 तानबो आर्ट्स। सर्वाधिकार सुरक्षित।',
    },
    about: {
      title: 'ताड़पत्र सूत्र & तानबो आर्ट्स',
      subtitle: 'प्राचीन ज्ञान के संरक्षक',
    },
    collection: {
      title: 'संग्रह',
      subtitle: 'ताड़पत्र सूत्रों के 657 खंड — मानव सभ्यता के 15 लाख से अधिक पृष्ठ',
    },
    news: {
      title: 'समाचार & कार्यक्रम',
      subtitle: 'प्रस्तुतियों, गतिविधियों और अंतर्राष्ट्रीय शैक्षणिक आदान-प्रदान की नवीनतम जानकारी',
    },
    share: {
      title: 'यह पृष्ठ साझा करें',
      scanQR: 'QR कोड स्कैन करें',
      copyLink: 'लिंक कॉपी करें',
      copied: 'कॉपी हो गया',
    },
  },
}

export function getTranslation(lang: Lang): TranslationSchema {
  return translations[lang] ?? translations['zh']
}
