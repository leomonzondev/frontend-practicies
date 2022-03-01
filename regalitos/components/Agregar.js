import React, { useEffect, useState } from 'react'
import { Searcher } from './Searcher'


    

export const Agregar = () => {

    
    const [link, setLink] = useState('')
    const [input, setInput] = useState('')
    





  return (
    <div>
    <Searcher />
        <p>Agrega un regalo que desees!</p>
        <p>Podés hacerlo mediante link</p>
        <input
            placeholder='Acá va el link del producto' 
            value={input}
            onChange={() => setInput(e.target.value)}
        />
        <button onClick={() => setLink()}>Añadir</button>
        <p>mediante el buscador de mercadolibre</p>
        <input placeholder='Buscar producto ' />
        <button>Search</button>
        <p>por recomendaciones basadas en el propósito de la lista</p>
        <button>Buscar recomendaciones</button>
        <p>O montos especificos de dinero</p>
        <button>Agregar monto</button>
    </div>
  )
}
