export const NAV_LINKS = [
  { label: "Solutions", href: "/solutions" },
  { label: "About Us", href: "/about-us" },
  { label: "Team", href: "/#team" },
  { label: "Book Your Roast", href: "/book-your-roast" },
];

const normalizeHref = (href = "") => href.split("#")[0] || "/";

export const isActivePath = (pathname, href) => {
  if (href.includes("#")) return false;
  const normalizedHref = normalizeHref(href);

  return (
    pathname === normalizedHref || pathname.startsWith(`${normalizedHref}/`)
  );
};
