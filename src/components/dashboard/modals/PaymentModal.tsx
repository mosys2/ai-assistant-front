"use client";

import { Button, Modal, Space } from "antd";
import { FunctionComponent } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { CloseCircleOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { openPaymentModalToggle } from "@/redux/features/Modals.slice";
import { useRouter } from "next/navigation";

interface Props {
  isSuccess: boolean | null;
  message: string | null;
}

const PaymentModal: FunctionComponent<Props> = ({ isSuccess, message }) => {
  const dispatch = useAppDispatch();
  const { openPaymentModal } = useAppSelector((store) => store.modals);
  const router = useRouter();

  const handleContinue = () => {
    dispatch(openPaymentModalToggle(false));
    router.replace("/dashboard");
  };

  return (
    <Modal
      centered
      open={openPaymentModal}
      onCancel={() => dispatch(openPaymentModalToggle(false))}
      footer={null}
      closable={false}
    >
      <Space
        direction="vertical"
        size="middle"
        className="text-center w-full pb-6 px-6 sm:px-7 pt-0 relative"
      >
        {isSuccess === true ? (
          <>
            <BsCheckCircle className="text-green-600 text-4xl text-center mx-auto" />
            <h3 className="text-2xl text-green-600">موفق</h3>
            <p>{message}</p>
          </>
        ) : isSuccess === false ? (
          <>
            <CloseCircleOutlined className="text-red-600 text-4xl text-center mx-auto" />
            <h3 className="text-2xl text-red-600">ناموفق</h3>
            <p>{message}</p>
          </>
        ) : null}

        <Button
          type="primary"
          size="large"
          shape="round"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          onClick={handleContinue}
        >
          ادامه
        </Button>
      </Space>
    </Modal>
  );
};

export default PaymentModal;
