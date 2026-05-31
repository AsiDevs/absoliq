import FormField from "../form-field";
import StepActions from "../step-actions";
import StepShell from "../step-shell";

const BiggestObstacleStep = ({ nickname, onContinue, isSubmitting }) => {
  return (
    <StepShell
      title={`${nickname}, be honest. What is the #1 biggest obstacle which keeps you from sleeping well at night in the business sense of course?`}
      description="Just be brutally honest. Just vent to us, we'll listen to you."
    >
      <FormField
        name="biggestObstacle"
        placeholder=""
        type="textarea"
        rows="8"
        wrapperClass="mx-auto mb-0 w-full max-w-[590px]"
      />
      <StepActions
        onContinue={onContinue}
        label={isSubmitting ? "Checking..." : "Continue"}
        disabled={isSubmitting}
      />
    </StepShell>
  );
};

export default BiggestObstacleStep;
