import { Layout } from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { LoginProvider } from "../Context/UserContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full">
      <LoginProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LoginProvider>
    </div>
  );
}
