import React from "react";
import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";

const StyledHeader = ({ settings }) => {
  return (
    <div className="section-bg py-10 md:py-11.25 xl:py-11.5">
      <nav className="flex justify-between items-center fixed w-full left-[50%] -translate-x-[50%] rounded-xl z-100 top-3 md:top-4 bg-primary-white max-w-[1130px] mx-auto px-4 py-1 shadow-2xl">
        <Link href={"/"}>
          <PrismicNextImage
            className="block w-full max-w-28"
            field={settings?.data?.header_logo}
          />
        </Link>
        <div></div>
        <div className="p-1.5">
          <div className="w-fit flex flex-col gap-y-0.75 rounded-[4.8px] bg-primary-dark cursor-pointer py-3 px-3">
            <div className="w-3 h-px rounded-md bg-primary-white" />
            <div className="w-3 h-px rounded-md bg-primary-white" />
            <div className="w-3 h-px rounded-md bg-primary-white" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default StyledHeader;
