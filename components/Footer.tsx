import Image from "next/image";
import Link from "next/link";
import { Brand } from "./Brand";
import { Icon } from "./Icons";
import { SITE, SOCIAL } from "@/lib/data";

const LINKS = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/products", label: "Our Products", icon: "drop" },
  { href: "/about", label: "About Us", icon: "info" },
  { href: "/contact", label: "Contact", icon: "mail" },
  { href: "/faq", label: "FAQ", icon: "help" },
  { href: "/terms", label: "Terms & Conditions", icon: "doc" },
  { href: "/privacy", label: "Privacy Policy", icon: "lock" },
];

export default function Footer() {
  return (
    <footer className="ft">
      <div className="wrap">
        <div className="fgrid">
          <div>
            <span className=" bg-none"><Image src="/images/logo.png" alt="Ganga Amrit" width={200} height={176} /></span>
            <p className="fabout">Ganga Amrit is a modern dairy manufacturer processing fresh milk under strict quality standards, from our own facility in Chhatarpur, Madhya Pradesh.</p>
            <div className="soc" aria-label="Follow Ganga Amrit">
              {SOCIAL.map((s) => (
                <a key={s.name} className={s.cls} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} title={s.name}>
                  <Brand name={s.icon} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul className="fl">
              {LINKS.map((l) => (
                <li key={l.href} className="flex items-center gap-1">
                  <Icon name={l.icon} className="ficon h-[18px] w-[18px] shrink-0 text-[#8fb3ff]" />
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul className="fl">
              <li><Icon name="pin" className="ficon" /><span>{SITE.address.map((l) => (<span key={l} className="al">{l}</span>))}</span></li>
              <li><Icon name="phone" className="ficon" /><a href={`tel:${SITE.tel}`}>{SITE.phone}</a></li>
              <li><Icon name="mail" className="ficon" /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            </ul>
          </div>
        </div>
        <div className="fbar">
          <span>FSSAI Lic. No. {SITE.fssai} • GSTIN: {SITE.gstin}</span>
          <span>© {new Date().getFullYear()} Ganga Amrit • <a href="https://lexicalsoftware.in">Lexical Software</a></span>
        </div>
      </div>
    </footer>
  );
}
