import { Layout } from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
