import React, { useEffect, useState } from 'react'
import { apicall } from '../helper/apicall'




export const Map = () => {


    const [{longitude, latitude}, setCoords] = useState({
        longitude:'',
        latitude:''
    })


    useEffect(() => {
        apicall()
            .then(({longitude,latitude}) => setCoords({longitude,latitude}))
            
    },[])

    var height = document.body.clientHeight
    var width = document.body.clientWidth

    if (width > 1280) {
        width = 1280
    }

    document.body.style.backgroundImage=`url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/${longitude},${latitude},13,0/${width}x${height}?access_token=pk.eyJ1IjoiemVuMXQiLCJhIjoiY2t5YzNrbmt1MGxzODJvbXJsM2t6czRnNyJ9.eXAuk3e4GsHx3S52TV9IOQ')`
    document.body.style.backgroundSize='cover'
    

    return (
        <>
        </>
    
    )
}
