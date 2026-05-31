import StyledContainer from "@/app/components/styled-container";
import Main from "./variants/main";

const Roast = ({ slice, context }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <StyledContainer slice={slice}>
        {slice?.variation === "default" && (
          <Main slice={slice} settings={context?.settings} />
        )}
      </StyledContainer>
    </section>
  );
};

export default Roast;
