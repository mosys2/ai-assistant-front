'use client';
import { useState } from 'react';
import { Layout, Menu, Input, Button, Form, Select } from 'antd';
import { MessageOutlined, FormOutlined } from '@ant-design/icons';

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
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [subItems, setSubItems] = useState<string[]>([]);
  const [selectedSub, setSelectedSub] = useState<string>();
  const [response, setResponse] = useState<string>('در اینجا پاسخ ظاهر می‌شود...');

  const onCategoryHover = (label: string) => {
    const cat = categories.find((c) => c.label === label);
    if (cat) {
      setSubItems(cat.children);
    }
  };

  return (
    <>
    <div className=''>به داشبورد خوش امدید</div>
    </>
  );
}
