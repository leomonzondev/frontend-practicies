
import './App.css'
import { useFetch } from '../useFetch'
import { useEffect, useState } from 'react'
import { ImgComponent } from '../imgComponent'

function App() {



 
  // const { data, isLoading, hasError } = useFetch(`https://picsum.photos/v2/list/?page=${page}$limit=5`)

  const [page, setPage] = useState(1)
  const nextPage = () => {
    setPage(page + 1)
  }

  const [state, setState] = useState('')

  const url = `https://picsum.photos/v2/list/?page=${page}&limit=5`


  useEffect(() => {

    const getFetch = async() => {
      const resp = await fetch(url)
      const data = await resp.json()
      setState(prev => [...prev, ...data])
    }

    getFetch()

  },[page])



  return (
    <div className="App">

      {
        state
        ? state.map((image, index) => (<ImgComponent nextPage={nextPage} key={(Math.random() *10 )} image={image} isLast={index === state.length - 1} />))
        :'Loading, pará un cachito'  
      }
    
      <button onClick={() => console.log(state)}>Mostrar</button>

    </div>
  )
}

export default App
