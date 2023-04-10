import React, { ReactNode } from "react";
import Navbar from "./Navbar";
interface MyProps {
  children?: ReactNode;
}

export const Layout = ({ children }: MyProps): JSX.Element => (
  <>
    <div className="max-w-5xl mx-auto pt-6">
      <Navbar />
      <div>{children}</div>
    </div>
  </>
);
