import React, { useEffect, useState } from 'react';
import data from './data';
import { List } from './List';

export const App = () => {

  const [person, setPerson] = useState(data);

  return (
    <main>
      <div className='container'>
        <h3>{person.length} Birthday's today</h3>
        <List person={person} />
        <button onClick={() => setPerson([])}>Clear All</button>
      </div>
    </main>
  )
};
