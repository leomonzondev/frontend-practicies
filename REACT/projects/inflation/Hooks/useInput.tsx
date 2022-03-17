import React, { useState } from 'react'

export const useInput = (initialValue:any) => {

    const [value, setValue] = useState(initialValue)

    const reset = () => {
        
        setValue(initialValue)

    }

    const bind = {
        value,
        onChange: e => {
            setValue(e.target.value)
        }
    }



  return []
}
