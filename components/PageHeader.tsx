import Words from "./Words";

// Same header on every inner page so About, Products, FAQ, Contact and legal pages all look alike.
export default function PageHeader({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <section className="ph">
      <div className="wrap">
        <span className="kk">{kicker}</span>
        <h1><Words text={title} /></h1>
        {sub && <p>{sub}</p>}
      </div>
    </section>
  );
}
