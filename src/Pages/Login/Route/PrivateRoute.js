import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth()
    let location = useLocation();
    if (isLoading) { return <TailSpin color="#00BFFF" height={80} width={80} /> }
    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
}

export default PrivateRoute;