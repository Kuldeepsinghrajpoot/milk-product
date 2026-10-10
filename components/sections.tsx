import WhatsAppIcon from "./WhatsAppIcon";
import Link from "next/link";
import { SectionHead, Strip } from "./Section";
import ProductCard from "./ProductCard";
import FactoryAnim from "./FactoryAnim";
import { CustomerArt, FactoryArt, FarmPhoto, LabArt, ShopArt } from "./JourneyArt";
import { Icon } from "./Icons";
import Gallery from "./Gallery";
import { FACILITY, FAQS, PRODUCTS, PROCESS, SIZES, STEPS, SITE } from "@/lib/data";

export function ProductsSection({ bare }: { bare?: boolean }) {
  const pills = ["Full cream", "Chai special", "Double toned", "180 ml pouch", "500 ml pouch", "1 L pouch", "Pasteurized", "Fat% & SNF% tested"];
  return (
    <section className="sec">
      <div className="wrap">
        {!bare && <SectionHead>Fresh milk. <em>Every variant.</em></SectionHead>}
        <div className="box">
          <Strip label="Sold by" accent="Ganga Amrit" right="Welcome to Ganga Amrit · Chhatarpur, Madhya Pradesh" />
          <div className="cols3">
            {PRODUCTS.map((p, i) => (<ProductCard key={p.id} p={p} index={i} />))}
          </div>
        </div>
        <div className="box range">
          <div className="tg">The range</div>
          <div className="pills">{pills.map((t) => (<span key={t} className="pill">{t}</span>))}</div>
          <p>Pouches in 180 ml, 500 ml and 1 L, all on one delivery. Each variant is standardized for a consistent Fat% and SNF%.</p>
        </div>
      </div>
    </section>
  );
}

const JOURNEY_CARDS = [
  { title: "Farm", text: "Local Chhatarpur farmers", art: <FarmPhoto /> },
  { title: "Collection & Testing", text: "Fat% and SNF% tested", art: <LabArt /> },
  { title: "Factory", text: "Pasteurized and packed", art: <FactoryArt /> },
  { title: "Dukaan", text: "Delivered to retailers", art: <ShopArt /> },
  { title: "Customer", text: "Fresh milk at home", art: <CustomerArt /> },
];

