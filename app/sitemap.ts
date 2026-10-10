import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/products", "/about", "/faq", "/contact", "/terms", "/privacy"].map((p) => ({ url: `${SITE.url}${p}`, lastModified: new Date() }));
}
