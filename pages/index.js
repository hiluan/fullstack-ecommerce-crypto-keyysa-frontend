import Head from "next/head";
import Intro from "../components/Intro";
import { useQuery } from "urql";
import { PRODUCT_QUERY } from "../lib/query";
import Products from "../components/Products";

export default function Home() {
  // fetch products from strapi
  const [results] = useQuery({ query: PRODUCT_QUERY });
  const { data, fetching, error } = results;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const products = data.products.data;

  return (
    <div>
      <Head>
        <title>keyysa | shopping with anonymity</title>
        <meta name="description" content="shopping with anonymity" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Intro products={products} />
        <Products products={products} />
      </main>
    </div>
  );
}
