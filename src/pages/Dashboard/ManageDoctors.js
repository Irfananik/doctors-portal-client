import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DoctorDeleteCon from './DoctorDeleteCon';
import DoctorsRow from './DoctorsRow';

const ManageDoctors = () => {
    const [deleteDoctorConfirm, setDeleteDoctorComfirm] = useState(null)

    const { data: doctors, isLoading, refetch, setDeleteDoctor } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h1 className="text-accent text-xl my-3">Mange Doctors: {doctors.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorsRow key={doctor._id} doctor={doctor} index={index} refetch={refetch} setDeleteDoctorComfirm={setDeleteDoctorComfirm}/>)
                        }
                    </tbody>
                </table>
            </div>
            {deleteDoctorConfirm && <DoctorDeleteCon deleteDoctorConfirm={deleteDoctorConfirm} refetch={refetch} setDeleteDoctorComfirm={setDeleteDoctorComfirm}/>}
        </div>
    );
};

export default ManageDoctors;