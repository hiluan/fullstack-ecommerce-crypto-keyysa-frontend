import styled from "styled-components";
const { motion, AnimatePresence } = require("framer-motion");

export default function Background() {
  return (
    <SBg>
      <SGradientAni></SGradientAni>

      <Video id="sVideo" autoPlay loop muted>
        <source src={"/keyysa-intro-vid.mp4"} type="video/mp4" />
      </Video>
    </SBg>
  );
}

const SBg = styled.div`
  /* margin-top: -100vh; */
`;

const Video = styled.video`
  position: fixed;
  top: 0;
  width: 100%;
  /* height: 100vh; */
  z-index: 1;
  //   z-indexKP0-O=-POLIK8JUKHJYHTG87F6D5SDA4S3a3wq : 2;
`;

const SGradientAni = styled.div`
  position: fixed;
  top: 0;
  opacity: 0.995;
  width: 100%;
  height: 100vh;
  z-index: 2;

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
`;
