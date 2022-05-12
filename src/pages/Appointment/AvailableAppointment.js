import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Services from './Services';

const AvailableAppointment = ({ date }) => {
    const [services, serServices] = useState([])
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(response => response.json())
        .then(data => serServices(data))
    },[])
    return (
        <div>
            <h2 className="text-xl text-secondary text-center my-10">Available appointment on {format(date, 'PP')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(service => <Services key={service._id} service={service} setTreatment={setTreatment}/>)
                }
            </div>
            {
                treatment && <BookingModal date={date} setTreatment={setTreatment} treatment={treatment}/>
            }
        </div>
    );
};

export default AvailableAppointment;