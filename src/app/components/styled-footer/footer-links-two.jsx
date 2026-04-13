import React from "react";
import { PrismicNextLink } from "@prismicio/next";

const FooterLinksTwo = () => {
  return (
    <div className="min-w-40 md:min-w-55 md:max-w-55">
      <h5 className="text-body-small mb-[5.1px] underline underline-offset-2">
        Quick Links
      </h5>
      <ul className="flex flex-col gap-1.5">
        <SingleLink link={{ url: "/" }} text={"About Us"} />
        <SingleLink link={{ url: "/" }} text={"Collections"} />
        <SingleLink link={{ url: "/" }} text={"Blog"} />
        <SingleLink link={{ url: "/" }} text={"FAQs"} />
        <SingleLink link={{ url: "/" }} text={"Contact Us"} />
      </ul>
    </div>
  );
};

export default FooterLinksTwo;

const SingleLink = ({ link, text }) => {
  if (!link || !text) return null;
  return (
    <li>
      <PrismicNextLink field={link} className="text-body-small-s">
        {text}
      </PrismicNextLink>
    </li>
  );
};
