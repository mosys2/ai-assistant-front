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
    <Layout className="" style={{ background: "#131927" }}>
      <Layout className="bg-[#131927] ">
        {/* Sider (Sidebar) */}
        <Sider
          className="hidden lg:block dashboard-sidebar p-5 bg-[#0D1321] me-5"
          width={322}
          style={siderStyle}
        >
          <SidbarDashboard />
        </Sider>

        {/* Main Layout (Header + Content) */}
        <Layout className=" ml-0 md:ml-5 bg-transparent">
          {/* Header */}
          <Header className="bg-[#131927] text-white">
            {/* You can customize header content here */}
            <div className="text-xl font-semibold">داشبورد</div>
          </Header>

          {/* Content */}
          <Content className="!bg-[#1A2235] text-white rounded-[20px] p-4">{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default InLayout;
