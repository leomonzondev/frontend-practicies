import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    lists: []
}

const listSlice = createSlice({
    name: 'lists',
    initialState,
    reducers: {
        addLista: {
            reducer: (state, action) => {
                state.lists.push(action.payload)
            },
            prepare: ( value ) => {
                return {
                    payload: {
                        ...value,
                        id: nanoid(),
                        products:[]
                    }
                }
            }
        },
        deleteList: ( state, action ) => {
            state.lists = state.lists.filter(list => list.id !== action.payload.id)
        },
        addProduct: (state, action ) => {
             state.lists.filter(list => {   
                if(list.id === action.payload.id) {
                    list.products.push(action.payload.productos)
                }
            })
        }
    }
})

console.log(listSlice)

export const { addLista, deleteList, addProduct } = listSlice.actions

export default listSlice.reducer