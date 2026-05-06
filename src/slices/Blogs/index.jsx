import dynamic from "next/dynamic";

const Main = dynamic(() => import("./variants/main"));
const VariantTwo = dynamic(() => import("./variants/variant-two"));

const Blogs = ({ slice, context }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice?.variation === "default" && <Main slice={slice} />}
      {slice?.variation === "variantTwo" && (
        <VariantTwo slice={slice} context={context} />
      )}
    </section>
  );
};

export default Blogs;
