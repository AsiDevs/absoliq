import StyledSectionTitle from "@/app/components/styled-section-title";
import React from "react";
import TestimonyCarousel from "./testimony-carousel";

const Testimonials = ({ slice }) => {
  const testimonial_caption = slice?.primary?.testimonial_caption;
  const testimonial_title = slice?.primary?.testimonial_title;
  const testimonial_description = slice?.primary?.testimonial_description;
  const testimonies = slice?.primary?.testimonies;

  const title_slice = {
    primary: {
      caption: testimonial_caption,
      title: testimonial_title,
      description: testimonial_description,
    },
  };

  if (!testimonies || testimonies?.length < 1) return null;
  return (
    <div className="pt-[60px] md:pt-[80px] xl:pt-[120px]">
      <div className="max-w-150 mx-auto">
        <StyledSectionTitle slice={title_slice} />
      </div>
      <TestimonyCarousel slice={slice} />
    </div>
  );
};

export default Testimonials;
