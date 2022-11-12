import styled from "styled-components";
import Link from "next/link";
import { useStateContext } from "../lib/context";
import {
  RiHome3Line,
  RiHome3Fill,
  RiInformationLine,
  RiInformationFill,
  RiShoppingBagLine,
  RiShoppingBagFill,
  RiUser5Line,
  RiUser5Fill,
} from "react-icons/ri";
import { useState } from "react";
import { useRouter } from "next/router";
import Cart from "./Cart";
const { motion, AnimatePresence } = require("framer-motion");

export default function Nav() {
  const route = useRouter();
  const { showCart, setShowCart, totalQty } = useStateContext();
  const [colorChange, setColorchange] = useState(false);

  // const changeNavbarColor = () => {
  //   if (window.scrollY >= 450) {
  //     setColorchange(true);
  //   } else {
  //     setColorchange(false);
  //   }
  // };

  // if (typeof window !== "undefined") {
  //   window.addEventListener("scroll", changeNavbarColor);
  // }

  return (
    <SNav>
      {colorChange && <SNavBG id="SNavBG"></SNavBG>}
      <SLogo id="SLogo">
        <Link href={"/"}>
          <h3>keyysa</h3>
        </Link>
      </SLogo>
      <SMenu id="SMenu">
        <li onClick={() => route.push("/")}>
          <RiHome3Line className="menu-icon" />
        </li>
        <li>
          <Link href="">
            <RiInformationLine className="menu-icon" />
          </Link>
        </li>
        <li>
          <RiUser5Line />
        </li>
        <li>
          <SCartTotal>
            {totalQty > 0 && (
              <motion.span
                animate={{ scale: 1 }}
                initial={{ scale: 0 }}
                id="cart-totalQty"
              >
                {totalQty}
              </motion.span>
            )}
            <RiShoppingBagLine onClick={() => setShowCart(true)} />
          </SCartTotal>
        </li>
      </SMenu>

      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </SNav>
  );
}

const SNav = styled.div`
  position: fixed;
  top: 4vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  z-index: 100;
`;

const SLogo = styled.div`
  /* filter: drop-shadow(0 0 6px rgb(0 0 0 / 0.4)); */
  cursor: pointer;

  /* &:hover {
    transform: scale(1.1);
  } */

  h3 {
    font-size: 3rem;
    font-weight: 700;
    font-family: "Aguafina Script", cursive;
    color: var(--dfirst);

    /* font-family: "Qwitcher Grypen", cursive; */
    /* font-family: "Yesteryear", cursive; */
  }

  h3:hover {
    color: var(--amazonHL);
    text-shadow: 0px 0px 30px rgba(0, 0, 255, 0.8);
  }
`;

const SMenu = styled.ul`
  display: flex;
  list-style: none;
  font-size: 3rem;
  cursor: pointer;

  li {
    margin: 0 3rem;
    text-align: center;
    color: var(--dthird);
    /* text-shadow: 0 0 3px #fff; */
  }

  li:hover {
    box-shadow: 0px 0px 30px 5px rgba(0, 0, 255, 0.4);
    text-shadow: 0px 0px 30px rgba(0, 0, 255, 0.8);
    color: var(--amazonHL);
  }
`;

const SCartTotal = styled.div`
  position: relative;
  span {
    position: absolute;
    top: -30%;
    right: -40%;
    background: red;
    color: var(--dfirst);
    border-radius: 50%;
    width: 2.4rem;
    height: 2.4rem;
    font-size: 1.8rem;
    pointer-events: none;
    z-index: 3;
  }
`;
