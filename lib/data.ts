export const SITE = {
  name: "Ganga Amrit",
  url: "https://www.gangaamrit.co.in",
  phone: "+91 74158 02748",
  tel: "+917415802748",
  wa: "917415802748",
  email: "info@gangaamrit.co.in",
  address: ["Ganga Milk Products,", "Industrial Area, Ward No. 01,", "Chhatarpur, Madhya Pradesh - 471001"],
  fssai: "11425550000011",
  gstin: "23MQKPS9714F1Z9",
};

export const NAV = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/products", label: "Products", icon: "drop" },
  { href: "/about", label: "About Us", icon: "info" },
];

export type Product = {
  id: string; tag: string; title: string; sub: string; h4: string; desc: string;
  img: string; w: number; h: number; color: string; badge: string; fatW: number; fatLabel: string; facts: [string, string][];
};

export const PRODUCTS: Product[] = [
  { id: "gold", tag: "Ganga Amrit · Full cream", title: "Gold - Full Cream", sub: "6% fat", h4: "Rich and creamy",
    desc: "Thick, creamy full cream milk, made for dahi, sweets and everyday drinking.", img: "/images/gold.webp", w: 600, h: 780, color: "#d9480f",
    badge: "Full cream", fatW: 100, fatLabel: "6%", facts: [["Type", "Pasteurised full cream milk"], ["Fat", "6%"]] },
  { id: "chai", tag: "Ganga Amrit · For the perfect chai", title: "Chai Special", sub: "4.5% fat min.", h4: "Made for the perfect cup of chai",
    desc: "Strong, creamy milk that gives your chai its body and colour, every single time.", img: "/images/chai-special.webp", w: 600, h: 767, color: "#6f2210",
    badge: "Best for chai", fatW: 75, fatLabel: "4.5% min.", facts: [["Fat", "4.5% minimum"], ["SNF", "8.0% minimum"]] },
  { id: "dt", tag: "Ganga Amrit · Everyday milk", title: "Double Toned Milk", sub: "1.5% fat", h4: "Light, everyday milk",
    desc: "Light and easy milk for the whole family, standardized for consistent Fat% and SNF%.", img: "/images/double-toned.webp", w: 600, h: 862, color: "#b97f00",
    badge: "Everyday milk", fatW: 25, fatLabel: "1.5%", facts: [["Type", "Double toned milk"], ["Fat", "1.5%"]] },
];

export const SIZES = ["180 ml", "500 ml", "1 L"];

export const STEPS = [
  { icon: "store", tc: "#16a34a", tb: "#dcfce7", title: "Collection", text: "Milk is collected directly from local farmers and dairy farms around Chhatarpur, with fair pricing and regular procurement." },
  { icon: "thermo", tc: "#2563eb", tb: "#dbeafe", title: "Testing & Chilling", text: "Every batch is tested for Fat% and SNF%, then chilled quickly at our Bulk Milk Cooling (BMC) system to keep it fresh." },
  { icon: "cog", tc: "#ea580c", tb: "#ffedd5", title: "Pasteurization & Packing", text: "Milk is pasteurized and packed on our automatic packaging line, using stainless-steel equipment throughout." },
];

export const JOURNEY = [
  { icon: "cow", label: "Farm" }, { icon: "lab", label: "Collection & Testing" }, { icon: "factory", label: "Factory" },
  { icon: "shop", label: "Dukaan" }, { icon: "glass", label: "Customer" },
];

export const FACILITY = ["Milk Testing Lab", "Bulk Milk Cooling (BMC)", "Pasteurization System", "Automatic Packaging", "Cold Storage", "Stainless-Steel Equipment", "Quality Control Team", "Local Farmer Network"];

export const PROCESS: { title: string; text: string; rows: [string, string][] }[] = [
  { title: "Our Milk", text: "Three variants, each standardized for a consistent Fat% and SNF%.", rows: [["Gold - Full Cream", "6% Fat"], ["Chai Special", "4.5% Fat min."], ["Double Toned", "1.5% Fat"]] },
  { title: "Cold Chain", text: "Milk is chilled soon after collection and kept cold through storage and dispatch.", rows: [["Storage", "Bulk milk coolers"], ["Transport", "Chilled dispatch"], ["Monitoring", "Every stage"]] },
  { title: "Packaging & Hygiene", text: "Automatic pouch packing keeps every batch consistent and hygienic from filling to sealing.", rows: [["Packing", "Automatic pouch filling"], ["Sizes", "180 ml, 500 ml & 1 L"], ["Hygiene", "Sanitized filling lines"]] },
];

export const FAQS = [
  { q: "Which milk products do you offer?", a: "Gold (Full Cream), Chai Special, and Double Toned Milk. See our Products page for Fat% and SNF% details." },
  { q: "Is Ganga Amrit FSSAI licensed and GST registered?", a: "Yes, both. FSSAI Lic. No. 11425550000011 • GSTIN: 23MQKPS9714F1Z9" },
  { q: "How can I become a distributor or retailer?", a: "Reach out through our Contact page or WhatsApp with your city and expected volume, and our team will get back to you." },
];

