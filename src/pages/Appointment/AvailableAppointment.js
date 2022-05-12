import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Services from './Services';

const AvailableAppointment = ({ date }) => {
    const [services, serServices] = useState([])

    useEffect(() => {
        fetch('services.json')
        .then(response => response.json())
        .then(data => serServices(data))
    },[])
    return (
        <div>
            <h2 className="text-xl text-secondary text-center my-10">Available appointment on {format(date, 'PP')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(service => <Services key={service._id} service={service}/>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;