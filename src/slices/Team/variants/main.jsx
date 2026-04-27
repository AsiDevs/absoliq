import StyledContainer from "@/app/components/styled-container";
import StyledSectionTitle from "@/app/components/styled-section-title";
import Team from "../components/team";
import Motto from "../components/motto";

const Main = ({ slice }) => {
  return (
    <StyledContainer slice={slice}>
      <StyledSectionTitle slice={slice} />
      <Team slice={slice} />
      <Motto slice={slice} />
    </StyledContainer>
  );
};

export default Main;
