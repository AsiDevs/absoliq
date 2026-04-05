"use client";
import clsx from "clsx";
import { PrismicNextLink } from "@prismicio/next";
import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

/**
 * @typedef {import("@prismicio/client").Content.MenuItemSlice} MenuItemSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MenuItemSlice>} MenuItemProps
 * @param {MenuItemProps}
 */
const MenuItem = ({ slice, setMobileMenuOpen }) => {
  const { link, label } = slice.primary;
  const [menuOpened, setMenuOpened] = useState(false);

  const isCta = !!slice.primary?.is_cta;

  const dropdown = slice.primary.dropdown || [];

  return (
    <li
      className={clsx({
        "relative font-semibold text-slate-800 pointer-events-auto main-nav-item": true,
        "flex  flex-col w-full xl:w-auto": true,
        "items-center justify-center": !isCta,
        "items-start": isCta,
      })}
      onMouseEnter={() => setMenuOpened(true)}
      onMouseLeave={() => setMenuOpened(false)}
      onClick={() => setMobileMenuOpen(false)}
    >
      <PrismicNextLink
        field={link}
        className={clsx({
          "btn btn-primary": isCta,
          "w-full flex items-center": !isCta,
        })}
      >
        <span className={"block! xl:pr-2!"}>{link.text}</span>
        {dropdown?.length ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setMenuOpened(!menuOpened);
            }}
            className={"ms-auto"}
          >
            <IoChevronDown size={24} />
          </button>
        ) : null}
      </PrismicNextLink>
      {dropdown?.length ? (
        <ul
          className={clsx({
            "main-nav-dropdown-links-wrapper": true,
          })}
          style={{ display: menuOpened ? "block" : "none" }}
        >
          {dropdown.map((item, idx) => (
            <li key={idx}>
              <PrismicNextLink field={item} />
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default MenuItem;
