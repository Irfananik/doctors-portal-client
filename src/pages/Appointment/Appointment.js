import React, { useState } from 'react';
import AppointBanner from './AppointBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <AppointBanner date={date} setDate={setDate}/>
            <AvailableAppointment date={date}/>
        </div>
    );
};

export default Appointment;