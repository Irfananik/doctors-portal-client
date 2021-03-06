import React from 'react';

const Banner = () => {
    return (
        <div class="hero lg:my-36">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://i.ibb.co/QvXP4NC/chair.png" className="lg:max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="lg:text-5xl text-4xl font-bold">Your New Smile Starts Here!</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-primary to-seconary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;