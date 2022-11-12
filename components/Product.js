import Image from "next/image";
import styled from "styled-components";
import { useStateContext } from "../lib/context";
import Link from "next/link";
import { useEffect, useState } from "react";
import BtnAddToCart from "./_btnAddToCart";
import BtnQuantity from "./_btnQuantity";

export default function Product({ product }) {
  const { title, price, image, slug } = product.attributes;
  const { cartItems, qty, setQty, increaseQty, decreaseQty, onAdd, onRemove } =
    useStateContext();

  useEffect(() => {
    setQty(1);
  }, []);

  const item = cartItems.filter(
    (item) => item.slug === product.attributes.slug
  )[0];
  console.log(product.attributes.slug);

  return (
    <SProduct className="SProduct">
      <Link href={`/${slug}`}>
        <div>
          <img
            className="SProduct-img"
            src={image.data.attributes.formats.small.url}
            alt={title}
          />
          {/* <div>
            <h2>${price}</h2>
          </div> */}
        </div>
      </Link>
      <div className="product-btngroup">
        {item === undefined ? (
          <BtnAddToCart className="" product={product} />
        ) : (
          <BtnQuantity className="" item={item} />
        )}
      </div>
    </SProduct>
  );
}

const SProduct = styled.div`
  img {
    width: 240px;
    height: 320px;
    object-fit: cover;
    opacity: 0.8;
    border-radius: 1rem;
    box-shadow: 0px 0px 30px 5px rgba(0, 0, 255, 0.2);
    /* border: 2px solid var(--amazonBG); */
  }

  img:hover {
    border: none;

    opacity: 1;
    /* transform: scale(1.05); */
  }

  a > div {
    position: relative;
    border: 2px solid var(--amazonBG);
    border-radius: 1rem;
  }

  a > div:hover {
    box-shadow: 0px 0px 30px 5px rgba(0, 0, 255, 0.3);
    border: 2px solid var(--amazonHL);
  }

  /* a > div > div {
    position: absolute;
    top: 8vh;
    width: 100%;
    display: flex;
    justify-content: center;
    h2 {
    }
  } */
`;

// const SBtnGroup = styled.div`
//   z-index: 10;
//   display: flex;
//   justify-content: center;
//   margin-top: 2vh;
// `;
