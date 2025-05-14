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
import api from "@/services/api";
import { setCurrentMobileVerify, setTimeToResendOtp } from "@/redux/features/Commons.slice";
import Image from "next/image";
import loginIcon from "@/assets/images/loginIcon.svg";

const LoginModal: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const { openLoginModal, openVerifyModal } = useAppSelector(
    (store) => store.modals
  );

  const router = useRouter();

  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<InputRef>(null); // ✅ درست شد

  useEffect(() => {
    inputRef.current?.focus(); // فوکوس روی ورودی موبایل
  }, []);

  const sendOtp = async () => {
    if (!/^09\d{9}$/.test(mobile)) {
      message.error("شماره موبایل معتبر نیست");
      return;
    }

    setLoading(true);
    try {
      const res = await api.createOtp({ mobile });
      console.log(res);
      if (res?.isSuccess) {
        dispatch(setCurrentMobileVerify(mobile));
        dispatch(setTimeToResendOtp(new Date(Date.now() + 120_000).toISOString()));
        dispatch(openLoginModalToggle(false));
        message.success("کد ارسال شد");
        dispatch(openVerifyModalToggle(true));
      } else {
        message.error(res.message || "ارسال کد ناموفق بود");
      }
    } catch {
      message.error("خطا در ارتباط با سرور");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      centered
      open={openLoginModal}
      onCancel={() => dispatch(openLoginModalToggle(false))}
      footer={null}
      closable={false}
      className="!w-[424px] !h-[276px] !rounded-2xl"
    >
      <div className="space-y-6 w-full max-w-md mx-auto rounded-2xl  bg-white">
        <div className="flex text-right text-lg font-semibold">
          <Image src={loginIcon} alt="" className="me-1" />
          ورود یا ثبت نام
        </div>
        <Form layout="vertical">
          <Form.Item
            label={<span className="font-normal text-[16px]">شماره همراه</span>}
            name={"name"}
          >
            <Input
              ref={inputRef}
              placeholder="شماره همراه خود را وارد کنید."
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full !h-[60px] text-[16px] font-light rounded-2xl"
              inputMode="numeric"
              maxLength={11}
            />
          </Form.Item>

          <Button
            type="primary"
            block
            className="w-full !h-[60px] bg-[#2556DA] text-[16px] font-bold rounded-2xl"
            loading={loading}
            onClick={sendOtp}
          >
            ورود یا ثبت نام
          </Button>
        </Form>
      </div>
    </Modal>
  );
};

export default LoginModal;
