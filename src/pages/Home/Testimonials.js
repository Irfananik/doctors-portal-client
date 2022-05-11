import React from 'react';
import quote from '../../assets/icons/quote.svg'
import ReviewCard from './ReviewCard';

const Testimonials = () => {
    const reviews = [
        {
            _id:1,
            name:'Winson Herry',
            review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat aspernatur modi delectus sit dignissimos, exercitationem laudantium odio velit eius aut.',
            img:'https://i.ibb.co/MGTgy3r/people1.png',
            addresse: 'Ukrain'
        },
        {
            _id:2,
            name:'Herry Potting',
            review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat aspernatur modi delectus sit dignissimos, exercitationem laudantium odio velit eius aut.',
            img:'https://i.ibb.co/3CSzHCH/people2.png',
            addresse: 'Ukrain'
        },
        {
            _id:3,
            name:'Winson Herry',
            review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat aspernatur modi delectus sit dignissimos, exercitationem laudantium odio velit eius aut.',
            img:'https://i.ibb.co/J7BMTjD/people3.png',
            addresse: 'Ukrain'
        }
    ]
    return (
       <section className="lg:my-36 my-12">
           <div className="flex justify-between">
               <div>
                   <h4 className="text-primary text-xl">Testimonial</h4>
                   <h2 className="text-accent text-3xl">What Our Patients Says</h2>
               </div>
               <div>
                   <img className="lg:w-48 w-24" src={quote} alt="" />
               </div>
           </div>
           <div className="grid grid-cols-1 lg:grigrid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
               {
                   reviews.map(review => <ReviewCard key={review.id} review={review}/>)
               }
           </div>
       </section>
    );
};

export default Testimonials;