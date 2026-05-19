export const NAV_LINKS = [
  { label: "Solutions", href: "/solutions" },
  { label: "About Us", href: "/about-us" },
  { label: "Book Your Roast", href: "/book-your-roast" },
  { label: "Contact Us", href: "/contact-us" },
];

export const isActivePath = (pathname, href) =>
  pathname === href || pathname.startsWith(`${href}/`);
