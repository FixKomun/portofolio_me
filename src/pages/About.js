import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
//IMG
import me from "../img/me.jpg";
//Animation
import {
  textContainer,
  textAnimation2,
  textAnimation3,
  logoContainer,
  logoItem,
} from "../components/animation/animations";
//components
import ArrowContact from "../components/animation/arrowContact";
import Line from "../components/animation/line";
import Line2 from "../components/animation/line2";
import Line3 from "../components/animation/line3";
import Line4 from "../components/animation/line4";
import Ribbon from "../components/animation/ribbon";
import Circle from "../components/animation/circle";
import Certificate from "../components/animation/certificate";
import CV from "../components/animation/cv";
const About = () => {
  return (
    <>
      <StyledAbout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, duration: 0.5 }}
      >
        <AboutSection>
          <div className="img-container">
            <img src={me} alt="me" />
          </div>
          <div className="info-container">
            <div className="info-title">
              <h1>Filip Franić</h1>
            </div>
            <motion.div
              variants={textContainer}
              initial="hidden"
              animate="show"
              className="info-description"
            >
              <motion.p variants={textAnimation2} className="last-years">
                In the past couple of years, I have been focused on{" "}
                <span>professional development</span> and gaining new skills and
                experiences in the development of web applications.
                <br /> <span>I graduated</span> from Faculty of Electrical
                Engineering, Computer Science and Information Technology Osijek.
              </motion.p>
              <motion.p variants={textAnimation3} className="experience">
                I have <span>experience</span> with teamwork where the division
                of tasks within the team, coordination and{" "}
                <span>good communication </span>
                enable overcoming problems and realizing project goals.
              </motion.p>
            </motion.div>
          </div>
          <Ribbon />
        </AboutSection>
        <ContactDownload>
          <Contact variants={textContainer} initial="hidden" animate="show">
            <motion.h1 variants={textAnimation2}>Get in touch</motion.h1>
            <Link to="/contact">
              <ArrowContact />
            </Link>
          </Contact>
          <DownloadSection
            variants={textContainer}
            initial="hidden"
            animate="show"
            className="download-icons"
          >
            <motion.div className="download-title" variants={textAnimation2}>
              <h2>Download certificates and CV</h2>
              <h4>(click on icon)</h4>
            </motion.div>
            <motion.div className="download-icons" variants={textAnimation3}>
              <Certificate />
              <Certificate />
              <CV />
            </motion.div>
          </DownloadSection>
        </ContactDownload>
      </StyledAbout>

      <Line />
      <Line2 />
      <Line3 />
      <Line4 />
    </>
  );
};

const StyledAbout = styled(motion.div)`
  height: 100vh;
  padding: 12rem 13rem;

  position: relative;
  z-index: 3;
`;

const AboutSection = styled.div`
  position: relative;
  display: flex;

  background: #b3b2b2;
  border-radius: 10px;
  z-index: 2;
  height: 450px;
  width: 100%;
  color: #434658;
  .img-container {
    img {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      height: 100%;
      width: 400px;
      margin: 0 auto;
      object-fit: cover;
    }
  }
  .info-container {
    overflow: hidden;
    .info-title {
      h1 {
        font-weight: lighter;
      }

      padding: 1rem 0 0 2rem;
    }
    .info-description {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-size: 1.1rem;
      span {
        font-weight: bold;
      }
    }

    .last-years {
      padding: 2rem 8rem 0rem 2rem;
      text-align: justify;
    }
    .experience {
      text-align: center;
      font-weight: lighter;
      font-size: 1.6rem;
      margin: 2rem 2rem 0 2rem;
      span {
        font-weight: bold;
        font-size: 1.7rem;
      }
    }
  }
`;
const ContactDownload = styled.div`
  display: flex;
  justify-content: space-between;
  color: #cccccc;
  padding: 2rem 2rem;
`;
const Contact = styled(motion.div)`
  display: flex;
  gap: 1rem;
`;
const DownloadSection = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .download-icons {
    cursor: pointer;
    padding-left: 1rem;
  }
`;
export default About;
