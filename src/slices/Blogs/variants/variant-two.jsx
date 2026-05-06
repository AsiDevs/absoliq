import StyledContainer from "@/app/components/styled-container";
import StyledSectionTitle from "@/app/components/styled-section-title";

const VariantTwo = ({ slice }) => {
  return (
    <StyledContainer slice={slice}>
      <StyledSectionTitle slice={slice} leftAligned />
    </StyledContainer>
  );
};

export default VariantTwo;
