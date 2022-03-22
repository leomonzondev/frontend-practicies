import { useReducer } from "react"
import CartContext from "./CartContext"

const CartState = ({children}) => {

    
    const initialState = {
        cartItems: [],
        showCart: false
    }

    const [state, dispatch] = useReducer(CartReducer, initialState)

    

    const addToCart = (product) => {

        dispatch({
            type: "ADD_TO_CART",
            payload: product
        })

    }

    const removeItem = (id) => {
        dispatch({
            type:"REMOVE_ITEM",
            payload: id
        })
    }

    const showHideCart = () => {
        dispatch({
            type:"SHOW_HIDE_CART"
        })
    }




    return (
        <CartContext.Provider value={{
            addToCart,
            removeItem,
            showHideCart,
            cartItems:state.cartItems,
            showCart: state.showCart
        }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartState