import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, TOTAL_PRICE, QUANT } from "../Types";



const cartReducer = (state, action) => {

    const {type, payload} = action

    switch (type) {
        case SHOW_HIDE_CART:
            
            return state
        
        case ADD_TO_CART:
            const item = payload.products.find( prod => prod.id === action.payload.id)
            const inCart = payload.products.find( item => item.id === action.payload.id ? true : false)

            return {
                ...state,
                products: inCart ? payload.products.map(item => item.id === product.id ? { ...item, qty: item.qty + 1} : item ) : [...payload.products, {...item, qty: 1}]
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
        case QUANT: 
        return {
            ...state,
            total: payload.quant
        }

        default:
            return state
    }



}

export default cartReducer