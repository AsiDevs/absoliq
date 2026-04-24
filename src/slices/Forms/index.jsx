import dynamic from "next/dynamic";

const Main = dynamic(() => import("./variants/main"));

const Forms = ({ slice, context }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice?.variation === "default" && (
        <Main slice={slice} settings={context?.settings} />
      )}
    </section>
  );
};

export default Forms;
