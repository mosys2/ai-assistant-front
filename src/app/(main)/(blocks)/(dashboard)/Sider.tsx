import { Button, Menu, MenuProps, MenuTheme, Select, Spin } from "antd";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import { CaretDownOutlined } from "@ant-design/icons";
import Link from "next/link";
import { signOut } from "next-auth/react";

import api from "@/services/api";
import { useRouter } from "next/navigation";
import { Helper } from "@/utils/helper";
import { PlusOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  closeDashboardSideMenuToggle,
  setCurrentMenu,
} from "@/redux/features/Commons.slice";

const { Option } = Select;

interface OptionData {
  id: string;
  title: string;
  value: string;
}

type MenuItem = Required<MenuProps>["items"][number];

const SidbarDashboard = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { currentMenu } = useAppSelector((store) => store.commons);
  const [theme, setTheme] = useState<MenuTheme>("light");
  const [loading, setLoading] = useState(true);
  // Fetch user websites using your custom hook

  const items: MenuItem[] = [
    {
      key: "1",
      label: <Link href="/dashboard/results">Results</Link>,
      // icon: <Image src={currentMenu === "1" ? results : resultsdark} alt="" />,
    },
    {
      key: "2",
      label: <Link href="/dashboard/keywords">Keywords</Link>,
      // icon: <Image src={currentMenu === "2" ? key : keydark} alt="" />,
    },
    {
      key: "3",
      label: <Link href="/dashboard/reports">Reports</Link>,
      // icon: <Image src={currentMenu === "3" ? reports : reportsdark} alt="" />,
    },
    {
      key: "4",
      label: <Link href="/dashboard/optimize">Optimize</Link>,
      // icon: (
      //   <Image src={currentMenu === "4" ? optimize : optimizedark} alt="" />
      // ),
    },
    {
      key: "5",
      label: <Link href="/dashboard/coaching">Coaching</Link>,
      // icon: (
      //   <Image src={currentMenu === "5" ? coaching : coachingblack} alt="" />
      // ),
    },
    {
      key: "6",
      label: <Link href="/dashboard/community">Community</Link>,
      // icon: (
      //   <Image src={currentMenu === "6" ? community : communityblack} alt="" />
      // ),
    },
    {
      key: "7",
      label: <Link href="/dashboard/chat">Chat</Link>,
      // icon: <Image src={currentMenu === "7" ? bxschat : bxschatblack} alt="" />,
    },
  ];

  const changeTheme = (value: boolean) => {
    setTheme(value ? "dark" : "light");
  };

  const onClick: MenuProps["onClick"] = (e) => {
    dispatch(setCurrentMenu(e.key));
    dispatch(closeDashboardSideMenuToggle());
  };

  return (
    <>
      <Menu
        className="rounded-xl mt-5 h-full !overflow-hidden p-2 font-semibold text-[20px]"
        onClick={onClick}
        style={{ width: "100%" }}
        defaultSelectedKeys={["1"]}
        selectedKeys={[currentMenu]}
        mode="inline"
        items={items}
      />
    </>
  );
};

export default SidbarDashboard;
