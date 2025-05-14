"use client";

import React, { useEffect, useState, useCallback } from "react";
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
import { useSession } from "next-auth/react";
import { LoadingOutlined } from "@ant-design/icons";
import { useAppDispatch } from "@/hooks/redux";
import { useRouter } from "next/navigation";
import {
  closeSideMenutoggle,
  openSideMenuToggle,
} from "@/redux/features/Commons.slice";
import { openLoginModalToggle } from "@/redux/features/Modals.slice";

const { Link: AnchorLink } = Anchor;

const Header = () => {
  const { data: session, status } = useSession();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [loginLoading, setLoginLoading] = useState(true);

  useEffect(() => {
    setLoginLoading(false); // simulate loading complete
  }, []);

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogin = useCallback(() => {
    if (!session) {
      dispatch(openLoginModalToggle(true));
    } else {
      router.push("/dashboard");
    }
  }, [session, dispatch, router]);

  return (
    <nav className="navbar w-full navbar-desktop mt-[30px] z-10">
      <div className="menu w-5/6 xl:w-2/3 h-full m-auto flex flex-row justify-center items-center ps-[24px] pe-[24px] bg-white">
        <Row className="w-full h-[75px] md:h-76px justify-between">
          <div className="flex">
            <Link href="/" className="flex">
              <Image className="logo" alt="هوشیوا" src={logo} />
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
              <ul>
                <li>
                  <Image src={smileIcon} alt="" />
                  <AnchorLink title="چرا هوشیوا؟" href="/#why" />
                </li>
                <li>
                  <Image src={tickIcon} alt="" />
                  <AnchorLink title="پلن های ما" href="/#pricing" />
                </li>
                <li>
                  <Image src={docIcon} alt="" />
                  <AnchorLink title="نمونه اسناد" href="/#sample" />
                </li>
                <li>
                  <Image src={faqIcon} alt="" />
                  <AnchorLink title="سوالات متداوا" href="/#faq" />
                </li>
              </ul>
            </Anchor>
          </Col>

          <Col className="flex items-center">
            <Spin
              spinning={loginLoading || status === "loading"}
              indicator={<LoadingOutlined spin />}
              size="small"
            >
              <Button
                onClick={handleLogin}
                className="btn w-[165px] h-[45px] !text-[16px] hidden lg:flex items-center gap-2"
              >
                <Image src={loginIcon} alt="login" />
                ورود / ثبت نام
              </Button>
            </Spin>

            <span
              className="w-[32px] h-[32px] block lg:hidden rounded-[7px] humber-menu-btn"
              onClick={() => dispatch(openSideMenuToggle())}
            >
              <Image src={humber} alt="menu" />
            </span>
          </Col>
        </Row>
      </div>
    </nav>
  );
};

export default Header;
