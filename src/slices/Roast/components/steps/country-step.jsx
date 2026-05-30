import { ChevronDown } from "lucide-react";
import { useFormikContext } from "formik";
import StepActions from "../step-actions";
import StepShell from "../step-shell";

const countries = [
  "Sri Lanka",
  "United States",
  "United Kingdom",
  "Australia",
  "Canada",
  "India",
  "United Arab Emirates",
  "Singapore",
  "Other",
];

const CountryStep = ({ onContinue }) => {
  const { values, setFieldValue } = useFormikContext();

  return (
    <StepShell title="Where in the world is your business based?">
      <div className="relative mx-auto w-full max-w-[590px]">
        <select
          name="country"
          value={values.country}
          onChange={(event) => setFieldValue("country", event.target.value)}
          className="h-[76px] w-full appearance-none rounded-[4px] border border-primary-dark bg-white px-[28px] pr-[62px] text-[18px] text-[#211F24] outline-none"
        >
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-7 top-1/2 h-6 w-6 -translate-y-1/2 text-[#211F24]" />
      </div>
      <StepActions onContinue={onContinue} />
    </StepShell>
  );
};

export default CountryStep;
