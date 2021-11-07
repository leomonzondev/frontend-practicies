import React, { useEffect, useState } from 'react'

const initialProduct = {
    title:'Titulo del producto',
    description:'Descripcion del producto'
}



const ProductApp = () => {

    const [Product, setProduct] = useState(initialProduct)

    const updateProduct = () => {
        setProduct({
            ...Product,
            title:'Otro titulo'
        })
    }




    return (
        <div>

            <button onClick={updateProduct}>Update</button>

            <h1>{Product.title}</h1>
            <h1>{Product.description}</h1>
            <form>
                <label style= {
                    { display:"flex",
                        flexDirection:'column',
                        width:450
                    }
                }> 
                    <input className="title" placeholder="Titulo del producto"></input>
                    <input className="desc" placeholder="Descripcion del producto"></input>
                </label>
            </form>
        </div>
    )
}

export default ProductApp
