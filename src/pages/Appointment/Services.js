import React from 'react';

const Services = ({ service }) => {
    const { name, slots } = service
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="card-title text-xl font-bold text-secondary justify-center">{name}</h2>
                <p>
                    {
                        slots.length > 0 ? <span>{slots[0]}</span> : <span className="text-red-500">Not slots Available</span>
                    }
                </p>
                <p>
                    {slots.length} {slots.length > 1 ? 'spaces' : 'space'} available
                </p>
                <div className="card-actions justify-center">
                    <button disabled={slots.length === 0} className="btn btn-secondary text-white">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Services;