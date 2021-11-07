import React, { useEffect, useState } from 'react'
import Card from './components/Card';
import Select from './components/Select';
import getDog from './helpers/getDog';


const initialDog = {

}


function App() {

  const [dog, setDog] = useState(initialDog)

  useEffect(() => {
    updateDog(0)
  },[])


  const updateDog = (breedId) => {
    getDog(breedId)
      .then((newDog) => {
        setDog(newDog)
        
      })
  }

  return (
    <div className="app">
      <Select updateDog={updateDog} />
      <Card dog={dog} />
    </div>
  );
}

export default App;
