import { Icon } from "./Icons";
import { COMING_SOON, SITE } from "@/lib/data";

const wa = (name: string) =>
  `https://wa.me/${SITE.wa}?text=${encodeURIComponent(`Hi Ganga Amrit, please let me know when ${name} is available.`)}`;

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <>
      {COMING_SOON.map((p) => (
        <a className="cs" key={p.name} href={wa(p.name)} target="_blank" rel="noopener noreferrer" aria-hidden={hidden} tabIndex={hidden ? -1 : undefined}>
          <span className="cs-i"><Icon name={p.icon} /></span>
          <b>{p.name}</b>
          <em>
            <span className="p1"><i className="dot" />Coming soon</span>
            <span className="p2">Notify me →</span>
          </em>
        </a>
      ))}
    </>
  );
}

export default function ComingSoon() {
  return (
    <section className="csec">
      <div className="wrap">
        <div className="fk">
          <span className="fk-t">On the way</span>
          <h2>More dairy products, coming soon.</h2>
          <p>As we grow, we plan to bring you more dairy essentials - while keeping our one promise constant: no compromise on quality.</p>
        </div>
      </div>
      <div className="cs-track" aria-label="Upcoming dairy products">
        <div><Row /><Row hidden /></div>
      </div>
      <p className="cs-note">Tap a product to ask us to notify you on WhatsApp when it launches.</p>
    </section>
  );
}
