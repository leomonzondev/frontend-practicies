
import { createStoreHook, combineReducers } from 'react-redux'
import { amountReducer } from './amount/amountReducer'


const reducers = combineReducers({
    amountReducer
})


const store = createStoreHook(
    reducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )


export default store