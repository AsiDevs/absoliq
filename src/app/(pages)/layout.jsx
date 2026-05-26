import StyledHeader from "../components/styled-header";
import StyledFooter from "../components/styled-footer";
import { createClient } from "@/prismicio";

export default async function RootLayout({ children }) {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const navigation = await client.getSingle("navigation");

  return (
    <>
      <StyledHeader settings={settings} navigation={navigation} />
      {children}
      <StyledFooter settings={settings} navigation={navigation} />
    </>
  );
}
