import type {Item} from "./types";

import {useEffect, useState} from "react";

import styles from "./App.module.scss";
import api from "./api";

function App() {
  const [items, setItems] = useState<Item[] | null>(null);


  const [inputChange, setInputChange] = useState('')
  
  
  useEffect(() => {
    api.list().then(setItems);

  }, [])

  const handleDelete = (id: any) => {
      setItems(items?.filter(item => item.id !== id))
  }

  const handleCompleted = (item) => {
    console.log(item)
    item.completed = !item.completed

  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newItem = {
      id: new Date().getTime(),
      text: inputChange,
      completed: false
    }

    if(inputChange.trim().length > 2 ) {

      
      setItems([...items, newItem])
      setInputChange('')
      
    }

  }



  return (
    <main className={styles.main}>
      <h1>Supermarket list</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input autoFocus  name="text" type="text"  value={inputChange} onChange={(e) => setInputChange(e.target.value)} />
        <button>Add</button>

      </form>

        {
          items
          ? <ul>
          {
            items?.map((item) => (
          
            <li key={item.id}>
              <p className={item.completed ? styles.completed : ""} onClick={() => handleCompleted(item)}>{item.text}</p> <button onClick={ () => handleDelete(item.id) }>[X]</button>
            </li>
            ))
          }
        </ul>
          : <p>Cargando Lista</p>

        }

    </main>
  );
}

export default App;
