import React, { useState } from 'react'

export const App = () => {

  const [regalos, setRegalos] = useState([])
  const [input, setInput] = useState('')
  const [quant, setQuant] = useState(1)


  // useEffect(() => {
  //   localStorage.setItem('regalos', JSON.stringify(regalos))
  // },[])



  const handleSubmit = (e) => {
    e.preventDefault()

    const newRegalo = {
      id: new Date().getTime(),
      text:input,
      completed:false,
      quan:quant
    }


    if (input.trim().length > 2) {

      setRegalos([...regalos].concat(newRegalo))
      setInput('')
      setQuant(1)
    }

  }

  const handleDeleteAll = () => {
    setRegalos([])
  }

  const handleDelete = (id) => {
    const updateRegalos = [...regalos].filter(regalo => regalo.id !== id)
    setRegalos(updateRegalos)
  }


  const handleSub = () => {
    setQuant(quant - 1)
  }

  const handlePlus = () => {
    setQuant(quant + 1)
  }


  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            value={input}
            placeholder="ingresa regalo"
            onChange={e => setInput(e.target.value)}
          />
          <button>Agregar</button>
        </form>
        <div>
          <button onClick={handlePlus}>+</button>
          <input 
              className='cantidad'
              type="number"
              style={{width:"20px"}}
              value={quant}
            />
          <button onClick={handleSub}>-</button>
        </div>

        <button onClick={handleDeleteAll}>Borrar todo</button>
          

          {
            (regalos.length < 1) && 'Agrega regalo'
          }

          {
            regalos.map(regalo => <div key={regalo.id}>
              <p>{regalo.text}</p>
              <p>x{regalo.quan}</p>
              <button onClick={() => handleDelete(regalo.id)}>X</button>
            </div>)
          }


      </div>
    </div>
  )
}
