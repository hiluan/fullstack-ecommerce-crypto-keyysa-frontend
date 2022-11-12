import styled from "styled-components";
import { useStateContext } from "../lib/context";
import { CgClose } from "react-icons/cg";

// animation variants

export default function About() {
  const { showAbout, setShowAbout } = useStateContext();

  // mobile has different animation style
  const isMobile = window.innerWidth < 768; //Add the width you want to check for here (now 768px)
  let mobileVariant = {};
  if (!isMobile) {
    {
      mobileVariant = {
        ani: { x: "0%" },
        ini: { y: "0%" },
        exi: { y: "0%" },
      };
    }
  } else {
    {
      mobileVariant = {
        ani: { y: "0%" },
        ini: { y: "50%" },
        exi: { y: "50%" },
      };
    }
  }

  return (
    <AboutWrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowAbout(false)}
    >
      <SAbout
        layout
        animate="ani"
        initial="ini"
        exit="exi"
        transition={{ type: "tween" }}
        variants={mobileVariant}
        // animate={{ x: "0%" }}
        // initial={{ x: "50%" }}
        // exit={{ x: "50%" }}
        onClick={(e) => e.stopPropagation()}
        id="SAbout"
      >
        <h1>About keyysa</h1>
        <h4>Mission</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iure
          maxime in dolorum ratione minus beatae, odit debitis a accusamus vero,
          minima, reiciendis iusto nam hic repellat deserunt adipisci quasi.
        </p>
        <h4>Mission</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iure
          maxime in dolorum ratione minus beatae, odit debitis a accusamus vero,
          minima, reiciendis iusto nam hic repellat deserunt adipisci quasi.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iure
          maxime in dolorum ratione minus beatae, odit debitis a accusamus vero,
          minima, reiciendis iusto nam hic repellat deserunt adipisci quasi.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iure
          maxime in dolorum ratione minus beatae, odit debitis a accusamus vero,
          minima, reiciendis iusto nam hic repellat deserunt adipisci quasi.
        </p>
        <h4>Mission</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iure
          maxime in dolorum ratione minus beatae, odit debitis a accusamus vero,
          minima, reiciendis iusto nam hic repellat deserunt adipisci quasi.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iure
          maxime in dolorum ratione minus beatae, odit debitis a accusamus vero,
          minima, reiciendis iusto nam hic repellat deserunt adipisci quasi.
        </p>
        {/* {showAbout && (
          <CgClose id="close-cart-mobile" onClick={() => setShowAbout(false)} />
        )} */}
      </SAbout>
    </AboutWrapper>
  );
}

// animation
const { motion } = require("framer-motion");

const AboutWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  backdrop-filter: blur(5px);
  z-index: 10;
`;

const SAbout = styled(motion.div)`
  position: relative;
  top: 10vh;
  height: 85vh;
  max-width: 768px;
  padding: 5rem;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 2rem;
  opacity: 0.95;
  margin: 0 auto;
  /* background: linear-gradient(
    90deg,
    rgba(17, 17, 17, 1) 0%,
    rgba(34, 34, 34, 1) 100%
  ); */

  background: radial-gradient(
      ellipse at top,
      rgba(10, 10, 10, 1),
      rgba(30, 30, 30, 1)
    ),
    radial-gradient(ellipse at bottom, rgba(20, 20, 20, 1), rgba(30, 30, 30, 1));
  z-index: 11;

  > svg {
    display: none;
  }
`;
