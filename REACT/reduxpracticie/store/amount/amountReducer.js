

const init = {
    amount: 0
}


export const amountReducer = (state = init, action) => {

    switch (action.type) {
        case 'DEPOSIT_MONEY':
            return {
                ...state,
                amount: state.amount +10
            }
        
        case 'WITHDRAW_MONEY':
            return {
                ...state,
                amount: state.amount -10
            }
            
            
    
        default:
            return state
    }


}