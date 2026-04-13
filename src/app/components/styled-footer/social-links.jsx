import {
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const SocialLinks = ({ links }) => {
  const formattedLinks = getSocialProfiles(links);

  if (!formattedLinks || !formattedLinks?.length) return null;

  return (
    <div className={"flex justify-start items-center gap-5"}>
      {formattedLinks.map(
        ({ link, icon }, index) =>
          link && (
            <a
              href={link}
              target={"_blank"}
              rel={"noreferrer"}
              key={index}
              className={
                "p-[10px] rounded-[6px] text-[#fff] border-[2px] rounded-[50%]"
              }
            >
              <div className={"p-1 block"}>{icon}</div>
            </a>
          ),
      )}
    </div>
  );
};

const getSocialProfiles = (links) => {
  const socialLinks = [];
  const size = 14;

  for (let i = 0; i < links.length; i++) {
    const { variant, url } = links[i];

    switch (variant) {
      case "TikTok":
        socialLinks.push({
          link: url,
          icon: <FaTiktok size={size} />,
        });
        break;
      case "Facebook":
        socialLinks.push({
          link: url,
          icon: <FaFacebookF size={size} />,
        });
        break;
      case "X (Twitter)":
        socialLinks.push({
          link: url,
          icon: <FaXTwitter size={size} />,
        });
        break;
      case "Instagram":
        socialLinks.push({
          link: url,
          icon: <FaInstagram size={size} />,
        });
        break;
      case "LinkedIn":
        socialLinks.push({
          link: url,
          icon: <FaLinkedinIn size={size} />,
        });
        break;
      default:
        break;
    }
  }
  return socialLinks;
};

export default SocialLinks;
