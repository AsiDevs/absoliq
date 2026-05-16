"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isActivePath, NAV_LINKS } from "@/lib/navigation";

const DesktopNavLinks = () => {
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
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          data-nav-href={link.href}
          className="rounded-lg px-4 py-3 text-body-small text-[#1A1A1A] transition-timing hover:bg-primary-light-2"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default DesktopNavLinks;
