'use client';
import { useState } from 'react';
import { Layout, Menu, Input, Button, Form, Select } from 'antd';
import { MessageOutlined, FormOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';

const { Header, Sider, Content } = Layout;
const { TextArea } = Input;
const { Option } = Select;

const categories = [
  {
    label: 'لایحه حقوقی',
    children: ['مطالبه خسارت', 'اعتراض به رأی', 'الزام به انجام تعهد'],
  },
  {
    label: 'قولنامه',
    children: ['اجاره‌نامه', 'رهن', 'فروش ملک'],
  },
];

export default function Home() {
  return (
    <>
    <div className='w-full flex justify-between p-1'>
      <div className='w-1/2 text-lg'>به داشبورد خوش امدید</div>
      <div className='w-1/2 flex justify-end'>
      <button
      onClick={() => signOut({ callbackUrl: "/auth" })}
      className=" px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        خروج
      </button>
      </div>
    </div>
    </>
  );
}
