import styled from "styled-components";
import toast from "react-hot-toast";
import { useStateContext } from "../lib/context";

const BtnAddToCart = ({ product }) => {
  const { qty, onAdd } = useStateContext();
  const { title } = product.attributes;

  // create a toast
  const notify = () => {
    toast(`${qty} x "${title}" added to cart.`, {
      icon: "🍺",
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
    <SAdd
      onClick={() => {
        notify();
        onAdd(product.attributes, qty);
        console.log(product.attributes.slug);
        console.log(qty);
      }}
    >
      Add to Cart
    </SAdd>
  );
};

export default BtnAddToCart;

const SAdd = styled.button`
  cursor: pointer;
  /* background: var(--amazonBG); */
  background: transparent;
  color: var(--dsecond);
  border: 2px solid var(--amazonBG);
  border-radius: 0.8rem;
  padding: 0 2rem;
  z-index: 2;
  height: 4rem;

  &:hover {
    box-shadow: 0px 0px 30px 5px rgba(0, 0, 255, 0.3);
    border: 2px solid var(--amazonHL);
  }
`;
