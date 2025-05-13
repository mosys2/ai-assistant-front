import React from "react";
import Image from "next/image";

import Link from "next/link";
import { Button, Col, Form, Input, message, Row, Space } from "antd";
import FormItem from "antd/es/form/FormItem";
const Footer = () => {
  const [form] = Form.useForm();
  const handleSubmit = async (props: any) => {
    try {
    } catch (error: any) {
      message.error(error.message);
    }
  };
  return (
    <footer className="home-footer pt-20 ps-24 pe-24 pb-4 text-white">
      <div className="container">
        <Row>
          <Col span={13} >
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
          <Col span={11} className="ps-6">
            <div className="header-footer">
              <span>راه های ارتباطی</span>
            </div>
            <p className="text-white text-[16px] font-light mt-4">
              <span className="font-semibold">کاشان</span> ، بلوار دانش ، فاز دو
              ،خیابان بهارستان
            </p>
          </Col>
        </Row>
         <div className="header-footer mt-5">
              <span>لینک های سریع</span>
            </div>
              <p className="text-white pt-4 text-[12px] font-light">تمامی حقوق و شرایط این وبسایت متعلق به هوشیوا است.</p>

      </div>
    </footer>
  );
};

export default Footer;
