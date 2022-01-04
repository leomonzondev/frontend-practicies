import React, { useState } from 'react'
import { GifGrid } from './Components/GifGrid'

import { GifSearcher } from './Components/GifSearcher'

export const GifApp = () => {

    const [categories, setCategories] = useState('')

    return (
        <div>
            <h1>Giff App</h1>
            <GifSearcher setCategories={ setCategories } />
            <hr />
            <GifGrid key={ categories } category={ categories } />
        </div>
    )
}
