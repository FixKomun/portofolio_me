import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Line3 = () => {
  return (
    <StyledSvg
      viewBox="0 0 1256 631"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(70 160 260)"
      opacity="0.3"
    >
      <motion.path
        d="M-72 55.3407C497.21 -164.373 1217.91 333.779 1255 630"
        stroke="white"
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        //exit={{ opacity: 0, duration: 0.3 }}
        transition={{ duration: 3, ease: "circIn" }}
      />
    </StyledSvg>
  );
};

const StyledSvg = styled(motion.svg)`
  width: 100%;
  z-index: 1;
  position: absolute;
  top: 40%;
  left: 0;
`;

export default Line3;
