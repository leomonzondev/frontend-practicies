import React from 'react'

const esencias = () => {
  return (
    <div>
        <h1 className='m-5 font-medium'>Esencias de Bach</h1>
        <section className='flex justify-end'>


            <div className='flex gap-5 m-5 items-center'>
                <p className='font-medium text-xl'>Ordenar Productos:</p>
                <select className='p-2  '>
                  <option selected>Más reciente</option>
                    <option>Precio (asc)</option>
                    <option>Precio (desc)</option>
                </select>
            </div>

        </section>
    </div>
  )
}

export default esencias