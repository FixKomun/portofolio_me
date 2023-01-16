import React from "react";
import Logo from "../components/animation/logo";
import { Link } from "react-router-dom";
import linkedin from "../img/logos/linkedin.svg";
import instagram from "../img/logos/instagram.svg";
import facebook from "../img/logos/facebook.svg";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { miniSize } from "./animation/animations";
const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <Link className="logo" to="/">
        <Logo />
      </Link>
      <ul>
        <li>
          <Link to="/about-me">About me</Link>
          <Underline
            initial={{ width: "0%" }}
            animate={{ width: pathname.startsWith("/about") ? "48%" : "0%" }}
            transition={{ duration: 0.75 }}
          />
        </li>

        <li>
          <Link to="/contact">Contact</Link>
          <Underline
            initial={{ width: "0%" }}
            animate={{ width: pathname.startsWith("/contact") ? "44%" : "0%" }}
            transition={{ duration: 0.75 }}
          />
        </li>

        <div className="socials">
          <motion.img
            src={linkedin}
            alt="linkedin"
            variants={miniSize}
            whileHover="show"
          />
          <motion.img
            src={instagram}
            alt="linkedin"
            variants={miniSize}
            whileHover="show"
          />
          <motion.img
            className="facebook"
            src={facebook}
            alt="linkedin"
            variants={miniSize}
            whileHover="show"
          />
        </div>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 10vh;
  width: 100%;
  padding: 1rem 10rem;
  margin: auto;
  background: linear-gradient(45deg, #2e4c9e90, #252424c5);
  backdrop-filter: blur(50px);
  position: fixed;
  top: 0;
  z-index: 20;

  #logo {
    cursor: pointer;
  }
  .logo {
    height: 90px;
    width: 90px;
    margin-top: 10px;
  }
  a {
    text-decoration: none;
    color: white;
  }
  ul {
    display: flex;
    font-size: 1.2rem;
    overflow: hidden;
    align-items: center;
    li {
      list-style: none;
      padding-right: 7rem;
      color: white;
      position: relative;
    }
  }
  .socials {
    display: flex;
    gap: 0.9rem;
    align-items: center;
    img {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }
    .facebook {
      width: 28px;
      height: 28px;
    }
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 1rem 2rem;
    ul {
      width: 100%;
      justify-content: space-around;
      padding-top: 1rem;
      li {
        padding-right: 1rem;
      }
    }
  }
  @media (max-width: 400px) {
    ul {
      font-size: 0.9rem;
    }
    .socials {
      img {
        width: 20px;
        height: 20px;
      }
      .facebook {
        width: 23px;
        height: 23px;
      }
    }
  }
  @media (max-width: 320px) {
    ul {
      font-size: 0.7rem;
    }
    .socials {
      img {
        width: 15px;
        height: 20px;
      }
      .facebook {
        width: 23px;
        height: 23px;
      }
    }
  }
`;

const Underline = styled(motion.div)`
  height: 0.2rem;
  background: #3658b4;
  position: absolute;
  left: 0%;
  top: 93%;
  border-radius: 10px;
`;

export default Nav;
