import "../styles/globals.css";
import { StateContext } from "../lib/context";
import { Provider, createClient } from "urql";
import styled from "styled-components";
import { Toaster } from "react-hot-toast";
import Nav from "../components/Nav";
import Background from "../components/Background";

const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Provider value={client}>
        <Toaster />
        <Nav />
        <Component {...pageProps} />
        <Background />
      </Provider>
    </StateContext>
  );
}

export default MyApp;
