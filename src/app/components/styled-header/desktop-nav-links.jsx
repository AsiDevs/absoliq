"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isActivePath } from "@/lib/navigation";
import { asLink } from "@prismicio/client";

const getNavHref = (link) => {
  const href = asLink(link) ?? "";
  try {
    const { pathname, search, hash } = new URL(href);
    return pathname + search + hash;
  } catch {
    return href;
  }
};

const handleHashNavigation = (href, currentPathname) => {
  if (!href.includes("#")) return;
  const targetPath = href.split("#")[0] || "/";
  if (currentPathname !== targetPath) {
    sessionStorage.setItem("skip-next-route-loading", href);
  }
};

const DesktopNavLinks = ({ navLinks = [] }) => {
  const pathname = usePathname();
  const navRef = useRef(null);

  useEffect(() => {
    const navElement = navRef.current;
    if (!navElement) return;

    const navLinks = navElement.querySelectorAll("[data-nav-href]");

    navLinks.forEach((element) => {
      const isActive = isActivePath(pathname, element.dataset.navHref || "");

      element.classList.toggle("bg-primary-light-2", isActive);
      element.classList.toggle("font-medium", isActive);
    });
  }, [pathname]);

  return (
    <div
      ref={navRef}
      className="absolute left-1/2 flex -translate-x-1/2 items-center justify-center gap-2"
    >
      {navLinks.map(({ link }, idx) => (
        <Link
          key={idx}
          href={getNavHref(link)}
          data-nav-href={getNavHref(link)}
          className="rounded-lg px-4 py-3 text-body-small text-[#1A1A1A] transition-timing hover:bg-primary-light-2"
          onClick={() => handleHashNavigation(getNavHref(link), pathname)}
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
};

export default DesktopNavLinks;
