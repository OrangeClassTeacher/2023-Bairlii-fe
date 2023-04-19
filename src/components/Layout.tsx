import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Modal from "./modals/Modal";
interface MyProps {
  children?: ReactNode;
}

export const Layout = ({ children }: any): JSX.Element => (
  <>
    <div className="max-w-5xl">
      {/* <Navbar /> */}
      <Modal actionLabel="Submit" title="Hello World" isOpen />
      <div>{children}</div>
    </div>
  </>
);
