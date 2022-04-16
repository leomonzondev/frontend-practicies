import { createStore } from "redux";
import { cardReducer } from "./cardReducer";

export const store = createStore(cardReducer)