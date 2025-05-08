"use client";

import { Card, Button, message } from "antd";
import { useEffect, useState } from "react";
import api from "@/services/api";
import { useRouter } from "next/navigation";

const Packages = () => {
  const router = useRouter();
  const [pricingData, setPricingData] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  const getPackage = async () => {
    try {
      const packages: any = await api.getAllPackage();
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
        }else{
            message.error(data.message)
        }
      });
    } catch (error: any) {
      message.error(error.message || "مشکلی در سرور رخ داده است.");
    }
  };

  return (
    <section className="w-full max-w-5xl mx-auto py-10 mt-12">
      <h2 className="text-2xl font-semibold text-center mb-8 text-gray-700">
        پلن‌های اشتراک
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingData.map((plan: any) => (
          <Card
            key={plan._id}
            title={plan.title}
            bordered
            className="text-center rounded-xl shadow hover:shadow-lg transition duration-300"
          >
            <p className="text-xl font-bold text-gray-800 mb-4">
              {plan.price === 0
                ? "رایگان"
                : `${(plan.price/10).toLocaleString()} تومان`}
            </p>
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
    </section>
  );
};

export default Packages;
