import { PackageOpen, Wrench } from "lucide-react";
import { useFormikContext } from "formik";
import OptionCard from "../option-card";
import StepShell from "../step-shell";

const SellStep = ({ nickname, onContinue }) => {
  const { values, setFieldValue } = useFormikContext();

  const options = [
    { label: "Product", value: "Product", icon: PackageOpen },
    { label: "Services", value: "Services", icon: Wrench },
  ];

  return (
    <StepShell
      eyebrow={`Thanks, ${nickname}. Before we jump into the juicy stuff and see if Absoliq is the growth partner your business has been missing...we've got a few quick questions for you.`}
      title="First, what do you sell?"
    >
      <div className="flex flex-wrap items-center justify-center gap-8">
        {options.map((option) => (
          <OptionCard
            key={option.value}
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
