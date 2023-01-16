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
    </>
  );
};

const StyledAbout = styled(motion.div)`
  height: 100vh;
  padding: 12rem 13rem;
  position: relative;
  z-index: 3;
  @media (max-width: 1000px) {
    padding: 14rem 10rem;
  }
  @media (max-width: 800px) {
    padding: 14rem 6rem;
  }
  @media (max-width: 580px) {
    padding: 14rem 4rem;
  }
  @media (max-width: 515px) {
    padding: 14rem 2rem;
  }
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
    width: 30%;
    img {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      height: 100%;
      width: 100%;
      margin: 0 auto;
      object-fit: cover;
    }
  }
  .info-container {
    overflow: hidden;
    width: 70%;
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
      margin: 2rem 2rem 1rem 2rem;
      span {
        font-weight: bold;
        font-size: 1.7rem;
      }
    }
  }
  @media (max-width: 1400px) {
    .info-container {
      .info-description {
        font-size: 1.1rem;
      }
      .last-years {
        padding: 2rem 5rem 0rem 2rem;
      }
      .experience {
        font-size: 1.3rem;
        span {
          font-size: 1.4rem;
        }
      }
    }
  }
  @media (max-width: 1200px) {
    flex-direction: column;
    height: 1000px;
    .img-container {
      width: 100%;
      height: 40%;
      img {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-bottom-left-radius: 0;
      }
    }
    .info-container {
      width: 100%;
      height: 60%;
      .info-description {
        .last-years {
          padding: 2rem 2rem 0rem 2rem;
        }
      }
    }
  }
  @media (max-width: 800px) {
    .info-container {
      .last-years {
        font-size: 1rem;
      }
      .experience {
        font-size: 1.1rem;
        span {
          font-size: 1.2rem;
        }
      }
    }
  }
  @media (max-width: 450px) {
    .info-container {
      .last-years {
        font-size: 0.9rem;
      }
      .experience {
        font-size: 0.9rem;
        span {
          font-size: 1rem;
        }
      }
    }
  }
`;
const ContactDownload = styled.div`
  display: flex;
  justify-content: space-between;
  color: #cccccc;
  padding: 2rem 2rem;
  @media (max-width: 1200px) {
    padding: 2rem 0rem;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
  }
`;
const Contact = styled(motion.div)`
  display: flex;
  gap: 1rem;
  @media (max-width: 1200px) {
    margin-top: 4rem;
    gap: 2rem;
  }
  @media (max-width: 515px) {
    h1 {
      font-size: 1.7rem;
    }
  }
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
  @media (max-width: 1200px) {
    gap: 2rem;
    .download-icons {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 4rem;
    }
  }
  @media (max-width: 515px) {
    h2 {
      font-size: 1.3rem;
    }
    h4 {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 400px) {
    h2 {
      font-size: 1rem;
    }
    h4 {
      font-size: 0.8rem;
    }
  }
`;
export default About;
