import React from "react";
import { PrismicNextLink } from "@prismicio/next";

const CopyrightLinks = ({ links }) => {
  if (!links || !links?.length) return null;

  return (
    <ul className={"ms-2 flex gap-x-4 md:gap-y-0  md:gap-x-[30px]"}>
      {links.map((link, index) => (
        <li key={index}>
          <PrismicNextLink field={link} />
        </li>
      ))}
    </ul>
  );
};

export default CopyrightLinks;
