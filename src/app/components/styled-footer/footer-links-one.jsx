"use client";

import React from "react";
import clsx from "clsx";
import { PrismicNextLink } from "@prismicio/next";
import { usePathname } from "next/navigation";
import { isActivePath } from "@/lib/navigation";

const FooterLinksOne = () => {
  const pathname = usePathname();

  return (
    <div className="min-w-40 md:min-w-45 md:max-w-45">
      <h5 className="text-title-base-blog font-bold mb-3 md:mb-6">Company</h5>
      <ul className="flex flex-col gap-1.5">
        <SingleLink
          link={{ url: "/about-us" }}
          pathname={pathname}
          text={"About Us"}
        />
        <SingleLink
          link={{ url: "/contact-us" }}
          pathname={pathname}
          text={"Contact Us"}
        />
        <SingleLink
          link={{ url: "/blogs" }}
          pathname={pathname}
          text={"Blogs"}
        />
        <SingleLink
          link={{ url: "/#team" }}
          pathname={pathname}
          text={"Team"}
        />
      </ul>
    </div>
  );
};

export default FooterLinksOne;

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
