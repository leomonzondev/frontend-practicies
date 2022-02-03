import React, { useEffect, useState } from 'react';
import { Card } from './Card.jsX';

export const Tours = () => {

    const [tours, setTours] = useState([]);

    useEffect(() => {
        setTours(call())
    },[])


    const removeTour = (id) => { 
        const newTour = tours.filter(tour => tour.id !== id)
        setTours(newTour)
    }
    

return (
<section>
    <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
    </div>
    <div>
    {
        tours.map((tour) => {
            return <Card key={tour.id} {...tour} removeTour={removeTour} />;
        })
    }
    </div>
    </section>
)
};
