import { createClient } from "@/prismicio";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://absoliq.com";

export default async function sitemap() {
  const client = createClient();

  const [pages, blogs] = await Promise.all([
    client.getAllByType("page"),
    client.getAllByType("blog"),
  ]);

  const pageEntries = pages.map((doc) => ({
    url: doc.uid === "home" ? BASE_URL : `${BASE_URL}/${doc.uid}`,
    lastModified: new Date(doc.last_publication_date).toISOString(),
    changeFrequency: "monthly",
    priority: doc.uid === "home" ? 1 : 0.8,
  }));

  const blogEntries = blogs.map((doc) => ({
    url: `${BASE_URL}/blog/${doc.uid}`,
    lastModified: new Date(doc.last_publication_date).toISOString(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...pageEntries, ...blogEntries];
}
