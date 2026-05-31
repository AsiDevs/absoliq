import FormField from "../form-field";
import StepActions from "../step-actions";
import StepShell from "../step-shell";

const BookingDetailsStep = ({
  onContinue,
  isSubmitting,
  submitMessage,
  success,
}) => {
  return (
    <StepShell
      title="BOOM! 👊 It looks like we can DRAMATICALLY help you grow your business using some of our proven funnels and marketing strategies, simply enter your details below!"
      description="Please fill out your details and you will be taken to a calendar on the next page to pick a time and date that works best for you."
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
        label={isSubmitting ? "Booking..." : "Book My Strategy Session"}
        disabled={isSubmitting}
      />
      {submitMessage && (
        <p
          className={`mx-auto mt-4 max-w-[520px] text-center text-body-small-s ${
            success ? "text-success-primary" : "text-error-primary"
          }`}
        >
          {submitMessage}
        </p>
      )}
    </StepShell>
  );
};

export default BookingDetailsStep;
