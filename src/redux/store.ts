"use client";
import { configureStore } from "@reduxjs/toolkit";

import modalsReducer from "./features/Modals.slice"



export const store = configureStore({
  reducer: {
    modals:modalsReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
