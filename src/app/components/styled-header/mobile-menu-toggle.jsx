"use client";

import clsx from "clsx";

const MobileMenuToggle = ({ isOpen, toggleRef, onClick }) => {
  return (
    <div className="xl:hidden p-1.5 relative z-[120]">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className="relative flex h-9 w-9 items-center justify-center rounded-[4.8px] bg-primary-dark text-primary-white transition-timing cursor-pointer"
        onClick={onClick}
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
  );
};

export default MobileMenuToggle;
