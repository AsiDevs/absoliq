import dynamic from "next/dynamic";

const Main = dynamic(() => import("./variants/main"));

const Team = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice?.variation === "default" && <Main slice={slice} />}
    </section>
  );
};

export default Team;
