import React from 'react';
import { toast } from 'react-toastify';

const DoctorsRow = ({ doctor, index, refetch, setDeleteDoctorComfirm }) => {
    const { name, specialty, img, email } = doctor
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
            <label onClick={() => setDeleteDoctorComfirm(doctor)} for="doctor-delete-modal" class="btn modal-button btn btn-xs btn-error mt-8">Delete</label>
        </tr>
    );
};

export default DoctorsRow;