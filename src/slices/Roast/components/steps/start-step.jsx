import StepActions from "../step-actions";

const StartStep = ({ onContinue }) => {
  return (
    <div className="mx-auto flex min-h-[720px] max-w-[1220px] flex-col items-center justify-center py-12 text-center">
      <div className="mb-8 text-[44px]" aria-hidden="true">
        *
      </div>
      <h1 className="text-title-x-large max-w-[1020px] font-bold uppercase text-[#0f0f0f]">
        A 45 minute session which can change your growth trajectory
      </h1>
      <div className="text-body-large mt-10 max-w-[1040px] text-text-placeholder">
        <p>
          A 100% free, no-obligation 45-minute growth session with
          Absoliq&apos;s growth makers.
        </p>
        <p>No payments. No hidden catch. No agency fluff.</p>
        <p className="mt-5">
          Just a brutally honest breakdown of what&apos;s stopping your business
          from scaling and how to fix it.
        </p>
      </div>
      <StepActions onContinue={onContinue} label="Get Started" />
      <div className="mt-24 max-w-[1120px] text-[16px] leading-7 text-text-placeholder">
        <p>
          *By submitting this form, you agree to let Absoliq contact you
          regarding your growth session, strategy recommendations, and relevant
          marketing insights.
        </p>
        <p className="mt-5">
          No spam. No annoying sales pressure. Just smart conversations about
          scaling your business.
        </p>
      </div>
    </div>
  );
};

export default StartStep;
