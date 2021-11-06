import React, { useState } from 'react'

const initialProduct = {
    title:'Titulo del producto',
    description:'Descripcion del producto'
}



const ProductApp = () => {

    const [Product, setProduct] = useState(initialProduct)



    return (
        <div>
            <h1>{Product.title}</h1>
            <h1>{Product.description}</h1>
        </div>
    )
}

export default ProductApp
