"use client";

import React from "react";
import clsx from "clsx";
import { PrismicNextLink } from "@prismicio/next";
import { usePathname } from "next/navigation";
import { isActivePath } from "@/lib/navigation";

const FooterLinksTwo = () => {
  const pathname = usePathname();

  return (
    <div className="min-w-40 md:min-w-55 md:max-w-55">
      <h5 className="text-body-small mb-[5.1px] underline underline-offset-2">
        Quick Links
      </h5>
      <ul className="flex flex-col gap-1.5">
        <SingleLink link={{ url: "/about-us" }} pathname={pathname} text={"About Us"} />
        <SingleLink link={{ url: "/blogs" }} pathname={pathname} text={"Blogs"} />
        <SingleLink link={{ url: "/newsletter" }} pathname={pathname} text={"Newsletter"} />
        <SingleLink link={{ url: "/contact-us" }} pathname={pathname} text={"Contact Us"} />
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
