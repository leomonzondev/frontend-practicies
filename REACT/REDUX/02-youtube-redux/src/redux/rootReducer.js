import { combineReducers } from "redux";
import store from "./store";

import shopReducer from './Shopping/shopping-reducer'

const rootReducer = combineReducers({
    shop: shopReducer
})

export default rootReducer