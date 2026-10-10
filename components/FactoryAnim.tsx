const T = [0, 45, 90, 135, 180, 225, 270, 315];

function Gear({ cx, cy, r, color, cls }: { cx: number; cy: number; r: number; color: string; cls: string }) {
  return (
    <g className={`gear ${cls}`} style={{ transformOrigin: `${cx}px ${cy}px` }}>
      {T.map((a) => (
        <rect key={a} x={cx - r * 0.18} y={cy - r * 1.4} width={r * 0.36} height={r * 0.5} rx={1.5} fill={color} transform={`rotate(${a} ${cx} ${cy})`} />
      ))}
      <circle cx={cx} cy={cy} r={r} fill={color} />
      <circle cx={cx} cy={cy} r={r * 0.4} fill="#fff" />
      <circle cx={cx} cy={cy} r={r * 0.18} fill={color} />
    </g>
  );
}

// Animated packing line: milk tank, spinning gears, steam, a filling nozzle with
// falling milk drops, and pouches riding a moving conveyor belt.
export default function FactoryAnim() {
  return (
    <svg className="fa" viewBox="0 0 440 250" role="img" aria-label="Animated milk packing line">
      <defs>
        <clipPath id="beltclip"><rect x="20" y="150" width="400" height="60" /></clipPath>
        <clipPath id="tankclip"><rect x="34" y="62" width="52" height="92" rx="12" /></clipPath>
        <linearGradient id="mach" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#2b4a77" /><stop offset="1" stopColor="#1b3050" /></linearGradient>
        <linearGradient id="tankg" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#e8f0fb" /><stop offset=".5" stopColor="#ffffff" /><stop offset="1" stopColor="#dbe6f5" /></linearGradient>
      </defs>

      {/* soft backdrop */}
      <circle cx="220" cy="118" r="108" fill="#fff" opacity=".55" />
      <circle cx="220" cy="118" r="78" fill="#fff" opacity=".6" />

      {/* milk tank */}
      <rect x="34" y="62" width="52" height="92" rx="12" fill="url(#tankg)" stroke="#b7c6dd" strokeWidth="2" />
      <g clipPath="url(#tankclip)">
        <g className="wave">
          <path d="M20 96q9-7 18 0t18 0 18 0 18 0 18 0V160H20z" fill="#fff" stroke="#dbe6f5" strokeWidth="1" />
          <path d="M20 100q9-6 18 0t18 0 18 0 18 0 18 0V160H20z" fill="#f4f8ff" />
        </g>
      </g>
      <rect x="30" y="54" width="60" height="10" rx="5" fill="#8fa3c2" />
      <rect x="44" y="154" width="6" height="14" fill="#8fa3c2" />
      <rect x="70" y="154" width="6" height="14" fill="#8fa3c2" />
      <text x="60" y="130" textAnchor="middle" fontSize="9" fontWeight="700" fill="#2563eb">MILK</text>
      {/* pipe: tank to machine */}
      <path d="M86 78h40v-18h39" fill="none" stroke="#9aa9bf" strokeWidth="6" strokeLinejoin="round" />
      <path className="flow" d="M86 78h40v-18h39" fill="none" stroke="#fff" strokeWidth="2.4" strokeDasharray="4 7" strokeLinejoin="round" />

      {/* steam */}
      <circle className="steam s1" cx="190" cy="22" r="5" fill="#fff" />
      <circle className="steam s2" cx="204" cy="22" r="4" fill="#fff" />
      <circle className="steam s3" cx="176" cy="22" r="4" fill="#fff" />

      {/* gears */}
      <Gear cx={124} cy={110} r={17} color="#f97316" cls="g1" />
      <Gear cx={348} cy={74} r={14} color="#16a34a" cls="g2" />
      <Gear cx={376} cy={104} r={9} color="#2563eb" cls="g1" />

      {/* machine */}
      <rect x="165" y="28" width="110" height="82" rx="12" fill="url(#mach)" />
      <rect x="165" y="28" width="110" height="12" rx="6" fill="#3a5f93" />
      <rect x="178" y="48" width="60" height="30" rx="5" fill="#0f2038" />
      <text x="208" y="62" textAnchor="middle" fontSize="8" fontWeight="700" fill="#7dd3fc">GANGA AMRIT</text>
      <rect x="186" y="67" width="44" height="3" rx="1.5" fill="#1d4ed8" />
      <rect className="bar" x="186" y="67" width="44" height="3" rx="1.5" fill="#38bdf8" />
      <circle className="led l1" cx="252" cy="56" r="4" fill="#22c55e" />
      <circle className="led l2" cx="252" cy="70" r="4" fill="#f59e0b" />
      <rect x="178" y="88" width="84" height="6" rx="3" fill="#2a4a78" />
      <rect x="178" y="98" width="30" height="4" rx="2" fill="#3a5f93" />

      {/* nozzle + drops */}
      <rect x="208" y="110" width="24" height="34" fill="#2563eb" />
      <rect x="203" y="108" width="34" height="7" rx="3" fill="#1d4ed8" />
      <rect x="215" y="144" width="10" height="9" rx="2" fill="#60a5fa" />
      <circle className="drip d1" cx="220" cy="158" r="3" fill="#bfdbfe" />
      <circle className="drip d2" cx="220" cy="158" r="2.2" fill="#dbeafe" />

      {/* floor shadow + conveyor */}
      <ellipse cx="220" cy="236" rx="170" ry="6" fill="rgba(15,23,42,.12)" />
      <rect x="20" y="186" width="400" height="14" rx="6" fill="#c9d2dc" />
      <line className="beltdash" x1="28" y1="193" x2="412" y2="193" stroke="#fff" strokeWidth="2" strokeDasharray="8 10" opacity=".8" />
      <rect x="20" y="200" width="400" height="9" rx="4" fill="#9aa9bf" />
      {[44, 120, 196, 272, 348].map((x) => (
        <g key={x}>
          <circle cx={x} cy="215" r="6" fill="#64748b" />
          <circle className="roll" cx={x} cy="215" r="6" fill="none" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="3 5" style={{ transformOrigin: `${x}px 215px` }} />
        </g>
      ))}
      <rect x="40" y="209" width="6" height="14" fill="#8191a8" />
      <rect x="394" y="209" width="6" height="14" fill="#8191a8" />

      {/* pouches */}
      <g clipPath="url(#beltclip)">
        {[0, -1.6, -3.2, -4.8, -6.4].map((dl) => (
          <g className="jar" key={dl} style={{ animationDelay: `${dl}s` }}>
            <rect x="0" y="160" width="26" height="26" rx="4" fill="#fff" stroke="#f97316" strokeWidth="2" />
            <rect x="0" y="160" width="26" height="8" rx="3" fill="#ea580c" />
            <rect x="5" y="171" width="16" height="9" rx="2" fill="#dbeafe" />
            <text x="13" y="178" textAnchor="middle" fontSize="6" fontWeight="800" fill="#1d4ed0">GA</text>
          </g>
        ))}
      </g>
    </svg>
  );
}
