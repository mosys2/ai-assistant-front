"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import api from "@/services/api";
import { useAppDispatch } from "@/hooks/redux";
import { openPaymentModalToggle } from "@/redux/features/Modals.slice";
import PaymentModal from "@/components/dashboard/modals/PaymentModal";

const Page = () => {
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
          setPaymentMessage(res?.message ?? "خطایی رخ داده است");
          setPaymentSuccess(res?.isSuccess ?? false);
        } catch (error) {
          console.error(error);
          setPaymentSuccess(false);
          setPaymentMessage("خطا در وریفای پرداخت");
        } finally {
          dispatch(openPaymentModalToggle(true));
        }
      })();
    }
  }, [searchParams, status]);

  return (
    <>
      <PaymentModal isSuccess={paymentSuccess} message={paymentMessage} />
      <section
        className="w-full flex flex-col justify-center items-center"
        style={{ background: "var(--color-bg-gradient2)" }}
      />
    </>
  );
};

export default Page;
