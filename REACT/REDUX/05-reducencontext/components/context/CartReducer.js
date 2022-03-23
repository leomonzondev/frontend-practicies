

const CartReducer = (state,action) => {

    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        case "REMOVE_ITEM":
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload)
            }
        case "SHOW_HIDE_CART":
            return {
                ...state,
                showCart: !state.showCart
            }
    
        default:
            return state
    }




}

export default CartReducer