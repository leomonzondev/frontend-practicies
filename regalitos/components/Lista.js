import Image from 'next/image'
import React, { useEffect, useReducer, useRef, useState } from 'react'
import { Agregar } from './Agregar'

import { BsPlusLg } from 'react-icons/bs'

import { Item } from './Item'
import { itemReducer } from '../Reducer/itemReducer'
import { ImBin } from 'react-icons/im'


const init = () => {
  return JSON.parse(localStorage.getItem('items')) || []
}



export const Lista = ({titulo}) => {


  const [itemTitulo, setItemTitulo] = useState('')

  const [items, dispatch] = useReducer(itemReducer, [], init)


  useEffect(() => {
    localStorage.setItem('items', JSON.stringify( items ))
  },[items])

  const handleItems = (e) => {
    
    e.preventDefault()

    const newItem = {
      id: new Date().getTime(),
      img: '',
      title: '',
      desc: '',
      bought: false,
    }
    
    const action = {
      type:'ITEM_ADD',
      payload: newItem
    }

    dispatch(action)

  }

  const handleDelete = (itemId) => {

    dispatch({
      type:'ITEM_DELETE',
      payload:itemId
    })

  }


  return (
    <div>
        <h2> {titulo}</h2>

        {
          items.map( ({ id, title, img, desc, bought}) => (
            <div key={id}>

              <Item
                
                title={title}
                img={img}
                desc={desc}
                bought={bought}
                />
              <ImBin onClick={() => handleDelete(id) } />
            </div>
            ))
        }
        
        
        <button onClick={(e) => handleItems(e)} ><BsPlusLg size='32' /></button>
        {
            !itemTitulo && <Agregar />
        }

            
        
    </div>
  )
}
