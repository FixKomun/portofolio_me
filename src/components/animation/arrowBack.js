import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ArrowBack = () => {
  return (
    <StyledSvg
      width="41"
      height="59"
      viewBox="0 0 41 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 26">
        <g id="arrow-back">
          <motion.path
            id="Arrow"
            d="M28.5574 21.0996C28.3958 20.9219 28.2007 20.7777 27.9834 20.6754C27.7661 20.573 27.5307 20.5145 27.2907 20.5032C27.0508 20.4919 26.811 20.528 26.585 20.6094C26.3589 20.6908 26.1512 20.816 25.9736 20.9778L22.3295 24.2928V12.5806C22.3295 12.0957 22.1369 11.6307 21.7941 11.2879C21.4513 10.945 20.9863 10.7524 20.5014 10.7524C20.0166 10.7524 19.5516 10.945 19.2087 11.2879C18.8659 11.6307 18.6733 12.0957 18.6733 12.5806V24.2928L15.0292 20.9778C14.6705 20.6513 14.1967 20.4807 13.7121 20.5036C13.2276 20.5264 12.772 20.7408 12.4455 21.0996C12.119 21.4584 11.9485 21.9322 11.9713 22.4167C11.9942 22.9013 12.2086 23.3569 12.5674 23.6834L19.2705 29.7771C19.6071 30.0837 20.0461 30.2536 20.5014 30.2536C20.9568 30.2536 21.3957 30.0837 21.7324 29.7771L28.4355 23.6834C28.6132 23.5218 28.7574 23.3268 28.8597 23.1094C28.9621 22.8921 29.0206 22.6567 29.0319 22.4168C29.0432 22.1768 29.0071 21.937 28.9257 21.711C28.8443 21.485 28.7191 21.2772 28.5574 21.0996Z"
            stroke="#fff"
            strokeOpacity="1"
            strokeWidth="0.4"
            initial={{
              pathLength: 0,
              pathOffset: 1,
              fill: "rgba(255,255,255,0)",
            }}
            animate={{ pathLength: 1, pathOffset: 0, fill: "#fff" }}
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
          />
          <motion.path
            id="Circle"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M39.9839 19.6548C40.2095 24.8216 38.3733 29.8664 34.8794 33.6794C31.3854 37.4924 26.5198 39.7612 21.353 39.9868C16.1862 40.2124 11.1414 38.3762 7.32844 34.8823C3.51545 31.3883 1.2466 26.5227 1.02101 21.3559C0.795424 16.1891 2.63158 11.1444 6.12554 7.33136C9.61951 3.51836 14.4851 1.24951 19.6519 1.02393C24.8187 0.798338 29.8635 2.63449 33.6765 6.12846C37.4895 9.62242 39.7583 14.488 39.9839 19.6548ZM21.1935 36.334C25.3916 36.1507 29.3448 34.3073 32.1837 31.2093C35.0225 28.1112 36.5144 24.0123 36.3311 19.8143C36.1478 15.6162 34.3044 11.663 31.2063 8.82413C28.1083 5.98528 24.0094 4.49341 19.8114 4.6767C15.6133 4.85999 11.6601 6.70343 8.82121 9.80148C5.98237 12.8995 4.49049 16.9984 4.67378 21.1965C4.85707 25.3945 6.70051 29.3478 9.79857 32.1866C12.8966 35.0255 16.9955 36.5173 21.1935 36.334Z"
            stroke="white"
            strokeWidth="1"
            initial={{
              pathLength: 0,
              pathOffset: 1,
              fill: "rgba(255, 255, 255, 0)",
            }}
            animate={{
              pathLength: 1,
              pathOffset: 0,
              fill: "#fff",
            }}
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 3, ease: [1, 0, 0.8, 1] },
            }}
          />
          <motion.path
            id="exit"
            d="M15.056 50.544C15.056 50.736 15.044 50.936 15.02 51.144H10.376C10.408 51.56 10.54 51.88 10.772 52.104C11.012 52.32 11.304 52.428 11.648 52.428C12.16 52.428 12.516 52.212 12.716 51.78H14.9C14.788 52.22 14.584 52.616 14.288 52.968C14 53.32 13.636 53.596 13.196 53.796C12.756 53.996 12.264 54.096 11.72 54.096C11.064 54.096 10.48 53.956 9.968 53.676C9.456 53.396 9.056 52.996 8.768 52.476C8.48 51.956 8.336 51.348 8.336 50.652C8.336 49.956 8.476 49.348 8.756 48.828C9.044 48.308 9.444 47.908 9.956 47.628C10.468 47.348 11.056 47.208 11.72 47.208C12.368 47.208 12.944 47.344 13.448 47.616C13.952 47.888 14.344 48.276 14.624 48.78C14.912 49.284 15.056 49.872 15.056 50.544ZM12.956 50.004C12.956 49.652 12.836 49.372 12.596 49.164C12.356 48.956 12.056 48.852 11.696 48.852C11.352 48.852 11.06 48.952 10.82 49.152C10.588 49.352 10.444 49.636 10.388 50.004H12.956ZM20.0985 54L18.8145 52.14L17.7345 54H15.5145L17.7225 50.58L15.4545 47.304H17.7585L19.0425 49.152L20.1225 47.304H22.3425L20.0985 50.676L22.4025 54H20.0985ZM24.2252 46.608C23.8652 46.608 23.5692 46.504 23.3372 46.296C23.1132 46.08 23.0012 45.816 23.0012 45.504C23.0012 45.184 23.1132 44.92 23.3372 44.712C23.5692 44.496 23.8652 44.388 24.2252 44.388C24.5772 44.388 24.8652 44.496 25.0892 44.712C25.3212 44.92 25.4372 45.184 25.4372 45.504C25.4372 45.816 25.3212 46.08 25.0892 46.296C24.8652 46.504 24.5772 46.608 24.2252 46.608ZM25.2452 47.304V54H23.1932V47.304H25.2452ZM30.4643 52.26V54H29.4203C28.6763 54 28.0963 53.82 27.6803 53.46C27.2643 53.092 27.0563 52.496 27.0563 51.672V49.008H26.2403V47.304H27.0563V45.672H29.1083V47.304H30.4523V49.008H29.1083V51.696C29.1083 51.896 29.1563 52.04 29.2523 52.128C29.3483 52.216 29.5083 52.26 29.7323 52.26H30.4643ZM32.5673 54.096C32.2073 54.096 31.9113 53.992 31.6793 53.784C31.4553 53.568 31.3433 53.304 31.3433 52.992C31.3433 52.672 31.4553 52.404 31.6793 52.188C31.9113 51.972 32.2073 51.864 32.5673 51.864C32.9193 51.864 33.2073 51.972 33.4313 52.188C33.6633 52.404 33.7793 52.672 33.7793 52.992C33.7793 53.304 33.6633 53.568 33.4313 53.784C33.2073 53.992 32.9193 54.096 32.5673 54.096Z"
            initial={{ y: -30, fill: "rgba(255,255,255,0)", scale: 1 }}
            animate={{ y: 0, fill: "rgba(255,255,255,1)", scale: 1.2 }}
            transition={{
              default: { duration: 1 },
              fill: { duration: 2 },
            }}
          />
        </g>
      </g>
    </StyledSvg>
  );
};

const StyledSvg = styled(motion.svg)`
  cursor: pointer;
  overflow: hidden;
  #exit {
    overflow: hidden;
  }
`;

export default ArrowBack;
