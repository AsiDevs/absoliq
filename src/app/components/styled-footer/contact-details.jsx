import React from "react";
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";
import { PrismicNextLink } from "@prismicio/next";

const ContactDetails = ({ settings }) => {
  const { data } = settings;
  return (
    <div className="md:max-w-[334px] md:max-w-[296px]">
      <h5 className="text-body-small mb-[5.1px] underline underline-offset-2">
        Contact Us
      </h5>
      <ul className="flex flex-col gap-1.5">
        <SingleInfo link={data?.email} text={data?.email?.text} />
      </ul>
    </div>
  );
};

export default ContactDetails;

const SingleInfo = ({ link, text }) => {
  if (!text) return null;
  return (
    <li>
      <PrismicNextLink field={link} className="text-body-small-s">
        {text}
      </PrismicNextLink>
    </li>
  );
};
