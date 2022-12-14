import styled from "styled-components";
import Product from "./Product";
import { useState } from "react";

const { useScroll, useTransform } = require("framer-motion");
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";

export default function Products({ products }) {
  return (
    <SProducts id="SProducts">
      <SCards id="SCards">
        {products.map((product) => (
          <AnimatePresence key={product.id}>
            <Product product={product} />
          </AnimatePresence>
        ))}
      </SCards>
    </SProducts>
  );
}

const SProducts = styled.div`
  position: absolute;
  bottom: 8vh;
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
