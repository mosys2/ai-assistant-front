import React from "react";
import Image from "next/image";

import Link from "next/link";
import { Anchor, Button, Col, Form, Input, message, Row, Space } from "antd";
import instagramIcon from "@/assets/images/instagram.svg";
import twiterIcon from "@/assets/images/twiter.svg";
import AnchorLink from "antd/es/anchor/AnchorLink";
import { closeSideMenutoggle } from "@/redux/features/Commons.slice";
import { useAppDispatch } from "@/hooks/redux";

const Footer = () => {
  const [form] = Form.useForm();
  const handleSubmit = async (props: any) => {
    try {
    } catch (error: any) {
      message.error(error.message);
    }
  };
  const dispatch = useAppDispatch();
  return (
    <footer className="home-footer pt-20 ps-24 pe-24 pb-4 text-white">
      <div className="container">
        <Row>
          <Col span={13} className="pe-6">
            <div>
              <h5 className="text-[18px] font-semibold">هوشیوا</h5>
              <p className="text-white text-[15px] leading-[30px] text-justify mt-3">
                هوشیوا یک سرویس هوشمند تولید سند و قرارداد است که با استفاده از
                هوش مصنوعی به کاربران کمک می‌کند تا بدون نیاز به تخصص، اسناد
                رسمی و کاربردی بسازند.از قرارداد اجاره تا توافق‌نامه کاری، از
                نامه‌های اداری تا متن‌های حقوقی – همه با چند کلیک ساده.تیم
                هوشیوا ترکیبی از مهندسان نرم‌افزار، متخصصان هوش مصنوعی و مشاوران
                حقوقی است.هدف ما ساده‌ست: ساخت ابزارهایی که کمک کنن افراد و
                کسب‌وکارها کارهای اداری‌شون رو راحت‌تر انجام بدن.
              </p>
            </div>
          </Col>
          <Col span={11}>
            <div className="header-footer">
              <span>راه های ارتباطی</span>
            </div>
            <p className="text-white text-[16px] font-light mt-4">
              <span className="font-semibold">کاشان</span> ، بلوار دانش ، فاز دو
              ،خیابان بهارستان
            </p>
            <div className="flex mt-4">
              <div>
                <span>شماره تماس</span>
                <p className="text-white mt-1">031-33000</p>
              </div>
              <div className="ms-16">
                <span>کدپستی</span>
                <p className="text-white mt-1">87149-71753</p>
              </div>
            </div>
            <div>
              <p className="text-white mt-4">شبکه های اجتماعی</p>
              <div className="flex">
                <Link target="_blank" href="#">
                  <figure className="w-[30px] h-[30px] bg-[#FFFFFF33] rounded-full flex justify-center items-center me-2 mt-2">
                    <Image src={instagramIcon} alt="sociall"></Image>
                  </figure>
                </Link>
                <Link target="_blank" href="#">
                  <figure className="w-[30px] h-[30px] bg-[#FFFFFF33] rounded-full flex justify-center items-center me-2 mt-2">
                    <Image src={twiterIcon} alt="sociall"></Image>
                  </figure>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div className="header-footer mt-5">
              <span>لینک های سریع</span>
            </div>
            <Anchor
              affix={false}
              className="menu-anchor hidden lg:inline-flex mt-3 mb-3"
              onChange={() => dispatch(closeSideMenutoggle())}
            >
              <ul className="footer-menu">
                <li>
                  <AnchorLink title="چرا هوشیوا؟" key={0} href="/#why" />
                </li>
                <li>
                  <AnchorLink title="پلن های ما" key={1} href="/#pricing" />
                </li>
                <li>
                  <AnchorLink title="نمونه اسناد" key={2} href="/#sample" />
                </li>
                <li>
                  <AnchorLink title="سوالات متداوا" key={3} href="/#faq" />
                </li>
                <li>
                  <AnchorLink title="درباره ما" key={3} href="/#faq" />
                </li>
                <li>
                  <AnchorLink title="تماس باما" key={3} href="/#faq" />
                </li>
                <li>
                  <AnchorLink title="قوانین استفاده" key={3} href="/#faq" />
                </li>
              </ul>
            </Anchor>
            <div className="header-footer !bg-transparent"></div>
            <p className="text-white pt-4 text-[12px] font-light">
              تمامی حقوق و شرایط این وبسایت متعلق به{" "}
              <span className="font-semibold">هوشیوا</span> است.
            </p>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
