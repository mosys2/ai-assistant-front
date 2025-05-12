"use client";

import { axe } from "@/services/api";
import { SessionProvider, useSession } from "next-auth/react";
import { ReactNode } from "react";
// import { axe } from 'src/services/api';

const SetAuth = () => {
  const { data, status } = useSession();

  if (status === "authenticated") {
    axe.defaults.headers.Authorization = `Bearer ${data?.user.accessToken}`;
  }
  if (status === "unauthenticated") axe.defaults.headers.Authorization = "";

  return <></>;
};

interface AuthProvider {
  children: ReactNode;
}
function AuthProvider({ children }: AuthProvider) {
  return (
    <SessionProvider>
      <SetAuth />
      {children}
    </SessionProvider>
  );
}

export default AuthProvider;
