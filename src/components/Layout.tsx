import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Modal from "./modals/Modal";
import { TIMEOUT } from "dns";
interface MyProps {
  children?: ReactNode;
}

export const Layout = ({ children }: MyProps): JSX.Element => (
  <>
    <div className="max-w-5xl">
      {/* <Navbar /> */}
      <Modal actionLabel="Submit" title="Hello World" isOpen />
      <div>{children}</div>
    </div>
  </>
);
