import CountUp from "./CountUp";
import { Icon } from "./Icons";
import { SITE } from "@/lib/data";

const STATS = [
  { icon: "drop", label: "Milk Variants", color: "#f25c05", to: 3, suffix: "", text: "Gold, Chai Special & Double Toned" },
  { icon: "users", label: "Sourcing", color: "#16a34a", to: 100, suffix: "%", text: "Sourced from local Chhatarpur farmers" },
  { icon: "truck", label: "Reach", color: "#2563eb", to: 1, suffix: "+ State", text: "Starting in Chhatarpur, Madhya Pradesh, growing steadily" },
];

// White card that overlaps the bottom edge of the hero.
export default function StatsCard() {
  return (
    <div className="wrap statwrap">
      <div className="statcard">
        {STATS.map((s) => (
          <div className="stat" key={s.label} style={{ "--c": s.color } as React.CSSProperties}>
            <div className="lb"><Icon name={s.icon} />{s.label}</div>
            <b><CountUp to={s.to} suffix={s.suffix} /></b>
            <span className="d">{s.text}</span>
          </div>
        ))}
      </div>
      <p className="lic2">Quality Tested • Hygiene Standards • FSSAI Lic. No. {SITE.fssai} • GSTIN: {SITE.gstin}</p>
    </div>
  );
}
