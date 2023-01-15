import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import {
  MyProjects,
  StyledProject,
  ProjectContainer,
  ProjectDescription,
} from "../projects-styles";
//Carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
//Components
import ArrowBack from "../components/animation/arrowBack";
import ArrowNext from "../components/animation/arrowNext";
import ArrowPrevious from "../components/animation/arrowPrevious";
//Animations
import {
  logoContainer,
  logoItem,
  pageTransitionUpDown,
  pageTransitionLeftRight,
} from "../components/animation/animations";
//Web logos
import html from "../img/logos/html.svg";
import css from "../img/logos/css.svg";
import javascript from "../img/logos/javascript.svg";
import gsap from "../img/logos/gsap.svg";

//Quizzos
import ipMain from "../img/iphone/p-main.png";
import ipVideo from "../img/iphone/v-main.mp4";

const Project = () => {
  const navigate = useNavigate();
  return (
    <Iphone
      variants={pageTransitionLeftRight}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <StyledProject>
        <div className="title">
          <h1>Iphone 13</h1>
        </div>
        <IphoneContainer>
          <div className="made-with">
            <h4>Made with</h4>
            <motion.div
              className="web-logos"
              variants={logoContainer}
              initial="hidden"
              animate="show"
            >
              <motion.img variants={logoItem} src={html} alt="laravel" />
              <motion.img variants={logoItem} src={css} alt="vue" />
              <motion.img variants={logoItem} src={javascript} alt="sql" />
              <motion.img variants={logoItem} src={gsap} alt="iview" />
            </motion.div>
          </div>
          <div className="project">
            <Carousel
              className="carousel-container"
              infiniteLoop
              showThumbs={false}
            >
              <div className="carousel-item">
                <img src={ipMain} alt="web" />
                <p className="legend">Main Page</p>
              </div>
              <div className="carousel-item">
                <video controls width="100%" autoPlay muted>
                  <source src={ipVideo} type="video/mp4" />
                  Sorry, your browser doesn't support embedded videos.
                </video>
                <p className="legend">Iphone 13</p>
              </div>
            </Carousel>
          </div>
        </IphoneContainer>
        <IphoneDescription>
          <motion.p
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 2,
            }}
          >
            <span>Iphone 13</span> is a project from{" "}
            <span>Javascript Animation Course by DevEd.</span> It is made only
            with <span>html5 </span> and <span>css3</span> with{" "}
            <span>gsap</span> library to implement all the fluid animations on
            the site. It also uses rendred videos made in <span>Blender</span> .
            See this project on{" "}
            <a href="https://github.com/FixKomun/Iphone-13">
              <span>GitHub.</span>
            </a>
          </motion.p>
        </IphoneDescription>
        <motion.div onClick={() => navigate("/")} className="go-back">
          <ArrowBack />
        </motion.div>
        <motion.div
          onClick={() => navigate("/my-projects/project-5")}
          className="go-next"
        >
          <ArrowNext />
        </motion.div>
        <motion.div onClick={() => navigate(-1)} className="go-previous">
          <ArrowPrevious />
        </motion.div>
      </StyledProject>
    </Iphone>
  );
};

// PROJECTS STYLING //
const Iphone = styled(MyProjects)`
  min-height: 100vh;
  background: #0c5c58;
  background: radial-gradient(circle, #0c5c58, rgba(0, 0, 0, 1) 79%);
  position: relative;
`;

const IphoneContainer = styled(ProjectContainer)`
  .project {
    .carousel-container {
      width: 60vw;
      border-radius: 10px;
      .dot {
        height: 14px;
        width: 14px;
        background: #0c5c58;
      }
      .carousel-status {
        font-size: 1rem;
        color: #0c5c58;

        // font-family: "Poppins", sans-serif;
      }
      .legend {
        background: #0c5c58;
        font-size: 1rem;
      }
    }
  }
`;
const IphoneDescription = styled(ProjectDescription)`
  a {
    color: white;
    transition: all 0.3s ease;
    &:hover {
      color: #0c5c58;
    }
  }
`;

export default Project;
