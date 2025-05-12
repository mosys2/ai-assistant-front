"use client";
import { configureStore } from "@reduxjs/toolkit";

import modalsReducer from "./features/Modals.slice"
import commonsReducer  from "./features/Commons.slice";



export const store = configureStore({
  reducer: {
    modals:modalsReducer,
    commons: commonsReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
