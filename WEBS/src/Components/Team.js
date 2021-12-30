import React from 'react'
import { Work } from './Work'

export const Team = () => {
    return (
        <div className='team'>
            <h1>team</h1>
            <div className='team__cards'>
                <div className='team__cards__person'>
                    <img src='' alt='' />
                    <p>01 --- CEO</p>
                    <h3>chriss moore</h3>
                    <div className='team__cards__icons'>
                        <img src='' alt='' />
                        <img src='' alt='' />
                        <img src='' alt='' />
                    </div>
                </div>
                <div className='team__cards__person'>
                    <img src='' alt='' />
                    <p>02 --- CTO</p>
                    <h3>tonny yakamoto</h3>
                    <div className='team__cards__icons'>
                        <img src='' alt='' />
                        <img src='' alt='' />
                        <img src='' alt='' />
                    </div>
                </div>
                <div className='team__cards__person'>
                    <img src='' alt='' />
                    <p>03 --- CTO</p>
                    <h3>amanda brown</h3>
                    <div className='team__cards__icons'>
                        <img src='' alt='' />
                        <img src='' alt='' />
                        <img src='' alt='' />
                    </div>
                </div>
            </div>

            <div className='team__footer'>
                <div className='team__footer__izq'>
                    <h4>our works</h4>
                    <h1>design skills</h1>
                    <button>+</button>
                </div>
                <div className='team__footer__der'>
                    <h4>our contacts</h4>
                    <h1>let's work</h1>
                    <button>+</button>
                </div>
            </div>
        </div>
    )
}
