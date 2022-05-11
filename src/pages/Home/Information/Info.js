import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-5">
            <InfoCard cardTitle="Openig Hours" cardDescription="Lorem Ipsum is simply dummy text of the pri" bgClass="bg-gradient-to-r from-primary to-secondary" img={clock} />
            <InfoCard cardTitle="Visit Our Location" cardDescription="Lorem Ipsum is simply dummy text of the pri" bgClass="bg-accent" img={marker} />
            <InfoCard cardTitle="Contact Us now" cardDescription="Lorem Ipsum is simply dummy text of the pri" bgClass="bg-gradient-to-r from-secondary to-primary" img={phone} />
        </div>
    );
};

export default Info;