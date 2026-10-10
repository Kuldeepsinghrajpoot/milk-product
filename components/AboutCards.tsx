

type AboutBlock = { eyebrow: string; heading: string; paras: string[] };
const ABOUT = {
  en: {
    tag: "Our Story",
    blocks: [
      { eyebrow: "Our Story", heading: "A brand built for Chhatarpur, by Chhatarpur.", paras: [
        "Founded by Deepansh Gupta, a proud native of Chhatarpur, Ganga Amrit began on 3 September 2026 with a simple dream — to build the city's own first milk-packet brand, one that could stand for quality and purity for its own people.",
        "For us, purity is not just a claim — it is a responsibility.",
      ] },
      { eyebrow: "Our Farmers", heading: "From Local Farmers to Your Family.", paras: [
        "We collect milk directly from local farmers and dairy farms, with a focus on transparency, fair pricing and regular procurement. We believe in building strong, trustworthy relationships with our farmers, and in supporting them with the guidance they need to maintain freshness and quality.",
        "Our aim is to create a transparent ecosystem where farmers, dairy farms and consumers grow together.",
      ] },
      { eyebrow: "Quality at Every Step", heading: "Quality begins right from the source.", paras: [
        "At our plant, milk goes through quality testing, chilling, pasteurization and hygienic processing before it reaches production. Our modern setup includes a milk testing laboratory, a Bulk Milk Cooling (BMC) system, pasteurization system, automatic packing machine, cold storage and stainless-steel processing equipment — run by a dedicated Quality Control Team.",
        "Every product is checked before it goes to market, with purity, freshness and hygiene prioritized at every stage.",
      ] },
      { eyebrow: "Social Responsibility", heading: "Empowering Local Families.", paras: [
        "Ganga Amrit is not just a business — it's an effort to help our own city move forward. We are committed to creating dignified, local-level employment opportunities for the women and men of Chhatarpur.",
        "We believe that when every family has a stable income, their children get access to better education and a brighter future. Behind every packet, alongside our promise of purity, is a commitment to helping local families become self-reliant and to giving the next generation's education new wings.",
      ] },
    ] as AboutBlock[],
    mission: { title: "Our Mission", text: "To make milk that represents freshness, purity, quality and trust for every family in Chhatarpur." },
    vision: { title: "Our Vision", text: "To start from Chhatarpur and grow into a trusted milk brand across the whole region. In the years ahead, we plan to bring several new dairy products under Ganga Amrit — but one thing will always stay the same: no compromise on quality." },
    valuesTitle: "Our Values",
    values: [
      { k: "Purity", v: "Never a compromise, ever." },
      { k: "Transparency", v: "Fair to farmers and families alike." },
      { k: "Freshness", v: "Fast collection to pouch." },
      { k: "Trust", v: "The same promise, every day." },
    ],
    promiseHeading: "GANGA AMRIT — शुद्धता का वादा",
    promise: [
      "From the farms around Chhatarpur to the homes of our community, we are committed to delivering milk with purity, freshness and care.",
      "Today, we begin for the people of Chhatarpur. Tomorrow, we carry this same trust to the entire region.",
      "Because for us, every packet is more than milk — it is a promise of purity, freshness, trust, and a brighter tomorrow for our community.",
    ],
  },
  hi: {
    tag: "हमारी कहानी",
    blocks: [
      { eyebrow: "हमारी कहानी", heading: "Ganga Amrit की शुरुआत, छतरपुर के अपने लोगों के लिए।", paras: [
        "Ganga Amrit की शुरुआत 3 September 2026 को Founder Deepansh Gupta, छतरपुर के ही एक व्यक्ति के अपने शहर के सपने के साथ हुई — छतरपुर का अपना पहला milk packet brand खड़ा करना, जो अपने लोगों के लिए quality और purity की एक नई पहचान बन सके।",
        "हमारे लिए शुद्धता सिर्फ एक शब्द नहीं, बल्कि एक जिम्मेदारी है।",
      ] },
      { eyebrow: "हमारे किसान", heading: "स्थानीय किसानों से आपके घर तक।", paras: [
        "Ganga Amrit में दूध स्थानीय किसानों से सीधे एकत्र किया जाता है। किसानों के साथ पारदर्शिता, उचित मूल्य और नियमित दूध खरीद के माध्यम से एक मजबूत और भरोसेमंद संबंध बनाने पर हम विश्वास करते हैं। साथ ही, किसानों और dairy farms को दूध की ताजगी और गुणवत्ता बनाए रखने के लिए आवश्यक मार्गदर्शन और सहयोग देने पर भी हमारा ध्यान है।",
        "हमारा उद्देश्य एक ऐसी पारदर्शी व्यवस्था बनाना है, जहाँ किसान, dairy farms और consumers साथ मिलकर आगे बढ़ें।",
      ] },
      { eyebrow: "हर चरण पर गुणवत्ता", heading: "शुद्धता की शुरुआत स्रोत से ही होती है।", paras: [
        "Plant पर दूध को production से पहले quality testing, chilling, pasteurization और hygienic processing की प्रक्रिया से गुजारा जाता है। हमारे modern setup में milk testing laboratory, BMC, pasteurization system, automatic packing machine, cold storage और stainless-steel processing equipment के साथ dedicated Quality Control Team काम करती है।",
        "हर product को market में भेजने से पहले quality checks से गुजारा जाता है। Purity, freshness और hygiene को हर चरण पर प्राथमिकता दी जाती है।",
      ] },
      { eyebrow: "हमारी सामाजिक जिम्मेदारी", heading: "स्थानीय परिवारों को सशक्त बनाना", paras: [
        "Ganga Amrit सिर्फ एक व्यवसाय नहीं, बल्कि अपने शहर को आगे बढ़ाने का एक प्रयास है। हम अपने शहर की महिलाओं और पुरुषों को स्थानीय स्तर पर सम्मानजनक रोजगार के अवसर देने के लिए प्रतिबद्ध हैं।",
        "हमारा विश्वास है कि जब हर परिवार के पास एक स्थिर आय होगी, तभी उनके बच्चों को बेहतर शिक्षा और एक सुनहरा भविष्य मिल सकेगा। हर packet के पीछे शुद्धता के साथ-साथ अपने शहर के परिवारों को आत्मनिर्भर बनाने और अगली पीढ़ी की शिक्षा को नए पंख देने का संकल्प जुड़ा है।",
      ] },
    ] as AboutBlock[],
    mission: { title: "हमारा मिशन", text: "ऐसा दूध उपलब्ध कराना जो छतरपुर के हर घर के लिए ताजगी, शुद्धता, गुणवत्ता और भरोसे की पहचान बने।" },
    vision: { title: "हमारा विज़न", text: "हमारा विज़न सरल है — छतरपुर से शुरुआत करके पूरे क्षेत्र का एक trusted milk brand बनना। आने वाले समय में हम Ganga Amrit के साथ कई नए dairy products लेकर आना चाहते हैं, लेकिन एक चीज़ हमेशा समान रहेगी — quality से कोई compromise नहीं।" },
    valuesTitle: "हमारे मूल्य",
    values: [
      { k: "Purity", v: "कभी समझौता नहीं, कभी नहीं।" },
      { k: "Transparency", v: "किसानों और परिवारों, दोनों के साथ उचित व्यवहार।" },
      { k: "Freshness", v: "Collection से pouch तक, तेज़ प्रक्रिया।" },
      { k: "Trust", v: "हर दिन, वही वादा।" },
    ],
    promiseHeading: "GANGA AMRIT — शुद्धता का वादा",
    promise: [
      "छतरपुर के आसपास के farms से लेकर हमारे समुदाय के घरों तक, हम शुद्धता, ताजगी और देखभाल के साथ दूध पहुँचाने के लिए प्रतिबद्ध हैं।",
      "आज हम छतरपुर के अपने लोगों के लिए शुरू हुए हैं। कल इसी भरोसे को पूरे क्षेत्र तक ले जाना है।",
      "क्योंकि हमारे लिए हर packet सिर्फ दूध से बढ़कर है — यह शुद्धता, ताजगी, भरोसे और हमारे समुदाय के उज्ज्वल कल का वादा है।",
    ],
  },
};



