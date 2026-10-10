import { Icon } from "./Icons";

const STEPS = [
  { icon: "bottle", label: "Milked at the farm", c: "#15803d", bg: "#dcfce7" },
  { icon: "cog", label: "Pasteurized & packed", c: "#1d4ed8", bg: "#dbeafe" },
  { icon: "store", label: "Reaches the dukaan", c: "#c2410c", bg: "#ffedd5" },
  { icon: "users", label: "In your glass", c: "#b45309", bg: "#fef3c7" },
];

// Animated "farm to customer" strip: a milk drop travels along a dashed line
// through each stage while every stage icon gently pulses. Pure CSS.
export default function MilkJourneyStrip() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="mj">
          <div className="mj-line" aria-hidden="true" />
          <span className="mj-drop" aria-hidden="true"><Icon name="bottle" /></span>
          <div className="mj-grid">
            {STEPS.map((s, i) => (
              <div className="mj-s" key={s.label} style={{ "--d": `${i * 0.12}s`, "--p": `${i * 0.4}s` } as React.CSSProperties}>
                <span className="mj-i" style={{ color: s.c, background: s.bg }}><Icon name={s.icon} /></span>
                <b>{s.label}</b>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
