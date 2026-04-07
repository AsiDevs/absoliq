import React from "react";
import clsx from "clsx";

const Divider = ({ noBg }) => {
  return (
    <div
      className={clsx({
        "px-4 md:px-10": true,
        "section-bg": !noBg,
      })}
    >
      <div className="h-[1px] bg-border-primary" />
    </div>
  );
};

export default Divider;
