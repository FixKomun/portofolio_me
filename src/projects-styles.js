import styled from "styled-components";
import { motion } from "framer-motion";
// PROJECTS STYLING //
export const MyProjects = styled(motion.div)`
  min-height: 100vh;
  background: rgb(57, 122, 65);
  background: radial-gradient(
    circle,
    rgba(57, 122, 65, 0.8883928571428571) 0%,
    rgba(0, 0, 0, 1) 79%
  );
  position: relative;
`;

export const StyledProject = styled(motion.div)`
  color: #ece8e8;
  padding: 0rem 10rem;

  .title {
    text-align: center;
    font-size: 1rem;
    padding-top: 3rem;
    padding-left: 2rem;
  }
  .go-next {
    position: absolute;
    top: 42%;
    right: 10%;
    transform: translate(-10%, -45%);
  }
  .go-back {
    position: absolute;
    bottom: 10%;
    right: 10%;
    transform: translate(-10%, -10%);
  }
  .go-previous {
    position: absolute;
    top: 52%;
    right: 9.5%;
    transform: translate(-10%, -60%);
  }
`;
export const ProjectContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0rem;
  .made-with {
    h4 {
      padding: 1rem 0rem;
      position: absolute;
      top: 10%;
      left: 10%;
    }
    .web-logos {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1.5rem;
      padding-top: 1rem;
      padding-left: 1rem;
      height: 60px;
      width: 80px;
      img {
      }
    }
  }
  .project {
    width: 70vw;
    border-radius: 10px;
    .carousel-container {
      width: 60vw;
      border-radius: 10px;
      .dot {
        height: 14px;
        width: 14px;
        background: rgb(57, 122, 65);
      }
      .carousel-status {
        font-size: 1rem;
        color: rgb(57, 122, 65);

        // font-family: "Poppins", sans-serif;
      }
      .legend {
        background: rgb(13, 71, 19);
        font-size: 1rem;
      }
    }
    .carousel {
      display: flex;
      justify-content: center;
      border-radius: 10px;
      img,
      video {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 10px;
        margin: 0 auto;
        border-radius: 10px;
        background: black;
      }
      .carousel-item {
        height: 100%;
        border-radius: 10px;
      }
    }
  }
`;
export const ProjectDescription = styled(motion.div)`
  display: flex;
  align-items: center;
  text-align: justify;
  font-size: 1rem;

  p {
    padding: 0rem 10.5rem 0 11.5rem;
    color: #cccccc;
  }
  span {
    font-weight: bold;
    font-style: italic;
  }
  a {
    color: white;
    transition: all 0.3s ease;
    &:hover {
      color: rgb(13, 71, 19);
    }
  }
`;
