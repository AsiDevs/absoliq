import Main from "./variants/main";

const LogoCarousel = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice?.variation === "default" && <Main slice={slice} />}
    </section>
  );
};

export default LogoCarousel;
