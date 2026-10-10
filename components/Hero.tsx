import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/data";
import Words from "./Words";
import HeroVideo from "./HeroVideo";

export default function Hero() {
    return (
        <section className="hero2">
            <div className="hvid">
                <HeroVideo />
            </div>
            <div className="wrap hgrid">
                <div className="htxt">
                    <span className="kk">Welcome to Ganga Amrit</span>
                    <h1>
                        <Words text="Fresh Milk," />{" "}
                        <em>
                            <Words text="Made in Chhatarpur." start={0.2} />
                        </em>
                    </h1>
                    <p className="hi">ताज़ा दूध, छतरपुर से। शुद्धता का वादा.</p>
                    <p className="sub">
                        Ganga Amrit is Chhatarpur&apos;s first milk brand -
                        fresh, pure milk processed right here and delivered with
                        our promise: शुद्धता का वादा.
                    </p>
                    <div className="cta">
                        <Link className="btn acc" href="/contact">
                            Enquiry for Distributor &amp; Agency
                        </Link>
                        <Link className=" btn acc" href="/products">
                            See our milk
                        </Link>
                    </div>
                    <ul className="hb">
                        <li>FSSAI licensed</li>
                        <li>Daily distribution</li>
                        <li>Local farmers</li>
                    </ul>
                </div>
                <div className="packs">
                    {PRODUCTS.map((p) => (
                        <Image
                            key={p.id}
                            src={p.img}
                            alt={`Ganga Amrit ${p.title} milk pouch`}
                            width={p.w}
                            height={p.h}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
