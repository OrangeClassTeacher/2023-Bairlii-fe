import React from "react";
import Navbar from "./Navbar/Navbar";
import RentModal from "./modals/RentModal";
import Footer from "./Footer";

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
