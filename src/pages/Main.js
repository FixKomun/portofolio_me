import React from "react";

//Components
import HeroSection from "../components/HeroSection";
import Nav from "../components/Nav";
//Animation
import { motion } from "framer-motion";
import {
  pageTransitionLeftRight,
  pageTransitionUpDown,
} from "../components/animation/animations";
const Main = () => {
  return (
    <motion.div>
      <HeroSection />
    </motion.div>
  );
};

export default Main;
