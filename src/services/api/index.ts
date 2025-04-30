import axios from "axios";
import { ApiClient } from "./generated";
import { signOut } from "next-auth/react";


export const axe = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  headers: {
    Authorization: undefined, 
  },
  transformResponse: (data) => data,
});

axe.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      console.log("mosys2",error);
      // localStorage.removeItem("googleAccessToken");
      //       localStorage.removeItem("googleIdToken");
      //       localStorage.removeItem("googleRefreshToken");
      // await signOut({
      //   callbackUrl: "/login", 
      // });
    }
    return Promise.reject(error);
  }
);

const api = new ApiClient(
  axe.defaults.baseURL,
  axe
);

export default api;
