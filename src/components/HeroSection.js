import React from "react";
import { motion } from "framer-motion";
import styled, { withTheme } from "styled-components";
import { Link } from "react-router-dom";
//Images
import hero from "../img/main-photo.png";
import html from "../img/logos/html.svg";
import css from "../img/logos/css.svg";
import php from "../img/logos/php.svg";
import javascript from "../img/logos/javascript.svg";
import vue from "../img/logos/vue.svg";
import react from "../img/logos/react.svg";
import laravel from "../img/logos/laravel.svg";
import pgsql from "../img/logos/pgsql.svg";
import sass from "../img/logos/sass.svg";
import bootstrap from "../img/logos/bootstrap.svg";
//Animation
import {
  logoContainer,
  logoItemLR,
  pageTransitionUpDown,
} from "../components/animation/animations";
import {
  textAnimation,
  textAnimation2,
  textAnimation3,
  textContainer,
  fade,
  fadeItem,
  buttonAnimation,
} from "./animation/animations";
const HeroSection = () => {
  return (
    <Section
      variants={pageTransitionUpDown}
      initial={{ opacity: 0, x: 0 }}
      animate="show"
      exit={{ opacity: 0 }}
    >
      <Image src={hero} alt="hero" />
      <HeroDescription variants={textContainer} initial="hidden" animate="show">
        <motion.p variants={textAnimation2}>
          <motion.span variants={textAnimation}>Enthusiastic </motion.span>{" "}
          about web development in all aspects.
        </motion.p>
        <motion.p variants={textAnimation2}>
          <span>Front-end </span> and <span> back-end.</span>
        </motion.p>
        <motion.p variants={textAnimation3} className="bottom-description">
          Experienced in multiple web languages <br />
          and library usage.
        </motion.p>
      </HeroDescription>
      <Expert variants={fade} initial="hidden" animate="show">
        <motion.h4 className="expert" variants={fadeItem}>
          Expert in
        </motion.h4>
        <motion.div variants={fadeItem} className="logo-container">
          <motion.div
            variants={logoContainer}
            initial="hidden"
            animate="show"
            className="logo-list"
          >
            <motion.img variants={logoItemLR} src={html} alt="html" />
            <motion.img variants={logoItemLR} src={css} alt="css" />
            <motion.img variants={logoItemLR} src={php} alt="php" />
            <motion.img
              variants={logoItemLR}
              src={javascript}
              alt="javascript"
            />
            <motion.img variants={logoItemLR} src={vue} alt="vue" />
            <motion.img variants={logoItemLR} src={react} alt="react" />
            <motion.img variants={logoItemLR} src={laravel} alt="laravel" />
            <motion.img variants={logoItemLR} src={pgsql} alt="pgsql" />
            <motion.img variants={logoItemLR} src={sass} alt="sass" />
            <motion.img variants={logoItemLR} src={bootstrap} alt="bootstrap" />
          </motion.div>
        </motion.div>
        <motion.h4 className="more" variants={fadeItem}>
          and more.
        </motion.h4>
      </Expert>
      <Link to="/my-projects/project-1">
        <Button
          variants={buttonAnimation}
          initial="hidden"
          animate="show"
          whileHover={{ backgroundColor: "#2e4c9e90" }}
          transition={{
            type: "linear",
            stiffness: 400,
            damping: 10,
          }}
        >
          My Projects.
        </Button>
      </Link>
      <motion.p className="footer-right">
        Made by Filip Franić with <img src={react} alt="react" /> and 💙.
      </motion.p>
    </Section>
  );
};

const Section = styled(motion.div)`
  background: #000000;
  position: relative;
  top: 0;
  min-height: 100vh;
  overflow: hidden;
  .footer-right {
    position: absolute;
    bottom: 5%;
    right: 5%;
    color: white;
    display: flex;
    align-items: center;
    gap: 10px;
    img {
      width: 30px;
      height: 30px;
    }
  }
`;
const Image = styled(motion.img)`
  width: 100%;
  height: 99vh;
  object-fit: cover;
`;

const Expert = styled(motion.div)`
  h4 {
    color: #cccccc;
  }
  .expert {
    position: absolute;
    top: 56%;
    left: 12%;
  }
  .more {
    position: absolute;
    top: 73%;
    right: 12%;
  }
  .logo-container {
    background: #15192bba;
    position: absolute;
    top: 60%;
    left: 10%;
    width: 80%;
    box-shadow: 0px 4px #8888886e;
    //Animate box shadow
    border-radius: 12px;
    padding: 1rem 0rem;
    .logo-list {
      display: flex;
      align-items: center;
      justify-content: space-around;
      img {
        width: 75px;
        height: 75px;
      }
    }
  }
`;

const HeroDescription = styled(motion.div)`
  color: #cccccc;
  position: absolute;
  top: 20%;
  left: 10%;
  font-size: 2rem;
  font-weight: lighter;
  line-height: 3.5rem;
  overflow: hidden;
  span {
    font-weight: bold;
    font-size: 2.2rem;
    display: inline-block;
  }
  .bottom-description {
    padding-top: 2rem;
  }
`;
const Button = styled(motion.button)`
  position: absolute;
  bottom: 10%;
  left: 50%;
  padding: 1.5rem 3rem;
  transform: translate(-50%, -15%);
  border-radius: 10px;
  background: transparent;
  color: white;
  border: 1px solid #2e4c9e90;
  font-size: 1.2rem;
  cursor: pointer;
  overflow: hidden;
`;
export default HeroSection;
