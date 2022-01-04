import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory'
import { GifGrid } from './Components/GifGrid'

export const App = () => {

    const [categories, setCategories] = useState('')

    return (
        <div>
        
            <h2>Gif Expert</h2>
            <AddCategory setCategories= { setCategories } />
            <hr/>

            <ol>
                {
                    <GifGrid key={ categories } category={ categories } />
                }
            </ol>

        </div>
    )
}
