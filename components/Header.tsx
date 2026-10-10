"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/data";
import { Icon } from "./Icons";

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [raised, setRaised] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setRaised(y > 10);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`${open ? "open" : ""} ${raised ? "raised" : ""}`}>
      <div className="wrap">
        <Link className="logo" href="/" aria-label="Ganga Amrit - Home" onClick={closeMenu}>
          <Image src="/images/logo.png" alt="Ganga Amrit" width={520} height={426} />
        </Link>
        <nav>
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={path === n.href ? "on" : ""}
              onClick={closeMenu}
            >
              <Icon name={n.icon} />
              {n.label}
            </Link>
          ))}
        </nav>
        <Link className="hcta" href="/contact" onClick={closeMenu}>
          <span>Enquiry</span>
          <span className="hcta-i"><Icon name="arrow" /></span>
        </Link>
        <button
          type="button"
          className="mb"
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          Menu
        </button>
      </div>
    </header>
  );
}
