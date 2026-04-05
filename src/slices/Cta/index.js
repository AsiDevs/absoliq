import dynamic from "next/dynamic";

const CtaFullWidth = dynamic(() => import("./variant/cta-fullwidth"));
const CtaDefault = dynamic(() => import("./variant/cta"));

const Cta = ({ slice }) => {
  return (
    <section
      data-slice-type={slice_type}
      data-slice-variation={variation}
      id={primary?.section_id || primary?.sectionId || null}
    >
      {slice.variation === "default" && <CtaDefault slice={slice} />}
      {slice.variation === "fullWidth" && <CtaFullWidth slice={slice} />}
      {slice.variation === "third" && (
        <CtaFullWidth slice={slice} third={false} />
      )}
    </section>
  );
};

export default Cta;
