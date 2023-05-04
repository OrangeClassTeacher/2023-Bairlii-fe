import Ads from "@/components/Ads";
import SwiperForDetail from "@/components/SwiperForDetail";
import SwiperForModal from "@/components/SwiperForModal";
import { Inter } from "next/font/google";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex max-w-5 w-full justify-center">
      <Ads />
    </div>
  );
}
