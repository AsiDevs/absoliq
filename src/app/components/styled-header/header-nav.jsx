"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { NAV_LINKS } from "@/lib/navigation";
import { IoArrowForwardSharp } from "react-icons/io5";

const StyledHeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

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
      <div className="hidden xl:flex xl:items-center xl:ml-auto">
        <div className="absolute left-1/2 flex -translate-x-1/2 items-center justify-center gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-3 text-body-small text-[#1A1A1A] transition-timing"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          href="/contact-us"
          className="btn btn-secondary flex items-center justify-between! rounded-xl"
        >
          <span>Talk to an Expert</span>
          <span className="icon">
            <IoArrowForwardSharp />
          </span>
        </Link>
      </div>

      <div className="xl:hidden p-1.5 relative z-[120]">
        <button
          ref={toggleRef}
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="relative flex h-9 w-9 items-center justify-center rounded-[4.8px] bg-primary-dark text-primary-white transition-timing cursor-pointer"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span
            className={clsx(
              "absolute h-px w-4 rounded-md bg-current transition-timing",
              isOpen ? "translate-y-0 rotate-45" : "-translate-y-[5px]",
            )}
          />
          <span
            className={clsx(
              "absolute h-px w-4 rounded-md bg-current transition-timing",
              isOpen ? "opacity-0" : "opacity-100",
            )}
          />
          <span
            className={clsx(
              "absolute h-px w-4 rounded-md bg-current transition-timing",
              isOpen ? "translate-y-0 -rotate-45" : "translate-y-[5px]",
            )}
          />
        </button>
      </div>

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
                  className="rounded-lg bg-primary-light-2 px-4 py-4 text-title-base text-text-heading transition-timing hover:bg-[#ece7e1]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-3 rounded-2xl bg-primary-white p-3 shadow-[0_24px_60px_rgba(0,0,0,0.16)]">
            <Link
              href="/contact-us"
              className="btn btn-secondary flex items-center justify-between! w-full! rounded-xl"
              onClick={() => setIsOpen(false)}
            >
              <span>Talk to an Expert</span>
              <span className="icon">
                <IoArrowForwardSharp />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default StyledHeaderNav;
