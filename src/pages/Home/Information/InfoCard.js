import React from 'react';

const InfoCard = ({img, cardTitle, cardDescription, bgClass}) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl p-5 ${bgClass}`}>
            <figure><img src={img} alt="Album"/></figure>
            <div class="card-body">
                <h2 class="card-title text-white">{cardTitle}</h2>
                <p class="text-white">{cardDescription}</p>
            </div>
        </div>
    );
};

export default InfoCard;