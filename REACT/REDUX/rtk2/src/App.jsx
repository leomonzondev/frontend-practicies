import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addLista, addProduct } from './store/listSlice'
import { Productos } from './api/Products'



function App() {
  const [lista, setLista] = useState('')


  const dispatch = useDispatch()
  const listas = useSelector(state => state.lists.lists)



  const addList = (e) => {
    
    e.preventDefault()
    
    dispatch(addLista({
      lista
    }))
    setLista('')
  }
  
  
  const addProductToList = (e,id,title,descripcion) => {
    e.preventDefault()
    dispatch(addProduct({
      id,
      productos:{
        title,
        descripcion
      }
    }))

  }


  

  return (
    <div className="App">
      <form onSubmit={addList}>
        <input placeholder='nombre de lista' value={lista} onChange={(e) => setLista(e.target.value)} />
      </form>

        <h2>AcA VAn LAS LISTAS</h2>
      { listas.map(list => <div key={list.id}>
          <h2>{list.lista}</h2>
          <h3>Productos:</h3>
          <ul>
    {
      Productos.map(producto => <li key={producto.id}>
        <h4>{producto.title}</h4>
        <p>{producto.descripcion}</p>
        <button onClick={(e) => addProductToList(e, list.id, producto.title, producto.descripcion)}>Agregar a la lista</button>
      </li>)
    }
    </ul>
          {list.products.map(product => <div key={product.id}><h4>{product.title}</h4></div>)}
        </div>)}
<hr/>
    <div>
    



    </div>

    </div>
  )
}

export default App
