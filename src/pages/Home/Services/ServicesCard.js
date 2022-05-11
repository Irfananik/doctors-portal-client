import React from 'react';

const ServicesCard = ({service}) => {
    return (
        <div className="text-center my-12">
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={service.img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{service.name}</h2>
                    <p>{service.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;