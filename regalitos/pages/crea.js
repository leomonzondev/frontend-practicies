import React, { useEffect, useState } from 'react'
import { Recomendaciones } from '../components/crea/Recomendaciones'
import { Lista } from '../components/Lista/Lista'
import { NavBar } from '../components/NavBar'
import { useForm } from '../Hooks/useForm'

const crea = () => {

  const [listName, setListName] = useState('')
  const [titulo, setTitulo] = useState('')

  const [newList, setNewList] = useState(false)


  useEffect(() => {
    setNewList(!newList)
  },[titulo])




  const handleInputChange = (e) => {




    setListName(e.target.value)

  }

  const handleSubmit = (e) => {

    e.preventDefault()

    if (listName.trim().length >= 3 ) {
        setTitulo(listName)
        
    }
    
  }



  return (
    <div>
        <NavBar />
        {/* <Recomendaciones /> */}


        {
          newList && (

        <form onSubmit={handleSubmit}>
          <input
            value={listName}
            onChange={handleInputChange}
            autoComplete='off'
            placeholder='Nombre de la lista'
            />
            <button
              
            >Crear</button>
        </form>
          )
        }

      
        {

          titulo && <Lista titulo={titulo} />

        }

    </div>
  )
}

export default crea
