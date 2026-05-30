import clsx from "clsx";

const OptionCard = ({ icon: Icon, label, selected, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "relative flex h-[180px] w-[180px] flex-col items-center justify-center rounded-[12px] bg-white text-[#211F24] transition-all md:h-[210px] md:w-[210px]",
        selected
          ? "outline outline-[3px] outline-primary-dark shadow-[0_24px_0_-14px_rgba(0,101,255,0.75)]"
          : "outline outline-0 hover:-translate-y-1",
      )}
    >
      {Icon && <Icon className="mb-5 h-16 w-16 text-[#777]" strokeWidth={1.6} />}
      <span className="text-[28px] font-bold leading-8 md:text-[32px]">
        {label}
      </span>
    </button>
  );
};

export default OptionCard;
