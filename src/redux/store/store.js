import { useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { appContentReducer } from "../reducers/content_reducer/content_reducer";
import { appAuthReducer } from "./../reducers/auth_reducer/auth_reducer";
export const store = configureStore({
    reducer: { appContentReducer, appAuthReducer },
});
export const useAppSelector = useSelector;
export const useAppDispatch = useDispatch;
