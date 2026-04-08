import StyledContainer from "@/app/components/styled-container";
import * as prismic from "@prismicio/client";
import Main from "./variants/main";

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
        {slice.variation === "default" && <Main slice={slice} />}
      </StyledContainer>
    </section>
  );
};

export default Questions;
