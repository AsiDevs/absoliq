import StyledHeader from "./components/styled-header";
import StyledFooter from "./components/styled-footer";
import StyledContainer from "./components/styled-container";
import { createClient } from "@/prismicio";
import Image from "next/image";

const NotFound = async () => {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <>
      <StyledHeader settings={settings} />
      <StyledContainer
        slice={{
          primary: {
            top_padding: "Half",
            bottom_padding: "Full",
          },
        }}
      >
        <div className="text-center max-w-[786px] mx-auto">
          <Image
            src={"/images/404.svg"}
            width={786}
            height={392}
            className="block h-auto w-full max-w-[786px] mx-auto  mb-3 md:mb-5"
          />
          <div className="max-w-[726px] mx-auto">
            <h1 className="text-title-x-large text-text-heading mb-4 md:mb-7.5 font-medium!">
              Oops, We haven’t plan this far…
            </h1>
            <h3 className="text-title-medium text-text-description">
              Looks like this page doesn’t exist (yet). Try hitting refresh or
              head back to where you came from.
            </h3>
          </div>
        </div>
      </StyledContainer>
      <StyledFooter settings={settings} />
    </>
  );
};

export default NotFound;
