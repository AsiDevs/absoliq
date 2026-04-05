import { QuestionBlocks } from "../components";
import StyledSectionTitle from "@/app/components/styled-section-title";

const Variation1 = ({ slice }) => {
  return (
    <div className="w-full max-w-[846px] mx-auto">
      <StyledSectionTitle slice={slice} />
      <div className="rounded-[10px] bg-secondary-light mt-[30px]  md:mt-[50px] xl:px-[88px] xl:py-[70px] ">
        <QuestionBlocks list={slice?.primary?.faqs} isBorder={true} />
      </div>
    </div>
  );
};

export default Variation1;
