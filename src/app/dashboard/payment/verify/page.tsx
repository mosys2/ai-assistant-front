import { Suspense } from "react";
import PaymentVerifyClient from "./PaymentVerifyClient";

export default function Page() {
  return (
    <Suspense fallback={<div>در حال بررسی پرداخت...</div>}>
      <PaymentVerifyClient />
    </Suspense>
  );
}
