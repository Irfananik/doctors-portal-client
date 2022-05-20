import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L18LSCyQXzkK53DcdpQQ0dg14L8EgfTWyaPVwX0vcPz0uoy20MZKEE2c8SVySTehFRYJmt6e6sXm8mKpXL2mr5y00TakVTgij')

const Payment = () => {
    const { id } = useParams()

    const url = `https://aqueous-dawn-81823.herokuapp.com/booking/${id}`

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
                    <Elements stripe={stripePromise}>
                        <CheckoutForm  appointment={appointment}/>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;