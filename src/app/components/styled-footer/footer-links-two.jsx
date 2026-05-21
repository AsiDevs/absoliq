"use client";

import React from "react";
import clsx from "clsx";
import { PrismicNextLink } from "@prismicio/next";
import { usePathname } from "next/navigation";
import { isActivePath } from "@/lib/navigation";

const FooterLinksTwo = () => {
  const pathname = usePathname();

  return (
    <div className="min-w-40 md:min-w-20 xl:min-w-45 xl:max-w-45">
      <h5 className="text-title-base-blog font-bold mb-3 md:mb-6">Solution</h5>
      <ul className="flex flex-col gap-1.5">
        <SingleLink
          link={{ url: "/solutions" }}
          pathname={pathname}
          text={"The ABS Growth Model"}
        />
      </ul>
    </div>
  );
};

export default FooterLinksTwo;

const SingleLink = ({ link, pathname, text }) => {
  if (!link || !text) return null;
  return (
    <li>
      <PrismicNextLink
        field={link}
        className={clsx(
          "inline-flex text-body-small-s transition-timing",
          isActivePath(pathname, link.url) ? "font-medium" : "font-normal",
        )}
      >
        {text}
      </PrismicNextLink>
    </li>
  );
};
