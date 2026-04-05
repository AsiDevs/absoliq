import StyledContainer from "@/app/components/styled-container";
import StyledSectionTitleHero from "../components/styled-section-title-hero";
import StyledButtonContainer from "@/app/components/styled-button/styled-button-container";
import CTADescription from "../components/cta-description";

const Main = ({ slice }) => {
  const isLeftAligned = slice?.primary?.text_align_left || false;
  return (
    <StyledContainer slice={slice}>
      <div className="pt-50"></div>
      <StyledSectionTitleHero slice={slice} leftAligned={isLeftAligned} />
      <StyledButtonContainer slice={slice} leftAligned={isLeftAligned} />
      <CTADescription slice={slice} leftAligned={isLeftAligned} />
      <div className="pb-50"></div>
    </StyledContainer>
  );
};

export default Main;
