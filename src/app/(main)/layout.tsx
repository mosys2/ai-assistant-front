import React, { FunctionComponent, ReactNode } from "react";
import Sidebar from "./(blocks)/Sidebar";
import LoginModal from "./(modals)/LoginModal";
import VerifyModal from "./(modals)/VerifyModal";
import { useAppDispatch } from "@/hooks/redux";
interface InLayoutProps {
  children: ReactNode;
}
const InLayout: FunctionComponent<InLayoutProps> = ({ children }) => {
  return (
    <>
      <LoginModal />
      <VerifyModal />
      <Sidebar/>
      {children}
    </>
  );
};

export default InLayout;
