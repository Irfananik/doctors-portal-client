import React from 'react';
import Banner from './Banner';
import Info from './Information/Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services/Services';
import Terms from './Terms';


const Home = () => {
    return (
        <div className="px-12">
            <Banner/>
            <Info/>
            <Services/>
            <Terms/>
            <MakeAppointment/>
        </div>
    );
};

export default Home;