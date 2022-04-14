import React from 'react'
import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const RequiresAuth = ({children}) => {
    const {authStates:{eToken}}=useAuth();
    const location=useLocation();
    return eToken?children:<Navigate to="/login" state={{from:location}} replace></Navigate>
}
