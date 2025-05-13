import React from "react";
// import HomeStart from './HomeStart'
// import HomeToDo from './HomeToDo'
import dynamic from "next/dynamic";
import { Button, Row } from "antd";
import sadIcon from "@/assets/images/sad-white.svg";
import smileIcon from "@/assets/images/smile-blue.svg";

import Image from "next/image";

// const HomeStart=dynamic(()=>import('./HomeStart')>)

const Home = () => {
  return (
    <div className="container">
      <Row>
        <div className="w-full mt-11 mb-11 lg:mt-24 lg:mb-24 flex justify-center flex-col items-center">
          <h2 className="font-extrabold text-[32px]">هوشیوا،</h2>
          <p className="font-normal text-[20px] mt-2">
            یه دوست باهوش برای ساختن انواع سند و قرارداد
          </p>
          <p className="text-center mt-5 text-[#474747]">
            با کمک هوش مصنوعی، اسناد مختلفی مثل قرارداد اجاره، توافق‌نامه
            همکاری،
            <br /> نامه‌های اداری یا حتی لایحه حقوقی رو سریع و دقیق بساز.
          </p>
          <div className="flex justify-between mt-8">
            <Button className="btn1 w-[180px] h-[45px] !text-[16px] ml-4">
              <Image src={smileIcon} alt="" />
              چرا هوشیوا؟
            </Button>
            <Button className="btn w-[180px] h-[45px] !text-[16px] mr-4">
              <Image src={sadIcon} alt="" />
              رایگان شروع کن!
            </Button>
            
          </div>
        </div>
      </Row>
    </div>
  );
};

export default Home;
