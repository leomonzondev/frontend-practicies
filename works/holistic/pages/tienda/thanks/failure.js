import React from 'react'

import Link from 'next/link'

const failure = () => {
  return (
    <div className='mt-20'>
    
    Compra fallida

    <Link href="/tienda" ><p className='cursor-pointer'>Volver a la tienda</p></Link>
    
    
    </div>

  )
}

export default failure