import { createClient } from "@/prismicio";
import { asText } from "@prismicio/client";
import { createBlogMetadata } from "@/utils/page-utils";
import getFullUrl from "@/utils/get-full-url";
import slugify from "slugify";
import { SliceZone } from "@prismicio/react";
import Image from "next/image";
import StyledContainer from "@/app/components/styled-container";
import StyledPrismicRichTextSingle from "@/app/components/styled-prismic-richtext-single";
import { StyledPrismicRichText } from "@/app/components/styled-prismic-rich-text";
import TableOfContents from "./table-of-contents";
import { components } from "@/slices";

export const revalidate = 25920000;
export const dynamicParams = false;

const client = createClient();
const settings = await client.getSingle("settings");

export default async function BlogPage({ params }) {
  const { uid } = await params;
  const page = await client
    .getByUID("blog", uid, {
      fetchLinks: ["blog_category.category", "author.name", "author.image"],
    })
    .catch(() => null);

  const schema = schemaTemplate(page);
  const categoryLabel = page.data?.category?.data?.category;
  const author = page.data?.author?.data;
  const postDate = page.data?.post_date || page.first_publication_date;
  const formattedPostDate = postDate ? formatPostDate(postDate) : null;
  const readTime = page.data?.read_time || getReadTime(page.data?.body);
  const tocItems =
    page.data?.body?.map(({ heading }) => ({
      id: makeSlug(heading),
      label: asText(heading),
    })) || [];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <StyledContainer>
        <div className="max-w-[955px] pb-15 pt-7.5 md:pt-10 xl:pt-15">
          {categoryLabel && (
            <span className="mb-4.5 inline-flex rounded-[2.67px] px-2 py-1.5 text-body-small-s text-text-light bg-primary-dark font-medium">
              {categoryLabel}
            </span>
          )}
          <h1 className="text-title-3x-large font-medium">{page.data.title}</h1>

          {/* author */}
          {author?.name && (
            <div className="mt-4.5 flex items-center gap-x-3">
              {author.image?.url && (
                <div className="overflow-hidden rounded-full">
                  <Image
                    src={author.image.url}
                    alt={author.image.alt || author.name}
                    width={48}
                    height={48}
                    unoptimized
                    className="h-12 w-12 object-cover"
                  />
                </div>
              )}
              <div>
                <p className="text-body-base font-bold text-text-heading">
                  {author.name}
                </p>
                <div className="flex items-center gap-x-3">
                  {readTime && (
                    <p className="text-body-small text-text-secondary opacity-50">
                      {readTime} {readTime > 1 ? "minutes" : "minute"}
                    </p>
                  )}
                  <div className="flex items-center gap-x-[1px] mb-1">
                    <div className="w-[3px] h-2.25 bg-text-secondary opacity-50" />
                    <div className="w-[3px] h-2.25 bg-text-secondary opacity-50" />
                    <div className="w-[3px] h-2.25 bg-text-secondary opacity-50" />
                  </div>
                  {formattedPostDate && (
                    <p className="text-body-small text-text-secondary opacity-50">
                      {formattedPostDate}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="xl:flex xl:items-start gap-x-5 py-7.5 md:py-10 xl:py-15">
          <div className="hidden xl:block sticky top-30 self-start 2xl:pr-20">
            <TableOfContents items={tocItems} />
          </div>
          <div className="xl:max-w-[808px] xl:pl-10">
            {page.data?.body?.map(({ heading, content }, idx) => {
              return (
                <section
                  key={idx}
                  id={makeSlug(heading)}
                  name={makeSlug(heading)}
                  className="scroll-mt-[100px]"
                >
                  <StyledPrismicRichTextSingle
                    field={heading}
                    className={
                      "inline-block text-title-x-large mb-5 font-medium"
                    }
                  />
                  <StyledPrismicRichText field={content} />
                </section>
              );
            })}
          </div>
        </div>
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

const formatPostDate = (date) =>
  new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));

const getReadTime = (body = []) => {
  const words = asText(
    body.flatMap(({ heading, content }) => [heading, content]),
  )
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  if (!words) {
    return null;
  }

  return `${Math.max(1, Math.ceil(words / 200))} min read`;
};
