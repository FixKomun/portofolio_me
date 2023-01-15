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
import react from "../img/logos/react.svg";
import sass from "../img/logos/sass.svg";
import heroku from "../img/logos/heroku.svg";
import framerMotion from "../img/logos/framer-motion.svg";

//Quizzos
import qzVideo from "../img/quizzos/v-main.mp4";

const Project = () => {
  const navigate = useNavigate();
  return (
    <Quizzos
      variants={pageTransitionLeftRight}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <StyledProject>
        <div className="title">
          <h1>Quizzos</h1>
        </div>
        <QuizzosContainer>
          <div className="made-with">
            <h4>Made with</h4>
            <motion.div
              className="web-logos"
              variants={logoContainer}
              initial="hidden"
              animate="show"
            >
              <motion.img variants={logoItem} src={react} alt="laravel" />
              <motion.img variants={logoItem} src={sass} alt="vue" />
              <motion.img variants={logoItem} src={heroku} alt="sql" />
              <motion.img variants={logoItem} src={framerMotion} alt="iview" />
            </motion.div>
          </div>
          <div className="project">
            <Carousel
              className="carousel-container"
              infiniteLoop
              showThumbs={false}
            >
              <div className="carousel-item">
                <video controls width="100%" autoPlay muted>
                  <source src={qzVideo} type="video/mp4" />
                  Sorry, your browser doesn't support embedded videos.
                </video>
                <p className="legend">Quizzos</p>
              </div>
            </Carousel>
          </div>
        </QuizzosContainer>
        <QuizzosDescription>
          <motion.p
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 2,
            }}
          >
            Quizzos was a student project. It represents quiz application with
            different genres of questions. Quizzos uses API from heroku to pull
            the questions and answers. Unfortunately, this project doesn't have
            up and running server anymore, so I coudn't create more pictures and
            show this project to the fullest. See this project on{" "}
            <a href="https://github.com/FixKomun/quizzos">
              <span>GitHub.</span>
            </a>
          </motion.p>
        </QuizzosDescription>
        <motion.div onClick={() => navigate("/")} className="go-back">
          <ArrowBack />
        </motion.div>
        <motion.div
          onClick={() => navigate("/my-projects/project-4")}
          className="go-next"
        >
          <ArrowNext />
        </motion.div>
        <motion.div onClick={() => navigate(-1)} className="go-previous">
          <ArrowPrevious />
        </motion.div>
      </StyledProject>
    </Quizzos>
  );
};

// PROJECTS STYLING //
const Quizzos = styled(MyProjects)`
  min-height: 100vh;
  background: #2b2f58;
  background: radial-gradient(circle, #2b2f58, rgba(0, 0, 0, 1) 79%);
  position: relative;
`;

const QuizzosContainer = styled(ProjectContainer)`
  .project {
    .carousel-container {
      width: 60vw;
      border-radius: 10px;
      .dot {
        height: 14px;
        width: 14px;
        background: #2b2f58;
      }
      .carousel-status {
        font-size: 1rem;
        color: #2b2f58;

        // font-family: "Poppins", sans-serif;
      }
      .legend {
        background: #2b2f58;
        font-size: 1rem;
      }
    }
  }
`;
const QuizzosDescription = styled(ProjectDescription)`
  a {
    color: white;
    transition: all 0.3s ease;
    &:hover {
      color: #2b2f58;
    }
  }
`;

export default Project;
