import React from 'react'

export const Hero = () => {
    return (
        <div className='hero'>


            <nav className='hero__nav'>
                <img src='' alt='logo' />
                <ul className='hero__ul'>
                    <li>home</li>
                    <li>pages</li>
                    <li>blog</li>
                    <li>portfolio</li>
                    <li>shop</li>
                    <li>contacts</li>
                </ul>
                <div>
                    <button> <img src='' alt='' /> </button>
                    <button> <img src='' alt='' /> </button>
                </div>
            </nav>

        
            <div className='hero__title'>
                <h3>we love design</h3>
                <h1>creative minds</h1>
                <button> get in touch</button>
            </div>

            <div className='hero__info'>
            <p>01</p>
                <div>
                    <h2>product engineering</h2>
                    <p>product development</p>
                    <p>product consultation</p>
                    <p>architecture design</p>
                </div>
                <p>02</p>
                <div>
                    <h2>ui/ux strategy</h2>
                    <p>brand development</p>
                    <p>technology prototyping</p>
                    <p>brand integration</p>
                </div>
                <p>03</p>
                <div>
                    <h2>big data & analytics</h2>
                    <p>etl/data management</p>
                    <p>analytical development</p>
                    <p>stream processing</p>
                </div>
            </div>
        </div>
    )
}
