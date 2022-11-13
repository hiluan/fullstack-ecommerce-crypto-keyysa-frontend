import styled from "styled-components";
import { useRouter } from "next/router";
import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../lib/query";
import { useStateContext } from "../lib/context";
import Link from "next/link";
import { useEffect } from "react";
import BtnAddToCart from "../components/_btnAddToCart";
import BtnQuantity from "../components/_btnQuantity";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const { motion } = require("framer-motion");

export default function ProductDetails() {
  // use state
  const { qty, setQty, increaseQty, decreaseQty, onAdd, cartItems } =
    useStateContext();

  // reset Qty anytime going to a product page
  useEffect(() => {
    setQty(1);
  }, []);

  // fetch slug
  const { query } = useRouter();

  // fetch graphql data
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: {
      slug: query.slug,
    },
  });

  const { data, fetching, error } = results;
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no...{error.message}</p>;

  const { title, description, image } = data.products.data[0].attributes;
  const product = data.products.data[0];
  const item = cartItems.filter(
    (item) => item.slug === product.attributes.slug
  )[0];

  const regex = description.split(". ").map((des) => <li>{des}.</li>);
  // const regex = description.replace(". ", ".\n");

  return (
    <SWrapper>
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
      >
        <Link href={"/"}>
          <div></div>
        </Link>
      </motion.div> */}
      <SDetails className="card-content-container open">
        {/* <motion.div
        className="card-content"
        > */}
        <img src={image.data.attributes.formats.medium.url} alt={title} />
        <SInfo>
          <h3>{title}</h3>
          <div>
            <p> About this item</p>
            <ul>{regex}</ul>
          </div>
          <div className="product-btngroup">
            {item === undefined ? (
              <BtnAddToCart className="" product={product} />
            ) : (
              <BtnQuantity className="" item={item} />
            )}
          </div>
        </SInfo>
        {/* </motion.div> */}
      </SDetails>
    </SWrapper>
  );
}

const SDetails = styled.div`
  position: relative;
  top: 10vh;
  max-width: 768px;
  display: flex;
  margin: 0 auto;

  img {
    margin-right: 5rem;
    width: 360px;
    height: 480px;
    object-fit: cover;
    border-radius: 2rem;
    box-shadow: 0px 0px 30px 5px rgba(0, 0, 255, 0.2);
    padding: 1rem;
    border: 2px solid var(--amazonHL);
  }
`;

const SWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: flex-end;
`;

const SInfo = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  h3 {
    margin: 1rem 0 2rem 0;
    font-weight: 500;
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
