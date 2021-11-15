import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css'


const Header = () => {
    const { user, logout } = useAuth()
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky='top' collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className=' dashboard'>SUN-<span className='text-warning'>STORE</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home" className=' dashboard'>Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#product" className=' dashboard'>Product</Nav.Link>
                        <Nav.Link as={HashLink} to="/explore" className=' dashboard'>Explore</Nav.Link>

                        <Navbar.Text>

                            {
                                user?.email ?
                                    <div> <NavLink to="/dashboard" className='me-2 dashboard'>Dashboard</NavLink>
                                        <Button onClick={logout} variant="warning">Logout</Button></div>
                                    :
                                    <div> <NavLink to='/login'>
                                        <Button variant="warning">Login</Button>
                                    </NavLink>
                                        <p>{user.img}</p>
                                    </div>



                            }


                        </Navbar.Text>
                    </Navbar.Collapse >
                </Container >
            </Navbar >
        </>

    );
};

export default Header;