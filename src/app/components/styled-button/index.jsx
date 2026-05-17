"use client";

import React from "react";
import { PrismicNextLink } from "@prismicio/next";
import { usePathname, useSearchParams } from "next/navigation";
import { IoArrowForwardSharp } from "react-icons/io5";

const StyledButton = ({
  variant = "primary",
  link = {},
  type = "link",
  onClick,
  label,
  disabled = false,
}) => {
  if ((type === "button" || type === "submit") && variant === "primary")
    return (
      <PrimaryButton
        disabled={disabled}
        onClick={onClick}
        type={type}
        label={label}
      />
    );
  if (variant === "link") return <Link link={link} />;
  if (variant === "secondary") return <Secondary link={link} />;
  return <Primary link={link} />;
};

const PrimaryButton = ({ label, onClick, type, disabled }) => {
  return (
    <button
      className="btn btn-primary"
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      <span>{label}</span>
      <span className="icon">
        <IoArrowForwardSharp />
      </span>
    </button>
  );
};

const useSamePageAnchorHref = (link) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (!link?.url || typeof window === "undefined") return null;
  if (link.url.startsWith("#")) return link.url;

  try {
    const resolvedUrl = new URL(link.url, window.location.origin);
    const currentSearch = searchParams?.toString();
    const normalizedCurrentSearch = currentSearch ? `?${currentSearch}` : "";

    if (
      resolvedUrl.origin === window.location.origin &&
      resolvedUrl.pathname === pathname &&
      resolvedUrl.search === normalizedCurrentSearch &&
      resolvedUrl.hash
    ) {
      return resolvedUrl.hash;
    }
  } catch {
    return null;
  }

  return null;
};

const ButtonLink = ({ className, link, children }) => {
  const samePageAnchorHref = useSamePageAnchorHref(link);

  if (samePageAnchorHref) {
    return (
      <a className={className} href={samePageAnchorHref}>
        {children}
      </a>
    );
  }

  return (
    <PrismicNextLink className={className} field={link}>
      {children}
    </PrismicNextLink>
  );
};

const Primary = ({ link }) => {
  return (
    <ButtonLink className="btn btn-primary" link={link}>
      <span>{link?.text}</span>
      <span className="icon">
        <IoArrowForwardSharp />
      </span>
    </ButtonLink>
  );
};

const Secondary = ({ link }) => {
  return (
    <ButtonLink className={"btn btn-secondary"} link={link}>
      <span>{link?.text}</span>
      <span className="icon">
        <IoArrowForwardSharp />
      </span>
    </ButtonLink>
  );
};

const Link = ({ link }) => {
  return (
    <ButtonLink className="btn btn-link" link={link}>
      {link?.text}
    </ButtonLink>
  );
};

export default StyledButton;