export default function AboutCards() {
  const en = ABOUT.en;
  const hi = ABOUT.hi;
  const rows = [
    ...en.blocks.map((b, i) => ({
      tagEn: b.eyebrow, tagHi: hi.blocks[i].eyebrow,
      titleEn: b.heading, titleHi: hi.blocks[i].heading,
      en: b.paras, hi: hi.blocks[i].paras,
    })),
    {
      tagEn: en.mission.title, tagHi: hi.mission.title,
      titleEn: en.mission.text, titleHi: hi.mission.text,
      en: en.values.map((v) => `${v.k} — ${v.v}`),
      hi: hi.values.map((v) => `${v.k} — ${v.v}`),
      valuesEn: en.valuesTitle, valuesHi: hi.valuesTitle,
    },
    {
      tagEn: "Our Promise", tagHi: "हमारा वादा",
      titleEn: en.promiseHeading, titleHi: "",
      en: en.promise, hi: hi.promise,
    },
  ];
  return (
    <div className="abx">
      {rows.map((r, i) => (
        <div className={`vis abx-row${i % 2 ? " rev" : ""}`} key={r.tagEn}>
          <aside className="vis-q">
            <span className="fk-t">{r.tagEn} | {r.tagHi}</span>
            <h2>{r.titleEn}</h2>
            {r.titleHi && (
              <blockquote lang="hi"><span>{r.titleHi}</span></blockquote>
            )}
          </aside>
          <div className="vis-b">
            {"valuesEn" in r && <span className="abx-tag">{r.valuesEn} | {r.valuesHi}</span>}
            <span className="abx-tag">English</span>
            {r.en.map((t, k) => (<p key={t} className={k === 0 && !("valuesEn" in r) ? "lead2" : ""}>{t}</p>))}
            <span className="abx-tag" lang="hi">हिन्दी</span>
            {r.hi.map((t) => (<p key={t} lang="hi">{t}</p>))}
          </div>
        </div>
      ))}
    </div>
  );
}
