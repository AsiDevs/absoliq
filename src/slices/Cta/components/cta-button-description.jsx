import StyledPrismicRichTextSingle from "@/app/components/styled-prismic-richtext-single";
import AnimateIn from "@/app/components/framer/animate-in";
import { delay } from "motion";

const CTAButtonDescription = ({ slice }) => {
  const description = slice?.primary?.cta_button_description;
  if (!description) return null;
  return (
    <AnimateIn options={{ delay: 0.4 }}>
      <StyledPrismicRichTextSingle
        className="text-center mt-2 text-text-light"
        field={slice?.primary?.cta_button_description}
      />
    </AnimateIn>
  );
};
export default CTAButtonDescription;
