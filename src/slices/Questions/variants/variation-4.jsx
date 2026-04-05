import StyledSectionTitle from "@/app/components/styled-section-title";
import { QuestionBlocks } from "../components";
import StyledButton from "@/app/components/styled-button";

const Variation4 = ({ slice }) => {
  return (
    <div className="w-full max-w-[1104px] mx-auto">
      <StyledSectionTitle slice={slice} />
      <div className="flex items-center justify-center">
        {slice?.buttons?.map(
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
        <QuestionBlocks list={slice?.primary?.faqs} isGridView={true} />
      </div>
    </div>
  );
};

export default Variation4;
