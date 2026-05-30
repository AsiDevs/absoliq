import StyledButton from "@/app/components/styled-button";

const StepActions = ({ onContinue, label = "Continue", type = "button" }) => {
  return (
    <div className="mt-6 flex justify-center">
      <StyledButton
        variant="primary"
        type={type}
        label={label}
        onClick={onContinue}
      />
    </div>
  );
};

export default StepActions;
