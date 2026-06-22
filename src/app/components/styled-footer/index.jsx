import { PrismicNextImage } from "@prismicio/next";
import SocialLinks from "./social-links";
import CopyrightLinks from "./copyright-links";
import FooterLinksOne from "./footer-links-one";
import FooterLinksTwo from "./footer-links-two";
import FooterNewsletter from "./footer-newsletter";
import DayDisplay from "./day-display";

const StyledFooter = ({ settings, navigation }) => {
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
            {/* <div className="mt-4.5 max-w-45">
              <p className="text-body-small-s">
                Level 1, 12 River Street, South Yarra, VIC 3141 Australia
              </p>
              <p className="text-body-small-s">
                Phone: <a href={"tel:1300 858 250"}>1300 858 250</a>
              </p>
            </div> */}
            <SocialLinks links={settings?.data?.social_profiles} />
          </div>
          <div className="flex flex-wrap md:flex-nowrap items-start md:justify-between gap-y-8 gap-x-6 md:gap-x-15 2xl:gap-x-3">
            <FooterLinksOne navigation={navigation} />
            <FooterLinksTwo navigation={navigation} />
            <FooterNewsletter settings={settings} />
            {/* <ContactDetails settings={settings} /> */}
          </div>
        </div>
        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center pt-3 border-t border-t-text-description gap-3">
          {/* Footer bottom */}
          <div className="xl:flex gap-x-3">
            <div className="flex flex-wrap gap-y-0.5 gap-x-3">
              <p className="text-body-caption">
                &copy; {new Date().getFullYear()} {settings.data.copyright_text}
              </p>
              <p className="text-body-caption">
                Protected by all the possible laws.
              </p>
              <CopyrightLinks navigation={navigation} />
            </div>
            <div className="text-body-caption">
              Happy{" "}
              <DayDisplay />
            </div>
          </div>
          {/* Design & development */}
          <div className="">
            <p className="text-body-caption">
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
      </div>
    </footer>
  );
};

export default StyledFooter;
