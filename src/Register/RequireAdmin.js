import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../pages/Shared/Loading';
import useAdmin from '../../src/hooks/useAdmin';
import { toast } from 'react-toastify';
//import { signOut } from 'firebase/auth';

const RequireAdmin = ({ children }) => {

    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user)
    const location = useLocation()

    if(loading || adminLoading) {
        return <Loading/>
    }

    if(!user || !admin) {
        //signOut(auth)
        toast.error("Sorry you have not able to this way!")
        return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    }

    return children

};

export default RequireAdmin;