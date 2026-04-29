import React from "react";
import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";
import StyledHeaderNav from "./header-nav";

const StyledHeader = ({ settings }) => {
  return (
    <header className="section-bg py-10 md:py-11.25 xl:py-11.5">
      <nav className="flex justify-between items-center fixed w-[91.5%] md:w-[90%] xl:w-full left-[50%] -translate-x-[50%] rounded-xl z-[140] top-3 md:top-4 bg-primary-white max-w-[1130px] xl:mx-auto px-4 py-1 nav-shadow">
        <Link href={"/"}>
          <PrismicNextImage
            className="block w-full max-w-28"
            field={settings?.data?.header_logo}
          />
        </Link>
        <StyledHeaderNav />
      </nav>
    </header>
  );
};

export default StyledHeader;
