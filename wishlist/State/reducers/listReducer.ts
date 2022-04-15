export interface ListState {
    list: string[]
}


const initialState = {
    list: []
}

type Action = {
    type: "ADD_NOTE", payload: string
    
}


export const listReducer = (state: ListState = initialState, action: Action ) => {

    switch (action.type) {
        case "ADD_NOTE":{
            return {...state, list: [...state.list, action.payload]}
        }
    
        default:
            return state
    }

}