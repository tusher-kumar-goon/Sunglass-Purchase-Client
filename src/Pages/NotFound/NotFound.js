import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h3>Page not found</h3>
            <Link to='/'>    <button>Go home</button></Link>
        </div>
    );
};

export default NotFound;