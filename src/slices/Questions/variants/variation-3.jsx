import { QuestionBlocks } from "../components";
import StyledButton from "@/app/components/styled-button";
import StyledSectionTitle from "@/app/components/styled-section-title";

const Variation3 = ({ slice }) => {
  return (
    <div className="w-full max-w-[1064px] mx-auto">
      <StyledSectionTitle slice={slice} />
      <div className="flex items-center justify-center">
        {slice?.primary?.buttons?.map(
          ({ link, icon_name, icon_alignment, variant }, idx) => (
            <StyledButton
              key={idx}
              link={link}
              icon={icon_name}
              iconAlignment={icon_alignment}
              variant={variant?.toLowerCase()}
            />
          ),
        )}
      </div>
      <div className={"mt-[30px] md:mt-[50px]"}>
        <QuestionBlocks list={slice?.primary?.faqs} />
      </div>
    </div>
  );
};

export default Variation3;
