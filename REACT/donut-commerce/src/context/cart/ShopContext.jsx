
import { createContext, useReducer, useContext } from "react";
import cartReducer from "./CartReducer";


const initialState = {
    total: 0,
    products: [],

}

const ShopContext = createContext(initialState)

export const ShopProvider = ({ children }) => {


    const [ state, dispatch ] = useReducer( cartReducer, initialState)

    const addToCart = (product) => {


        const updateCart = state.products.concat(product)

        totalPrice(updateCart)

        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updateCart
            }
        })
        console.log(state.products)
    }

    const removeFromCart = (product) => {
        const updatedCart = state.products.filter((currentProduct) => currentProduct.name !== product.name)
        totalPrice(updatedCart)
        dispatch({
            type: "REMOVE_ITEM",
            payload: {
                products: updatedCart
            }
        })
    }

    const totalPrice = (products) => {
        let total = 0
        products.forEach((product) => total += product.price)

        dispatch({
            type: "TOTAL_PRICE",
            payload: {
                total
            }
        })
    }


    const value = {
        total: state.total,
        products: state.products,
        quant: state.quant,
        addToCart,
        removeFromCart,
    }

    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>


}


const useShop = () => {
    const context = useContext(ShopContext)

    if (context === undefined) {
        throw new Error ("useShop must be used within ShopContext")
    }

    return context
}

export default useShop