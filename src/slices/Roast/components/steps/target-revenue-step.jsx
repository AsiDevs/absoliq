import RevenueSlider from "../revenue-slider";
import StepActions from "../step-actions";
import StepShell from "../step-shell";

const TargetRevenueStep = ({ onContinue }) => {
  return (
    <StepShell
      title="What is your TARGET monthly revenue? Be honest, but also be realistic."
      description="We're asking so we could craft a tailor made growth plan which can help you achieve this."
    >
      <RevenueSlider name="targetMonthlyRevenue" />
      <StepActions onContinue={onContinue} />
    </StepShell>
  );
};

export default TargetRevenueStep;
