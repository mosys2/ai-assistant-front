// types/next-auth.d.ts یا root/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id:string;
      accessToken: string;
      refreshToken: string;
      mobile: string;
    };
  }

  interface User {
    id:string;
    accessToken: string;
    refreshToken: string;
    mobile: string;
  }
}
