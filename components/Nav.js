import styled from "styled-components";
import Link from "next/link";
// import Cart from "./Cart";
import { useStateContext } from "../lib/context";
import {
  RiHomeSmileLine,
  RiHomeSmileFill,
  RiInformationLine,
  RiInformationFill,
  RiShoppingBagLine,
  RiShoppingBagFill,
} from "react-icons/ri";
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
        <h3>keyysa</h3>
        {/* <img src="/keyysa-logo.png" alt="" /> */}
      </SLogo>
      <SMenu>
        <li>
          <RiHomeSmileLine />
        </li>
        <li>
          <RiInformationLine />
        </li>
        <li>
          <RiShoppingBagLine />
        </li>
        {/* <li>
          <button>dark</button>
        </li> */}
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
