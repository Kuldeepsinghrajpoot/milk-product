"use client";

import { useState } from "react";
import Art from "./Art";
import { GALLERY } from "@/lib/data";

export default function Gallery() {
  const [failed, setFailed] = useState<Record<number, boolean>>({});
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="gwrap">
      <div className="gal">
        {GALLERY.map((g, i) => (
          <button key={g.src} type="button" onClick={() => !failed[i] && setOpen(i)}>
            <Art icon={g.icon} />
            {!failed[i] && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={g.src} alt={g.alt} loading="lazy" onError={() => setFailed((f) => ({ ...f, [i]: true }))} />
            )}
            <em>{g.cap}</em>
          </button>
        ))}
      </div>
      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(null)}
          style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(8,16,40,.88)", display: "grid", placeItems: "center", padding: 16, cursor: "zoom-out" }}
        >
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={GALLERY[open].src} alt={GALLERY[open].alt} style={{ maxWidth: "92vw", maxHeight: "80vh", borderRadius: 16, display: "block" }} />
            <p style={{ color: "#fff", textAlign: "center", margin: "10px 0 0" }}>{GALLERY[open].cap}</p>
          </div>
        </div>
      )}
    </div>
  );
}
