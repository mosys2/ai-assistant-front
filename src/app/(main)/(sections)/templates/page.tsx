"use client";
import { Carousel, Col, Rate, Row } from "antd";
import React from "react";
import Image from "next/image";
import templateIcon from "@/assets/images/price.svg";
import lowDoc from "@/assets/images/lowdoc.avif";

const Templates = () => {
  return (
    <section className="bg-[#F7F8FD] pt-[70px] pb-[70px]" id="sample">
      <div className="container">
        <div className="w-full flex flex-col items-center ">
          <span className="flex text-[14px] font-normal">
            <Image src={templateIcon} alt="" className="me-2" />
            نمونه
          </span>
          <h3 className="mt-[10px] text-[32px] font-extrabold">
            نمونه اسناد ما
          </h3>
          <p className="mt-5 text-[16px] ">
            نگاهی بنداز به سندهایی که بقیه کاربران تولید کردن.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="pt-1 pb-1 lg:pt-12 lg:pb-12 w-[70%]  m-auto !bg-[#F7F8FD]">
          <Carousel
            slidesToShow={3}
            autoplay
            arrows={false}
            slidesToScroll={1}
            dots={true} // Enable dots
            speed={1000}
            infinite={true}
            draggable={true}
            className="carusel-customized"
            responsive={[
              {
                breakpoint: 768, // mobile screen size
                settings: {
                  slidesToShow: 1, // show one item on mobile
                  slidesToScroll: 1, // Move 4 slides when clicking on a dot
                  speed: 3000,
                },
              },
              {
                breakpoint: 1024, // tablet and above screen size
                settings: {
                  slidesToShow: 2, // show 3.5 items on larger screens
                  slidesToScroll: 2, // Move 4 slides when clicking on a dot
                  speed: 3000,
                },
              },
            ]}
            appendDots={(dots) => (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% - 35px)", // Adjust this value to position dots lower or higher
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {dots}
              </div>
            )}
            dotPosition="bottom"
          >
            <div className="p-4 ">
              <div className="bg-white  rounded-2xl ">
                <div className="flex">
                  <Image src={lowDoc} alt="" className="rounded-2xl" />
                </div>
              </div>
            </div>
            <div className="p-4 ">
              <div className="bg-white  rounded-2xl ">
                <div className="flex">
                  <Image src={lowDoc} alt="" className="rounded-2xl" />
                </div>
              </div>
            </div>
            <div className="p-4 ">
              <div className="bg-white  rounded-2xl ">
                <div className="flex">
                  <Image src={lowDoc} alt="" className="rounded-2xl" />
                </div>
              </div>
            </div>
            <div className="p-4 ">
              <div className="bg-white  rounded-2xl ">
                <div className="flex">
                  <Image src={lowDoc} alt="" className="rounded-2xl" />
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Templates;
