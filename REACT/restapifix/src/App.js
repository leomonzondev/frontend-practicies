import React from 'react';
import Countries from './helpers/Countries';
import NavBar from './components/NavBar';
import Filter from './components/Filter';
import Selected from './components/Selected';


function App() {
  return (
    <div>
      <NavBar />
      <Selected 
        name="Nombre del pais"
        city="ciudad del pais"
        people={4454646}
      />
      <Filter />
      <Countries />
      
    </div>
  );
}

export default App;
