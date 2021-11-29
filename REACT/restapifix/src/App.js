import React from 'react';
import Countries from './helpers/Countries';
import NavBar from './components/NavBar';
import Filter from './components/Filter';


function App() {
  return (
    <div>
      <NavBar />
      <Filter />
      <Countries />
    </div>
  );
}

export default App;
