"use client";

import clsx from "clsx";
import { PrismicNextLink } from "@prismicio/next";
import { usePathname } from "next/navigation";
import { isActivePath } from "@/lib/navigation";

/**
 * @typedef {import("@prismicio/client").Content.FooterLinkListSlice} FooterLinkListSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FooterLinkListSlice>} FooterLinkListProps
 * @param {FooterLinkListProps}
 */
const FooterLinkList = ({ slice }) => {
  const pathname = usePathname();
  if (!slice) return null;

  return (
    <div>
      <h5 className="text-title-base font-medium mb-[16px]">
        {slice.primary.title}
      </h5>
      <ul className=" flex flex-col gap-[12px]">
        {slice.primary.links.map((item, idx) => (
          <li key={idx}>
            <PrismicNextLink
              field={item}
              className={clsx(
                "inline-flex text-body-base transition-timing",
                isActivePath(pathname, item.url) ? "font-medium" : "font-normal",
              )}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkList;
