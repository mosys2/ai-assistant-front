'use client';

import { Input, Button, message, InputRef } from 'antd';
import { useRef, useState, useEffect } from 'react';

import api from '@/services/api';

type Props = {
  onOtpSent: (mobile: string) => void;
};

export default function LoginBlock({ onOtpSent }: Props) {
  const [mobile, setMobile] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<InputRef>(null); // ✅ درست شد

  useEffect(() => {
    inputRef.current?.focus(); // فوکوس روی ورودی موبایل
  }, []);

  const sendOtp = async () => {
    if (!/^09\d{9}$/.test(mobile)) {
      message.error('شماره موبایل معتبر نیست');
      return;
    }

    setLoading(true);
    try {
      const res = await api.createOtp({ mobile });
      console.log(res)
      if (res?.isSuccess) {
        message.success('کد ارسال شد');
        onOtpSent(mobile);
      } else {
        message.error(res.message || 'ارسال کد ناموفق بود');
      }
    } catch {
      message.error('خطا در ارتباط با سرور');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 w-full max-w-md mx-auto rounded-xl  bg-white">
      <div className="text-center text-lg font-semibold text-gray-700">
        ورود با شماره موبایل
      </div>

      <Input
        ref={inputRef}
        size="large"
        placeholder="مثلاً: 09123456789"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        className="text-right"
        inputMode="numeric"
        maxLength={11}
      />

      <Button
        type="primary"
        block
        className="h-12 rounded-lg text-base full px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition"
        loading={loading}
        onClick={sendOtp}
      >
        ارسال کد
      </Button>
    </div>
  );
}
