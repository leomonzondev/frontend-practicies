import React from 'react'
import { Details } from './Details'
import { General } from './General'
import { InputValue } from './InputValue'
import { Map } from './Map'
import { Navbar } from './Navbar'

export const MainApp = () => {
  return (
    <div>
        <Navbar />
        <div>
            <h2>Track any IP and discover useful information.</h2>
        </div>
        <InputValue />
        <Map />
        <General />
        <Details />
    </div>
  )
}
