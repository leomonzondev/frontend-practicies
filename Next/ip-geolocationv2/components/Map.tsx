import React from 'react'

export const Map = () => {

    const map = L.map('map', {
        center: [51.505, -0.09],
        zoom: 13
    })

  return (
    <div id='map'>Map</div>
  )
}
