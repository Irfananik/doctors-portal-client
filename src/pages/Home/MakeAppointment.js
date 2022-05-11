import React from 'react';

const MakeAppointment = () => {
    return (
        <section className="flex justify-content items-center p-3 rounded-md" style={{background:`url(${'https://i.ibb.co/zQvGf6T/appointment.png'})`}}>
            <div className="flex-1 lg:block hidden">
                <img className="mt-[-100px]" src="https://i.ibb.co/qMQSrr1/doctor-small.png" alt="" />
            </div>
            <div className="flex-1">
                <h3 className="text-3xl text-primary">Appointment</h3>
                <h2 className="text-4xl text-white">Make an appointment today</h2>
                <p className="text-white mt-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button class="btn btn-primary my-3">Get Started</button>
            </div>
        </section>
    );
};

export default MakeAppointment;