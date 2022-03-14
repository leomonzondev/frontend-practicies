import React, { useEffect, useState } from 'react';
import { data } from '../api/data';
import favE from '../images/favE.png'
import favF from '../images/favF.png'


export const Card = ({img,favorite,title,price}) => {



    const [fav, setFav] = useState(true);
    const [quant, setQuant] = useState(1);
    const [disable, setDisable] = useState(true);
    const donuts = data

    const handleSubs = () => {
        setQuant(quant - 1)
    }

    

    useEffect(() => {
        if (quant <= 1) {
            setDisable(true)
        } else {
            setDisable(false)
        }
        
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
                <button disabled={disable} onClick={handleSubs} className='card__quant'>-</button>
                {quant}
                <button onClick={ () => setQuant(quant + 1) } className='card__quant'>+</button>
            </div>
            <button className='blueButton'>ADD TO CART</button>
        </div>
    </div>
)
};
