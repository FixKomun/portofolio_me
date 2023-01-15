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
  pageTransitionLeftRight,
  pageTransitionUpDown,
} from "../components/animation/animations";
//Web logos
import laravel from "../img/logos/laravel.svg";
import vue from "../img/logos/vue.svg";
import sql from "../img/logos/sql.svg";
import iview from "../img/logos/iview.svg";
import bootstrap from "../img/logos/bootstrap.svg";
//RecipeNow
import rnMain from "../img/recipenow/main.png";
import rnCreate from "../img/recipenow/create.png";
import rnRecipes from "../img/recipenow/v-recipes.mp4";

const Project = () => {
  const navigate = useNavigate();
  return (
    <RecipeNow
      variants={pageTransitionLeftRight}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <StyledProject>
        <div className="title">
          <h1>
            Recipe<i>Now</i>
          </h1>
        </div>
        <RecipeContainer>
          <div className="made-with">
            <h4>Made with</h4>
            <motion.div
              className="web-logos"
              variants={logoContainer}
              initial="hidden"
              animate="show"
            >
              <motion.img variants={logoItem} src={laravel} alt="laravel" />
              <motion.img variants={logoItem} src={vue} alt="vue" />
              <motion.img variants={logoItem} src={sql} alt="sql" />
              <motion.img variants={logoItem} src={iview} alt="iview" />
              <motion.img variants={logoItem} src={bootstrap} alt="bootstrap" />
            </motion.div>
          </div>
          <div className="project">
            <Carousel
              className="carousel-container"
              infiniteLoop
              showThumbs={false}
            >
              <div className="carousel-item">
                <img src={rnMain} alt="web" />
                <p className="legend">Main Page</p>
              </div>
              <div className="carousel-item">
                <img src={rnCreate} alt="web" />
                <p className="legend">Create recipe</p>
              </div>

              <div className="carousel-item">
                <video controls width="100%" autoPlay muted loop>
                  <source src={rnRecipes} type="video/mp4" />
                  Sorry, your browser doesn't support embedded videos.
                </video>
                <p className="legend">Recipes</p>
              </div>
            </Carousel>
          </div>
        </RecipeContainer>
        <RecipeDescription>
          <motion.p
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 2,
            }}
          >
            The Recipe<i>Now</i> is a website where you can post your food
            recipes. It is connected with SQL database where every users' data
            is safely stored. Desinged in <span>Figma</span> and implemented
            with <span>iView</span> and <span>Bootstrap</span> library. See this
            project on{" "}
            <a href="https://github.com/FixKomun/RecipeNow">
              <span>GitHub.</span>
            </a>
          </motion.p>
        </RecipeDescription>
        <motion.div onClick={() => navigate("/")} className="go-back">
          <ArrowBack />
        </motion.div>
        <motion.div
          onClick={() => navigate("/my-projects/project-3")}
          className="go-next"
        >
          <ArrowNext />
        </motion.div>
        <motion.div onClick={() => navigate(-1)} className="go-previous">
          <ArrowPrevious />
        </motion.div>
      </StyledProject>
    </RecipeNow>
  );
};

// PROJECTS STYLING //
const RecipeNow = styled(MyProjects)`
  min-height: 100vh;
  background: #562405;
  background: radial-gradient(circle, #813506, rgba(0, 0, 0, 1) 79%);
  position: relative;
`;

const RecipeContainer = styled(ProjectContainer)`
  .project {
    .carousel-container {
      width: 60vw;
      border-radius: 10px;
      .dot {
        height: 14px;
        width: 14px;
        background: #562405;
      }
      .carousel-status {
        font-size: 1rem;
        color: #562405;

        // font-family: "Poppins", sans-serif;
      }
      .legend {
        background: #562405;
        font-size: 1rem;
      }
    }
  }
`;
const RecipeDescription = styled(ProjectDescription)`
  a {
    color: white;
    transition: all 0.3s ease;
    &:hover {
      color: #562405;
    }
  }
`;

export default Project;
