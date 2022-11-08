import "../styles/globals.css";
import { StateContext } from "../lib/context";
import { Provider, createClient } from "urql";
// import { Toaster } from "react-hot-toast";
import Nav from "../components/Nav";

const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Provider value={client}>
        {/* <Toaster /> */}
        <Nav />
        <Component {...pageProps} />
      </Provider>
    </StateContext>
  );
}

export default MyApp;
