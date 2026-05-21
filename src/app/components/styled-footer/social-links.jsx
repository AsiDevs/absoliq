import { FaInstagram, FaLinkedin, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const SocialLinks = ({ links }) => {
  const formattedLinks = getSocialProfiles(links);

  if (!formattedLinks || !formattedLinks?.length) return null;

  return (
    <div className={"flex justify-start items-center gap-3 mt-4.5"}>
      {formattedLinks.map(
        ({ link, icon }, index) =>
          link && (
            <a
              href={link}
              target={"_blank"}
              rel={"noreferrer"}
              key={index}
              className={""}
            >
              <div className={"p-1 block text-[#000000B2]"}>{icon}</div>
            </a>
          ),
      )}
    </div>
  );
};

const getSocialProfiles = (links) => {
  const socialLinks = [];
  const size = 18;

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
          icon: <FaLinkedin size={size} />,
        });
        break;
      default:
        break;
    }
  }
  return socialLinks;
};

export default SocialLinks;
