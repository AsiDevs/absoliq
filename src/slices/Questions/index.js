import StyledContainer from "@/app/components/styled-container";
import Variation2 from "./variants/variation-2";
import Variation3 from "./variants/variation-3";
import Variation4 from "./variants/variation-4";
import * as prismic from "@prismicio/client";
import Variation1 from "./variants/variation-1";

/**
 * @typedef {import("@prismicio/client").Content.QuestionsSlice} QuestionsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<QuestionsSlice>} QuestionsProps
 * @param {QuestionsProps}
 */
const Questions = ({ slice }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: slice.primary.faqs.map((question) => ({
      "@type": "Question",
      name: prismic.asText(question.question),
      acceptedAnswer: {
        "@type": "Answer",
        text: prismic.asText(question.answer),
      },
    })),
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <StyledContainer slice={slice}>
        {slice.variation === "default" && <Variation1 slice={slice} />}
        {slice.variation === "variation2" && <Variation2 slice={slice} />}
        {slice.variation === "variation3" && <Variation3 slice={slice} />}
        {slice.variation === "variation4" && <Variation4 slice={slice} />}
      </StyledContainer>
    </section>
  );
};

export default Questions;
