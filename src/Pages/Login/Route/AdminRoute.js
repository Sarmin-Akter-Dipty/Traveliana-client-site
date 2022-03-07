import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth()
    console.log(user.email, admin);
    const location = useLocation();
    if (isLoading || !admin) { return <TailSpin color="#00BFFF" height={80} width={80} /> }
    if (user.email && admin) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
}

export default AdminRoute;