import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Payment = () => {
    const { id } = useParams()

    const url = `http://localhost:5000/booking/${id}`

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(response => response.json()))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl">
                <div class="card-body">
                    <h1 className="text-success font-bold">Hello, {appointment.patientName}</h1>
                    <h2 class="card-title text-accent">Pay for: {appointment.treatment}</h2>
                    <p>We will see you on <span className="text-primary">{appointment.date} at {appointment.slot}</span></p>
                    <p>Please pay for your treatment <span className="text-primary">{appointment.price}</span> tk only</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100 my-8">
                <div className="card-body">

                </div>
            </div>
        </div>
    );
};

export default Payment;