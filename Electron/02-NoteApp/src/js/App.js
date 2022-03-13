
import React from 'react';
import { MainContent } from './MainContent';
import { TodoApp } from './TodoApp';
import {ProductApp} from './ProductApp'

import { UserContext } from './UserContext';



const user = {
  _id: 1234,
  name: 'Leonardo',
  email: 'cris@gmail'
}

export default function App() {



  return (
    <UserContext.Provider value={
      user
    }>
      {/* <MainContent /> */}
      {/* <TodoApp /> */}
      <ProductApp />
    </UserContext.Provider>
  )
}
