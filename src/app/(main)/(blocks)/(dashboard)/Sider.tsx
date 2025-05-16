import { Button, Menu, MenuProps, MenuTheme, Select, Spin } from "antd";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";

import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  closeDashboardSideMenuToggle,
  setCurrentMenu,
} from "@/redux/features/Commons.slice";
import homeIcon from "@/assets/images/home.svg";
import contractIcon from "@/assets/images/contract.svg";
import documentIcon from "@/assets/images/menu-document.svg";
import officIcon from "@/assets/images/office.svg";
import customIcon from "@/assets/images/custom.svg";
import profileIcon from "@/assets/images/profile.png";
import arrowDownIcon from "@/assets/images/arrow-down.svg";


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
      label: <Link href="/dashboard">داشبورد</Link>,
      icon: <Image src={homeIcon} alt="" />,
    },
    {
      key: "2",
      label: <Link href="/dashboard">قراردادها</Link>,
      icon: <Image src={contractIcon} alt="" />,
    },
    {
      key: "3",
      label: <Link href="/dashboard">اسناد حقوقی و قانونی</Link>,
      icon: <Image src={documentIcon} alt="" />,
    },
    {
      key: "4",
      label: <Link href="/dashboard">نامه‌های رسمی و اداری</Link>,
      icon: <Image src={officIcon} alt="" />,
    },
    {
      key: "5",
      label: <Link href="/dashboard">سند سفارشی</Link>,
      icon: <Image src={customIcon} alt="" />,
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
      <div className="w-full text-white text-[15px] text-center mt-6">
        داشبورد مدیریت <span className="font-extrabold">هوشیوا</span>
      </div>
      <div className="w-full h-[69px] text-white bg-slate-800/60 rounded-xl mt-6 p-3 flex justify-between">
        <div className="flex items-center">
          <figure className="w-[30px] h-[30px] bg-white rounded-full">
            <Image src={profileIcon} width={30} height={30} className="rounded-full" alt="" />
          </figure>
          <div className="ms-2">
            <p className="text-white">0916836864</p>
            <span>پلن رایگان</span>
          </div>
        </div>
        <span className="flex items-center">
          <Image src={arrowDownIcon} alt="" />
        </span>
      </div>
      <Menu
        className=" h-full !overflow-hidden  font-semibold text-[20px] bg-[#0D1321] mt-10"
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
