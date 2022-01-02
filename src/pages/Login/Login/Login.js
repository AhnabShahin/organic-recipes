import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


// import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="login-form row">
            <div className="col-md-6 mt-5">
                <h2  className="mt-5">Login</h2>
                <form>
                    <input className="mb-2" type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input className="mb-2" type="password" name="" id="" placeholder="Your password"/>
                    <br />
                    <input className="mb-2 btn btn-success" type="submit" value="Submit" />
                </form>
                <p>new to ema-john website? <Link to="/register"><button  className="btn btn-warning">Create Account</button></Link></p>
                <div>-------or----------</div>
                <button
                    className="btn btn-warning mb-5"
                    onClick={signInUsingGoogle}
                >Google Sign In</button>
            </div>
            <div className="col-md-6">
                    <div className="right-side-image">
                        <img
                            className="w-100"
                            src="https://i.ibb.co/MSBbLcd/access-control-system-abstract-concept-illustration-security-system-authorize-entry-login-credential.jpg"
                            alt=""
                        />
                    </div>
                    ;
                </div>
        </div>
    );
};

export default Login;