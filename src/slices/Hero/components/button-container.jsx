import StyledButton from "@/app/components/styled-button";

const ButtonContainer = ({ slice, contentCenter = false }) => {
  return (
    <div
      className={`flex flex-wrap gap-[18px] md:gap-[20px] xl:pt-[12px] ${contentCenter ? "justify-center xl:justify-center" : "justify-center xl:justify-start"}`}
    >
      {slice.primary.buttons.map(
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
  );
};

export default ButtonContainer;
