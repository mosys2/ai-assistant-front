"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import api from "@/services/api";
import { useAppDispatch } from "@/hooks/redux";
import { openPaymentModalToggle } from "@/redux/features/Modals.slice";
import PaymentModal from "@/app/(main)/(modals)/PaymentModal";

const PaymentVerifyClient = () => {
  const searchParams = useSearchParams();
  const { status } = useSession();
  const dispatch = useAppDispatch();

  const [paymentSuccess, setPaymentSuccess] = useState<boolean | null>(null);
  const [paymentMessage, setPaymentMessage] = useState<string | null>(null);

  useEffect(() => {
    const authority = searchParams?.get("Authority");
    const paymentStatus = searchParams?.get("Status");

    if (authority && paymentStatus && status === "authenticated") {
      (async () => {
        try {
          const res = await api.verifyPayment(authority, paymentStatus);
          if (res) {
            setPaymentMessage(res?.message);
            setPaymentSuccess(res?.isSuccess);
            dispatch(openPaymentModalToggle(true));
          }
        } catch (error) {
          console.error(error);
          setPaymentSuccess(false);
          setPaymentMessage("خطا در وریفای پرداخت");
          dispatch(openPaymentModalToggle(true));
        }
      })();
    }
  }, [searchParams, status]);

  return (
    <>
      <PaymentModal isSuccess={paymentSuccess} message={paymentMessage} />
      <section className="w-full flex flex-col justify-center items-center" />
    </>
  );
};

export default PaymentVerifyClient;
