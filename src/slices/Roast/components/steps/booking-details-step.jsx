import FormField from "../form-field";
import StepActions from "../step-actions";
import StepShell from "../step-shell";

const BookingDetailsStep = ({ onContinue }) => {
  return (
    <StepShell
      title="BOOM! It looks like we can dramatically help you grow your business using some of our proven funnels and marketing strategies, simply enter your details below!"
      description="Please fill out your details and you will be taken to a calendar on the next page to pick a time and date that works best for you."
      titleClassName="max-w-[980px] uppercase"
      className="min-h-[980px] py-12 md:py-16"
    >
      <div className="mx-auto flex w-full max-w-[520px] flex-col gap-5">
        <FormField
          name="firstName"
          placeholder="First Name*"
          wrapperClass="mb-0 w-full"
        />
        <FormField
          name="lastName"
          placeholder="Last Name*"
          wrapperClass="mb-0 w-full"
        />
        <FormField
          name="mobile"
          placeholder="Mobile*"
          type="tel"
          wrapperClass="mb-0 w-full"
        />
        <FormField
          name="companyName"
          placeholder="Company Name*"
          wrapperClass="mb-0 w-full"
        />
        <FormField
          name="website"
          placeholder="www.xyz.com"
          wrapperClass="mb-0 w-full"
        />
      </div>
      <StepActions
        onContinue={onContinue}
        label="Book My Strategy Session"
      />
    </StepShell>
  );
};

export default BookingDetailsStep;
