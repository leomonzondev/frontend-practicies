import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, TOTAL_PRICE } from "../Types";



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
            return state
    }



}

export default cartReducer