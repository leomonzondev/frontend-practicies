import React, { useEffect, useState } from 'react';
import { data } from '../api/data';
import useShop from '../context/cart/ShopContext';
import favE from '../images/favE.png'
import favF from '../images/favF.png'


export const Card = ({img,favorite,title,price}) => {



    const { products, addToCart, quant } = useShop()
    const [isInCart, setIsInCart] = useState(false)

    useEffect(() => {
        const productIsInCart = products.find(product => product.name === title)

        if (productIsInCart) {
            setIsInCart(true)
        } else {
            setIsInCart(false)
        }
    },[products, title])



    const [fav, setFav] = useState(true);
    
    const [disable, setDisable] = useState(true);
    const donuts = data
    

    useEffect(() => {
        if (quant <= 1) {
            setDisable(true)
        } else {
            setDisable(false)
        }

        console.log(quant)
        
    },[quant])


return (
    <div className='card' >
        <img src={img} alt='asd' className='card__donut'/>
        <div className='card__title'>
            <h4>{title}</h4>
            <h4>{price}</h4>
        </div>
        <button
            style={{background:"none",borderStyle:"none"}}
            onClick={() => setFav(!fav)}>{fav? (<img src={favE} alt='faviconEmpty' className='card__favicon'/>) : (<img src={favF} alt='faviconFull' className='card__favicon' />) }</button>
        
        <div className='card__footer'>
            <div className='card__quant__container'>
                <button disabled={disable} onClick={() => quantSubs(quant)} className='card__quant'>-</button>
                {quant}
                <button onClick={() => quantPlus(quant)} className='card__quant'>+</button>
            </div>
            
        </div>
    </div>
)
};
