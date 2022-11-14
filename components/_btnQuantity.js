import styled from "styled-components";
// import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { ImMinus, ImPlus } from "react-icons/im";

import { useStateContext } from "../lib/context";
import toast from "react-hot-toast";

const BtnQuantity = ({ item }) => {
  const { qty, onAdd, onRemove } = useStateContext();

  // create a toast
  const notifyRemove = () => {
    toast(`${qty} x "${item.title}" was removed from cart.`, {
      icon: "👎",
      duration: 2000,
      style: {
        fontSize: "1.4rem",
        borderRadius: "3px",
        background: "#111111",
        color: "#fff",
        maxWidth: "480px",
      },
    });
  };

  const notifyAdd = () => {
    toast(`${qty} x "${item.title}" was added to cart`, {
      icon: "👍",
      duration: 2000,
      style: {
        fontSize: "1.4rem",
        borderRadius: "3px",
        background: "#111111",
        color: "#fff",
        maxWidth: "480px",
      },
    });
  };

  return (
    <SQuantity>
      {/* <span>Quantity</span> */}
      <button
        onClick={() => {
          notifyRemove();
          onRemove(item);
        }}
      >
        <ImMinus />
      </button>
      <p>{item.quantity}</p>
      <button
        onClick={() => {
          notifyAdd();
          onAdd(item, 1);
        }}
      >
        <ImPlus />
      </button>
    </SQuantity>
  );
};
export default BtnQuantity;

const SQuantity = styled.div`
  display: flex;
  align-items: center;
  color: white;

  button {
    background: transparent;
    border: none;
    display: flex;

    font-size: 3rem;
    cursor: pointer;
    z-index: 2;
  }

  span {
    font-size: 2rem;
    text-align: left;
    margin-right: 2rem;
  }

  p {
    font-size: 2rem;
    color: white;
    opacity: 0.9;
    margin: 0 0.5rem;
    z-index: 2;
    width: 3rem;
    text-align: center;
  }

  svg {
    font-size: 3rem;
    margin: 0.5rem 0;
    color: var(--amazonBG);

    &:hover {
      box-shadow: 0px 0px 30px 5px rgba(0, 0, 255, 0.4);
      color: var(--amazonHL);
    }
  }
`;
