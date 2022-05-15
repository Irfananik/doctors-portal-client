import React from 'react';
import { toast } from 'react-toastify';

const AllUserRow = ({ user, refetch }) => {
    const { email, role } = user

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(response => {
                if(response.status === 403){
                    toast.error('Faild to make an admin')
                }
                return response.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast('Make admin done!')
                }
            })
    }

    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
            <td><button class="btn btn-xs">Remove</button></td>
        </tr>
    );
};

export default AllUserRow;