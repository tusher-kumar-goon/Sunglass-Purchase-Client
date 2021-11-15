import React, { useEffect, useState } from 'react';
import Header from '../../Shared/Header/Header';
import Product from '../Product/Product';


const Explore = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (

        <div id='product'>
            <Header></Header>
            <h2 className='text-success mt-5'>More Products</h2>
            <div className='product-container '>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Explore;