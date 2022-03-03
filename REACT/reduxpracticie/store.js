import { configureStore } from "@reduxjs/toolkit";
import { amountReducer } from "./store/amount/amountReducer";

export const store = configureStore({
    reducer: {amountReducer}
})