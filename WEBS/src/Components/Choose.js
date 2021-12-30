import React from 'react'

export const Choose = () => {
    return (
        <div className='choose'>
            <div>
                <h1>why you should choose us</h1>
                <p>why choose us</p>
            </div>
            <div className='choose_cards'>
                <div className='choose__first'>
                    <h1>01</h1>
                    <h3>cross-industry expertise</h3>
                    <p>We have the technology and industry expertise to solutions that can connect people </p>
                    <button>+</button>
                </div>
                <div className='choose__second'>
                    <h1>02</h1>
                    <h3>deep expertise & leadership</h3>
                    <p>We have the technology and industry expertise to solutions that can connect people</p>
                    <button>+</button>
                </div>
                <div className='choose__third'>
                    <h1>03</h1>
                    <h3>dedicated it solution</h3>
                    <p>We have the technology and industry expertise to solutions that can connect people</p>
                    <button>+</button>
                </div>
            </div>
        </div>
    )
}
