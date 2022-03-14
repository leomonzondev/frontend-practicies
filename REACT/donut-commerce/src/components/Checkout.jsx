import React, { useEffect, useState } from 'react';

export const Checkout = () => {

    const [quant, setQuant] = useState(1);
    const [disable, setDisable] = useState(false);

    useEffect(() => {
        if (quant <= 1) {
            setDisable(true)
        } else {
            setDisable(false)
        }
    },[quant])

return (
    <div className='checkout'>
        <h2>Your perfect donut:</h2>
        <form>

        <div className='checkout__filling'>
            <h3>Filling</h3>
            <div className='checkout__filling__input'>
                <input type="radio" name='filling' value="nuts" /> Nuts <br/>
                <input type="radio" name='filling' value="chocolate" /> Chocolate <br/>
                <input type="radio" name='filling' value="lemon" /> Lemon <br/>
                <input type="radio" name='filling' value="strawberry" /> Strawberry <br/>
            </div>
        </div>
        <div className='checkout__additives'>
            <h3>Additives</h3>
            <div className='checkout__additives__input'>
                <input type="radio" name='additives' value="sugarA" /> Powered sugar <br/>
                <input type="radio" name='additives' value="chocolateA" /> Chocolate <br/>
                <input type="radio" name='additives' value="lemonA" /> Lemon <br/>
                <input type="radio" name='additives' value="strawberryA" /> Strawberry <br/>
                <input type="radio" name='additives' value="glazedA" /> Glaze <br/>
            </div>
        </div>

        <div className='checkout__quant'>

        <button className='card__quant' disabled={disable} onClick={() => setQuant(quant - 1)} >-</button>
            {quant}
        <button className='card__quant' onClick={ () => setQuant(quant + 1) } >+</button>
        </div>

        <h3>Total: {}</h3>
        <button className='blueButton'>CHECKOUT</button>
        </form>
    </div>
)
};
