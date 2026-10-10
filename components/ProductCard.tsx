"use client";

import WhatsAppIcon from "./WhatsAppIcon";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Dashes } from "./Section";
import { SIZES, SITE, type Product } from "@/lib/data";

export default function ProductCard({ p, index }: { p: Product; index: number }) {
  const [size, setSize] = useState(SIZES[0]);
  const [go, setGo] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) { setGo(true); return; }
    const io = new IntersectionObserver((en) => { if (en[0].isIntersecting) { setGo(true); io.disconnect(); } }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const wa = `https://wa.me/${SITE.wa}?text=${encodeURIComponent(`Hi Ganga Amrit, I would like to enquire about ${p.title} (${size} pouch).`)}`;
  return (
    <div className="col" ref={ref} style={{ "--pc": p.color } as React.CSSProperties}>
      <Dashes on={index} />
      <span className="mb-3 inline-block rounded-full px-3.5 py-1 text-[11.5px] font-semibold uppercase tracking-wider text-white" style={{ background: p.color }}>{p.badge}</span>
      <div
        className="imgbox"
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          e.currentTarget.style.setProperty("--ry", `${x * 14}deg`);
          e.currentTarget.style.setProperty("--rx", `${-y * 12}deg`);
        }}
        onMouseLeave={(e) => { e.currentTarget.style.setProperty("--ry", "0deg"); e.currentTarget.style.setProperty("--rx", "0deg"); }}
      >
        <Image src={p.img} alt={`Ganga Amrit ${p.title} milk pouch`} width={p.w} height={p.h} />
      </div>
      <div className="tg">{p.tag}</div>
      <h3>{p.title}</h3>
      <div className="sm2">{p.sub}</div>
      <div className="rule" />
      <h4>{p.h4}</h4>
      <p>{p.desc}</p>
      <div className="mt">
        <span>Fat richness</span>
        <i><b className={go ? "go" : ""} style={{ "--w": `${p.fatW}%` } as React.CSSProperties} /></i>
        <em>{p.fatLabel}</em>
      </div>
      <div className="sz" role="group" aria-label="Pack size">
        {SIZES.map((s) => (
          <button key={s} type="button" className={s === size ? "on" : ""} onClick={() => setSize(s)}>{s}</button>
        ))}
      </div>
      <div className="rows">
        {p.facts.map(([k, v]) => (<div key={k}>{k}<span>{v}</span></div>))}
      </div>
      <p className="note">Pasteurized and packed fresh in Chhatarpur, MP.</p>
      <a className="lnk wl" href={wa} target="_blank" rel="noopener noreferrer"><WhatsAppIcon />WhatsApp enquiry</a>
    </div>
  );
}
