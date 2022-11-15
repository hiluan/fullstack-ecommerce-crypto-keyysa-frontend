import styled from "styled-components";
import { useRef, useState } from "react";
// const { motion, useScroll, useTransform } = require("framer-motion");

export default function Intro({ products }) {
  return (
    <SIntro id="sIntro">
      <STopText id="STopText" className="absolute">
        <h1>We go public </h1>
        <h1>
          <span>for</span> you <span>to</span> stay private.
        </h1>
        <p>
          Enjoy shopping with complete anonymity. No tracking. No data
          harvesting.
        </p>
      </STopText>

      {/* <SGradientAni></SGradientAni> */}

      {/* <sVideo style={{ y }} id="sVideo" autoPlay loop muted> */}
      {/* <Video id="sVideo" autoPlay loop muted>
        <source src={"/keyysa-intro-vid.mp4"} type="video/mp4" />
      </Video> */}
    </SIntro>
  );
}

const SIntro = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// const SCards = styled.div`
//   display: none;
//   z-index: 22;
// `;
const STopText = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: column;
  width: 42%;
  height: 50vh;

  h1 {
    font-weight: 700;
    color: white;
  }
  span {
    opacity: 0.5;
    /* font-size: 3rem; */
  }
`;
const SGradientAni = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  min-width: 100%;
  height: 100vh;
  z-index: 2;
  opacity: 0.995;

  background: linear-gradient(
    45deg,
    #000d09,
    #000000,
    #100000,
    #1c0306,
    #02051c,
    #1c0902,
    #031208
  );
  background-size: 200% 300%;

  -webkit-animation: AnimationName 59s ease infinite;
  -moz-animation: AnimationName 59s ease infinite;
  animation: AnimationName 59s ease infinite;

  @-webkit-keyframes AnimationName {
    0% {
      background-position: 88% 0%;
    }
    50% {
      background-position: 13% 100%;
    }
    100% {
      background-position: 88% 0%;
    }
  }
  @-moz-keyframes AnimationName {
    0% {
      background-position: 88% 0%;
    }
    50% {
      background-position: 13% 100%;
    }
    100% {
      background-position: 88% 0%;
    }
  }
  @keyframes AnimationName {
    0% {
      background-position: 88% 0%;
    }
    50% {
      background-position: 13% 100%;
    }
    100% {
      background-position: 88% 0%;
    }
  }
  /* background-image: linear-gradient(45deg, #000d09, #000000, #100000),
    linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  background-size: 100% 100%;

  -webkit-animation: AnimationName 30s ease infinite;
  -moz-animation: AnimationName 30s ease infinite;
  animation: AnimationName 30s ease infinite;

  @-webkit-keyframes AnimationName {
    0% {
      background-position: 0% 99%;
    }
    50% {
      background-position: 100% 2%;
    }
    100% {
      background-position: 0% 99%;
    }
  }
  @-moz-keyframes AnimationName {
    0% {
      background-position: 0% 99%;
    }
    50% {
      background-position: 100% 2%;
    }
    100% {
      background-position: 0% 99%;
    }
  }
  @keyframes AnimationName {
    0% {
      background-position: 0% 99%;
    }
    50% {
      background-position: 100% 2%;
    }
    100% {
      background-position: 0% 99%;
    }
  } */
`;

const Video = styled.video`
  position: absolute;
  right: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: 1;
  //   z-indexKP0-O=-POLIK8JUKHJYHTG87F6D5SDA4S3a3wq : 2;
`;
