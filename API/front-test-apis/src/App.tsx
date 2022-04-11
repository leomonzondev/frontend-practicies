
import React, {useEffect, useState} from 'react'

function App() {

  const [data, setData] = useState<any[]>([])

  useEffect(() => {

      fetch('http://localhost:8080/api/students')
        .then(res => res.json())
        .then(dati => setData(dati))
        .catch(err => console.log(err))

  },[])


  return (
    <div className="App">
      <h1>Primer API</h1>
      <hr/>

      {
        data.map(student => <div key={student.id}>
          <h1>{student.name}</h1> <span>{student.age} años</span>
        
        </div>)
      }      

    </div>
  )
}

export default App
