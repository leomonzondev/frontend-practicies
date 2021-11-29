import React, { useState } from 'react'
import Countries from '../helpers/Countries'


const Filter = () => {

    const [filter, setFilter] = useState('')

    const [search, setSearch] = useState('')


    return (
        <section className="filter">
            <form className="form-control">
            {search}
                <input type="text" name="search" id="search" 
                defaultValue={filter} placeholder="Search for a country"
                onChange={ e => setSearch(e.target.value)}
                />
            </form>

            <div>
                <select name="select" id="select" className="select">
                    <option value="Filter by region">Filter by region</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europa">Europa</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>

        </section>
    )
}

export default Filter
