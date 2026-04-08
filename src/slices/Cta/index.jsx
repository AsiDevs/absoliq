import dynamic from "next/dynamic";

const CtaFullWidth = dynamic(() => import("./variant/cta-fullwidth"));
const CtaDefault = dynamic(() => import("./variant/cta"));

const Cta = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "default" && <CtaDefault slice={slice} />}
      {slice.variation === "fullWidth" && <CtaFullWidth slice={slice} />}
    </section>
  );
};

export default Cta;
