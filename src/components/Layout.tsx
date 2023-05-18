import React, { ReactNode } from "react";
import Navbar from "./Navbar/Navbar";
import Modal from "./modals/Modal";
import RentModal from "./modals/RentModal";
import useRentModal from "@/hooks/useAllModal";
import Footer from "./Footer";

interface MyProps {
  children?: ReactNode;
}

export const Layout = ({ children }: any): JSX.Element => (
  <>
    <>
      <div className="flex flex-col justify-center w-full ">
        <Navbar />
        <RentModal />
        <div className="flex flex-col justify-center w-full">{children}</div>
        <div className="asdasd">
          <Footer />
        </div>
      </div>
    </>
  </>
);
