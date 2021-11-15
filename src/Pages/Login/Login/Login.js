import React, { useState } from 'react';
import './Login.css'
import login from '../../../images/login.jpg'
import { Alert, Button, Spinner } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, loginUser, isLoading, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <div className='row login-form'>
            <div className='col-md-6 mt-5'>
                <h3>Login</h3>
                <form onSubmit={handleLoginSubmit}>

                    <input type="text"
                        className="form-control mb-3  ms-5 w-75"
                        name="email"
                        onChange={handleOnChange}
                        placeholder="Enter Your Email" />

                    <input
                        className="form-control ms-5  mb-3 w-75"
                        placeholder="Your Password"
                        name="password"
                        onChange={handleOnChange}
                        type="password" />

                    {/* login button */}

                    <Button variant="success"
                        type='submit'
                        className='w-75 me-5'
                    >Login</Button>
                    <NavLink to='/register'> <Button variant="outline-warning" className="mt-3">New User?Please Register</Button></NavLink>
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
                </form>

                {/* image here */}
            </div>
            <div className='col-md-6'>
                <img className='side-image' style={{ width: '100%' }} src={login} alt='' />
            </div>
        </div>
    );
};

export default Login;