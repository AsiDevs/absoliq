import StyledContainer from "@/app/components/styled-container";
import StyledSectionTitle from "@/app/components/styled-section-title";
import BlogsPagination from "../components/blogs-pagination";

const Main = ({ slice }) => {
  return (
    <StyledContainer slice={slice}>
      <StyledSectionTitle slice={slice} />
      <BlogsPagination />
    </StyledContainer>
  );
};

export default Main;
