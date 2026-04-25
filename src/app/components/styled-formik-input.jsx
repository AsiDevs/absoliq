import StyledInput from "./styled-input";
import { useFormikContext } from "formik";

const StyledFormikInput = ({
  name = "",
  type = "text",
  label = "",
  placeholder,
  isRequired = false,
}) => {
  const { values, errors, touched, setFieldValue, handleBlur } =
    useFormikContext();

  const hasError = touched[name] && errors[name];

  return (
    <div className={"mb-3"}>
      <StyledInput
        type={type}
        placeholder={placeholder}
        label={label}
        error={hasError}
        errorMessage={errors?.[name]}
        onChange={(value) => setFieldValue([name], value)}
        onBlur={() => handleBlur(name)}
        value={values?.[name] || ""}
        isRequired={isRequired}
      />
    </div>
  );
};

export default StyledFormikInput;
