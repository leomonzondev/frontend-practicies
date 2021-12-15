import React, { useEffect, useState } from 'react'

export const Searcher = () => {



    return (
        <div className='searcher'>
            <form>
                <input type="num" placeholder="Search an IP" />
                <button>Search</button>
            </form>
        </div>
    )
}
