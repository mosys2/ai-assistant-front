
"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface Modals {
  openPaymentModal:boolean;
  openLogoutModal:boolean;
}

const initialState: Modals = {
  openPaymentModal:false,
  openLogoutModal:false
};


export const ModalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    openPaymentModalToggle(state, { payload }: PayloadAction<boolean>) {
      state.openPaymentModal = payload;
    },
    openLogoutModalToggle(state, { payload }: PayloadAction<boolean>) {
      state.openLogoutModal = payload;
    },

  },
});

export const { openPaymentModalToggle,openLogoutModalToggle } = ModalsSlice.actions;
export default ModalsSlice.reducer;

