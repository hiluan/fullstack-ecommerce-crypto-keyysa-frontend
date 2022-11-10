import styled from "styled-components";
// import { BsSearch } from "react-icons/bs";
// import { SMainBtn } from "../styles/SMainBtn";
import Product from "./Product";
import { useState } from "react";
// import { AnimateSharedLayout, AnimatePresence } from "framer";

// const {, useScroll, useTransform } = require("framer");

export default function Products({ products }) {
  // let { scrollY } = useScroll();
  // let y = useTransform(scrollY, [0, 2000], ["0%", "50%"]);

  return (
    <SProducts id="SProducts">
      <SCards
        // style={{ y }}
        id="SCards"
      >
        {products.map((product) => (
          // <AnimatePresence>
          <Product key={product.attributes.slug} product={product} />
          // </AnimatePresence>
        ))}
      </SCards>
      <SGradient></SGradient>
    </SProducts>
  );
}

const SProducts = styled.div`
  position: absolute;
  bottom: 10vh;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SCards = styled.div`
  max-width: 80rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 1rem;
`;
// const SGradient = styled.div`
//   content: " ";
//   position: absolute;
//   bottom: 0;
//   right: 0;
//   min-width: 100%;
//   height: 20vh;
//   z-index: 9;

//   background-image: linear-gradient(
//     to bottom,
//     rgba(0, 0, 0, 0),
//     rgba(0, 0, 0, 1)
//   );
// `;

const SGradient = styled.div`
  position: absolute;
  top: 0;
  min-width: 100%;
  z-index: 3;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1)
  );
`;
