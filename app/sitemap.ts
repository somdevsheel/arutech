import { MetadataRoute } from "next";
import { products } from "@/lib/products";

const BASE_URL = "https://arutechconsultancy.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...products.flatMap((p) => [
      {
        url: `${BASE_URL}/products/${p.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
      ...(p.privacyPolicy
        ? [{
            url: `${BASE_URL}/products/${p.slug}/privacy-policy`,
            lastModified: new Date(p.privacyPolicy.lastUpdated),
            changeFrequency: "yearly" as const,
            priority: 0.4,
          }]
        : []),
    ]),
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date("2026-04-04"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/terms-of-service`,
      lastModified: new Date("2026-04-04"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/cookie-policy`,
      lastModified: new Date("2026-04-04"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
