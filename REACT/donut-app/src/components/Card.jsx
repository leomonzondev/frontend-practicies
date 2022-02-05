import React, { useEffect, useState } from 'react';
import { data } from '../api/data';
import favE from '../images/favE.png'
import favF from '../images/favF.png'


const blueButton = {

}


export const Card = () => {



    const [fav, setFav] = useState(true);
    const [quant, setQuant] = useState(1);
    const [disable, setDisable] = useState(true);
    const [donuts, setDonuts] = useState(data);

    const handleSubs = () => {
        setQuant(quant - 1)
    }



    useEffect(() => {
        if (quant <= 1) {
            setDisable(true)
        } else {
            setDisable(false)
        }
        console.log(donuts[0].img);
    },[quant])


    // {id,img,favorite,title,price}

return (
    <div className='card'>
        <img src={donuts[0].img} alt='asd' className='card__donut'/>
        <h4>{donuts[0].title}</h4>
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
