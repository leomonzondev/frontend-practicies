import React, { useState } from 'react'


const initialCart = [
    {
        id:1,
        title:'tit',
        desc:'desc'
    },
    {
        id:2,
        title:'tit',
        desc:'desc'
    }
]



const ShoppingCart = () => {

    const [cart, setCart] = useState(initialCart)

    const deleteProduct = (productId) => {
        const changedCart = cart.filter(product => product.id !== productId)
        setCart(changedCart)
    }



    const addProduct = (jiji) => {
        jiji.id = Date.now()
        const changedCart = [...cart, jiji]
        setCart(changedCart)
    }


    const updateProduct = (editProduct) => {
        const changedCart = cart.map(product => (
            product.id === editProduct.id ? editProduct : product
        ))
        setCart(changedCart)
    }

    return (
        <div>

            <button onClick={()=> addProduct({ title: "nuevo titulo",desc:"desc"})}>Add</button>
            


            {cart.map(product => (
                <div style={{backgroundColor:"grey"}}
                key={product.id}>
                    <h1>{product.id} {product.title}</h1>
                    <p>{product.id}  {product.desc}</p>
                    <button onClick={()=> updateProduct({ id: product.id , title: "ed titulo",desc:" ed desc"})}>Update</button>
                    <button onClick={()=> (deleteProduct(product.id))}>Delete</button>
                </div>
            ))}


            <div>
            <br/>
            
            <pre>
                {JSON.stringify(cart, null, 2)}
            </pre>
            </div>
        </div>
    )
}

export default ShoppingCart
