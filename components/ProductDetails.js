import styled from "styled-components";
import { useStateContext } from "../lib/context";
import { FaChessBishop, FaShoppingCart } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import BtnQuantity from "./_btnQuantity";
import { useEffect } from "react";

// animation variants
const card = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

const cards = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

export default function ProductDetails({ product }) {
  const {
    cartItems,
    showProductDetails,
    setShowProductDetails,
    setQty,
    totalPrice,
  } = useStateContext();

  const { title, description } = product.attributes;
  const regex = description
    .split("<br>")
    .map((des) => <li key={des}>{des}</li>);

  // mobile has different animation style
  const isMobile = window.innerWidth < 768; //Add the width you want to check for here (now 768px)
  let mobileVariant = {};
  if (!isMobile) {
    {
      mobileVariant = {
        ani: { y: "0%" },
        ini: { y: "50%" },
        exi: { y: "50%" },
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

  //   console.log(title);
  return (
    <ProductDetailsWrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowProductDetails(false)}
    >
      <SProductDetails
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
        className="SProductDetails"
      >
        <h3>{title.slice(0, -4)}</h3>
        <div>
          <p> About this item</p>
          <ul>{regex}</ul>
        </div>
        {/* {showProductDetails && (
          <CgClose
            id="close-product-details-mobile"
            onClick={() => setShowCart(false)}
          />
        )} */}
      </SProductDetails>
    </ProductDetailsWrapper>
  );
}

// animation
const { motion } = require("framer-motion");

const ProductDetailsWrapper = styled(motion.div)`
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

const SProductDetails = styled(motion.div)`
  position: relative;
  top: 25vh;
  height: 75vh;

  max-width: 480px;
  padding: 5rem;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 2rem 2rem 0 0;
  margin: 0 auto;

  background: radial-gradient(ellipse at top, #100000, #000000, #1c0306),
    radial-gradient(ellipse at bottom, #02051c, #1c0902, #031208);
  opacity: 0.6;
  z-index: 11;

  h3 {
    margin: 1rem 0 2rem 0;
    font-weight: 300;
  }
  ul {
    margin-left: 1rem;
    list-style: outside;
    font-size: 1.4rem;
    li {
      margin-top: 1.6rem;
    }
  }
`;
