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
import { getMenuKeyFromPath, routeToMenuKeyMap } from "@/utils/menuKeyMapper";


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
  
  useEffect(() => {
  const key = getMenuKeyFromPath(window.location.pathname);
  dispatch(setCurrentMenu(routeToMenuKeyMap[key]));
}, [dispatch]);


  const items: MenuItem[] = [
  {
    key: "1",
    label: <Link href="/dashboard">داشبورد</Link>,
    icon: <Image src={homeIcon} alt="" />,
  },
  {
    key: "2",
    label: "قراردادها",
    icon: <Image src={documentIcon} alt="" />,
    children: [
      {
        key: "2-2",
        label: <Link href="/dashboard">قرارداد خرید و فروش خانه</Link>,
      },
      {
        key: "2-3",
        label: <Link href="/dashboard">قرارداد استخدام و همکاری</Link>,
      },
      {
        key: "2-4",
        label: <Link href="/dashboard">قرارداد مشاوره</Link>,
      },
      {
        key: "2-5",
        label: <Link href="/dashboard">قرارداد پیمانکاری</Link>,
      },
      {
        key: "2-6",
        label: <Link href="/dashboard">قرارداد مشارکت در کسب‌وکار</Link>,
      },
      {
        key: "2-7",
        label: <Link href="/dashboard">قرارداد محرمانگی (NDA)</Link>,
      },
    ],
  },
  {
    key: "3",
    label: "اسناد حقوقی و قانونی",
    icon: <Image src={documentIcon} alt="" />,
    children: [
      {
        key: "3-1",
        label: <Link href="/dashboard/">لایحه دفاعیه</Link>,
      },
      {
        key: "3-2",
        label: <Link href="/dashboard">شکایت‌نامه</Link>,
      },
      {
        key: "3-3",
        label: <Link href="/dashboard">اظهارنامه رسمی</Link>,
      },
      {
        key: "3-4",
        label: <Link href="/dashboard">تعهدنامه محضری</Link>,
      },
      {
        key: "3-5",
        label: <Link href="/dashboard">درخواست اعسار</Link>,
      },
      {
        key: "3-6",
        label: <Link href="/dashboard">نامه به دادگاه</Link>,
      },
      {
        key: "3-7",
        label: <Link href="/dashboard">نامه استشهادیه</Link>,
      },
    ],
  },
  {
    key: "4",
    label: "نامه‌های رسمی و اداری",
    icon: <Image src={officIcon} alt="" />,
    children: [
      {
        key: "4-1",
        label: <Link href="/dashboard">درخواست مرخصی</Link>,
      },
      {
        key: "4-2",
        label: <Link href="/dashboard">استعفانامه</Link>,
      },
      {
        key: "4-3",
        label: <Link href="/dashboard">معرفی‌نامه</Link>,
      },
      {
        key: "4-4",
        label: <Link href="/dashboard">دعوت‌نامه رسمی</Link>,
      },
      {
        key: "4-5",
        label: <Link href="/dashboard">نامه اعلام خسارت</Link>,
      },
      {
        key: "4-6",
        label: <Link href="/dashboard">درخواست گواهی اشتغال</Link>,
      },
      {
        key: "4-7",
        label: <Link href="/dashboard">گزارش رسمی</Link>,
      },
    ],
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
  className="dashboard-sidebar h-full !overflow-hidden font-semibold text-[20px] bg-[#0D1321] mt-10"
  onClick={onClick}
  style={{ width: "100%" }}
  selectedKeys={[currentMenu]}  // ✅ Only 1 item active
  mode="inline"
  items={items}
/>

    </>
  );
};

export default SidbarDashboard;
