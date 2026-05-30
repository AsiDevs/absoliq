import FormField from "../form-field";
import StepActions from "../step-actions";
import StepShell from "../step-shell";

const FirstNameStep = ({ onContinue }) => {
  return (
    <StepShell title="We promise to keep this quick and painless. We will roast your marketing system in a good way. But we don't want to be rude, so what is your nickname?">
      <FormField name="firstName" placeholder="Enter your first name" />
      <StepActions onContinue={onContinue} />
    </StepShell>
  );
};

export default FirstNameStep;
