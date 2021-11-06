import React, { useEffect, useState } from 'react'

const ResizeApp = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const isMobile = windowWidth < 450


    useEffect(() => {
        window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
    },[])




    return (
        <div>
            <h1>{windowWidth}</h1>
            {isMobile && 
                <h2>Show only in Media Devices</h2>
            }
        </div>
    )
}

export default ResizeApp

