import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import React from "react";
import AnimateUp from "@/app/components/framer/animate-up";

const Team = ({ slice }) => {
  const team = slice?.primary?.team;
  if (!team || team?.length < 1) return null;
  return (
    <div className="flex flex-wrap justify-center max-w-120 mx-auto gap-x-4 gap-y-10 md:max-w-none md:flex-nowrap xl:justify-between xl:gap-x-10">
      {team?.map((member, idx) => {
        return (
          <SingleMember
            key={idx}
            member={member}
            isFirst={idx === 0}
            idx={idx}
          />
        );
      })}
    </div>
  );
};

export default Team;

const SingleMember = ({ member, isFirst, idx }) => {
  return (
    <AnimateUp
      className={clsx({
        "max-w-40.5 md:max-w-50 transition-bouncy": true,
        "md:ml-[-60px] xl:ml-0": !isFirst,
        "xl:hover:rotate-[5deg] bop": idx % 2 === 0,
        "xl:hover:rotate-[-5deg] bip": idx % 2 !== 0,
      })}
    >
      <PrismicNextImage
        field={member?.image}
        className="min-h-60 sm:min-h-75 max-h-75 object-cover rounded-[22px] mb-5 border-2 border-[#FAF9F6]"
      />
      <div className="text-left">
        <h3 className="text-title-base mb-1.5 text-text-heading">
          {member?.name}
        </h3>
        <p className="text-body-small text-text-secondary">
          {member?.position}
        </p>
      </div>
    </AnimateUp>
  );
};
