
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
        
        // const inCart = state.products.find(
        //     productInCart => productInCart.id === product.id
        // )

        // const amountProduct = {...product, amount: 0}

        // if(inCart) {
        //     amountProduct.amount += 1

        // } 
        
        dispatch({
            type: "ADD_TO_CART",
            payload: product
        })


        // totalPrice(product)

        console.log(state.products)
        // console.log(amountProduct)
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

    const totalPrice = (product) => {
        let totalPrice = state.total
        state.products.forEach(product => totalPrice += product.price )

        dispatch({
            type: "TOTAL_PRICE",
            payload: totalPrice
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