export const GALLERY = [
  { icon: "factory", cap: "Processing Hall — Pasteurization Line", alt: "Ganga Amrit processing hall with pasteurization and packaging lines" },
  { icon: "lab", cap: "In-House Quality Testing Lab", alt: "In-house milk quality testing laboratory" },
  { icon: "tank", cap: "Bulk Milk Chilling & Receiving Dock", alt: "Bulk milk chilling and receiving dock" },
  { icon: "lab", cap: "Fat% & SNF% Lab Analysis", alt: "Lab testing setup for Fat% and SNF% analysis" },
  { icon: "belt", cap: "Automatic Pouch Packing Line", alt: "Automatic pouch packing machine" },
  { icon: "tank", cap: "Stainless-Steel Processing Plant", alt: "Stainless-steel milk processing plant" },
  { icon: "truck", cap: "Daily Chilled Milk Dispatch", alt: "Chilled milk tanker used for daily dispatch" },
  { icon: "tank", cap: "Processing Tanks & Piping", alt: "Overhead piping and processing tanks at the facility" },
].map((g, i) => ({ ...g, src: `/gallery/factory-${i + 1}.jpg` }));

export const TERMS: { h: string; p: string }[] = [
  { h: "1. About this website", p: "This website is operated by Ganga Amrit, Ganga Ice Factory and Milk Products, Industrial Area, Ward No. 01, Chhatarpur, Madhya Pradesh - 471001. By using this website you agree to these terms." },
  { h: "2. Product information", p: "We try to keep product details such as variants, fat and SNF values, and pack sizes accurate. Pack images are for illustration, and actual packaging, prices and availability may change without notice. Please confirm details with us before placing an order." },
  { h: "3. Enquiries and orders", p: "Distributor, agency, retail and bulk supply enquiries made through this website or WhatsApp are not binding orders. Supply, pricing and delivery terms are confirmed directly by our team." },
  { h: "4. Intellectual property", p: "The Ganga Amrit name, logo, pack designs, text and images on this website belong to Ganga Amrit and may not be copied or used without our written permission." },
  { h: "5. Limitation of liability", p: "This website is provided as is. To the extent permitted by law, we are not liable for any loss arising from the use of, or inability to use, this website or from errors in the information shown on it." },
  { h: "6. Governing law", p: "These terms are governed by the laws of India. Courts at Chhatarpur, Madhya Pradesh will have jurisdiction." },
  { h: "7. Changes and contact", p: "We may update these terms from time to time. For questions, write to info@gangaamrit.co.in or call +91 74158 02748." },
];
export const PRIVACY: { h: string; p: string }[] = [
  { h: "1. What we collect", p: "If you use our enquiry form, you enter your name, phone number, email, city, expected volume and the type of enquiry. These details are emailed to our team through our email service provider (Resend). We do not keep a separate database of them." },
  { h: "2. How we use it", p: "We use the details you send us through the form, WhatsApp, phone or email only to reply to your enquiry and to arrange supply. We do not sell your details." },
  { h: "3. Third parties", p: "Enquiry form emails are delivered through Resend, and messages sent on WhatsApp are handled under WhatsApp's own terms and privacy policy. Fonts are served through Next.js and photos of our factory may load from our main website." },
  { h: "4. Cookies", p: "This website does not use advertising or tracking cookies of its own." },
  { h: "5. Keeping your information", p: "We keep enquiry messages only as long as needed to deal with your enquiry and our business records." },
  { h: "6. Your choices", p: "You can ask us to correct or delete the details you shared with us by writing to info@gangaamrit.co.in." },
  { h: "7. Changes and contact", p: "We may update this policy from time to time. Questions can be sent to info@gangaamrit.co.in or +91 74158 02748." },
];

export const COMING_SOON = [
  { name: "Ghee", icon: "ghee" },
  { name: "Makkhan (Butter)", icon: "cube" },
  { name: "Lassi", icon: "cup" },
  { name: "Flavoured Milk", icon: "sparkle" },
  { name: "Chaas (Buttermilk)", icon: "drop" },
  { name: "Paneer", icon: "cube" },
  { name: "Dahi / Curd", icon: "bottle" },
];

export const SOCIAL = [
  { name: "Instagram", href: "https://www.instagram.com/ganga__amrit/", icon: "instagram", cls: "ig" },
  { name: "Facebook", href: "https://www.facebook.com/OfficialGangaamrit/", icon: "facebook", cls: "fb" },
  { name: "Google", href: "https://share.google/M3gzeG5nLKsAwTvQ2", icon: "google", cls: "gg" },
  { name: "WhatsApp", href: "https://wa.me/917415802748", icon: "whatsapp", cls: "wa" },
];

export const VISION = {
  paras: [
    "Ganga Amrit was born with a simple vision — to bring fresh, pure and quality milk from our own region closer to every family.",
    "We envision building a dairy brand that people can trust not only for the quality of its products, but also for the values behind them. From local farmers and transparent milk procurement to hygienic processing, quality testing and responsible production, every step is driven by our commitment to purity, freshness and consistency.",
    "At Ganga Amrit, there is no compromise on quality. Every product goes through defined quality checks and testing before it reaches the market, because we believe that quality is not just a promise — it is a responsibility.",
    "Our journey begins in Chhatarpur, with a long-term vision to expand across the region and create a strong dairy ecosystem that connects farmers, consumers, employees and communities.",
    "As we grow, we aim to introduce new dairy products, create meaningful employment opportunities, support women empowerment, strengthen local dairy farmers and contribute to the economic growth of the communities we serve.",
  ],
  quoteA: "Our vision is not just to build a milk brand.",
  quoteB: "It is to build a trusted dairy ecosystem — rooted in our city, connected with our farmers, and growing with every family we serve.",
  sign: "Ganga Amrit — Suddhta Ka Wada.",
};
