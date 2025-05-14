"use client";

import { Button, Form, Input, InputRef, message, Modal, Space } from "antd";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { CloseCircleOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  openLoginModalToggle,
  openPaymentModalToggle,
  openVerifyModalToggle,
} from "@/redux/features/Modals.slice";
import { useRouter } from "next/navigation";
import { getSession, signIn } from "next-auth/react";
import Image from "next/image";
import loginIcon from "@/assets/images/loginIcon.svg";
import api from "@/services/api";
import { setTimeToResendOtp } from "@/redux/features/Commons.slice";


const VerifyModal: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const { openVerifyModal } = useAppSelector((store) => store.modals);
  const { currentMobileVerify,timeToResendOtp } = useAppSelector((store) => store.commons);

  const [code, setCode] = useState<string[]>(["", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const inputsRef = useRef<Array<InputRef | null>>([]);

  const [remainingTime, setRemainingTime] = useState<number>(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date().getTime();
      const resendTime = new Date(timeToResendOtp).getTime();
      const diff = Math.max(0, Math.floor((resendTime - now) / 1000)); // in seconds
      setRemainingTime(diff);
    };

    updateTime(); // initial run
    const interval = setInterval(updateTime, 1000); // update every second
    return () => clearInterval(interval);
  }, [timeToResendOtp]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < code.length - 1) {
        inputsRef.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const verifyOtp = async () => {
    const fullCode = code.join("");
    if (fullCode.length < 5) {
      message.error("کد ناقص است");
      return;
    }

    setLoading(true);
    try {
      console.log(fullCode, currentMobileVerify);
      const res = await signIn("credentials", {
        redirect: false,
        mobile: currentMobileVerify,
        code: fullCode,
      });
      console.log("REDDDD", res?.ok);

      if (res?.ok) {
        await new Promise((resolve) => setTimeout(resolve, 500)); // یا poll کنی با getSession()

        const session = await getSession();
        if (session?.user?.accessToken) {
          dispatch(openVerifyModalToggle(false));
          message.success("ورود موفق");
          router.replace("/dashboard");
        } else {
          message.error("خطا در دریافت سشن");
        }

        message.success("ورود موفق");
        router.replace("/dashboard");
      } else {
        message.error("کد اشتباه است");
      }
    } catch {
      message.error("خطا در ارتباط با سرور");
    } finally {
      setLoading(false);
    }
  };

  const editNumberHandler=async()=>{
    await dispatch(openVerifyModalToggle(false));
    await dispatch(openLoginModalToggle(true))
  }

  const resendCode=async()=>{
    setLoading(true);
    try {
      const res = await api.createOtp({ mobile:currentMobileVerify });
      console.log(res);
      if (res?.isSuccess) {
        message.success("کد ارسال شد");
        dispatch(setTimeToResendOtp(new Date(Date.now() + 120_000).toISOString()));
      } else {
        message.error(res.message || "ارسال کد ناموفق بود");
      }
    } catch {
      message.error("خطا در ارتباط با سرور");
    } finally {
      setLoading(false);
    }
  }
  return (
    <Modal
      centered
      open={openVerifyModal}
      onCancel={() => dispatch(openVerifyModalToggle(false))}
      footer={null}
      closable={false}
      className="!w-[424px]  !rounded-2xl"
    >
      <div className="space-y-6 w-full max-w-md mx-auto rounded-2xl  bg-white">
        <div className="flex text-right text-lg font-semibold">
          <Image src={loginIcon} alt="" className="me-1" />
          ورود یا ثبت نام
        </div>
        <div>
          <p className="font-light !text-[16px]">کد تایید به شماره <span className="font-bold"> {currentMobileVerify} </span> ارسال شده است.</p>
        </div>
          <Form layout="vertical" className="verify-form !w-full"  dir="ltr">
            <Form.Item
              className="!text-right  flex justify-start !w-full"
              label={
                <span className="font-normal text-[16px]">کد ارسال شده</span>
              }
              name={"name"}
            >
              {code.map((digit, index) => (
                <Input
                  key={index}
                  ref={(el) => (inputsRef.current[index] = el)}
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-[60px] !h-[60px] text-[16px] font-light rounded-2xl ms-1 me-1 text-center"
                  inputMode="numeric"
                />
              ))}
            </Form.Item>
          </Form>
              <div className="flex flex-col justify-center items-center">
      {remainingTime > 0 ? (
        <>
          <p className="font-bold">{formatTime(remainingTime)}</p>
          <span>زمان باقی مانده تا ارسال مجدد کد تایید</span>
        </>
      ) : (
        <button
          onClick={resendCode}
          className="text-blue-600 font-semibold  hover:text-blue-800 transition"
        >
          ارسال مجدد کد تایید
        </button>
      )}
    </div>

        <Button
          type="primary"
          block
          className="w-full !h-[60px] bg-[#2556DA] text-[16px] font-bold rounded-2xl"
          loading={loading}
          onClick={verifyOtp}
        >
          ورود یا ثبت نام
        </Button>
        <div className="font-bold mt-5 text-center text-[16px] cursor-pointer" onClick={editNumberHandler}>
              ویرایش شماره موبایل
        </div>
      </div>
    </Modal>
  );
};

export default VerifyModal;
