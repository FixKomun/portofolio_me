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
  @media (max-width: 549px) {
    .footer-right {
      font-size: 0.7rem;
      img {
        width: 20px;
        height: 20px;
      }
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
  @media (max-width: 1200px) {
    .more {
      top: 70%;
    }
    .logo-container {
      .logo-list {
        img {
          width: 50px;
          height: 50px;
        }
      }
    }
  }
  @media (max-width: 750px) {
    .more {
      top: 70%;
    }
    .logo-container {
      .logo-list {
        img {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
  @media (max-width: 549px) {
    h4 {
      font-size: 0.8rem;
    }
    .logo-container {
      .logo-list {
        img {
          width: 30px;
          height: 30px;
        }
      }
    }
    .more {
      top: 69%;
    }
    .expert {
      top: 57%;
    }
  }
  @media (max-width: 400px) {
    h4 {
      font-size: 0.6rem;
    }
    .logo-container {
      top: 62%;
      .logo-list {
        img {
          width: 25px;
          height: 25px;
        }
      }
    }
    .more {
      top: 69%;
    }
    .expert {
      top: 60%;
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
  @media (max-width: 1200px) {
    font-size: 1.5rem;
    span {
      font-size: 1.7rem;
    }
  }
  @media (max-width: 1000px) {
    display: block;
    padding-top: 1rem;
    text-align: center;
    line-height: 3rem;
    left: 0;
    width: 100%;
  }
  @media (max-width: 750px) {
    font-size: 1.3rem;
    padding-right: 1rem;
    padding-left: 1rem;
    span {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 549px) {
    padding: 5rem 3rem;
    font-size: 1.2rem;
    line-height: 2rem;
    span {
      font-size: 1.4rem;
    }
  }
  @media (max-width: 400px) {
    font-size: 1rem;
    line-height: 2rem;

    span {
      font-size: 1.2rem;
    }
  }
`;
const Button = styled(motion.button)`
  position: absolute;
  bottom: 10%;
  left: 50%;
  padding: 1.5rem 3rem;

  border-radius: 10px;
  background: transparent;
  color: white;
  border: 1px solid #2e4c9e90;
  font-size: 1.2rem;
  cursor: pointer;
  overflow: hidden;
  @media (max-width: 1000px) {
    padding: 1rem 2rem;
    font-size: 1rem;
    bottom: 15%;
  }
  @media (max-width: 750px) {
    padding: 1rem 2rem;
    font-size: 1rem;
    bottom: 17%;
  }
  @media (max-width: 549px) {
    padding: 0.8rem 1.8rem;
    font-size: 0.8rem;
    bottom: 20%;
    left: 55%;
  }
  @media (max-width: 400px) {
    padding: 0.8rem 1.8rem;
    font-size: 0.8rem;
    bottom: 18%;
    left: 55%;
  }
`;
export default HeroSection;
