import dynamic from "next/dynamic";

const Main = dynamic(() => import("./variants/main"));
const Testimonies = dynamic(() => import("./variants/testimonies"));

const Carousels = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice?.variation === "default" && <Main slice={slice} />}
      {slice?.variation === "testimonials" && <Testimonies slice={slice} />}
    </section>
  );
};

export default Carousels;
