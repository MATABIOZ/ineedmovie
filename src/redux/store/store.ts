import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { appContentReducer } from "../reducers/content_reducer/content_reducer";

export const store = configureStore({
  reducer: { appContentReducer },
});

export type StoreType = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
