import React from 'react';

import donut from '../images/donuthero.png'
import logo from '../images/logo.png'
import calendar from '../images/calendar.png'
import truck from '../images/shipped.png'
import chef from '../images/chef.png'

export const Hero = () => {
return (
    <section className='hero'>
        <nav>
            <div className='hero__logo'>
                <img src={logo} alt='donut-logo' />
                <h1>DONUTS</h1>
            </div>
            <div></div>
        </nav>
        <div className='hero__presentation'>
            <img src={donut} alt='asd' className='hero__donut' />
            <div className='hero__right'>
                <div className='hero__title'>
                    <h1>D<span>O</span>NUTS</h1>
                    <p>With us you can create your own unique donut!</p>
                </div>

                <div className='hero__icons'>
                    <div className='calendar hero__icon'>
                        <img src={calendar} alt='calendar-icon' />
                        
                    <p>Great experience</p>
                    </div>
                    <div className='truck hero__icon'>
                        <img src={truck} alt='truck-icon' />
                        
                    <p>Free shipping</p>
                    </div>
                    <div className='chef hero__icon'>
                        <img src={chef} alt='chef-icon' />
                        
                    <p>Experienced chefs</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
};
