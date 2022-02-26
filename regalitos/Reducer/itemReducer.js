

export const itemReducer = ( state = [], action ) => {

    switch (action.type) {
        case 'ITEM_ADD':
            return [
                ...state,
                action.payload
            ]
        case 'ITEM_DELETE':
            return state.filter( item => item.id !== action.payload )
        
        case 'ITEM_BOUGHT':
            return state.map( item => {
                if( item.id === action.payload) {
                    return {
                        ...item,
                        bought: !item.bought
                    }
                } else {
                    return item
                }
            })

        default:
            return state
    }


}