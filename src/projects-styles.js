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
  @media (max-width: 1200px) {
    padding: 0rem 8rem;
  }
  @media (max-width: 800px) {
    padding: 0rem 6rem;
  }
  @media (max-width: 800px) {
    padding: 0rem 6rem;
  }

  .title {
    text-align: center;
    font-size: 1rem;
    padding-top: 3rem;
    // padding-left: 2rem;
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
  @media (max-width: 1400px) {
    .go-next {
      right: 5%;
    }
    .go-previous {
      right: 4.5%;
      top: 60%;
    }
    .go-back {
      right: 5%;
      bottom: 3%;
    }
  }
  @media (max-width: 1000px) {
    .go-next {
      svg {
        width: 50px;
        height: 50px;
      }
      right: 5%;
      top: 35%;
    }
    .go-previous {
      svg {
        width: 50px;
        height: 50px;
      }
      right: 5%;
      top: 50%;
    }
    .go-back {
      right: 5%;
      bottom: 3%;
      svg {
        width: 50px;
        height: 50px;
      }
    }
  }
  @media (max-width: 550px) {
    padding: 0rem 4rem;
    .title {
      font-size: 0.8rem;
    }
    .go-next {
      svg {
        width: 30px;
        height: 30px;
      }
      right: 5%;
      top: 35%;
    }
    .go-previous {
      svg {
        width: 30px;
        height: 30px;
      }
      right: 5%;
      top: 45%;
    }
    .go-back {
      right: 5%;
      bottom: 3%;
      svg {
        width: 30px;
        height: 30px;
      }
    }
  }
  @media (max-width: 400px) {
    .title {
      font-size: 0.6rem;
    }
    padding: 0rem 2rem;
    .go-next {
      svg {
        width: 20px;
        height: 20px;
      }
      right: 1%;
      top: 30%;
    }
    .go-previous {
      svg {
        width: 20px;
        height: 20px;
      }
      right: 1%;
      top: 40%;
    }
    .go-back {
      right: 1%;
      bottom: 20%;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;
export const ProjectContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0rem;

  .made-with {
    .web-logos {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      padding-top: 1rem;
      padding-left: 1rem;

      img {
        height: 60px;
        width: 60px;
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
  @media (max-width: 1400px) {
    flex-direction: column;
    align-items: center;
    .made-with {
      display: flex;
      align-items: center;
      flex-direction: column;
      .web-logos {
        align-items: center;
        justify-content: center;
        flex-direction: row;
        padding: 1rem 0rem 2rem 0rem;
        transform: scale(0.8);
      }
    }
    .project,
    .carousel-item,
    .carousel-container {
      width: 100% !important;
    }
  }
  @media (max-width: 1000px) {
    .project {
      .carousel-container {
        .dot {
          height: 10px;
          width: 10px;
        }
        .carousel-status {
          font-size: 0.8rem;
        }
        .legend {
          font-size: 0.8rem;
        }
      }
    }
  }
  @media (max-width: 700px) {
    .project {
      .carousel-container {
        .dot {
          height: 10px;
          width: 10px;
        }
        .carousel-status {
          font-size: 0.6rem;
        }
        .legend {
          font-size: 0.6rem;
          padding: 5px;
        }
      }
    }
  }
  @media (max-width: 400px) {
    .made-with {
      h4 {
        font-size: 0.6rem;
      }
      .web-logos {
        img {
          height: 40px;
          width: 40px;
        }
      }
    }
    .project {
      .carousel-container {
        .control-dots {
          margin: 0;
        }
        .dot {
          height: 8px;
          width: 8px;
        }
        .carousel-status {
          font-size: 0.5rem;
        }
        .legend {
          font-size: 0.5rem;
          bottom: 20px;
        }
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
  @media (max-width: 1400px) {
    p {
      padding: 0rem 5rem 5rem 5rem;
    }
  }
  @media (max-width: 1200px) {
    p {
      padding: 0rem 4rem 5rem 4rem;
      font-size: 0.9rem;
    }
  }
  @media (max-width: 1000px) {
    p {
      padding: 0rem 2rem 3rem 2rem;
    }
  }
  @media (max-width: 800px) {
    p {
      padding: 0rem 1rem 3rem 1rem;
      font-size: 0.75rem;
    }
  }
`;
