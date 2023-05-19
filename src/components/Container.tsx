import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }): JSX.Element => {
  return <div className="flex justify-center">{children}</div>;
};
