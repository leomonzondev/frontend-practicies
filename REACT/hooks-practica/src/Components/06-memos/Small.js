import React,{memo} from 'react'

export const Small = memo(({ value }) => {

    console.log('Me volví a llamar :C')

    return (
        <small>
            { value }
            
        </small>
    )
}
)