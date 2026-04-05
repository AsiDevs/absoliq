import StyledContainer from "@/app/components/styled-container";
import StyledButtonContainer from "@/app/components/styled-button/styled-button-container";
import StyledSectionTitle from "@/app/components/styled-section-title";

const Main = ({ slice }) => {
  return (
    <StyledContainer slice={slice}>
      <StyledSectionTitle slice={slice} />
      <StyledButtonContainer slice={slice} />
    </StyledContainer>
  );
};

export default Main;
