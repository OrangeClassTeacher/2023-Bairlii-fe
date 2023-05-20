import { Layout } from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TokenContextProvider from "@/Context/Context";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className="w-full">
      <TokenContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ToastContainer />
      </TokenContextProvider>
    </div>
  );
}
