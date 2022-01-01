import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.png'
const NotFound = () => {
    return (
        <div>
            <img style={{width:"600px"}} src={notFound} alt="" />
            <Link to= "/home"><button className="btn btn-warning">Go Home</button></Link>
            
        </div>
    );
};

export default NotFound;