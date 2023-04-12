import React, { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Meta } from "./Meta";
interface MyProps {
  children?: ReactNode;
}

export const Layout = ({ children }: any): JSX.Element => (
  <>

    <Meta />
    <Navbar />
    <div>{children}</div>

  </>
);
