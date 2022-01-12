import React, { useEffect, useState } from 'react'
import { apicall } from '../helper/apicall'



export const MyIp = () => {

    

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

    return (
        <div>
            <div className='myip'>
                <div className='myip__text'>
                    <h3>your ip address</h3>
                    <h1>{ip}</h1>
                    <h2>{country}</h2>
                    <button onClick={() => handleCopy()} >copy</button>
                </div>
            </div>
        </div>
    )
}
