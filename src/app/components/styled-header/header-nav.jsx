"use client";

import DesktopNavLinks from "./desktop-nav-links";
import HeaderCtaButton from "./header-cta-button";
import MobileNavMenu from "./mobile-nav-menu";

const StyledHeaderNav = () => {
  return (
    <>
      <div className="hidden xl:flex xl:items-center xl:ml-auto">
        <DesktopNavLinks />
        <HeaderCtaButton />
      </div>
      <MobileNavMenu />
    </>
  );
};

export default StyledHeaderNav;
