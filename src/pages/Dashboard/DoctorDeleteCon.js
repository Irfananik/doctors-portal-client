import React from 'react';
import { toast } from 'react-toastify';

const DoctorDeleteCon = ({ deleteDoctorConfirm, refetch, setDeleteDoctorComfirm }) => {
    const { name, email } = deleteDoctorConfirm
    const doctorDelete = () => {
        fetch(`https://aqueous-dawn-81823.herokuapp.com/doctor/${email}`, {

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
                    setDeleteDoctorComfirm(null)
                    refetch()
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="doctor-delete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-600">{`Are you sure you want to delete  ${name}!`}</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <td><button onClick={() => doctorDelete()} class="btn btn-xs btn-error">Delete</button></td>
                        <label for="doctor-delete-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DoctorDeleteCon;