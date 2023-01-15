export const miniSize = {
  hidden: { opacity: 1, scale: 1 },
  show: {
    scale: 1.1,
    transition: { duration: 0.1, ease: "linear" },
  },
};

export const fade = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 2,
    },
  },
};

export const fadeItem = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 3,
      delay: 2,
    },
  },
};

export const logoContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export const logoItem = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0 },
};
export const logoItemLR = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0 },
};

export const textContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.6,
    },
  },
};

export const textAnimation = {
  hidden: { opacity: 0, y: -100 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "linear", delay: 1 },
  },
};

export const textAnimation2 = {
  hidden: { opacity: 0, x: -200 },
  show: { opacity: 1, x: 0, transition: { duration: 1 } },
};

export const textAnimation3 = {
  hidden: { opacity: 0, y: 200 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export const buttonAnimation = {
  hidden: { y: 200, x: -100 },
  show: { y: 0, transition: { duration: 1, delay: 3 } },
};

export const pageTransitionUpDown = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.75,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: "100%",
    transition: { ease: "easeOut", duration: 0.75 },
  },
};

export const pageTransitionLeftRight = {
  hidden: { opacity: 0, x: "100%" },
  show: {
    opacity: 1,
    x: "0%",
    transition: {
      duration: 0.75,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    x: "-100%",
    transition: { duration: 0.4 },
  },
};

export const ThumbsUpContainer = {
  hidden: { opacity: 1, fill: "255,255,255,0)" },
  show: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export const ThumbsUpItem = {
  hidden: { opacity: 0, fill: 0 },
  show: {
    opacity: 1,
    fill: "#283a68",
    transition: { default: { duration: 2 }, fill: { duration: 1 } },
  },
};
