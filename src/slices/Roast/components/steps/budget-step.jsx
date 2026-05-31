import { useFormikContext } from "formik";
import PillOption from "../pill-option";
import StepShell from "../step-shell";

const budgetOptions = ["Under $5k", "$5k - $7.5k", "$10k - $20k", "Over $20k"];

const BudgetStep = ({ onContinue }) => {
  const { values, setFieldValue } = useFormikContext();

  return (
    <StepShell
      title="How much is your approximate monthly marketing budget?"
      description="We're not here to sell you things you don't need. This simply helps us understand whether we can genuinely help your business grow and what strategy will give you the best return within your budget."
      bodyMaxW={false}
    >
      <div className="mx-auto grid max-w-[630px] gap-5 md:grid-cols-2 pb-1">
        {budgetOptions.map((option) => (
          <PillOption
            key={option}
            label={option}
            selected={values.budget === option}
            onClick={async () => {
              await setFieldValue("budget", option);
              onContinue({ budget: option });
            }}
          />
        ))}
      </div>
    </StepShell>
  );
};

export default BudgetStep;
