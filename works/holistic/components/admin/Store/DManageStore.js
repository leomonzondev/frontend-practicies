import React, {useState} from 'react'
import { urlForThumbnail } from 'utils/image'
import Image from 'next/image'



export const DManageStore = ({products}) => {

  const [selected, setSelected] = useState(null)


  const selectProduct = () => {



  }

  return (
    <div className='mt-32 flex flex-wrap'>
    <div>
      <h1>Contenido</h1>
    </div>
      <div className=''>
      <h1>Producto</h1>
        {
            products.map(item => <div key={item._id} className='flex'>
            <div className='w-20'>
            <Image src={urlForThumbnail(item.image)} height={200} width={200} layout="responsive" />
            </div>
            <div className='flex gap-10'>
              <h2>{item.name}</h2>
              <p>${item.price}</p>
            </div>
            </div>)
        }
      </div>

        <div>
          <h1>Edición</h1>
        
        <form className='bg-darkTextSecondary flex flex-col p-10 gap-5'>
            <input placeholder='titulo' />
            <input placeholder='descripcion' />
            <input placeholder="categoria" />


            <button className='bg-darkAccent-200 cursor-pointer hover:bg-darkAccent-100 m-20'>Agregar producto</button>
        </form>

        </div>

    </div>
  )
}
