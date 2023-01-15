import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Logo = () => {
  return (
    <StyledLogo
      width="90"
      height="90"
      viewBox="0 0 81 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="logo">
        <motion.circle
          id="Ellipse"
          cx="40.5"
          cy="43.5"
          r="40.5"
          fill="#191f30"
          initial={{ scale: "0" }}
          animate={{ scale: "100%" }}
          transition={{
            delay: 0.3,
            duration: 1,
            scale: {
              type: "spring",
              damping: 8,
              stiffness: 100,
              restDelta: 0.005,
            },
          }}
        />
        <motion.path
          id="."
          d="M60.04 73.64C58.9733 73.64 58.056 73.2773 57.288 72.552C56.5627 71.784 56.2 70.8667 56.2 69.8C56.2 68.7333 56.5627 67.8587 57.288 67.176C58.056 66.4507 58.9733 66.088 60.04 66.088C61.1067 66.088 62.0027 66.4507 62.728 67.176C63.4533 67.8587 63.816 68.7333 63.816 69.8C63.816 70.8667 63.4533 71.784 62.728 72.552C62.0027 73.2773 61.1067 73.64 60.04 73.64Z"
          fill="white"
          initial={{ scale: 0 }}
          animate={{ scale: 0.8 }}
          transition={{
            delay: 2,
            duration: 0.25,
            scale: {
              type: "spring",
              damping: 10,
              stiffness: 50,
              restDelta: 0.005,
            },
          }}
        />
        <motion.path
          id="F"
          d="M19.3767 56.384V19.904L39.6327 18.128L44.4327 20.528V28.352L32.4807 29.36V32.336L37.9047 31.856L42.7047 34.256V42.08L32.4807 42.944V58.016L24.1767 58.784L19.3767 56.384ZM37.4247 39.248V32.384L27.2007 33.248V26.528L39.1527 25.52V18.656L19.8567 20.336V55.904L27.2007 55.232V40.112L37.4247 39.248Z"
          fill="white"
          initial={{ opacity: 0, y: "30%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{ delay: 1, duration: 0.75 }}
        />
        <motion.path
          id="F_2"
          d="M38.3767 66.384V29.904L58.6327 28.128L63.4327 30.528V38.352L51.4807 39.36V42.336L56.9047 41.856L61.7047 44.256V52.08L51.4807 52.944V68.016L43.1767 68.784L38.3767 66.384ZM56.4247 49.248V42.384L46.2007 43.248V36.528L58.1527 35.52V28.656L38.8567 30.336V65.904L46.2007 65.232V50.112L56.4247 49.248Z"
          fill="white"
          initial={{ opacity: 0, y: "-30%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{ delay: 1, duration: 0.75 }}
        />
      </g>
    </StyledLogo>
  );
};

const StyledLogo = styled(motion.svg)`
  overflow: visible;
`;

export default Logo;
