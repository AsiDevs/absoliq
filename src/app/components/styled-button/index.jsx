import React from "react";
import { PrismicNextLink } from "@prismicio/next";
import { IoArrowForwardSharp } from "react-icons/io5";

const StyledButton = ({ variant = "primary", link = {}, className }) => {
  if (variant === "link") return <Link link={link} />;
  if (variant === "secondary") return <Secondary link={link} />;
  return <Primary link={link} />;
};

const Primary = ({ link }) => {
  return (
    <PrismicNextLink className="btn btn-primary" field={link}>
      <span>{link?.text}</span>
      <span className="icon">
        <IoArrowForwardSharp />
      </span>
    </PrismicNextLink>
  );
};

const Secondary = ({ link }) => {
  return (
    <PrismicNextLink className="btn btn-secondary" field={link}>
      <span>{link?.text}</span>
      <span className="icon">
        <IoArrowForwardSharp />
      </span>
    </PrismicNextLink>
  );
};

const Link = ({ link }) => {
  return (
    <PrismicNextLink className="btn btn-link" field={link}>
      {link?.text}
    </PrismicNextLink>
  );
};

export default StyledButton;
