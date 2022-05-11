import React from 'react';

const ReviewCard = ({ review }) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <p>{review.review}</p>
                <div className="">
                    <div class="avatar flex items-center">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100">
                            <img src={review.img} />
                        </div>
                        <div className="lg:mt-20 mt-8 ml-8">
                            <h5 className="text-2xl text-accent font-bold">{review.name}</h5>
                            <h6 className="text-xl text-accent">{review.addresse}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;