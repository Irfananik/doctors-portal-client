import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Info from './Information/Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services/Services';
import Terms from './Terms';
import Testimonials from './Testimonials';


const Home = () => {
    return (
        <div className="px-12">
            <Banner/>
            <Info/>
            <Services/>
            <Terms/>
            <MakeAppointment/>
            <Testimonials/>
            <ContactUs/>
        </div>
    );
};

export default Home;