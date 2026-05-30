import StyledInput from "./styled-input";
import { useFormikContext } from "formik";

const StyledFormikInput = ({
  name = "",
  type = "text",
  label = "",
  placeholder,
  isRequired = false,
  className,
  wrapperClass,
  rows = "4",
}) => {
  const { values, errors, touched, setFieldValue, setFieldTouched } =
    useFormikContext();

  const hasError = touched[name] && errors[name];

  return (
    <div className={`mb-3 ${wrapperClass}`}>
      <StyledInput
        type={type}
        placeholder={placeholder}
        label={label}
        error={hasError}
        errorMessage={errors?.[name]}
        onChange={(value) => setFieldValue(name, value)}
        onBlur={() => setFieldTouched(name, true)}
        value={values?.[name] || ""}
        isRequired={isRequired}
        className={className}
        rows={rows}
      />
    </div>
  );
};

export default StyledFormikInput;
