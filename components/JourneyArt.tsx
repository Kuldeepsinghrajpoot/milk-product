import Image from "next/image";
import { PRODUCTS } from "@/lib/data";

const svgProps = { viewBox: "0 0 320 200", preserveAspectRatio: "xMidYMid slice", "aria-hidden": true } as const;

// Real photo of the farm (taken from the hero poster)
export function FarmPhoto() {
  return <Image src="/hero-poster.jpg" alt="Cows grazing on a farm in the morning light" fill sizes="(max-width: 1000px) 80vw, 220px" style={{ objectFit: "cover", objectPosition: "38% 62%" }} />;
}

export function LabArt() {
  return (
    <svg {...svgProps}>
      <defs>
        <linearGradient id="lb-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#eaf2ff" /><stop offset="1" stopColor="#d2e0f6" /></linearGradient>
        <linearGradient id="lb-milk" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#efe3c6" /><stop offset=".45" stopColor="#fffdf6" /><stop offset="1" stopColor="#e8d9b8" /></linearGradient>
        <linearGradient id="lb-bench" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#c3cfe0" /><stop offset="1" stopColor="#8e9cb4" /></linearGradient>
        <clipPath id="lb-flask"><path d="M138 40h28v44l38 66c5 9-1 12-9 12H109c-8 0-14-3-9-12l38-66z" /></clipPath>
      </defs>
      <rect width="320" height="200" fill="url(#lb-bg)" />
      <rect x="22" y="16" width="74" height="74" rx="6" fill="#fff" opacity=".55" />
      <path d="M59 16v74M22 53h74" stroke="#cfdcf0" strokeWidth="3" />
      <rect y="156" width="320" height="44" fill="url(#lb-bench)" />
      <rect y="154" width="320" height="5" fill="#e8eff9" />
      <ellipse cx="152" cy="160" rx="62" ry="6" fill="#5a6a85" opacity=".25" />
      <g clipPath="url(#lb-flask)">
        <rect x="90" y="112" width="130" height="60" fill="url(#lb-milk)" />
        <ellipse cx="152" cy="112" rx="40" ry="5" fill="#fffef9" />
      </g>
      <path d="M138 40h28v44l38 66c5 9-1 12-9 12H109c-8 0-14-3-9-12l38-66z" fill="#fff" fillOpacity=".22" stroke="#9fb4d6" strokeWidth="2.2" />
      <rect x="134" y="35" width="36" height="7" rx="3.500" fill="#cfdcf0" />
      <path d="M144 52v32l-26 48" stroke="#fff" strokeWidth="3.500" strokeLinecap="round" opacity=".8" fill="none" />
      <rect x="226" y="98" width="18" height="58" rx="9" fill="#fff" fillOpacity=".4" stroke="#9fb4d6" strokeWidth="2" />
      <rect x="228" y="122" width="14" height="32" rx="7" fill="url(#lb-milk)" />
      <rect x="252" y="98" width="18" height="58" rx="9" fill="#fff" fillOpacity=".4" stroke="#9fb4d6" strokeWidth="2" />
      <rect x="254" y="116" width="14" height="38" rx="7" fill="#e9c46a" />
      <rect x="50" y="112" width="46" height="44" rx="4" fill="#fff" fillOpacity=".35" stroke="#9fb4d6" strokeWidth="2" />
      <rect x="52" y="128" width="42" height="26" rx="3" fill="url(#lb-milk)" />
      <path d="M50 122h10M50 134h8M50 146h10" stroke="#8aa0c4" strokeWidth="1.600" />
      <circle cx="152" cy="26" r="3" fill="#9ec5ff" opacity=".8" /><circle cx="160" cy="16" r="2" fill="#9ec5ff" opacity=".6" />
    </svg>
  );
}

