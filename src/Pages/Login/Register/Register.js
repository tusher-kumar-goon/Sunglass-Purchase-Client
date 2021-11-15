import React, { useState } from 'react';
import login from '../../../images/login.jpg'
import { Alert, Button, Spinner } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const history = useHistory()
    const { user, registerUser, isLoading, authError } = useAuth()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("Your Password din not match");
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <div className='row login-form'>
            <div className='col-md-6 mt-5'>
                <h3>Register</h3>
                {!isLoading && <form onSubmit={handleLoginSubmit}>

                    <input
                        className="form-control mb-3  ms-5 w-75"
                        name="name"
                        onBlur={handleOnBlur}
                        placeholder=" Your Name" />

                    <input type="email"
                        className="form-control mb-3  ms-5 w-75"
                        name="email"
                        onBlur={handleOnBlur}
                        placeholder="Enter Your Email" />

                    <input
                        className="form-control ms-5  mb-3 w-75"
                        placeholder="Your Password"
                        name="password"
                        onBlur={handleOnBlur}
                        type="password" />

                    <input
                        className="form-control ms-5  mb-3 w-75"
                        placeholder=" Re-Type Your Password"
                        name="password2"
                        onBlur={handleOnBlur}
                        type="password" />

                    {/* login button */}

                    <Button variant="success"
                        type='submit'
                        className='w-75 me-5'
                    >Register</Button>
                    <NavLink to='/login'> <Button variant="outline-warning" className="mt-3">Already Register?Please Login</Button></NavLink>
                </form>}
                {isLoading && <Spinner animation="border" variant="success" />}
                {user?.email && [
                    'success',
                ].map((variant, idx) => (
                    <Alert key={idx} variant={variant}>
                        User {variant} Added
                    </Alert>
                ))}
                {authError && [
                    'danger',
                ].map((variant, idx) => (
                    <Alert key={idx} variant={variant}>
                        {authError} {variant} alert—check it out!
                    </Alert>
                ))}
                {/* image here */}
            </div>
            <div className='col-md-6'>
                <img className='side-image' style={{ width: '100%' }} src={login} alt='' />
            </div>
        </div >
    );
};

export default Register;