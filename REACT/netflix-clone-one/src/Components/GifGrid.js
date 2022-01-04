
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem'

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category )

    return (
        <div>
            <h3> { category } </h3>

            {
                loading && <p>CARGANDO....</p>
            }

            {
                <ol>
                    { images.map( img => (<GifItem key={img.id} { ...img } />)) }
                </ol>
            }

        </div>
    )
}
