import React, { ChangeEventHandler, useState } from 'react'
import styles from '../styles/Listas.module.css'
import Link from 'next/link';
import { Sidebar } from '../Components/Regalitos/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { ListState } from '../State/reducers/listReducer';


const listas = () => {

/*STATE VALIDADOR SI NO TENES LISTA MUESTRA EL SPEECH DE CREA TU LISTA*/

const list = useSelector<ListState, ListState["list"]>((state) => state.list)

const dispatch = useDispatch()

const addList = (list: string) => {
  dispatch({type: "ADD_LIST", payload: list})
}

const [input, setInput] = useState('')

const updateList = (e: ChangeEvent<HTMLInputElement>) => {
  setInput(e.target.value)
}

  return (
    <div className={styles.listas}>
      <Sidebar />
        <div>
          <form onSubmit={}>
            <input type="text" placeholder='eSCRIBE' />
            <button onClick={updateList}>Agregar</button>
          </form>
          <div>
              <h2>Crea tu lista de deseos</h2>
              <h2>Compartila publica o privada</h2>
              <h2>Recibí regalitos</h2>
              {list.map(item => <h1 key={item}>{item}</h1>)}
          </div>
          <div className=''>HOLA</div>
        </div>
    </div>
  )
}

export default listas