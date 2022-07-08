import React, {useEffect, useMemo } from 'react'
import Map from './Map'



const Ubicacion = () => {




  return (
    <div className='w-full pb-20'>
      <h1 className='text-7xl md:text-9xl font-bold text-lightTitles dark:text-darkTitles mb-20'>Ubicación</h1>
      <div className='flex justify-center flex-col items-center'>
        <Map />
        <p>Consultorio en Kepler 3485, Ciudadela </p>

      </div>
    </div>
  )
}

export default Ubicacion