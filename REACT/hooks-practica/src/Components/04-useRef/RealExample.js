import React, { useState } from 'react'
import '../02-useEffect/effect.css'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

export const RealExample = () => {

    const [show, setShow] = useState(false)


    return (
        <div>
            <h1>Real example REF</h1>
            <hr/>
            {
                show && <MultipleCustomHooks />
            }

            <button
                onClick={() => {
                    setShow(!show)
                }}
                className='btn btn-danger mt-5'>Show/Hide</button>

        </div>
    )
}
