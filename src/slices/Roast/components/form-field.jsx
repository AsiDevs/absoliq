import StyledFormikInput from "@/app/components/styled-formik-input";

const fieldClassName =
  "!h-[54px] !rounded-[4px] !border !border-primary-dark !bg-white !px-[28px] !text-[18px] !text-[#211F24] placeholder:!text-[#8c8c8c] focus:!border-primary-dark";

const textAreaClassName =
  "!min-h-[260px] !rounded-[4px] !border !border-primary-dark !bg-white !px-[28px] !py-[24px] !text-[18px] !text-[#211F24] placeholder:!text-[#8c8c8c] focus:!border-primary-dark";

const FormField = ({
  name,
  placeholder,
  type = "text",
  rows,
  wrapperClass,
}) => {
  return (
    <StyledFormikInput
      name={name}
      placeholder={placeholder}
      type={type}
      rows={rows}
      wrapperClass={wrapperClass || "mx-auto mb-0 w-full max-w-[590px]"}
      className={type === "textarea" ? textAreaClassName : fieldClassName}
    />
  );
};

export default FormField;
