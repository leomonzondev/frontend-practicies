import React, { useState } from 'react';
import data from './data';
import List from './List';



function App() {



const [people, setPeople] = useState(data)



  const handleSaludo= (saludoId) => {
    
    const changedSaludo = people.map(peoples => peoples.id === saludoId ? {...peoples, completed:!peoples.completed} : peoples)

    setPeople(changedSaludo)

  }




  


  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List
          handleSaludo={handleSaludo}
          people={people} />
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;