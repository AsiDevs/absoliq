import StyledContainer from "@/app/components/styled-container";
import StyledPrismicRichTextSingle from "@/app/components/styled-prismic-richtext-single";
import StyledButton from "@/app/components/styled-button";

const CtaFullwidth = ({ slice, third = false }) => {
  const { title, description, buttons = [] } = slice.primary || {};
  return (
    <StyledContainer
      slice={slice}
      parentClass={"bg-[#18153B]"}
      className="!bg-[#18153B]"
      paddingX={false}
    >
      <div className="flex justify-center items-center px-[16px] md:py-[40px]  py-[80px]">
        <div className=" text-center">
          <div className="mb-[20px]">
            <StyledPrismicRichTextSingle
              field={title}
              className=" text-title-x-large font-medium text-primary-white! md:text-[32px] lg:text-[48px"
            />
          </div>

          {third && <span>Hello</span>}

          <div className="mb-[50px] leading-[22px]">
            <StyledPrismicRichTextSingle
              field={description}
              className="text-title-base font-semibold leading-[19.36px] text-primary-white"
            />
          </div>

          <div className="flex justify-center gap-4">
            {buttons?.map((item, index) => (
              <StyledButton
                key={index}
                label={item.label}
                link={item.link}
                variant={item.variant || "Primary"}
                icon={item.icon_name}
                iconAlignment={item.icon_alignment || "left"}
              />
            ))}
          </div>
        </div>
      </div>
    </StyledContainer>
  );
};

export default CtaFullwidth;
