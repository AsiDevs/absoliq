"use client";

import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isActivePath } from "@/lib/navigation";

const FooterLinksTwo = ({ navigation }) => {
  const pathname = usePathname();
  const links = navigation?.data?.links_two;

  return (
    <div className="min-w-40 md:min-w-20 xl:min-w-45 xl:max-w-45">
      <h5 className="text-title-base-blog font-bold mb-3 md:mb-6">
        {navigation?.data?.link_two_title}
      </h5>
      <ul className="flex flex-col gap-1.5">
        {links?.map(({ link }, idx) => (
          <SingleLink key={idx} link={link} pathname={pathname} text={link?.text} />
        ))}
      </ul>
    </div>
  );
};

export default FooterLinksTwo;

const SingleLink = ({ link, pathname, text }) => {
  if (!link || !text) return null;

  let href = link?.url ?? "";
  try {
    const { pathname: p, search, hash } = new URL(href);
    href = p + search + hash;
  } catch {
    // already relative
  }

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          "inline-flex text-body-small-s transition-timing",
          isActivePath(pathname, href) ? "font-medium" : "font-normal",
        )}
      >
        {text}
      </Link>
    </li>
  );
};
