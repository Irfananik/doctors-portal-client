import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AllUserRow from './AllUserRow';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user',{
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
    }).then(response => response.json()))
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h1 className="text-accent text-xl">Total Users: {users.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => <AllUserRow key={user._id} user={user} refetch={refetch} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;