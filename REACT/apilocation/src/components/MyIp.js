import React, { useEffect, useState } from 'react'
import { apicall } from '../helper/apicall'
import eyeO from '../images/eyeO.png'
import eyeC from '../images/eyeC.png'

export const MyIp = () => {

    const [show, setShow] = useState(false)


    const [{ip,country}, setIpAd] = useState({
        ip:'',
        country:''
    })

    useEffect(() => {
        apicall()
            .then(({ ip, country} )=> setIpAd({ip, country}))
    },[])




    // ALERTA COPIED
    // ALERTA COPIED
    const handleCopy = () => {
        navigator.clipboard.writeText(ip)

    }


    
        
        var number = ip
        const replaced = number.replace(/[0-9]+/g, "*")
        
    



    return (
        <div>




            <div className='myip'>
            <div className='myip__container'>
                <div className='myip__text'>
                    <h3>your ip address</h3>
                    <h1 className='number'>{show ? ip : replaced } <span><button className='myip__btn__show' onClick={() => setShow(!show)}><img src={show? eyeO : eyeC} /></button></span></h1>

                    <button className='myip__btn__copy' onClick={() => handleCopy()} >copy</button>
                </div>
            </div>

            {
                
            }

            </div>
            <div className='foot'>
                <div className='foot_container'>
                    <p>BUILT BY <span><a href='https://github.com/Leob4rr0s' target="_blank" rel="noreferrer">ZENIT</a></span></p>
                </div>
            </div>
        </div>
    )
}
