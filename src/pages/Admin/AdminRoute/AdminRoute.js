import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router';

const AdminRoute = ({ children }) => {
    const user = useSelector(state => state.user)
    
    const [userRole, setUserRole] = useState(null);
    useEffect(()=>{
        async function getUser(email) {
            await axios.post('https://organic-recipes.herokuapp.com/get-user-role', {"email":email}).then(res => {
                setUserRole(res.data)
            })
        }
        getUser(user.email)
    },[])
 
    if (userRole==null) {
        return (
            <div className="d-flex my-5 justify-content-center">
                <Spinner animation="grow" variant="danger" />
            </div>
        );
    };
    // if(user.email){
    //     return children;
    // }
    if(userRole.role == "admin"){
        return children;
    }else{
        return <Navigate to="/login" />
    }
    //return userRole.role == "admin" ? children : <Navigate to="/login" />
};

export default AdminRoute;