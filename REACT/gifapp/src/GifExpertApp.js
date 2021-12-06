import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {

    const [category, Setcategory] = useState(['Onepunchi', 'Dragin', 'animal'])
    
    const handleAdd = () => {
        Setcategory(cats => [...cats, 'owiwi'])
    }

    return (
        <div>
            <h2>Gif searcher</h2>
            <AddCategory />
            <hr/>


            <ol>
                {category.map(cat => <li key={cat}>{cat}</li>)}
            </ol>
        </div>
    )
}


