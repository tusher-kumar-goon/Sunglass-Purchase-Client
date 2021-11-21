import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://whispering-sierra-52339.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div id='product'>
            <h2 className='text-success mt-5'>Popular Collection</h2>
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

export default Products;