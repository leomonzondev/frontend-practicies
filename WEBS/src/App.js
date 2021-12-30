import React from 'react'
import { Choose } from './Components/Choose'
import { Footer } from './Components/Footer'
import { Hero } from './Components/Hero'
import { Projects } from './Components/Projects'
import { Work } from './Components/Work'
import { Years } from './Components/Years'
import './Styles/app.scss'

export const App = () => {
    return (
        <div>
            <Hero />
            <Years />
            <Projects />
            <Choose />
            <Work />
            <Footer />
        </div>
    )
}
