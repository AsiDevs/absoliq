import FormField from "../form-field";
import StepActions from "../step-actions";
import StepShell from "../step-shell";

const WebsiteStep = ({ nickname, onContinue }) => {
  return (
    <StepShell
      title={`${nickname}, what's your website url?`}
      description='If you do not have one, type "do not have one"'
    >
      <FormField name="website" placeholder="Website" type="text" />
      <StepActions onContinue={onContinue} />
    </StepShell>
  );
};

export default WebsiteStep;
