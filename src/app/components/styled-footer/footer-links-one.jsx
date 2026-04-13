import React from "react";
import { PrismicNextLink } from "@prismicio/next";

const FooterLinksOne = () => {
  return (
    <div className="md:max-w-55 min-w-55">
      <h5 className="text-body-small mb-[5.1px] underline underline-offset-2">
        Customer Service
      </h5>
      <ul className="flex flex-col gap-1.5">
        <SingleLink link={{ url: "/" }} text={"Delivery Information"} />
        <SingleLink link={{ url: "/" }} text={"Discreet Packaging"} />
        <SingleLink link={{ url: "/" }} text={"Returns & Refunds"} />
        <SingleLink link={{ url: "/" }} text={"Terms & Conditions"} />
        <SingleLink link={{ url: "/" }} text={"Privacy Policy"} />
      </ul>
    </div>
  );
};

export default FooterLinksOne;

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
