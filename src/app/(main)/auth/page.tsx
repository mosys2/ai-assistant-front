'use client';
import { useState } from 'react';
import LoginBlock from './blocks/login';
import VerifyBlock from './blocks/verify';

export default function AuthPage() {
  const [mobile, setMobile] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">
          ورود / ثبت‌نام
        </h2>
        {mobile ? (
          <VerifyBlock mobile={mobile} />
        ) : (
          <LoginBlock onOtpSent={setMobile} />
        )}
      </div>
    </div>
  );
}
