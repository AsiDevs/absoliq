import { BadgeCheck, Ban } from "lucide-react";
import { useFormikContext } from "formik";
import OptionCard from "../option-card";
import StepShell from "../step-shell";

const RoastPromiseStep = ({ nickname, onContinue }) => {
  const { values, setFieldValue } = useFormikContext();
  const options = [
    { label: "No", value: "No", icon: Ban },
    { label: "Yes", value: "Yes", icon: BadgeCheck },
  ];

  return (
    <StepShell
      eyebrow={`Okay ${nickname} you made it to a ROAST - last question...`}
      title="Do you pinky promise to show up at the selected time for the roast session?"
      titleClassName="max-w-[1040px]"
    >
      <div className="flex flex-wrap items-center justify-center gap-8">
        {options.map((option) => (
          <OptionCard
            key={option.value}
            icon={option.icon}
            label={option.label}
            selected={values.roastPromise === option.value}
            onClick={async () => {
              await setFieldValue("roastPromise", option.value);
              onContinue({ roastPromise: option.value });
            }}
          />
        ))}
      </div>
    </StepShell>
  );
};

export default RoastPromiseStep;
