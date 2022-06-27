import React, { useEffect, useState } from 'react'

export const Suggestions = ({zones, inputValue, handleCall }) => {


    const [showSuggestions, setShowSuggestions] = useState([])
    
    
    //Manager of zones to show in change of inputValue
    useEffect(() => {
        const filtered = zones.filter(zona => zona.toLowerCase().includes(inputValue.toLowerCase()))
        setShowSuggestions(filtered)
    }, [inputValue])
    

    //Handler of zone selected
    const handleSelected = (suggested) => {
       
        handleCall(suggested)
    }


  return (
    <div className='bg-red-500'>
   
        <div className='w-96 text-center max-h-screen h-96 overflow-y-auto'>
            {
                inputValue === '' 
                ? ''
                : showSuggestions?.map(sugges => <p key={Math.random()} onClick={() => handleSelected(sugges)} className='hover:bg-slate-600 text-white cursor-pointer py-2 px-2'>{sugges}</p>)
            }
        </div>

    </div>
  )
}
