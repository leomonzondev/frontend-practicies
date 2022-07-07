import React from 'react'

export const Card = ({ country }) => {


  const handleDelete = () => {

    
      
    
  }

  return (
    <div className='bg-gray-700 text-white p-5'>
      <div className='w-full flex justify-end'>
        <button>X</button>
      </div>

      <div className='flex flex-col items-center'>
        <p>{country.timezone}</p>
        <p>{country.datetime}</p>
      </div>
        
    </div>
  )
}
