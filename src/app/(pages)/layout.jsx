import StyledHeader from "../components/styled-header";
import StyledFooter from "../components/styled-footer";
import React from "react";

export default async function RootLayout({ children }) {
  return (
    <>
      <StyledHeader />
      {children}
      <StyledFooter />
    </>
  );
}
