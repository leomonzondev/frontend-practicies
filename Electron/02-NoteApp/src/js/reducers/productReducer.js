import { types } from "../types"

export const initialState = {
    products: [
        {
            id: 1,
            title: 'Reloj'
        },
        {
            id: 2,
            title: 'Auto'
        },

    ],
    cart: [
        {
            id: 1,
            title: 'Reloj',
            quantity: 1
        },
    ],
    activeProduct: { id:2, title:'Auto'}
}


export const productReducer = (state, action) => {

    switch (action.type) {
        case types.productShow:
            return {
                ...state,
                activeProduct: action.payload
            }
        case types.productAddToCart:{
            const newProduct = action.payload
            const cartContain = state.cart.find(product => product.id === newProduct.id)
            
            return cartContain
            ? {...state,
            cart: state.cart.map(product => 
                product.id === newProduct.id
                ? {...product, quantity: product.quantity + 1 }
                : product
                )
                }
            : {
                ...state,
                cart:[
                    ...state.cart,
                    {...action.payload, quantity: 1}
                ]
            }}
        case types.productDelete: 
            return {
                ...state,
                cart: state.cart.filter( product => product.id !== action.payload)
            }
        case types.productDeleteOne:{

            const productDelete = state.cart.find(product =>  product.id === action.payload)

            return productDelete.quantity > 1
            ? {
                ...state,
                cart: state.cart.map(product => 
                    product.id === action.payload
                    ? { ...product, quantity: product.quantity - 1}
                    : product
                )
            }
            : {
                ...state,
                cart: state.cart.filter(product => product.id !== action.payload)
            }
        }
    
        default:
            return state
    }


}