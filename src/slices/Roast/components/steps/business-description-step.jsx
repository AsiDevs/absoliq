import FormField from "../form-field";
import StepActions from "../step-actions";
import StepShell from "../step-shell";

const BusinessDescriptionStep = ({ nickname, onContinue }) => {
  return (
    <StepShell
      title={`${nickname}, in 5 sentences or more, briefly describe your business, what you sell, to whom and at what price point?`}
    >
      <FormField
        name="businessDescription"
        placeholder=""
        type="textarea"
        rows="8"
        wrapperClass="mx-auto mb-0 w-full max-w-[590px]"
      />
      <StepActions onContinue={onContinue} />
    </StepShell>
  );
};

export default BusinessDescriptionStep;
