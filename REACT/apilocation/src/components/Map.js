import React, { useEffect } from 'react'
import { apicall } from '../helper/apicall'





export const Map = () => {

    const [{longitude, latitude}, setCoords] = useState({
        longitude:'',
        latitude:''
    })

    const url = `https://maps.googleapis.com/maps/api/staticmap?center=${longitude},${latitude}&zoom=12&size=400x400&maptype=satellite&key=AIzaSyBFbBM9_gb7rsDHF2w1el3G6DoVlnWAUHU`

    useEffect(() => {
        apicall()
            .then(({longitude,latitude}) => setCoords({longitude,latitude}))
    },[])


    let map = new google.maps.Map(document.querySelector('.map'), {
        center:{lat: latitude, lng: longitude},
        zoom: 12
    })

    return (
        <div className='map'>
            
        </div>
    )
}
