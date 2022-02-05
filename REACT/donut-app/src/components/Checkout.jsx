import React, { useState } from 'react';

export const Checkout = () => {

    const [quant, SetQuant] = useState(1);


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

            <button>-</button>
                {quant}
            <button>+</button>
        </div>

        <h3>Total: {}</h3>
        <button className='blueButton'>CHECKOUT</button>
        </form>
    </div>
)
};
