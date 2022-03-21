
export const initialState = {
        total: 0,
        cartItem: [],
        showCart: false
    }

const shopReducer = (state, action) => {

    const { type, payload } = action

    switch (type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cartItem: payload.products
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartItem: payload.products
            }
        case 'SHOW_CART':
            return {
                ...state,
                showCart: !state.showCart
            }

        case 'TOTAL_PRICE':
            return {
                ...state,
                total: payload.total
            }
        default:
            return state
    }

}


export default shopReducer