export function JourneySection() {
  return (
    <section className="sec">
      <div className="wrap">
        <SectionHead p="Follow one pouch of milk from the farm to your kitchen.">Watch the journey. <em>Farm to shop.</em></SectionHead>
        <div className="jrn">
          {JOURNEY_CARDS.map((c, i) => (
            <div className="jw" key={c.title}>
              <div className="jc">
                <div className="jimg">
                  <span className="jnum">{i + 1}</span>
                  {c.art}
                </div>
                <div className="jb"><h3>{c.title}</h3><p>{c.text}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StepsSection() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="fk">
          <span className="fk-t">Factory Operations</span>
          <h2>From Farm to Factory Gate.</h2>
          <p>Our vertically integrated supply chain ensures traceability and quality control at every step before it reaches our dealers.</p>
        </div>
        <FactoryAnim />
        <div className="fcards">
          {STEPS.map((s, i) => (
            <div className="fc" key={s.title}>
              <span className="fi2" style={{ "--tc": s.tc, "--tb": s.tb } as React.CSSProperties}><Icon name={s.icon} /></span>
              <h3>{i + 1}. {s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GallerySection() {
  return (
    <section className="sec">
      <div className="wrap">
        <SectionHead p="Click any photo to zoom in - a real glimpse of our processing floor, testing lab and dispatch, straight from Chhatarpur.">
          A look inside <em>our factory.</em>
        </SectionHead>
        <div className="box">
          <Strip label="Inside the" accent="facility" right="Chhatarpur, MP" />
          <Gallery />
          <div className="ctr"><Link className="btn acc" href="/contact">Schedule a Factory Visit</Link></div>
        </div>
      </div>
    </section>
  );
}

const FAC_META = [
  { icon: "flask", tag: "Quality", c: "#2563eb", bg: "#dbeafe" },
  { icon: "snow", tag: "Cooling", c: "#2563eb", bg: "#dbeafe" },
  { icon: "heat", tag: "Processing", c: "#ea580c", bg: "#ffedd5" },
  { icon: "cube", tag: "Packing", c: "#ea580c", bg: "#ffedd5" },
  { icon: "thermo", tag: "Storage", c: "#2563eb", bg: "#dbeafe" },
  { icon: "cog", tag: "Hygiene", c: "#16a34a", bg: "#dcfce7" },
  { icon: "shield", tag: "Control", c: "#16a34a", bg: "#dcfce7" },
  { icon: "users", tag: "Sourcing", c: "#16a34a", bg: "#dcfce7" },
];

export function FacilitySection() {
  return (
    <section className="sec">
      <div className="wrap">
        <SectionHead p="A modern, hygienic facility equipped to process fresh milk safely, every single day.">
          Built the <em>right way.</em>
        </SectionHead>
        <div className="inf">
          {FACILITY.map((f, i) => {
            const m = FAC_META[i % FAC_META.length];
            return (
              <div className="ifc" key={f} style={{ "--tc": m.c, "--tb": m.bg } as React.CSSProperties}>
                <span className="no">{String(i + 1).padStart(2, "0")}</span>
                <span className="it"><Icon name={m.icon} /></span>
                <small>{m.tag}</small>
                <b>{f}</b>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const VAR_COLORS = ["#d9480f", "#6f2210", "#b97f00"];
const FAT_W = [100, 75, 25];
const COLD_ICONS = ["snow", "truck", "thermo"];
const PACK_ICONS = ["cube", "cube", "shield"];

export function ProcessSection() {
  const [milk, cold, pack] = PROCESS;
  const tone = (c: string, bg: string) => ({ "--tc": c, "--tb": bg }) as React.CSSProperties;
  return (
    <section className="sec">
      <div className="wrap">
        <SectionHead p="Simple, hygienic steps from collection to your home.">How we keep it <em>fresh.</em></SectionHead>
        <div className="prc">
          <article className="pc2" style={tone("#ea580c", "#ffedd5")}>
            <span className="no">01</span>
            <span className="it"><Icon name="drop" /></span>
            <h3>{milk.title}</h3>
            <p>{milk.text}</p>
            <ul className="vm">
              {milk.rows.map(([n, f], i) => (
                <li key={n}>
                  <i style={{ background: VAR_COLORS[i] }} />
                  <span>{n}</span>
                  <small>{f}</small>
                  <em><b style={{ width: `${FAT_W[i]}%`, background: VAR_COLORS[i] }} /></em>
                </li>
              ))}
            </ul>
          </article>
          <article className="pc2" style={tone("#2563eb", "#dbeafe")}>
            <span className="no">02</span>
            <span className="it"><Icon name="snow" /></span>
            <h3>{cold.title}</h3>
            <p>{cold.text}</p>
            <ul className="tlv">
              {cold.rows.map(([n, v], i) => (
                <li key={n}>
                  <span className="tk"><Icon name={COLD_ICONS[i]} /></span>
                  <div><b>{n}</b><span>{v}</span></div>
                </li>
              ))}
            </ul>
          </article>
          <article className="pc2" style={tone("#16a34a", "#dcfce7")}>
            <span className="no">03</span>
            <span className="it"><Icon name="shield" /></span>
            <h3>{pack.title}</h3>
            <p>{pack.text}</p>
            <ul className="tlv">
              {pack.rows.map(([n, v], i) => (
                <li key={n}>
                  <span className="tk"><Icon name={PACK_ICONS[i]} /></span>
                  <div>
                    <b>{n}</b>
                    {n === "Sizes" ? (<span className="szc">{SIZES.map((z) => (<i key={z}>{z}</i>))}</span>) : (<span>{v}</span>)}
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export function CtaBox() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="cta-box">
          <div>
            <h2>Want Ganga Amrit milk at your store?</h2>
            <p>Talk to us about distributorship, bulk supply, or retail stocking.</p>
          </div>
          <div className="cta">
            <Link className="btn wh" href="/contact">Contact Us</Link>
            <a className="btn wa" href={`https://wa.me/${SITE.wa}`}><WhatsAppIcon />WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FaqSection({ bare }: { bare?: boolean }) {
  return (
    <section className="sec">
      <div className="wrap" style={{ maxWidth: 860 }}>
        {!bare && <SectionHead p="A few things people usually ask us.">Quick <em>questions.</em></SectionHead>}
        <div className="box">
          {FAQS.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
