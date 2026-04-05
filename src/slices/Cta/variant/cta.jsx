import StyledButton from "@/app/components/styled-button";
import StyledContainer from "@/app/components/styled-container";
import StyledPrismicRichTextSingle from "@/app/components/styled-prismic-richtext-single";

const CtaDefault = ({ slice }) => {
  const { title, description, buttons = [] } = slice.primary || {};

  return (
    <StyledContainer slice={slice}>
      <div className="flex justify-center items-center  py-[80px]">
        <div className="bg-[#18153B] shadow-lg text-center lg:h-auto lg:w-[1063px] rounded-[20px] gap-[50px] p-[40px] px-[20px] sm:px-[20px] sm:p-[40px] md:px-[68px] md:p-[60px] lg:px-[149px] lg:p-[80px] md:w-[688px] md:h[336px]">
          <div className="mb-[20px]">
            <StyledPrismicRichTextSingle
              field={title}
              className=" text-title-x-large font-medium text-primary-white! md:text-[32px] lg:text-[48px]"
            />
          </div>
          <div className="mb-[50px] leading-[22px]">
            <StyledPrismicRichTextSingle
              field={description}
              className="text-base font-semibold leading-[19.36px] text-primary-white"
            />
          </div>
          <div className="flex justify-center gap-4 mt-[30px] mt-40px] xl:mt-[50px]">
            {buttons.map((item, index) => (
              <StyledButton
                key={index}
                label={item.label}
                link={item.link}
                variant={item.variant || "Primary"}
                icon={item.icon_name}
                iconAlignment={item.icon_alignment || "left"}
                className={item.variant !== "Primary" && "bg-text-light!"}
              />
            ))}
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};

export default CtaDefault;
