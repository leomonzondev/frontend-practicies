import { useEffect, useState } from 'react'
import { getData } from '../helpers/getData'

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading:true
    })


    useEffect (() => {
        getData( category )
            .then ( img => {
                setState({
                    data:img,
                    loading:false
                })
            })
    },[ category ])

    return state
}
