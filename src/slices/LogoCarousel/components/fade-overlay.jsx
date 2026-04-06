import clsx from "clsx";

const FadeOverlay = ({ enabled = true }) => {
  if (!enabled) return null;

  return (
    <>
      <Overlay side="left" />
      <Overlay side="right" />
    </>
  );
};

export default FadeOverlay;

const Overlay = ({ side }) => {
  const isLeft = side === "left";

  return (
    <span
      className={clsx(
        "absolute top-[-2px] h-[calc(100%+4px)] z-10 pointer-events-none select-none rounded-[28px]",
        "w-[120px] md:w-[180px] lg:w-[240px]", // wider = smoother
        isLeft ? "left-[-40px]" : "right-[-40px]", // extend outside container
      )}
      style={{
        background: isLeft
          ? "linear-gradient(to left, rgba(250,249,246,0) 0%, rgba(250,249,246,0.15) 20%, rgba(250,249,246,0.4) 45%, rgba(250,249,246,0.75) 70%, rgba(250,249,246,0.95) 90%)"
          : "linear-gradient(to right, rgba(250,249,246,0) 0%, rgba(250,249,246,0.15) 20%, rgba(250,249,246,0.4) 45%, rgba(250,249,246,0.75) 70%, rgba(250,249,246,0.95) 90%)",
      }}
    />
  );
};
