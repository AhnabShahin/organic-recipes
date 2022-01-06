import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

const HideRoute = ({ children }) => {
    const user = useSelector(state => state.user.currentUser)
    console.log(user)
    return user ? <Navigate to="/" /> : children
};

export default HideRoute;