import StyledInput from "./styled-input";
import { useFormikContext } from "formik";

const StyledFormikInput = ({ name = "", type = "text", label = "" }) => {
  const { values, errors, touched, setFieldValue, handleBlur } =
    useFormikContext();
  console.log("Name: ", name);

  const hasError = touched[name] && errors[name];

  return (
    <div className={"mb-3"}>
      <StyledInput
        type={type}
        label={label}
        error={hasError}
        errorMessage={errors?.[name]}
        onChange={(value) => setFieldValue([name], value)}
        onBlur={() => handleBlur(name)}
        value={values?.[name] || ""}
      />
    </div>
  );
};

export default StyledFormikInput;
