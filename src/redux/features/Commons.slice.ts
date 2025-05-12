"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface GoogleDataInterface{
  connectLoading:boolean
}
interface Commons {
  sideMenuToggle: boolean;
  dashboardSideMenuToggle:boolean,
  loginEmail: string;
  breadcrumb: { title: string; description: string };
  
  currentMenu:string;
}

const initialState: Commons = {
  sideMenuToggle: false,
  dashboardSideMenuToggle: false,
  loginEmail: "",
  
  breadcrumb: {
    title: "Results Overview",
    description: "Welcome to your SEO Performance Dashboard",
  },
  currentMenu:"1",
};


export const CommonsSlice = createSlice({
  name: "commons",
  initialState,
  reducers: {
    openSideMenuToggle(state) {
      state.sideMenuToggle = true;
    },
    closeSideMenutoggle(state) {
      state.sideMenuToggle = false;
    },
    openDashboardSideMenuToggle(state) {
      state.dashboardSideMenuToggle = true;
    },
    closeDashboardSideMenuToggle(state) {
      state.dashboardSideMenuToggle = false;
    },
  
    setLoginEmail(state, { payload }: PayloadAction<string>) {
      state.loginEmail = payload;
    },
    
    setBreadcrumb(state, { payload }: PayloadAction<any>) {
      state.breadcrumb = {
        title: payload.title,
        description: payload.description,
      };
    },
    setCurrentMenu(state, { payload }: PayloadAction<string>) {
      state.currentMenu = payload;
    },
    
  },
});

export const {
  openSideMenuToggle,
  closeSideMenutoggle,
  openDashboardSideMenuToggle,
  closeDashboardSideMenuToggle,
  setLoginEmail,
  setBreadcrumb,
  setCurrentMenu,
} = CommonsSlice.actions;

export default CommonsSlice.reducer;
