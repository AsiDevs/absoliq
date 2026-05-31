import Image from "next/image";
import clsx from "clsx";

const OptionCard = ({ icon: Icon, image, label, selected, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "relative flex min-w-[140px] flex-col items-center justify-center rounded-[12px] bg-white text-[#211F24] transition-all p-6 cursor-pointer",
        selected
          ? "outline outline-[3px] outline-primary-dark shadow-[0_24px_0_-14px_rgba(0,101,255,0.75)]"
          : "outline outline-0 hover:-translate-y-1",
      )}
    >
      {image && (
        <Image src={image} alt={label} width={64} height={64} className="mb-3" />
      )}
      {!image && Icon && (
        <Icon className="mb-3 h-16 w-16 text-[#777]" strokeWidth={1.6} />
      )}
      <span className="text-title-base text-text-base">{label}</span>
    </button>
  );
};

export default OptionCard;
