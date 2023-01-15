import React from "react";
import { motion } from "framer-motion";

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
//Animations
import {
  logoContainer,
  logoItem,
  pageTransitionUpDown,
  pageTransitionLeftRight,
} from "../components/animation/animations";
//Web logos
import laravel from "../img/logos/laravel.svg";
import vue from "../img/logos/vue.svg";
import pgsql from "../img/logos/pgsql.svg";
import iview from "../img/logos/iview.svg";
import stripe from "../img/logos/stripe.svg";
import paypal from "../img/logos/paypal.svg";
//Web tržnica
import wtpMain from "../img/web-trznica/main.png";
import wtvLogin from "../img/web-trznica/videos/v-login.mp4";
import wtvAdd from "../img/web-trznica/videos/v-add.mp4";
import wtvCart from "../img/web-trznica/videos/v-cart.mp4";
import wtvPurchase from "../img/web-trznica/videos/v-purchase.mp4";
const Project = () => {
  const navigate = useNavigate();

  return (
    <MyProjects
      variants={pageTransitionLeftRight}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <StyledProject>
        <div className="title">
          <h1>Web Tržnica</h1>
        </div>
        <ProjectContainer>
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
              <motion.img variants={logoItem} src={pgsql} alt="pgsql" />
              <motion.img variants={logoItem} src={iview} alt="iview" />
              <motion.img variants={logoItem} src={stripe} alt="stripe" />
              <motion.img variants={logoItem} src={paypal} alt="paypal" />
            </motion.div>
          </div>
          <div className="project">
            <Carousel
              className="carousel-container"
              infiniteLoop
              showThumbs={false}
            >
              <div className="carousel-item">
                <img src={wtpMain} alt="web" />
                <p className="legend">Main Page</p>
              </div>

              <div className="carousel-item">
                <video width="100%" height="100%" autoPlay muted loop>
                  <source src={wtvLogin} type="video/mp4" />
                  Sorry, your browser doesn't support embedded videos.
                </video>
                <p className="legend">User Login</p>
              </div>
              <div className="carousel-item">
                <video controls width="100%" autoPlay muted loop>
                  <source src={wtvAdd} type="video/mp4" />
                  Sorry, your browser doesn't support embedded videos.
                </video>
                <p className="legend">Add Product</p>
              </div>
              <div className="carousel-item">
                <video controls width="100%" autoPlay muted loop>
                  <source src={wtvCart} type="video/mp4" />
                  Sorry, your browser doesn't support embedded videos.
                </video>
                <p className="legend">Cart</p>
              </div>
              <div className="carousel-item">
                <video controls width="100%" autoPlay muted loop>
                  <source src={wtvPurchase} type="video/mp4" />
                  Sorry, your browser doesn't support embedded videos.
                </video>
                <p className="legend">Purchase</p>
              </div>
            </Carousel>
          </div>
        </ProjectContainer>
        <ProjectDescription>
          <motion.p
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 2,
            }}
          >
            The web market <span>(Web Tržnica)</span> is an e-commerce type of
            website where customers can advertise their products and buy other
            products from different manufacturers using electronic payment
            (PayPal or Stripe). It is made with
            <span> Vue.js</span> and <span>Laravel</span> framework with
            integrated <span> PostgreSQL </span>database system. Every
            functionality of this websites is <span>Verified</span> and{" "}
            <span>Validated</span> so that users can't manipulate with server.
            This project implements main functionalities of e-commerce sites as
            well as e-mail reset password funcionality and order confirmation
            mail. See this project on{" "}
            <a href="https://github.com/FixKomun/trznica">
              <span>GitHub.</span>
            </a>
          </motion.p>
        </ProjectDescription>
        <motion.div onClick={() => navigate("/")} className="go-back">
          <ArrowBack />
        </motion.div>
        <motion.div
          onClick={() => navigate("/my-projects/project-2")}
          className="go-next"
        >
          <ArrowNext />
        </motion.div>
      </StyledProject>
    </MyProjects>
  );
};

export default Project;
