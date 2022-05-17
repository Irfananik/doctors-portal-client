import React from 'react';
import { toast } from 'react-toastify';

const DoctorsRow = ({ doctor, index, refetch }) => {
    const { name, specialty, img, email } = doctor

    const doctorDelete = email => {
        fetch(`http://localhost:5000/doctor/${email}`, {

            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    toast.success(`${name} deleted successfully`)
                    refetch()
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-16 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td><button onClick={() => doctorDelete(email)} class="btn btn-xs btn-error">Delete</button></td>
        </tr>
    );
};

export default DoctorsRow;