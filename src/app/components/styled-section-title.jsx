import clsx from "clsx";
import StyledPrismicRichTextSingle from "./styled-prismic-richtext-single";
import Image from "next/image";
import AbsoliqImage from "../assets/icons/absoliq.svg";
import AnimateIn from "./framer/animate-in";

const StyledSectionTitle = ({
  slice,
  leftAligned = false,
  textWhite = false,
}) => {
  const caption = slice?.primary?.caption || "";
  const title = slice?.primary?.title || "";
  const description = slice?.primary?.description || "";

  return (
    <div
      className={clsx({
        "flex flex-col gap-y-2 add-gap max-w-[688px]": true,
        "text-center items-center mx-auto": !leftAligned,
        "text-left items-start": leftAligned,
        "text-text-light": textWhite,
        "text-text-heading": !textWhite,
      })}
    >
      {caption && (
        <AnimateIn
          className={clsx({
            "flex gap-2 items-center xl:mb-2.5": true,
            "justify-center": !leftAligned,
            "justify-start": leftAligned,
          })}
          options={{ delay: 0 }}
        >
          <Image
            src={AbsoliqImage.src}
            alt="Absoliq"
            height={18}
            width={20}
            className="mb-1.5"
          />
          <StyledPrismicRichTextSingle
            className="text-title-base-blog font-bold"
            field={caption}
          />
        </AnimateIn>
      )}
      {title && (
        <AnimateIn options={{ delay: 0.1 }}>
          <StyledPrismicRichTextSingle
            className="text-title-2x-large"
            field={title}
          />
        </AnimateIn>
      )}
      {description && (
        <AnimateIn options={{ delay: 0.2 }}>
          <StyledPrismicRichTextSingle
            className="text-body-small"
            field={description}
          />
        </AnimateIn>
      )}
    </div>
  );
};

export default StyledSectionTitle;
