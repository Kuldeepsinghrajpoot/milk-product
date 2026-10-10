const ITEMS = ["🥛 Fresh from Chhatarpur, MP", "✅ FSSAI Licensed", "🚚 Daily Distribution", "🏆 Trusted by Retailers & Distributors", "गंगा Amrit - शुद्धता का वादा"];

export default function Marquee() {
  const row = ITEMS.map((t) => <span key={t}>{t}</span>);
  return (
    <div className="mqx" aria-hidden="true">
      <div>{row}{row}{row}{row}</div>
    </div>
  );
}
