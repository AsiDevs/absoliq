import React from "react";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

const CopyrightLinks = ({}) => {
  return (
    <div className={"flex gap-x-3 items-center"}>
      <Link className="text-body-caption" href={"/privacy-policy"}>
        Privacy Policy
      </Link>
      <div className="w-[1px] h-3 bg-text-heading" />
      <Link className="text-body-caption" href={"/terms-of-service"}>
        Terms of Service
      </Link>
      <div className="hidden xl:block w-[1px] h-3 bg-text-heading" />
    </div>
  );
};

export default CopyrightLinks;
