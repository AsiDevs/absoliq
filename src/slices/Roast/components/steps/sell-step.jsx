import { useFormikContext } from "formik";
import OptionCard from "../option-card";
import StepShell from "../step-shell";

const SellStep = ({ nickname, onContinue }) => {
  const { values, setFieldValue } = useFormikContext();

  const options = [
    { label: "Product", value: "Product", image: "/images/package.svg" },
    { label: "Services", value: "Services", image: "/images/tools.svg" },
  ];

  return (
    <StepShell
      eyebrow={
        <>
          {`Thanks, ${nickname} 👊.`}
          <br />
          {`Before we jump into the juicy stuff and see if Absoliq is the growth partner your business has been missing...we've got a few quick questions for you.`}
        </>
      }
      title="First, what do you sell?"
    >
      <div className="flex flex-wrap items-center justify-center gap-6">
        {options.map((option) => (
          <OptionCard
            key={option.value}
            image={option.image}
            icon={option.icon}
            label={option.label}
            selected={values.sellingType === option.value}
            onClick={async () => {
              await setFieldValue("sellingType", option.value);
              onContinue({ sellingType: option.value });
            }}
          />
        ))}
      </div>
    </StepShell>
  );
};

export default SellStep;
