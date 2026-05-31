import Link from "next/link";
import StepActions from "../step-actions";

const StartStep = ({ onContinue }) => {
  return (
    <div className="mx-auto flex max-w-[1064px] flex-col items-center justify-center pt-10 text-center">
      <div className="mb-5 text-[44px]" aria-hidden="true">
        👋
      </div>
      <h1 className="text-title-3x-large uppercase text-text-heading">
        A 45 minute session which can change your growth trajectory
      </h1>
      <div className="text-body-large mt-10  text-text-placeholder mb-5">
        <p>
          A 100% free, no-obligation 45-minute growth session with
          Absoliq&apos;s growth makers 🚀.
        </p>
        <p>No payments. No hidden catch. No agency fluff.</p>
        <p className="mt-5">
          Just a brutally honest breakdown of what’s stopping your business from
          scaling and how to fix it. Strictly for businesses hungry for growth.
        </p>
      </div>
      <StepActions siteBtn onContinue={onContinue} label="Get Started" />
      <div className="mt-10 md:mt-15 font-[18px] text-text-placeholder">
        <p>
          *By submitting this form, you agree to let Absoliq contact you
          regarding your growth session, strategy recommendations, and relevant
          marketing insights.
        </p>
        <p className="mt-5">
          No spam. No annoying sales pressure. Just smart conversations about
          scaling your business. We protect your data like we protect ad budgets
          😌. Check it out{" "}
          <Link
            href={"/privacy-policy"}
            className="underline text-primary-dark font-bold"
          >
            here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default StartStep;
