import FormField from "../form-field";
import StepActions from "../step-actions";
import StepShell from "../step-shell";

const EmailStep = ({ nickname, onContinue }) => {
  return (
    <StepShell title={`Great! What's your @mail ${nickname}?`}>
      <FormField name="email" placeholder="Email" type="email" />
      <StepActions onContinue={onContinue} />
    </StepShell>
  );
};

export default EmailStep;
