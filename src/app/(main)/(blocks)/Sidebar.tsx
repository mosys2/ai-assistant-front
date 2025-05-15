"use client";
import React, { useCallback, useEffect, useState } from "react";
import logo from "@/assets/images/logo.svg";
 import close from "@/assets/images/close.svg";
import Image from "next/image";
import loginIcon from "@/assets/images/login-btn-icon.svg";
import smileIcon from "@/assets/images/smile.svg";
import tickIcon from "@/assets/images/tick.svg";
import docIcon from "@/assets/images/document.svg";
import faqIcon from "@/assets/images/faq.svg";
import { closeSideMenutoggle, openSideMenuToggle } from "@/redux/features/Commons.slice";
import Link from "next/link";
import { Anchor, Button, Spin } from "antd";
import { useSession } from "next-auth/react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { openLoginModalToggle } from "@/redux/features/Modals.slice";
import { useRouter } from "next/navigation";
import { LoadingOutlined } from "@ant-design/icons";

const { Link: AnchorLink } = Anchor;

const Sidebar = () => {
  const router=useRouter()
  const { data: session } = useSession();
  const dispatch = useAppDispatch();
  const { sideMenuToggle } = useAppSelector((store) => store.commons);
   const [loginLoading, setLoginLoading] = useState(true);
  
    useEffect(() => {
      setLoginLoading(false); // simulate loading complete
    }, []);

    const handleLogin = useCallback(() => {
      dispatch(closeSideMenutoggle())
        if (!session) {
          dispatch(openLoginModalToggle(true));
        } else {
          router.push("/dashboard");
        }
      }, [session, dispatch, router]);
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 transition-opacity duration-300 ${
          sideMenuToggle ? "visible opacity-50" : "invisible opacity-0"
        } z-50`}
        onClick={() => dispatch(closeSideMenutoggle())}
      ></div>
      <div className={`sidemenu ${sideMenuToggle ? "show" : ""}`}>
        <div className="h-[56px] bg-[#F6F6F8] flex p-3 justify-between">
          <Image  height={27} src={logo} alt="s" />
          <div
            onClick={() => dispatch(closeSideMenutoggle())}
            className="w-8 h-8 bg-[#d4d4d4] rounded-lg flex justify-center align-middle cursor-pointer"
          >
            <Image src={close} alt="close"></Image>
          </div>
        </div>
        <div className="p-3 text-[15px] text-[#646C8D] leading-10">
          <Anchor affix={false} className="menu-anchor-mobile">
          <ul className="">
                <li>
                  <Image src={smileIcon} alt="" />
                  <AnchorLink title="چرا هوشیوا؟" key={0} href="/#why" />
                </li>
                <li>
                  <Image src={tickIcon} alt="" />
                  <AnchorLink title="پلن های ما" key={1} href="/#pricing" />
                </li>
                <li>
                  <Image src={docIcon} alt="" />
                  <AnchorLink title="نمونه اسناد" key={2} href="/#sample" />
                </li>
                <li>
                  <Image src={faqIcon} alt="" />
                  <AnchorLink title="سوالات متداوا" key={3} href="/#faq" />
                </li>
              </ul>
          </Anchor>
         <Spin
              spinning={loginLoading || status === "loading"}
              indicator={<LoadingOutlined spin />}
              size="small"
            >
              <Button
                onClick={handleLogin}
                className="btn w-full h-[45px] !text-[16px] hidden lg:flex items-center gap-2"
              >
                <Image src={loginIcon} alt="login" />
                ورود / ثبت نام
              </Button>
            </Spin>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
