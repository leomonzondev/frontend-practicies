import React from 'react'



export const Map = () => {

    const map = L.map('map').setView([51.505, -0.09], 13);
  return (
    <div id='map'>Map</div>
  )
}
