import StyledSectionTitle from "@/app/components/styled-section-title";
import { title } from "motion/react-client";
import React from "react";

const Testimonials = ({ slice }) => {
  const testimonial_caption = slice?.primary?.testimonial_caption;
  const testimonial_title = slice?.primary?.testimonial_title;
  const testimonial_description = slice?.primary?.testimonial_description;

  const title_slice = {
    primary: {
      caption: testimonial_caption,
      title: testimonial_title,
      description: testimonial_description,
    },
  };

  return (
    <div className="pt-[60px] md:pt-[80px] xl:pt-[120px]">
      <div className="max-w-150 mx-auto">
        <StyledSectionTitle slice={title_slice} />
      </div>
    </div>
  );
};

export default Testimonials;
