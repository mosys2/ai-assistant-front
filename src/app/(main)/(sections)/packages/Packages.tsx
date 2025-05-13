"use client";

import { Card, Button, message } from "antd";
import { useEffect, useState } from "react";
import api from "@/services/api";
import { useRouter } from "next/navigation";
import priceIcon from "@/assets/images/price.svg";
import planIcon from "@/assets/images/plan-icon.svg";
import starPackageIcon from "@/assets/images/star-package.svg";

import Image from "next/image";

const Packages = () => {
  const router = useRouter();
  const [pricingData, setPricingData] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  const getPackage = async () => {
    try {
      const packages: any = await api.getAllPackage();
      console.log(packages);
      if (packages?.data) {
        setPricingData(packages.data);
      }
    } catch (error) {
      console.error("خطا در دریافت پلن‌ها:", error);
    } finally {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    getPackage();
  }, []);

  const handlePayment = async (packageId: string) => {
    try {
      await api.createPayment({ packageId }).then((data) => {
        console.log(data);
        if (data?.statusCode == 401) {
          message.warning("ابتدا وارد حساب کاربری خود شوید.");
          router.push("/auth");
          return;
        }
        if (data?.isSuccess) {
          router.replace(data?.data?.paymentUrl);
        } else {
          message.error(data.message);
        }
      });
    } catch (error: any) {
      message.error(error.message || "مشکلی در سرور رخ داده است.");
    }
  };

  return (
    <>
      <div className="w-full mb-96">
        <div className="container">
          <div className="w-full flex flex-col items-center pt-[70px]">
            <span className="flex text-[14px] font-normal">
              <Image src={priceIcon} alt="" className="me-2" />
              قیمت ما
            </span>
            <h3 className="mt-[10px] text-[32px] font-extrabold">
              پلن‌های هوشیوا
            </h3>
            <p className="mt-5 text-[16px]">
              از سند رایگان برای تست شروع کن، بعد با خرید پلن‌های بیشتر، دسترسی
              کامل داشته باش.{" "}
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6 plan-box-container">
            {pricingData.map((plan: any) => (
              <Card key={plan._id} className="w-[315px]">
                <figure className="w-[80px] h-[80px] flex justify-center items-center rounded-full bg-[#E9EEFB] m-auto">
                  <Image src={planIcon} alt="" />
                </figure>
                <h6 className="text-center mt-4 text-[20px] font-extrabold">
                  {plan.title}
                </h6>
                <p className="text-[32px] font-normal text-[#2556DA] mt-[13px] text-center">
                  {plan.price === 0 ? (
                    "رایگان"
                  ) : (
                    <>
                      {(plan.price / 10).toLocaleString()}{" "}
                      <span className="text-[16px] font-light text-[#040404]">
                        تومان
                      </span>
                    </>
                  )}
                </p>
                <div className="w-full mt-[30px] mb-[30px]">
                {plan?.data?.map((element: any) => {
                  return (
                    <p className="text-right flex text-black text-[16px]">
                      <Image src={starPackageIcon} alt=""  className="ml-2"/>
                      {element}
                    </p>
                  );
                })}
                </div>
                <Button
                  type="primary"
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  onClick={() => handlePayment(plan._id)}
                >
                  انتخاب پلن
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Packages;
