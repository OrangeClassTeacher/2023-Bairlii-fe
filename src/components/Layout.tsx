import React, { ReactNode } from "react";
import Navbar from "./Navbar/Navbar";
import Modal from "./modals/Modal";
import RentModal from "./modals/RentModal";
import useRentModal from "@/hooks/useAllModal";

interface MyProps {
  children?: ReactNode;
}

export const Layout = ({ children }: any): JSX.Element => (
  <>
    <div className="flex flex-col justify-center w-full ">
      <Navbar />
      {/* <Modal actionLabel="Submit" title="Hello World" isOpen /> */}
      <RentModal />
      <div className="flex flex-col justify-center w-full">{children}</div>
    </div>
  </>
);
