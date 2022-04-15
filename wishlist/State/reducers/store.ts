import { createStore } from 'redux'
import { listReducer } from './listReducer'

export const store = createStore(listReducer)