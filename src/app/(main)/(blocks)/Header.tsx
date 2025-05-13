"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import humber from "@/assets/images/humbr.svg";
import Link from "next/link";
import { Button, Col, Row, Spin, Anchor } from "antd";
import loginIcon from "@/assets/images/login-btn-icon.svg";
import smileIcon from "@/assets/images/smile.svg";
import tickIcon from "@/assets/images/tick.svg";
import docIcon from "@/assets/images/document.svg";
import faqIcon from "@/assets/images/faq.svg";



import { useDispatch } from "react-redux";
import {
  closeSideMenutoggle,
  openSideMenuToggle,
} from "@/redux/features/Commons.slice";
import { useSession } from "next-auth/react";
import { LoadingOutlined } from "@ant-design/icons";
import { useAppDispatch } from "@/hooks/redux";

const { Link: AnchorLink } = Anchor;

const Header = () => {
  const { data: session } = useSession();
  const dispatch = useAppDispatch();
  const [loginLoading, setLoginLoading] = useState(true);
  useEffect(() => {
    setLoginLoading(false);
  });
  const closeSidebar = () => {
    dispatch(closeSideMenutoggle());
  };
  useEffect(() => {
    const navbar = document.querySelector(".navbar-desktop");

    const handleScroll = () => {
      if (window.scrollY > 0) {
        navbar?.classList.add("sticky");
      } else {
        navbar?.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar w-full navbar-desktop mt-[30px] z-10">
      <div className="menu w-5/6 xl:w-2/3 h-full m-auto flex flex-row justify-center items-center ps-[24px] pe-[24px] bg-white">
        <Row className="w-full h-[75px] md:h-76px justify-between">
          <div className="flex">
            <Link href="/" className="flex ">
              <Image className="logo" alt="EasyWaySEO" src={logo}></Image>
              <span className="text-[18px] font-semibold mr-[6px] flex justify-center items-center">
                هوشیوا
              </span>
            </Link>
          </div>
          <Col className="flex items-center">
            <Anchor
              affix={false}
              className="menu-anchor hidden lg:inline-flex"
              onChange={() => dispatch(closeSideMenutoggle())}
            >
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
          </Col>
          <Col className="flex items-center">
            <Spin
              indicator={<LoadingOutlined spin />}
              spinning={loginLoading}
              size="small"
            >
              <Link href="#" className=" hidden lg:block ">
                <Button className="btn w-[165px] h-[45px] !text-[16px] hidden lg:block ">
                  <Image src={loginIcon} alt="" />
                  ورود / ثبت نام
                </Button>
              </Link>
            </Spin>
            <span
              className="w-[32px] h-[32px] block lg:hidden rounded-[7px] humber-menu-btn"
              onClick={() => dispatch(openSideMenuToggle())}
            >
              <Image src={humber} alt="humber" />
            </span>
          </Col>
        </Row>
      </div>
    </nav>
  );
};

export default Header;
