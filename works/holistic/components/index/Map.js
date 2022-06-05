import React, { useRef, useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = "pk.eyJ1IjoiemVuMXQiLCJhIjoiY2wzOHlqZDJzMDIwMTNqcXl5N3praXZqbiJ9.oRYOzsysfHrRSaGp-Cxp7A"

const Map = () => {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-58.53779796693026);
    const [lat, setLat] = useState(-34.62954185868827);
    const [zoom, setZoom] = useState(12);


    useEffect(() => {
         // initialize map only once
        const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
        });

        map.on('load', () => {
            // Add a GeoJSON source with 3 points.
            map.addSource('points', {
            'type': 'geojson',
            'data': {
            'type': 'FeatureCollection',
            'features': [
            {
            'type': 'Feature',
            'properties': {},
            'geometry': {
            'type': 'Point',
            'coordinates': [lng, lat]}
            }
            ]
            }
            });
            // Add a circle layer
            map.addLayer({
            'id': 'circle',
            'type': 'circle',
            'source': 'points',
            'paint': {
            'circle-color': '#BB55EB',
            'circle-radius': 8,
            'circle-stroke-width': 2,
            'circle-stroke-color': '#ffffff'
            }
            });
             
            // Center the map on the coordinates of any clicked circle from the 'circle' layer.
            map.on('click', 'mark', (e) => {
            map.flyTo({
            center: e.features[0].geometry.coordinates
            });
            });
             
            // Change the cursor to a pointer when the it enters a feature in the 'circle' layer.
            map.on('mouseenter', 'circle', () => {
            map.getCanvas().style.cursor = 'pointer';
            });
             
            // Change it back to a pointer when it leaves.
            map.on('mouseleave', 'circle', () => {
            map.getCanvas().style.cursor = '';
            });
            });

            const marker2 = new mapboxgl.Marker({ color: 'black', rotation: 45 })
            .setLngLat([12.65147, 55.608166])
            .addTo(map);
            

    },[]);

 


  return  (
      <div ref={mapContainer} className=" w-full h-[200px] md:w-[1000px] md:h-[400px]">

      </div>
  ) 
}

export default React.memo(Map)