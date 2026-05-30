import RevenueSlider from "../revenue-slider";
import StepActions from "../step-actions";
import StepShell from "../step-shell";

const CurrentRevenueStep = ({ onContinue }) => {
  return (
    <StepShell
      title="What's your monthly revenue like?"
      description="We just want to understand where your business is currently at so we can recommend the right scaling strategy."
      titleClassName="max-w-[880px]"
    >
      <RevenueSlider name="currentMonthlyRevenue" />
      <StepActions onContinue={onContinue} />
    </StepShell>
  );
};

export default CurrentRevenueStep;
