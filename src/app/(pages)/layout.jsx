import StyledHeader from "../components/styled-header";
import StyledFooter from "../components/styled-footer";
import React from "react";
import { createClient } from "@/prismicio";

export default async function RootLayout({ children }) {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <>
      <StyledHeader settings={settings} />
      {children}
      <StyledFooter settings={settings} />
    </>
  );
}
