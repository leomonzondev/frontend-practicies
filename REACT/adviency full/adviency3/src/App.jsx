import React, { useState } from 'react'

export const App = () => {

  const [regalos, setRegalos] = useState([])
  const [input, setInput] = useState('')
  const [quantity, setQuantity] = useState(1)


  const handlePlus = () => {
    setQuantity(quantity + 1)
  }

  const handleSub = () => {
    setQuantity(quantity - 1)
  }



  const handleSubmit = (e) => {
    e.preventDefault()

    const newRegalo = {
      id: new Date().getTime(),
      quan: quantity,
      text: input
    }

    if (input.trim().length > 2) {
      setRegalos([...regalos].concat(newRegalo))
      setInput('')
      setQuantity(1)
    }
  }

  const handleDeleteAll = () => {
    setRegalos([])
  }

  const handleDelete = (id) => {
    const deleteRegalo = [...regalos].filter(regalo => regalo.id !==id)
    setRegalos(deleteRegalo)
  }

  return (
    <div>
      <h1>Regalos</h1>
      <form onSubmit={handleSubmit}>
        <input value={input} type="text" placeholder='Escribe regalo' onChange={e => setInput(e.target.value)} />
        <button>Agregar</button>
      </form>

      <button onClick={handlePlus}>+</button>
        <input type="number" value={quantity} />
        <button onClick={handleSub}>-</button>
      <button onClick={handleDeleteAll}>Delete all</button>

      {
        (regalos.length < 1) && 'agrega regalo'
      }

      {
        regalos.map(({id,text,quan}) => (<div key={id}>
          <p>{text}</p>
          <button onClick={() => handleDelete(id)}>X</button>
          <p>{quan}</p>
        </div>))
      }
    </div>
  )
}
