'use client';

import { Input, Button, message } from 'antd';
import { InputRef } from 'antd';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { getSession, signIn } from 'next-auth/react'; // ⬅ اضافه شد
import api from '@/services/api';

type Props = {
  mobile: string;
};

export default function VerifyBlock({ mobile }: Props) {
  const [code, setCode] = useState<string[]>(['', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const inputsRef = useRef<Array<InputRef | null>>([]);

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

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const verifyOtp = async () => {
    const fullCode = code.join('');
    if (fullCode.length < 5) {
      message.error('کد ناقص است');
      return;
    }

    setLoading(true);
    try {
        console.log(fullCode,mobile)
      const res = await signIn('credentials', {
        redirect: false,
        mobile,
        code: fullCode,
      });
      console.log("REDDDD",res?.ok)

      if (res?.ok) {
        await new Promise(resolve => setTimeout(resolve, 500)); // یا poll کنی با getSession()

      const session = await getSession();
      if (session?.user?.accessToken) {
        message.success('ورود موفق');
        router.replace('/dashboard');
      } else {
        message.error('خطا در دریافت سشن');
      }

        message.success('ورود موفق');
        router.replace('/dashboard');
      } else {
        message.error('کد اشتباه است یا مشکلی رخ داده');
      }
    } catch {
      message.error('خطا در ارتباط با سرور');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6" dir="ltr">
      <div className="flex flex-row justify-center gap-2">
        {code.map((digit, index) => (
          <Input
            key={index}
            ref={(el) => (inputsRef.current[index] = el)}
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-12 h-12 text-center text-xl"
            inputMode="numeric"
          />
        ))}
      </div>
      <Button
        type="primary"
        block
        className="h-12 rounded-lg text-base full px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition"
        loading={loading}
        onClick={verifyOtp}
      >
        تأیید
      </Button>
    </div>
  );
}
