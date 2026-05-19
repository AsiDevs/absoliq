"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { isActivePath, NAV_LINKS } from "@/lib/navigation";
import HeaderCtaButton from "./header-cta-button";
import MobileMenuToggle from "./mobile-menu-toggle";

const handleHashNavigation = (href, currentPathname) => {
  if (!href.includes("#")) return;
  const targetPath = href.split("#")[0] || "/";
  if (currentPathname !== targetPath) {
    sessionStorage.setItem("skip-next-route-loading", href);
  }
};

const MobileNavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event) => {
      const target = event.target;

      if (
        menuRef.current?.contains(target) ||
        toggleRef.current?.contains(target)
      ) {
        return;
      }

      setIsOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, [isOpen]);

  return (
    <>
      <MobileMenuToggle
        isOpen={isOpen}
        toggleRef={toggleRef}
        onClick={() => setIsOpen((current) => !current)}
      />

      <div
        className={clsx(
          "fixed left-0 right-0 bottom-0 top-[76px] z-[90] px-4 transition-timing md:top-[84px] xl:hidden",
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <button
          type="button"
          aria-label="Close navigation menu"
          className="absolute inset-0 bg-black/20"
          onClick={() => setIsOpen(false)}
        />
        <div
          ref={menuRef}
          className="relative mx-auto flex min-h-full max-w-[1130px] flex-col"
        >
          <div className="rounded-2xl bg-primary-white p-3 shadow-[0_24px_60px_rgba(0,0,0,0.16)]">
            <nav id="mobile-nav" className="mt-4 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "rounded-lg px-4 py-4 text-title-base text-text-heading transition-timing hover:bg-primary-light-2",
                    isActivePath(pathname, link.href)
                      ? "bg-primary-light-2 font-medium"
                      : "bg-primary-white",
                  )}
                  onClick={() => {
                    handleHashNavigation(link.href, pathname);
                    setIsOpen(false);
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-3 rounded-2xl bg-primary-white p-3 shadow-[0_24px_60px_rgba(0,0,0,0.16)]">
            <HeaderCtaButton
              className="w-full! justify-between!"
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavMenu;
