import React from 'react'
import Cards from './components/Cards';
import getChar from './helpers/getChar';

getChar()

function App() {
  return (
    <div >

      <h1>Running</h1>
      <Cards />
    </div>
  );
}

export default App;
