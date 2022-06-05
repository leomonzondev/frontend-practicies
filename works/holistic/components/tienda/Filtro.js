import React from 'react'

export const Filtro = () => {
  return (
    <section className='flex justify-end'>
        <div className='flex gap-5 m-5 items-center'>
            <p className='font-medium text-xl'>Ordenar Productos:</p>
            <select className='p-2'>
            <option selected>Más reciente</option>
                <option>Precio (asc)</option>
                <option>Precio (desc)</option>
            </select>
        </div>
    </section>
  )
}
