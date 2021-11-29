import React, { useEffect, useState } from 'react'


const url = 'https://restcountries.com/v2/all'

const Countries = () => {

    const [countries, setCountries] = useState([])

    const fetchCountryData = async () => {
        const res = await fetch(url)
        const data = await res.json()
        setCountries(data)
        console.log(data)
    }
    useEffect(() => { 
        fetchCountryData()
    },[])

    console.log(countries)

    return (
        <>
            <section className="grid">
            {countries.map((country) => {
                const {
                    numericCode,
                    name,
                    population,
                    region,
                    capital,
                    flag
                } = country

                return (
                    <article key={numericCode}>
                        <div className="card">
                            <img src={flag} alt={name} />
                            <div className="details">
                                <h3>{name}</h3>
                                <p>Population:<span>{population}</span></p>
                                <p>Region:<span>{region}</span></p>
                                <p>Capital:<span>{capital}</span></p>
                            </div>
                        </div>
                    </article>
                )
            })}
            </section>
        </>
    )
}

export default Countries
