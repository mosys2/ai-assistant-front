"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Modals {
  openPaymentModal: boolean;
  openLogoutModal: boolean;
  openLoginModal: boolean;
  openVerifyModal: boolean;
}

const initialState: Modals = {
  openPaymentModal: false,
  openLogoutModal: false,
  openLoginModal: false,
  openVerifyModal: false,
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
    openLoginModalToggle(state, { payload }: PayloadAction<boolean>) {
      state.openLoginModal = payload;
    },
    openVerifyModalToggle(state, { payload }: PayloadAction<boolean>) {
      state.openVerifyModal = payload;
    },
  },
});

export const {
  openPaymentModalToggle,
  openLogoutModalToggle,
  openLoginModalToggle,
  openVerifyModalToggle,
} = ModalsSlice.actions;
export default ModalsSlice.reducer;
