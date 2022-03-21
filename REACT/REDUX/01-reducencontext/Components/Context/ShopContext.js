import { createContext, useReducer, useContext } from "react";

import shopReducer, { initialState } from "./ShopReducer";



const ShopContext = createContext(initialState)

export const ShopProvider = ({ children }) => {
    

    const [state, dispatch] = useReducer(shopReducer, initialState)

    const addToCart = (product) => {
        const updatedCart = state.cartItem.concat(product)
        dispatch({ type: 'ADD_TO_CART', payload: {
            products: updatedCart
        }})
    }

    const removeFromCart = (product) => {
        const updatedCart = state.cartItem.filter((currentProduct) => currentProduct.title !== product.title)
        totalPrice(updatedCart)
        dispatch({
            type: "REMOVE_ITEM",
            payload: {
                products: updatedCart
            }
        })
    }

    const showHideCart = () => {
        dispatch({type: 'SHOW_CART'})
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

    return <ShopContext.Provider
    value={{
        total: state.total,
        products: state.products,
        showCart: state.showCart,
        addToCart,
        removeFromCart,
        showHideCart
        }}>
            {children}
        </ShopContext.Provider>
}

const useShop = () => {
    const context = useContext(ShopContext)

    if(context === undefined) {
        throw new Error ('UseShop must be used within ShopContext')
    }
    return context

}


export default useShop