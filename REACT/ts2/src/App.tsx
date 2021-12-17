import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { List } from './components/List';
import { Form } from './components/Form';

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}



function App() {



  const [people, setPeople] = useState<IState["people"]>([

    {
      name:"Jinx",
      url:"https://cdn1.dotesports.com/wp-content/uploads/sites/4/2021/11/15155110/ezgif-2-b0fc567224a3-1.jpg",
      age: 21,
      note: "I like to explode buildings"
    }

  ])


  return (
    <div className="App">
      <h1>People invited to party</h1>
      <List
        people={people}
      />
      <Form people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
