import React from 'react'
import { Footer } from './components/Footer'
import { Map } from './components/Map'
import { MyIp } from './components/MyIp'
// import { Result } from './components/Result'
// import { Searcher } from './components/Searcher'

export const App = () => {
    return (
        <div>
            <Map />
            <MyIp />
            {/* <Searcher /> */}
            {/* <Result /> */}
            
        </div>
    )
}
