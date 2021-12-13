import React from 'react'
import { About } from './components/About'

import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { WordSlider } from './components/WordSlider'

export const App = () => {
    return (
        <>
            <Hero />
            <WordSlider />
            <Projects />
            <About />
        </>
    )
}
