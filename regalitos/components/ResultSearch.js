import React, { useEffect, useState } from 'react'

export const ResultSearch = ({buscar}) => {

    const [data, setData] = useState('')



    useEffect(() => {
        
        
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${buscar}&limit=10`)
            .then(res => res.json())
            .then(data => setData(data))
        console.log(data.results)
    },[buscar])





  return (
        <div style={{height:300,width:250,backgroundColor:'rgb(170,170,170)'}}>
            {buscar}
        </div>
  )
}
