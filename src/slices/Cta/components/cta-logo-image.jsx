"use client";

import AbsoliqLogo from "@/app/assets/images/absoliq-cta-logo.svg";
import AbsoliqLogoInverse from "@/app/assets/images/absoliq-cta-logo-inverse.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const CTALogoImage = ({ y, inverse }) => {
  return (
    <motion.div
      style={{ y }}
      className="absolute left-[50%] translate-x-[-50%] bottom-0 w-full px-4 md:px-10 xl:px-0 xl:max-w-[1145px]"
    >
      <Image
        src={inverse ? AbsoliqLogoInverse.src : AbsoliqLogo.src}
        alt="CTA Logo"
        width={1145}
        height={225}
        className="object-cover"
        priority
      />
    </motion.div>
  );
};

export default CTALogoImage;
