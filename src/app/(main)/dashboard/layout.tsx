"use client";
import { useAppDispatch } from "@/hooks/redux";
import { Layout, Spin } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import React, {
  FunctionComponent,
  ReactNode,
  useEffect,
  useState,
} from "react";
import SidbarDashboard from "../(blocks)/(dashboard)/Sider";

interface InLayoutProps {
  children: ReactNode;
}

const siderStyle: React.CSSProperties = {
  overflow: "auto",
  height: "100vh",
  insetInlineStart: 0,
  scrollbarWidth: "none",
};
const InLayout: FunctionComponent<InLayoutProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <Layout
        className="p-5"
        style={{ background: "var(--color-bg-gradient2)" }}
      >
        <Layout className="bg-transparent mt-6">
          <Sider
            className="hidden lg:block"
            width={242}
            style={siderStyle}
          >
            <SidbarDashboard />
          </Sider>

          <Layout className="bg-transparent ml-0 md:ml-5">
            <Content className="!bg-transparent">{children}</Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default InLayout;
