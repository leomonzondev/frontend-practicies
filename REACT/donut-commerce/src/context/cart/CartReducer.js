import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM } from "../Types";


const CartReducer = (state, action) => {

    switch (action.type) {
        case SHOW_HIDE_CART:
            
            return state
        
        case ADD_TO_CART:
            {...state,
            action.payload}

        case REMOVE_ITEM:
            return {
                ...state,
                carItems: state.carItems.filter(item => item._id !== action.payload)
            }

        default:
            return state
    }



}