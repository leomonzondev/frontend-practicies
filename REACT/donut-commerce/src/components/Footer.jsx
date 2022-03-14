import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import logo from '../images/logo.png'


export const Footer = () => {

const [value, setValue] = useState();



return (
    <div className='footer'>
        <div className='footer__text'>

            <h2>Contact us</h2>
            <p>Still have questions? Leave a request and we will contact you shortly</p>
        </div>
        <form>
            <input placeholder='Your name' type='string' />
            <PhoneInput placeholder="Your phone nomber" value={value} onChange={setValue} country="US" />
            <button className='blueButton'>SEND</button>
        </form>

        <div className='footer__bottom'>
            <div className='footer__botttom__logo'>
                <img src={logo} alt='logo' style={{height:"32px"}} />
                <h5>DONUTS</h5>
            </div>
        </div>
    </div>
)
};
