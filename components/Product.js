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
    (item) => item.handle === product.attributes.handle
  )[0];

  return (
    <SProduct className="SProduct">
      <Link href={`/products/${slug}`}>
        <img
          className="SProduct-img"
          src={image.data.attributes.formats.small.url}
          alt={title}
        />
        {/* <div className="SProduct-txt">
          <h1>${price}</h1>
          <h3>{title}</h3>
        </div> */}
      </Link>
      {/* <SBtnGroup id="product-btngroup">
        {item === undefined ? (
          <BtnAddToCart className="" product={product} />
        ) : (
          <BtnQuantity className="" item={item} />
        )}
      </SBtnGroup> */}
    </SProduct>
  );
}

const SProduct = styled.div`
  img {
    width: 240px;
    height: 320px;
    object-fit: cover;
    filter: brightness(0.8);
    border-radius: 1rem;
  }

  img:hover {
    filter: brightness(1);
    transform: scale(1.05);
  }
  /* .SProduct-txt {
    position: absolute;
    top: 0;
  } */
`;

const SBtnGroup = styled.div`
  z-index: 12;
`;
