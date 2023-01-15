import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation, Route } from "react-router-dom";
//Animations
import { pageTransitionUpDown } from "./animation/animations";
const Success = ({ values }) => {
  console.log(values);
  const navigation = useLocation();
  return (
    <StyledSuccess
      variants={pageTransitionUpDown}
      initial={{ opacity: 0, x: 0 }}
      animate="show"
      exit={{ opacity: 0 }}
    >
      <div className="success-container">
        <h1>Thank you for your enquiry 🌠.</h1>
        <p>
          We have sent you the reply message and will contact you back as soon
          as possible👋.
        </p>
      </div>
    </StyledSuccess>
  );
};

const StyledSuccess = styled(motion.div)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .success-container {
    background: #b3b2b2;
    width: 60%;
    color: #434658;
    padding: 3rem 5rem;
    border-radius: 1rem;
  }
`;

export default Success;
