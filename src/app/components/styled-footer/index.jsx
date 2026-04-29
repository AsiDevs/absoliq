import { PrismicNextImage } from "@prismicio/next";
import ContactDetails from "./contact-details";
import CopyrightLinks from "./copyright-links";
import FooterLinksOne from "./footer-links-one";
import FooterLinksTwo from "./footer-links-two";

const StyledFooter = ({ settings }) => {
  return (
    <footer
      id="contact-us"
      className="bg-[#F3F1EE] pb-8 pt-15 md:pt-20 px-4 md:px-10 xl:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Info */}
        <div className="flex flex-col 2xl:flex-row justify-between xl:items-start gap-y-10 xl:gap-x-47 add-gap">
          <div className={"text-left md:min-w-87.5 xl:max-w-87.5"}>
            <PrismicNextImage
              field={settings?.data?.footer_logo}
              fallbackAlt=""
              className="w-full block max-w-51"
            />
            <p className="mt-4.5 text-body-small-s">
              {settings?.data?.footer_description}
            </p>
          </div>
          <div className="flex flex-wrap md:flex-nowrap items-start justify-between gap-y-8 gap-x-6 md:gap-x-15 2xl:gap-x-19">
            <FooterLinksOne />
            <FooterLinksTwo />
            <ContactDetails settings={settings} />
          </div>
        </div>
        {/* Footer bottom */}
        <div className="pt-3 border-t border-t-text-description">
          <div>
            <p className="text-body-small-s">
              &copy; {new Date().getFullYear()} {settings.data.copyright_text}
            </p>
            <CopyrightLinks />
          </div>
        </div>
        {/* Design & development */}
        <div className="mt-3">
          <p className="text-body-small-s">
            Designed & Developed by{" "}
            <a href="https://vinod.lk" className="underline" target="_blank">
              vinod.lk
            </a>{" "}
            &{" "}
            <a href="https://asi.lk" className="underline" target="_blank">
              asi.lk
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default StyledFooter;
