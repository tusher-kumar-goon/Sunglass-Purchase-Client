import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { _id, name, price, description, img } = product;
    return (

        <div className="product">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5> Price:{price}</h5>
            <p className='mx-3'>{description}</p>
            <Link to={`/purchase/${_id}`}>
                <button className='btn btn-warning mb-2'>Purchase</button></Link>
        </div>
    );
};

export default Product;