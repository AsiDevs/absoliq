import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { createPageMetadata, pageConfig } from "@/utils/page-utils";

export const revalidate = 25920000;
export const dynamicParams = false;

const client = createClient();
const settings = await client.getSingle("settings");

export async function generateStaticParams() {
  const pages = await client.getAllByType("page", { fetch: ["page.title"] });

  const allPages = pages.map(({ uid }) => {
    let pageUid = uid === "home" ? [] : [uid];
    return { uid: pageUid };
  });

  return [...allPages];
}

export async function generateMetadata(props) {
  const params = await props.params;

  const { currentPageUid } = pageConfig(params);

  const page = await client.getByUID("page", currentPageUid).catch(() => null);

  return createPageMetadata(page, settings, params);
}

export default async function Page(props) {
  const params = await props.params;

  const { currentPage, currentPageUid } = pageConfig(params);

  const page = await client.getByUID("page", currentPageUid).catch(() => null);

  return (
    <>
      <SliceZone
        slices={page.data.slices}
        components={components}
        context={{
          page,
          settings,
          currentPage: currentPage,
          firstPage: page.url,
        }}
      />
    </>
  );
}
