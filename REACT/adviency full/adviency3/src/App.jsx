import React, { useEffect, useState } from 'react'

export const App = () => {

  const [regalos, setRegalos] = useState([])
  const [input, setInput] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [regaloEdit, setRegaloEdit] = useState(null);
  const [editingText, setEditingText] = useState('');

  
  useEffect(() => {
    const temp = localStorage.getItem('regalos')
    const loaded = JSON.parse(temp)

    loaded && setRegalos(loaded)
  },[])
  
  useEffect(() => {
    const temp = JSON.stringify(regalos)
    localStorage.setItem('regalos', temp)
  },[regalos])
  

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
      try {
        window.localStorage.setItem('text', regalos)
      } catch (error) {
        console.log(error);
      }
      
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


  const editRegalo = (id) => {
    const updatedRegalo = [...regalos].map(reg => {
      if(reg.id === id) {
        reg.text = editingText
      }
      return reg
    })
    setRegalos(updatedRegalo)
    setRegaloEdit(null)
    setEditingText('')
  }

  const edit = (id,text) => {
    setRegaloEdit(id)
    setEditingText(text)
  }


  return (
    <div>
      <h1>Regalos</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          type="text"
          placeholder='Escribe regalo'
          onChange={e => setInput(e.target.value)} />
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
        regalos.map(({id,text,quan}) => (<div className='gifts' key={id}>
          
          {
            regaloEdit === id ?
            
            (<div>
                <form onSubmit={() => editRegalo(id)}>
                <input 
                type="text"
                onChange={e => setEditingText(e.target.value)}
                value={editingText}/>
              </form>
              <input type="number" />
            </div>)
          
            : (<p>{text}</p>)
          }
          
          <p className='quant'>x{quan}</p>
          <button onClick={() => handleDelete(id)}>X</button>
          <button onClick={() => edit(id,text)}>edit</button>
          <button onClick={() => editRegalo(id)}>Submit Edit</button>
        </div>))
      }
    </div>
  )
}
