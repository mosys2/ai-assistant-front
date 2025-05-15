"use client";
import { Collapse, Row } from "antd";
import Item from "antd/es/list/Item";
import React from "react";
import collapsOpen from "@/assets/images/collaps-open.svg";
import collaps from "@/assets/images/collaps.svg";
import Image from "next/image";

const { Panel } = Collapse;
const FAQ = () => {
  return (
    <section className="w-full mb-[70px]" id="faq">
      <div className="container">
        <div className="w-full flex flex-col items-center pt-[70px]">
          <h3 className="mt-[10px] text-[32px] font-extrabold">
            سوالات متداول
          </h3>
          <p className="mt-5 text-[16px]">
            نگاهی بنداز به سندهایی که بقیه کاربران تولید کردن.
          </p>
        </div>
        <Row className="mt-14 lg:mt-10 w-full">
          <Collapse
            accordion
            expandIcon={({ isActive }) =>
              isActive ? (
                <Image
                  src={collapsOpen}
                  alt=""
                  style={{ color: "black", fontSize: "24px" }}
                />
              ) : (
                <Image
                  src={collaps}
                  alt=""
                  style={{ color: "black", fontSize: "24px" }}
                />
              )
            }
            expandIconPosition="right"
            className="xl:w-[50%] mx-auto border-0 mb-4 collapse-home"
          >
            <Panel
              key="1"
              header={
                <span className=" text-[16px] lg:text-[18px]">
                  آیا استفاده از هوشیوا نیاز به دانش حقوقی دارد؟
                </span>
              }
              className="mb-3 rounded-[10px]"
            >
              <p className="">
                خیر. فقط با پاسخ دادن به چند سؤال ساده، سند موردنیازتان ساخته
                می‌شود.
              </p>
            </Panel>
            <Panel
              key="2"
              header={
                <span className=" text-[16px] lg:text-[18px]">
                  آیا اسناد من ذخیره می‌شوند؟{" "}
                </span>
              }
              className="mb-3 rounded-[10px]"
            >
              <p className="">
                خیر. فقط با پاسخ دادن به چند سؤال ساده، سند موردنیازتان ساخته
                می‌شود.
              </p>
            </Panel>
            <Panel
              key="3"
              header={
                <span className=" text-[16px] lg:text-[18px]">
                  خروجی اسناد قابل ویرایش هستند؟
                </span>
              }
              className="mb-3 rounded-[10px]"
            >
              <p className="">
                بله
              </p>
            </Panel>
            <Panel
              key="4"
              header={
                <span className=" text-[16px] lg:text-[18px]">
                  چطور وارد سیستم شوم؟
                </span>
              }
              className="mb-3 rounded-[10px]"
            >
              <p className="">
                در منو سایت قسمت ورود یا ثبت نام 
              </p>
            </Panel>
          </Collapse>
        </Row>
      </div>
    </section>
  );
};

export default FAQ;
