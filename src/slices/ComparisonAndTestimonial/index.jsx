import Main from "./variants/main";

const ComparisonAndTestimonial = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice?.variation === "default" && <Main slice={slice} />}
    </section>
  );
};

export default ComparisonAndTestimonial;
