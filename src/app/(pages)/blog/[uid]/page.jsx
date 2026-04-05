import { createClient } from "@/prismicio";
import { asText } from "@prismicio/client";
import { createBlogMetadata } from "@/utils/page-utils";
import getFullUrl from "@/utils/get-full-url";
import slugify from "slugify";

export const revalidate = 25920000;
export const dynamicParams = false;

const client = createClient();
const settings = await client.getSingle("settings");

export default async function BlogPage({ params }) {
  const { uid } = await params;
  const page = await client.getByUID("blog", uid).catch(() => null);

  const schema = schemaTemplate(page);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
    </>
  );
}

export async function generateStaticParams() {
  const pages = await client.getAllByType("blog", { fetch: ["blog.title"] });

  return pages.map((page) => {
    return { uid: page.uid };
  });
}

export async function generateMetadata(props) {
  const params = await props.params;

  const page = await client.getByUID("blog", params.uid).catch(() => null);

  return createBlogMetadata(page, params);
}

const schemaTemplate = (page) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": getFullUrl(page.url),
    },
    headline: asText(page.data.title) || "Untitled Blog Post",
    description: page.data.summary || "Blog post description",
    image: page.data.meta_image?.url || page.data.image?.url,
    publisher: {
      "@type": "Organization",
      name: asText(settings?.data?.siteTitle),
      logo: {
        "@type": "ImageObject",
        url: settings.data.header_logo.url,
      },
    },
    datePublished: page.data?.post_date
      ? new Date(page.data.post_date).toISOString()
      : page.first_publication_date,
    dateModified: page.last_publication_date,
  };
};

const makeSlug = (heading) =>
  slugify(asText(heading), { lower: true, strict: true });
