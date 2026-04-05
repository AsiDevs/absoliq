import { QuestionBlocks } from "../components";
import StyledButton from "@/app/components/styled-button";
import StyledSectionTitle from "@/app/components/styled-section-title";

const Variation2 = ({ slice }) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-[30px] md:gap-y-[50px]">
      <div className="xl:max-w-[460px]">
        <StyledSectionTitle slice={slice} wrapperClassName={"md:text-left"} />
        <div className="flex items-center justify-center mt-[20px] md:justify-start">
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
      </div>
      <div className={`rounded-[10px]`}>
        <QuestionBlocks list={slice?.primary?.faqs} />
      </div>
    </div>
  );
};

export default Variation2;
