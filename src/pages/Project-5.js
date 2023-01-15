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

//Quizzos
import underConstruction from "../img/under-construction.png";

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
          <h1>Dolac Franić</h1>
        </div>
        <IphoneContainer>
          <div className="made-with">
            <h4></h4>
            <motion.div
              className="web-logos"
              variants={logoContainer}
              initial="hidden"
              animate="show"
            ></motion.div>
          </div>
          <div className="project">
            <Carousel
              className="carousel-container"
              infiniteLoop
              showThumbs={false}
            >
              <div className="carousel-item">
                <img src={underConstruction} alt="web" />
                <p className="legend">Dolac Franić</p>
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
          ></motion.p>
        </IphoneDescription>
        <motion.div onClick={() => navigate("/")} className="go-back">
          <ArrowBack />
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
  background: #352024;
  background: radial-gradient(circle, #352024, rgba(0, 0, 0, 1) 79%);
  position: relative;
`;

const IphoneContainer = styled(ProjectContainer)`
  padding-top: 10rem;
  .project {
    .carousel-container {
      width: 60vw;

      border-radius: 10px;
      .dot {
        height: 14px;
        width: 14px;
        background: #352024;
      }
      .carousel-status {
        font-size: 1rem;
        color: #352024;

        // font-family: "Poppins", sans-serif;
      }
      .legend {
        background: #352024;
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
      color: #352024;
    }
  }
`;

export default Project;
