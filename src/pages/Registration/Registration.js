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


const Registration = () => {
    const [show, setShow] = useState(false);
    const { register, handleSubmit, reset, setError, formState: { errors } } = useForm();
    const location = useLocation();
    const redirect_URL = location.state?.from || '/'
    const navigate = useNavigate();
    const user = useSelector(state => state.user)
    const dispatch = useDispatch();
    const auth = getAuth();

    const googleLoginHandle = () => {
        const googleProvider = new GoogleAuthProvider();
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
                    await axios.post('https://organic-recipes.herokuapp.com/user', data)
                        .then(() => {
                            navigate(redirect_URL)
                        })
                }
                postUserData(data);
            })
    }
    const onSubmit = data => {
        if (data.password === data.confirmPassword) {
            delete data.confirmPassword;
            const newUser = { email: data.email, password: data.password, displayName: data.displayName, photoURL: data.photoURL, role: 'user' }
            async function postUserData(newUser) {
                await axios.post('https://organic-recipes.herokuapp.com/user', newUser).then(res => {
                    createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
                        .then((userCredential) => {
                            dispatch(userLoading());
                            updateProfile(auth.currentUser, {
                                displayName: newUser.displayName,
                                photoURL: newUser.photoURL
                            });

                        })
                })

            }
            postUserData(newUser);
            reset();


        } else {
            setError("wrongPassword", {
                type: "manual",
                message: "Password didn't match"
            });
        }
    }

    return (
        <Container>
            {show === true ?
                <Toster show={show} bodyMessage={'You entered wrong credentials'} titleMessage={'Dear'} setShow={setShow} />
                : <></>
            }

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-row mt-5">
                    <div className="form-group col-md-6 mx-auto my-3">
                        <label htmlFor="displayName">Your Name   {errors.displayName && <span className="text-danger">  This field is required</span>}</label>
                        <input type="displayName" className="form-control" id="displayName" {...register("displayName", { required: true })} placeholder="Enter your name.." />
                    </div>
                    <div className="form-group col-md-6 mx-auto my-3">
                        <label htmlFor="email">Your email   {errors.email && <span className="text-danger">  This field is required</span>}</label>
                        <input type="email" className="form-control" id="email" {...register("email", { required: true })} placeholder="Enter your email.." />
                    </div>
                    <div className="form-group col-md-6 mx-auto my-3">
                        <label htmlFor="password">Password {errors.password && <span className="text-danger">  This field is required</span>}</label>
                        <input type="password" className="form-control" id="password" {...register("password", { required: true })} placeholder="Password" />
                    </div>
                    <div className="form-group col-md-6 mx-auto my-3">
                        <label htmlFor="confirmPassword">Confirm Password
                            {errors.confirmPassword && <span className="text-danger">  This field is required</span>}
                            {errors.wrongPassword && <span className="text-danger"> {errors.wrongPassword.message}</span>}
                        </label>
                        <input type="password" className="form-control" id="confirmPassword" {...register("confirmPassword", { required: true })} placeholder="Confirm Password" />
                    </div>
                    <div className="form-group col-md-6 mx-auto my-3">
                        <label htmlFor="photoURL">Your Photo URL {errors.photoURL && <span className="text-danger">  This field is required</span>}</label>
                        <input type="photoURL" className="form-control" id="photoURL" {...register("photoURL", { required: true })} placeholder="http://bb.im/img" />
                    </div>
                </div>
                <div className="d-flex">
                    <button type="submit" className="main-button mx-auto my-3" ><span>Registration</span></button>
                </div>
            </form>
            <hr className="bgColorThird" />
            <h4 className="text-center">OR</h4>
            <div className="d-flex">
                <button type="submit" className="main-button mx-auto my-3" onClick={() => (navigate('/login'))} ><span>Login</span></button>
            </div>
            <hr className="bgColorThird" />
            <div className="d-flex justify-content-center m-3">
                <button className="main-button"><span onClick={googleLoginHandle}>Join With Google</span></button>
            </div>
        </Container>
    );
};

export default Registration;