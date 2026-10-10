import WhatsAppIcon from "./WhatsAppIcon";
import { SectionHead, Strip } from "./Section";
import ContactForm from "./ContactForm";
import { Icon } from "./Icons";
import AboutCards from "./AboutCards";
import { SITE, VISION } from "@/lib/data";

export function AboutSection({ bare }: { bare?: boolean }) {
  return (
    <section className="sec">
      <div className="wrap">
        {!bare && <SectionHead>About <em>Ganga Amrit</em> | गंगा अमृत के बारे में</SectionHead>}
        <AboutCards />
      </div>
    </section>
  );
}

export function ContactSection({ bare }: { bare?: boolean }) {
  return (
    <section className="sec">
      <div className="wrap">
        {!bare && (
          <SectionHead p="Interested in stocking our milk or becoming a distributor? Fill this in and your enquiry is emailed straight to our team.">
            Let&apos;s bring Ganga Amrit <em>to your shop.</em>
          </SectionHead>
        )}
        <div className="box">
          <Strip label="B2B" accent="inquiries" right="Distributor · Retail · Bulk supply" />
          <div className="two" style={{ gridTemplateColumns: "1.1fr .9fr" }}>
            <ContactForm />
            <div className="info">
              <h3>Contact HQ</h3>
              <ul className="ci">
                <li><Icon name="pin" /><span>{SITE.address.map((l) => (<span key={l}>{l}<br /></span>))}</span></li>
                <li><Icon name="phone" /><a href={`tel:${SITE.tel}`}>{SITE.phone}</a></li>
                <li><Icon name="mail" /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              </ul>
              <p className="lic3">FSSAI Lic. No. {SITE.fssai}<br />GSTIN: {SITE.gstin}</p>
              <a className="btn wa sm" href={`https://wa.me/${SITE.wa}`}><WhatsAppIcon />Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LegalPage({ title, items }: { title: string; items: { h: string; p: string }[] }) {
  return (
    <section className="sec">
      <div className="wrap" style={{ maxWidth: 860 }}>
        <div className="box">
          <Strip label={title} right="Last updated: October 2026" />
          <div className="legal">
            {items.map((i) => (<div key={i.h}><h3>{i.h}</h3><p>{i.p}</p></div>))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function VisionSection() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="vis">
          <aside className="vis-q">
            <span className="fk-t">Our Vision</span>
            <h2>Our Vision</h2>
            <blockquote>
              <strong>{VISION.quoteA}</strong>
              <span>{VISION.quoteB}</span>
            </blockquote>
            <p className="vis-sign">{VISION.sign}</p>
          </aside>
          <div className="vis-b">
            {VISION.paras.map((t, i) => (<p key={i} className={i === 0 ? "lead2" : ""}>{t}</p>))}
          </div>
        </div>
      </div>
    </section>
  );
}
