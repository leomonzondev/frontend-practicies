import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard'

import "./style.css"

export const HeroList = ({publisher}) => {

    const heroes = useMemo(() => getHeroesByPublisher( publisher), [publisher])



    return (
        <div className="card-column animate__animated animate__fadeIn">
            {
                heroes.map( hero => (
                    <HeroCard key={hero.id}
                        {...hero}

                        />
                ))
            }
        </div>
    )
}
