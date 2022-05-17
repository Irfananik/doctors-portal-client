import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Services from './Services';

const AvailableAppointment = ({ date }) => {
    //const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)

    const dateFormated = format(date, 'PP')

    //react query for data load and fetch
    const { data: services, isLoading, refetch } = useQuery(['available', dateFormated], () => fetch(`https://aqueous-dawn-81823.herokuapp.com/available?date=${dateFormated}`)
        .then(response => response.json())
    )
    if(isLoading){
        return <Loading/>
    }

    // useEffect(() => {
    //     fetch(`https://aqueous-dawn-81823.herokuapp.com/available?date=${dateFormated}`)
    //         .then(response => response.json())
    //         .then(data => setServices(data))
    // }, [dateFormated])
    return (
        <div>
            <h2 className="text-xl text-secondary text-center my-10">Available appointment on {format(date, 'PP')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services?.map(service => <Services key={service._id} service={service} setTreatment={setTreatment} />)
                }
            </div>
            {
                treatment && <BookingModal date={date} setTreatment={setTreatment} treatment={treatment} refetch={refetch} />
            }
        </div>
    );
};

export default AvailableAppointment;