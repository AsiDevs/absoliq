import Link from "next/link";
import clsx from "clsx";
import { IoArrowForwardSharp } from "react-icons/io5";

const HeaderCtaButton = ({ className, onClick }) => {
  return (
    <Link
      href="/contact-us"
      className={clsx(
        "btn btn-secondary flex items-center justify-between! rounded-xl",
        className,
      )}
      onClick={onClick}
    >
      <span>Talk to an Expert</span>
      <span className="icon">
        <IoArrowForwardSharp />
      </span>
    </Link>
  );
};

export default HeaderCtaButton;