export function FactoryArt() {
  return (
    <svg {...svgProps}>
      <defs>
        <linearGradient id="fa-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#c9deff" /><stop offset="1" stopColor="#f5f8ff" /></linearGradient>
        <linearGradient id="fa-wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#35527f" /><stop offset="1" stopColor="#1f3358" /></linearGradient>
        <linearGradient id="fa-metal" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#aab7c6" /><stop offset=".35" stopColor="#f3f6fa" /><stop offset=".7" stopColor="#c5d0dc" /><stop offset="1" stopColor="#8d9bae" /></linearGradient>
        <linearGradient id="fa-ground" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#b9c3d0" /><stop offset="1" stopColor="#8f9bab" /></linearGradient>
      </defs>
      <rect width="320" height="200" fill="url(#fa-sky)" />
      <path d="M0 150c40-24 90-30 140-12s120 4 180-14v76H0z" fill="#dfe9f7" />
      <rect y="160" width="320" height="40" fill="url(#fa-ground)" />
      <rect x="30" y="86" width="150" height="76" fill="url(#fa-wall)" />
      <path d="M30 86V62l30 24V62l30 24V62l30 24V62l30 24z" fill="#2c4a7c" />
      <rect x="152" y="38" width="14" height="50" fill="#54698c" />
      <circle cx="159" cy="30" r="8" fill="#fff" opacity=".85" /><circle cx="171" cy="19" r="11" fill="#fff" opacity=".6" /><circle cx="188" cy="10" r="13" fill="#fff" opacity=".4" />
      {[44, 68, 92, 116].map((x) => (<rect key={x} x={x} y="100" width="16" height="13" rx="1.500" fill="#ffe9a8" />))}
      <rect x="60" y="126" width="28" height="36" fill="#16233f" />
      <rect x="180" y="128" width="26" height="7" fill="#9aa9bf" />
      <rect x="200" y="82" width="34" height="80" fill="url(#fa-metal)" />
      <ellipse cx="217" cy="82" rx="17" ry="7" fill="#e2e9f2" />
      <rect x="244" y="96" width="42" height="66" fill="url(#fa-metal)" />
      <ellipse cx="265" cy="96" rx="21" ry="8" fill="#e2e9f2" />
      <path d="M200 110h34M244 124h42" stroke="#8d9bae" strokeWidth="2" />
      <ellipse cx="190" cy="164" rx="130" ry="5" fill="#3b4a66" opacity=".18" />
    </svg>
  );
}

export function GlassArt() {
  return (
    <svg {...svgProps}>
      <defs>
        <linearGradient id="gl-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fdf1f4" /><stop offset="1" stopColor="#f6d9e1" /></linearGradient>
        <linearGradient id="gl-milk" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#f0e6d3" /><stop offset=".5" stopColor="#fffefb" /><stop offset="1" stopColor="#eadfca" /></linearGradient>
        <clipPath id="gl-clip"><path d="M104 56h72l-9 100a9 9 0 0 1-9 8h-36a9 9 0 0 1-9-8z" /></clipPath>
      </defs>
      <rect width="320" height="200" fill="url(#gl-bg)" />
      <rect y="162" width="320" height="38" fill="#e6c9d2" />
      <rect y="160" width="320" height="4" fill="#f4e1e7" />
      <ellipse cx="140" cy="166" rx="48" ry="6" fill="#7b4a5a" opacity=".22" />
      <g clipPath="url(#gl-clip)">
        <rect x="90" y="76" width="100" height="100" fill="url(#gl-milk)" />
      </g>
      <ellipse cx="140" cy="76" rx="34" ry="5" fill="#fffefb" />
      <path d="M104 56h72l-9 100a9 9 0 0 1-9 8h-36a9 9 0 0 1-9-8z" fill="#fff" fillOpacity=".2" stroke="#cfa9b6" strokeWidth="2.200" />
      <path d="M113 64l7 86" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity=".8" />
      <path d="M118 70c6-14 14-4 22-12s16 6 24-2" stroke="#fffefb" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="122" cy="46" r="3.500" fill="#fffefb" /><circle cx="160" cy="42" r="2.500" fill="#fffefb" /><circle cx="140" cy="36" r="2" fill="#fffefb" />
    </svg>
  );
}

export function ShopArt() {
  const packs = PRODUCTS.map((p) => p);
  return (
    <>
      <svg {...svgProps}>
        <defs>
          <linearGradient id="sh-wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fbf3e2" /><stop offset="1" stopColor="#f0dfbd" /></linearGradient>
          <linearGradient id="sh-shelf" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#c9a26b" /><stop offset="1" stopColor="#a47e48" /></linearGradient>
        </defs>
        <rect width="320" height="200" fill="url(#sh-wall)" />
        <path d="M0 0h320v34l-16 14-16-14-16 14-16-14-16 14-16-14-16 14-16-14-16 14-16-14-16 14-16-14-16 14-16-14-16 14-16-14-16 14-16-14-16 14-16-14-16 14z" fill="#1d4ed0" />
        {[0, 2, 4, 6, 8].map((i) => (<rect key={i} x={i * 32} y="0" width="32" height="34" fill="#fff" opacity=".9" />))}
        <rect x="0" y="52" width="320" height="6" fill="url(#sh-shelf)" />
        <rect x="0" y="108" width="320" height="6" fill="url(#sh-shelf)" />
        {[18, 52, 86, 220, 254, 288].map((x) => (<rect key={x} x={x} y="68" width="22" height="40" rx="3" fill="#c7d6f2" />))}
        <rect y="168" width="320" height="32" fill="#d9c699" />
      </svg>
      <div className="shopshelf">
        {packs.map((p) => (<Image key={p.id} src={p.img} alt="" width={70} height={94} />))}
        {packs.map((p) => (<Image key={p.id + "b"} src={p.img} alt="" width={70} height={94} />))}
      </div>
    </>
  );
}

export function CustomerArt() {
  return (
    <>
      <GlassArt />
      <Image className="custpack" src={PRODUCTS[0].img} alt="" width={90} height={121} />
    </>
  );
}
