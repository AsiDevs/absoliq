import { createClient } from "@/prismicio";
import { asText } from "@prismicio/client";
import { createBlogMetadata } from "@/utils/page-utils";
import getFullUrl from "@/utils/get-full-url";
import slugify from "slugify";
import { SliceZone } from "@prismicio/react";
import StyledContainer from "@/app/components/styled-container";
import StyledPrismicRichTextSingle from "@/app/components/styled-prismic-richtext-single";
import { components } from "@/slices";

export const revalidate = 25920000;
export const dynamicParams = false;

const client = createClient();
const settings = await client.getSingle("settings");

export default async function BlogPage({ params }) {
  const { uid } = await params;
  const page = await client
    .getByUID("blog", uid, {
      fetchLinks: ["blog_category.category"],
    })
    .catch(() => null);

  const schema = schemaTemplate(page);
  const categoryLabel = page.data?.category?.data?.category;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <StyledContainer>
        {categoryLabel && (
          <span className="mb-4 inline-flex rounded-[999px] bg-[#F3F4F6] px-3 py-1 text-body-small font-semibold text-text-heading">
            {categoryLabel}
          </span>
        )}

        <h1 className="text-title-x-large">{page.data.title}</h1>

        <h3>ToC</h3>
        <ol className={"list-decimal list-inside"}>
          {page.data?.body?.map(({ heading, content }, idx) => {
            return (
              <li key={idx}>
                <a href={`#${makeSlug(heading)}`}>
                  <StyledPrismicRichTextSingle
                    field={heading}
                    className={"inline-block text-title-small"}
                  />
                </a>
              </li>
            );
          })}
        </ol>

        {page.data?.body?.map(({ heading, content }, idx) => {
          return (
            <section key={idx} id={makeSlug(heading)} name={makeSlug(heading)}>
              <div>
                <StyledPrismicRichTextSingle
                  field={heading}
                  className={"inline-block my-3 text-title-medium"}
                />
              </div>
              <StyledPrismicRichTextSingle field={content} />
            </section>
          );
        })}
      </StyledContainer>
      <SliceZone
        slices={page.data.slices}
        components={components}
        context={{
          page,
          settings,
          currentUid: uid,
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
    headline: page.data.title || "Untitled Blog Post",
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
