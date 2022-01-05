import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Container } from 'react-bootstrap';
import Toster from './../Shared/Toster/Toster';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userLoading, removeUser, googleJoin } from './../../redux/actions/actions';
import { getAuth, signInWithPopup, onAuthStateChanged, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from './../../Firebase/firebase.initialization';


initializeAuthentication();


const Login = () => {
    const [show, setShow] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const location = useLocation();
    const redirect_URL = location.state?.from || '/'
    const navigate = useNavigate();
    const user = useSelector(state => state.user)
    const dispatch = useDispatch();
    const googleLoginHandle = () => {
        const googleProvider = new GoogleAuthProvider();
        const auth = getAuth();
        dispatch(userLoading())
        signInWithPopup(auth, googleProvider)
            .then((res) => {
                const { displayName, email, photoURL } = res.user;
                const data = {
                    displayName,
                    email,
                    photoURL,
                    role: 'user'
                }
                async function postUserData(data) {
                    await axios.post('http://localhost:5000/user', data)
                        .then(()=>{
                            navigate(redirect_URL)
                        })
                }
                postUserData(data);
            })
    }
    const onSubmit = data => {
        // async function postUserData(data) {
        //     await axios.post('https://custard-cake-backend-api.herokuapp.com/login', data).then(res => {
        //         if (res.data.displayName) {
        //             signInWithEmailAndPassword(auth, data.email, data.password)
        //                 .then((userCredential) => {
        //                     // Signed in 
        //                     setUser(userCredential.user);
        //                     navigate(redirect_URL);

        //                 })
        //         } else {
        //             setShow(true)
        //         }
        //     });
        // }
        // postUserData(data);
        // reset();
    };

    return (
        <Container>
            {show === true ?
                <Toster show={show} bodyMessage={'You entered wrong credentials'} titleMessage={'Dear'} setShow={setShow} />
                : <></>
            }

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-row ">
                    <div className="form-group col-md-6 mx-auto my-3">
                        <label htmlFor="email">Your email   {errors.email && <span className="text-danger">  This field is required</span>}</label>
                        <input type="email" className="form-control" id="email" {...register("email", { required: true })} placeholder="Enter your email.." />
                    </div>
                    <div className="form-group col-md-6 mx-auto my-3">
                        <label htmlFor="password">Password {errors.password && <span className="text-danger">  This field is required</span>}</label>
                        <input type="password" className="form-control" id="password" {...register("password", { required: true })} placeholder="password" />
                    </div>
                </div>
                <div className="d-flex">
                    <button type="submit" className="main-button mx-auto my-3" ><span>Login</span></button>
                </div>
            </form>
            <hr className="bgColorThird" />
            <h4 className="text-center">OR</h4>
            <div className="d-flex">
                <button type="submit" className="main-button mx-auto my-3" onClick={() => (navigate('/registration'))} ><span>Registration</span></button>
            </div>
            <hr className="bgColorThird" />
            <div className="d-flex justify-content-center m-3">
                <button className="main-button"><span onClick={googleLoginHandle}>Join With Google</span></button>
            </div>
        </Container>
    );
};

export default Login;