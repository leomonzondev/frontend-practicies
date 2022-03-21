import { useReducer } from "react";
import CartContext from "./cartContext";
import CartReducer from "./cartReducer";


const CartState = ({children}) => {

    const initialState = {
        showCart: false,
        cartItems: [],
        total:0

    }

    const [state, dispatch] = useReducer(CartReducer, initialState)

    const addToCart = (item) => {
        dispatch({
            type: "ADD_TO_CART",
            payload: item
        })
        
    }

    const showHideCart = () => {
        dispatch({
            type: "SHOW_HIDE_CART"
        })
    }


    const removeItem = (id) => {
        dispatch({
            type:"REMOVE_ITEM",
            payload: id
        })
    }


    return <CartContext.Provider value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        showHideCart,
        removeItem
    }}>
        {children}
    </CartContext.Provider>


}

export default CartState