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
    <Layout className="min-h-screen">
      <Sider className="bg-white shadow-md">
        <Menu mode="vertical" className="text-right">
          {categories.map((cat) => (
            <Menu.SubMenu
              key={cat.label}
              title={cat.label}
              onTitleMouseEnter={() => onCategoryHover(cat.label)}
            >
              {cat.children.map((item) => (
                <Menu.Item key={item} onClick={() => setSelectedSub(item)}>
                  {item}
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header className="bg-white shadow-sm px-6 text-right text-lg font-bold">اپلیکیشن حقوقی با هوش مصنوعی</Header>
        <Content className="p-6 bg-gray-50 flex flex-col gap-6">
          <Form
            layout="vertical"
            className="bg-white rounded-xl p-6 shadow-md w-full max-w-2xl mx-auto"
            onFinish={(values) => {
              // Simulate AI response
              setResponse(
                `لایحه برای ${selectedSub} با اطلاعات وارد شده: ${JSON.stringify(values, null, 2)}`
              );
            }}
          >
            <Form.Item label="نام خواهان" name="plaintiffName" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item label="نام خوانده" name="defendantName" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item label="شرح ماجرا" name="eventDescription">
              <TextArea rows={3} />
            </Form.Item>
            <Form.Item label="مدارک" name="evidence">
              <Input />
            </Form.Item>
            <Form.Item label="درخواست قانونی" name="legalRequest">
              <Input />
            </Form.Item>
            <Button htmlType="submit" type="primary" className="w-full mt-4">
              تولید لایحه
            </Button>
          </Form>

          <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-medium">پاسخ هوش مصنوعی</span>
              <MessageOutlined />
            </div>
            <TextArea
              value={response}
              onChange={(e) => setResponse(e.target.value)}
              rows={6}
            />
            <Button type="primary" className="mt-4 w-full">
              ذخیره تغییرات
            </Button>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
