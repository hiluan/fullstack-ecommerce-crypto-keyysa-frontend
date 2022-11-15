import styled from "styled-components";
import { useStateContext } from "../lib/context";
import { CgClose } from "react-icons/cg";
import Link from "next/link";

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
        <h2>about keyysa | a decentralized store</h2>

        <h4>Intro</h4>
        <p>
          With Crypto, it was unbelievable how we can manage our own currency
          privately, send our 'money' to each other quickly with almost no
          transaction fee, and, for some, stay off the grid.
        </p>
        <p>
          Now, with keyysa, we can use cryptos to shop online without being
          watched, and without getting our data harvested by online retailers.
        </p>

        <h4>Mission & Core Principles</h4>
        <ul>
          <li>
            For the exposure of Bitcoin and for Cryptocurrency in general:
            Without involving fiats, you can use your coins to buy what you want
            directly and frequently.
          </li>
          <li>
            Not a snitch: keyysa has no KYC bullshit. You stay completely
            anonymous and no one will ever know this is you buying these items
            with your crypto.
          </li>
          <li>
            Make no money on your privacy: keyysa uses no tracking tools, no
            data mining, no cookies, and no annoying newsletter subscribing.
            keyysa makes sure no one can take advantage of your data.
          </li>
        </ul>

        <h4>What does that even mean?</h4>
        <p>
          That means, you come in, buy your stuff with your coins, I deliver,
          and that’s it. No one will ever know who spent these coins to get this
          or that. I go public for you to stay private.
        </p>
        <p>
          And if I make you happy, then tell your friends about it (Yes,
          please!).
        </p>
        <p>
          I hope this is worth to work on. Do you have questions, advice, or
          suggestions? I’m all ears and I appreciate it.
        </p>

        <h4>Handling payments</h4>
        <p>
          We use BTCPay Server and Lightning Network to handle transaction
          between us.
        </p>
        <p>
          More about{" "}
          <Link href="https://btcpayserver.org/#watchVideo">BTCPay Server</Link>{" "}
          and{" "}
          <Link href="https://docs.btcpayserver.org/LightningNetwork/">
            Lightning Network
          </Link>
          .
        </p>

        {/* <CgClose id="close-about-mobile" onClick={() => setShowAbout(false)} /> */}
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
  margin: 0 auto;
  /* background: linear-gradient(
    90deg,
    rgba(17, 17, 17, 1) 0%,
    rgba(34, 34, 34, 1) 100%
  ); */

  background: radial-gradient(ellipse at top, #100000, #000000, #1c0306),
    radial-gradient(ellipse at bottom, #02051c, #1c0902, #031208);
  opacity: 0.95;
  z-index: 11;

  h2 {
    font-weight: 300;
  }
  h4 {
    margin: 2rem 0 0 0;
  }

  li {
    margin: 1.5rem 0;
  }
  p {
    margin: 1.5rem 0;
  }
  a {
    color: var(--amazonHL);
  }

  a:hover {
    color: var(--amazonBG);
  }
`;
