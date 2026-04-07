export const animateUp = () => {
  const initial = { opacity: 0, y: 40 };
  const whileInView = { opacity: 1, y: 0 };
  const transition = {
    duration: 0.8,
    ease: [0.215, 0.61, 0.355, 1],
  };

  return { initial, whileInView, transition };
};

export const animateIn = () => {
  const initial = { opacity: 0 };
  const whileInView = { opacity: 1 };
  const transition = {
    duration: 0.8,
    ease: [0.215, 0.61, 0.355, 1],
  };

  return { initial, whileInView, transition };
};
