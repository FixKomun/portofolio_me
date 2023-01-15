import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ArrowNext = () => {
  return (
    <StyledSvg
      width="41"
      height="59"
      viewBox="0 0 41 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="arrow-next">
        <motion.path
          id="Arrow"
          d="M20.9278 12.2754C20.75 12.437 20.6058 12.632 20.5035 12.8494C20.4012 13.0667 20.3427 13.3021 20.3313 13.542C20.32 13.782 20.3561 14.0218 20.4375 14.2478C20.519 14.4738 20.6441 14.6816 20.8059 14.8592L24.1209 18.5032H12.4087C11.9238 18.5032 11.4589 18.6958 11.116 19.0387C10.7732 19.3815 10.5806 19.8465 10.5806 20.3313C10.5806 20.8162 10.7732 21.2812 11.116 21.624C11.4589 21.9669 11.9238 22.1595 12.4087 22.1595H24.1209L20.8059 25.8035C20.4794 26.1623 20.3089 26.6361 20.3317 27.1206C20.3546 27.6052 20.569 28.0608 20.9278 28.3873C21.2865 28.7137 21.7603 28.8843 22.2449 28.8615C22.7294 28.8386 23.185 28.6242 23.5115 28.2654L29.6053 21.5623C29.9119 21.2256 30.0818 20.7867 30.0818 20.3313C30.0818 19.876 29.9119 19.4371 29.6053 19.1004L23.5115 12.3973C23.3499 12.2195 23.1549 12.0754 22.9376 11.973C22.7202 11.8707 22.4848 11.8122 22.2449 11.8009C22.0049 11.7895 21.7651 11.8256 21.5391 11.9071C21.3131 11.9885 21.1054 12.1136 20.9278 12.2754Z"
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
          d="M20.6728 39.8291C15.5019 39.9194 10.5069 37.9518 6.78665 34.3592C3.06643 30.7666 0.925718 25.8433 0.835459 20.6724C0.7452 15.5015 2.71278 10.5065 6.30537 6.78624C9.89795 3.06601 14.8212 0.925301 19.9922 0.835042C25.1631 0.744783 30.1581 2.71237 33.8783 6.30495C37.5986 9.89753 39.7393 14.8208 39.8295 19.9918C39.9198 25.1627 37.9522 30.1577 34.3596 33.8779C30.767 37.5981 25.8438 39.7389 20.6728 39.8291ZM4.49115 20.6086C4.56449 24.81 6.30381 28.8101 9.3265 31.7291C12.3492 34.6481 16.4076 36.2468 20.609 36.1734C24.8104 36.1001 28.8106 34.3608 31.7295 31.3381C34.6485 28.3154 36.2472 24.257 36.1738 20.0556C36.1005 15.8542 34.3612 11.854 31.3385 8.93503C28.3158 6.01606 24.2574 4.4174 20.056 4.49074C15.8546 4.56407 11.8544 6.3034 8.93545 9.32608C6.01648 12.3488 4.41782 16.4072 4.49115 20.6086Z"
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
          id="next"
          d="M12.6536 47.0587C13.4376 47.0587 14.0616 47.3147 14.5256 47.8267C14.9976 48.3307 15.2336 49.0267 15.2336 49.9147V53.8267H13.1936V50.1907C13.1936 49.7427 13.0776 49.3947 12.8456 49.1467C12.6136 48.8987 12.3016 48.7747 11.9096 48.7747C11.5176 48.7747 11.2056 48.8987 10.9736 49.1467C10.7416 49.3947 10.6256 49.7427 10.6256 50.1907V53.8267H8.57359V47.1307H10.6256V48.0187C10.8336 47.7227 11.1136 47.4907 11.4656 47.3227C11.8176 47.1467 12.2136 47.0587 12.6536 47.0587ZM22.9715 50.3707C22.9715 50.5627 22.9595 50.7627 22.9355 50.9707H18.2915C18.3235 51.3867 18.4555 51.7067 18.6875 51.9307C18.9275 52.1467 19.2195 52.2547 19.5635 52.2547C20.0755 52.2547 20.4315 52.0387 20.6315 51.6067H22.8155C22.7035 52.0467 22.4995 52.4427 22.2035 52.7947C21.9155 53.1467 21.5515 53.4227 21.1115 53.6227C20.6715 53.8227 20.1795 53.9227 19.6355 53.9227C18.9795 53.9227 18.3955 53.7827 17.8835 53.5027C17.3715 53.2227 16.9715 52.8227 16.6835 52.3027C16.3955 51.7827 16.2515 51.1747 16.2515 50.4787C16.2515 49.7827 16.3915 49.1747 16.6715 48.6547C16.9595 48.1347 17.3595 47.7347 17.8715 47.4547C18.3835 47.1747 18.9715 47.0347 19.6355 47.0347C20.2835 47.0347 20.8595 47.1707 21.3635 47.4427C21.8675 47.7147 22.2595 48.1027 22.5395 48.6067C22.8275 49.1107 22.9715 49.6987 22.9715 50.3707ZM20.8715 49.8307C20.8715 49.4787 20.7515 49.1987 20.5115 48.9907C20.2715 48.7827 19.9715 48.6787 19.6115 48.6787C19.2675 48.6787 18.9755 48.7787 18.7355 48.9787C18.5035 49.1787 18.3595 49.4627 18.3035 49.8307H20.8715ZM28.0141 53.8267L26.7301 51.9667L25.6501 53.8267H23.4301L25.6381 50.4067L23.3701 47.1307H25.6741L26.9581 48.9787L28.0381 47.1307H30.2581L28.0141 50.5027L30.3181 53.8267H28.0141ZM34.8407 52.0867V53.8267H33.7967C33.0527 53.8267 32.4727 53.6467 32.0567 53.2867C31.6407 52.9187 31.4327 52.3227 31.4327 51.4987V48.8347H30.6167V47.1307H31.4327V45.4987H33.4847V47.1307H34.8287V48.8347H33.4847V51.5227C33.4847 51.7227 33.5327 51.8667 33.6287 51.9547C33.7247 52.0427 33.8847 52.0867 34.1087 52.0867H34.8407Z"
          initial={{ x: -30, fill: "rgba(255,255,255,0)", scale: 1 }}
          animate={{ x: 0, fill: "rgba(255,255,255,1)", scale: 1.2 }}
          transition={{
            default: { duration: 1 },
            fill: { duration: 2 },
          }}
        />
      </g>
    </StyledSvg>
  );
};

const StyledSvg = styled(motion.svg)`
  cursor: pointer;
  #next {
    transform: scale(1.2);
    transform-origin: center;
  }
`;
export default ArrowNext;
