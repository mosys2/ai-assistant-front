import React, { FunctionComponent, ReactNode } from "react";
import Sidebar from "./(blocks)/Sidebar";
interface InLayoutProps {
  children: ReactNode;
}
const InLayout: FunctionComponent<InLayoutProps> = ({ children }) => {
  return (
    <>
      <Sidebar/>
      {children}
    </>
  );
};

export default InLayout;
