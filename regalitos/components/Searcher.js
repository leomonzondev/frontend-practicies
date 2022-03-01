import React, { useEffect, useState } from 'react'
import { ResultSearch } from './ResultSearch'

export const Searcher = () => {


    const [search, setSearch] = useState({
        val:'',
        sear:false
    })
    const [value, setValue] = useState('')



    useEffect(() => {

    },[])

    const handleSearch = (e) => {
        e.preventDefault()
        setSearch({val:value, sear:true})
        console.log(search)
    }


    const handleValue = (e) => {
        setValue (e.target.value)

    }


    




  return (
    <div>
        <form onSubmit={handleSearch}>
            <input value={value} onChange={handleValue} style={{width:250,height:40, borderRadius:10, backgroundColor:'orange'}} placeholder='Buscar productos, marcas y más...' /> 
            <button>Search</button>
        </form>
        {
            search.val && <ResultSearch buscar={search.val} />
        }
    </div>
  )
}
