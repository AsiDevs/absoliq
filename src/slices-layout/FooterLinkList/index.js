import { PrismicNextLink } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.FooterLinkListSlice} FooterLinkListSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FooterLinkListSlice>} FooterLinkListProps
 * @param {FooterLinkListProps}
 */
const FooterLinkList = ({ slice }) => {
  if (!slice) return null;

  return (
    <div>
      <h5 className="text-title-base font-medium mb-[16px]">
        {slice.primary.title}
      </h5>
      <ul className=" flex flex-col gap-[12px]">
        {slice.primary.links.map((item, idx) => (
          <li key={idx}>
            <PrismicNextLink field={item} className="text-body-base" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkList;
