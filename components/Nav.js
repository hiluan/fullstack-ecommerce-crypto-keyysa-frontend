import styled from "styled-components";
import Link from "next/link";
// import Cart from "./Cart";
import { useStateContext } from "../lib/context";
// import { RiShoppingBagFill } from "react-icons/ri";
// import { IoIosBeer } from "react-icons/io";
// import { BsFillQuestionDiamondFill } from "react-icons/bs";
import { useState } from "react";
import { useRouter } from "next/router";
// const { motion, AnimatePresence } = require("framer-motion");

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
      <SLogo>
        <p>keyysa</p>
        {/* <img src="/keyysa-logo.png" alt="" /> */}
      </SLogo>
      <SMenu>
        <li>home</li>
        <li>about</li>
        <li>
          <button>dark</button>
        </li>
      </SMenu>
    </SNav>
    // <SNav>
    //   {colorChange && <SNavBG id="SNavBG"></SNavBG>}
    //   <SLogo id="SLogo">
    //     <Link href={"/"}>
    //       <img
    //         src="/NurBierLogo.jpg"
    //         alt="Nur Bier"
    //         width="105px"
    //         height="30px"
    //       />
    //     </Link>
    //   </SLogo>
    //   <SNavList id="SNavList">
    //     <li onClick={() => route.push("/")}>
    //       <IoIosBeer className="menu-icon" />
    //       <p className="menu-txt">Home</p>
    //     </li>
    //     <li>
    //       <Link href="/#UeberNurBier">
    //         <BsFillQuestionDiamondFill className="menu-icon" />
    //       </Link>

    //       <p href="" className="menu-txt">
    //         <Link href="/#UeberNurBier">Über Nur Bier</Link>
    //       </p>
    //     </li>
    //     <li>
    //       <UserIcon />
    //       <p className="menu-txt">
    //         <Link href="/#Kontakt">Kontakt</Link>
    //       </p>
    //     </li>
    //     <li>
    //       <div className="menu-icon">
    //         <SCartTotal>
    //           {totalQty > 0 && (
    //             <motion.span
    //               animate={{ scale: 1 }}
    //               initial={{ scale: 0 }}
    //               // exit={{ scale: 0 }}
    //               id="cart-totalQty"
    //             >
    //               {totalQty}
    //             </motion.span>
    //           )}
    //           <RiShoppingBagFill onClick={() => setShowCart(true)} />
    //         </SCartTotal>
    //       </div>
    //       <div className="menu-txt">
    //         {/* <p>Mein Konto</p> */}
    //         <UserTxT />
    //         <SCartTotal>
    //           {totalQty > 0 && (
    //             <motion.span
    //               animate={{ scale: 1 }}
    //               initial={{ scale: 0 }}
    //               // exit={{ scale: 0 }}
    //               id="cart-totalQty"
    //             >
    //               {totalQty}
    //             </motion.span>
    //           )}
    //           <RiShoppingBagFill
    //             onClick={() => setShowCart(true)}
    //             id="einkaufskorb"
    //           />
    //         </SCartTotal>
    //       </div>
    //     </li>
    //   </SNavList>

    //   <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    // </SNav>
  );
}

const SNav = styled.div`
  position: relative;
  z-index: 100;
  display: flex;
`;

const SLogo = styled.div`
  position: fixed;
  top: 2rem;
  left: 10%;
  opacity: 1;
  transition: all ease 0.3s;
  filter: drop-shadow(0 0 6px rgb(0 0 0 / 0.4));
  cursor: pointer;
  padding: 1rem 1rem 0.5rem 1rem;
  /* &:hover {
    transform: scale(1.1);
  } */

  p {
    font-size: 3rem;
    font-weight: 700;
    color: var(--dtextfirst);
    font-family: "Aguafina Script", cursive;
    /* font-family: "Qwitcher Grypen", cursive; */
    /* font-family: "Yesteryear", cursive; */
  }
`;

const SMenu = styled.ul`
  position: fixed;
  top: 3rem;
  right: 10%;
  display: flex;
  align-items: center;
  color: white;
  list-style: none;
  font-size: 2rem;
  cursor: pointer;
  transition: all ease 0.3s;

  li {
    text-align: center;
    transition: all ease 0.15s;
    margin: 0 2rem;
    /* text-shadow: 0 0 3px #fff; */
  }
  div {
    display: flex;
    align-items: center;
    svg {
      transition: all ease 0.3s;
      z-index: 2;
      &:hover {
        transform: scale(1.4) translateY(-10%);
      }
    }
  }
  p {
    font-weight: 500;
    transition: all ease 0.3s;
    &:hover {
      transform: scale(1.2);
    }
  }

  .menu-icon {
    display: none;
  }
  #einkaufskorb {
    margin-left: 1rem;
  }
`;

// const SCartTotal = styled.div`
//   position: relative;
//   span {
//     position: absolute;
//     top: -30%;
//     right: -40%;
//     background: red;
//     color: white;
//     border-radius: 50%;
//     width: 2rem;
//     height: 2rem;
//     font-size: 1.3rem;
//     pointer-events: none;
//     z-index: 3;
//   }
// `;
