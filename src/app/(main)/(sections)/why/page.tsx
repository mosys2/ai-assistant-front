import React from "react";
// import HomeStart from './HomeStart'
// import HomeToDo from './HomeToDo'
import starIcon from "@/assets/images/star-white.svg";
import likeDocIcon from "@/assets/images/like-document.svg";

import Image from "next/image";
import { Col, Row } from "antd";

const Why = () => {
  return (
    <>
      <div className="w-full bg-[#1A3D9B] h-[364px]">
        <div className="container">
          <div className="w-full flex flex-col items-center text-white pt-[70px]">
            <span className="flex text-[14px] font-normal">
              <Image src={starIcon} alt="" className="me-2" />
              ویژگی های ما
            </span>
            <h3 className="mt-[10px] text-[32px] font-extrabold">
              چرا هوشیوا؟
            </h3>
            <p className="mt-5 text-[16px] text-white">
              هوشیوا بهت کمک می‌کنه بدون نیاز به تخصص، اسناد دقیق، رسمی و قابل
              استفاده تهیه کنی.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="mt-[-120px]">
          <Row gutter={[16, 16]} wrap>
            {[...Array(5)].map((_, i) => (
              <Col flex="1 1 20%" key={i}>
                <div className=" h-[237px] w-full px-[15px] py-[38px] text-center flex flex-col items-center why-box">
                  <Image src={likeDocIcon} alt="" />
                  <h4 className="text-[16px] text-black font-semibold mt-4">
                    تولید اسناد متنوع
                  </h4>
                  <p className="text-[#5B5B5B] text-[14px] mt-4">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default Why;
