import React from "react";
import Image from "next/image";


import Link from "next/link";
import { Button, Col, Form, Input, message, Row, Space } from "antd";
import FormItem from "antd/es/form/FormItem";
const Footer = () => {
  const[form]=Form.useForm();
const handleSubmit=async(props:any)=>{
  try{
   
  }catch(error:any){
    message.error(error.message);
  }
}
  return (
    <footer className="w-full">
     
    </footer>
  );
};

export default Footer;
