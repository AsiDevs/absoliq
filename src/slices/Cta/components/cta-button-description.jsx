import StyledPrismicRichTextSingle from "@/app/components/styled-prismic-richtext-single";
import AnimateIn from "@/app/components/framer/animate-in";
import clsx from "clsx";

const CTAButtonDescription = ({ slice, textWhite = true }) => {
  const description = slice?.primary?.cta_button_description;
  if (!description) return null;
  return (
    <AnimateIn options={{ delay: 0.4 }}>
      <StyledPrismicRichTextSingle
        className={clsx({
          "text-center mt-2": true,
          "text-text-light": textWhite,
          "text-text-secondary": !textWhite,
        })}
        field={slice?.primary?.cta_button_description}
      />
    </AnimateIn>
  );
};
export default CTAButtonDescription;
