import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [appointments, setAppointments] = useState([])

    const [user, loading, error] = useAuthState(auth)

    useEffect(() => {
        fetch(`http://localhost:5000/booking?patient=${user.email}`)
            .then(response => response.json())
            .then(data => setAppointments(data))
    }, [user])
    return (
        <div>
            <h1 className="text-accent text-xl">My Total Appointment: {appointments.length}</h1>

            <div class="overflow-x-auto my-8">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map(a => <tr>
                            <th>1</th>
                            <td>{user.displayName}</td>
                            <td>{a.date}</td>
                            <td>{a.slot}</td>
                            <td>{a.treatment}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;