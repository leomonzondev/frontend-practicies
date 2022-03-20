import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, TOTAL_PRICE } from "../Types";

export const initialState = {
    total: 0,
    products: []
}

const cartReducer = (state, action) => {

    const {type, payload} = action

    switch (type) {
        case SHOW_HIDE_CART:
            
            return state
        
        case ADD_TO_CART:
            return {
                ...state,
                products: payload.products
            }

        case REMOVE_ITEM:
            return {
                ...state,
                products: payload.products
            }
        case TOTAL_PRICE:
            return {
                ...state,
                total: payload.total
            }

        default:
            throw new Error(`No case for type ${type} found in cartReducer`)
    }



}

export default cartReducer