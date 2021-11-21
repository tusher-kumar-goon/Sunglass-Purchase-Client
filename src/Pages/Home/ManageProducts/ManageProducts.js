import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://whispering-sierra-52339.herokuapp.com/AllProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleDelete = id => {
        const url = `https://whispering-sierra-52339.herokuapp.com/products/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert("Delete Confirm")
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                }

            })
    }

    return (
        <div>
            <h3>This is manage products</h3>
            {
                products.map(product => <div
                    key={product._id}
                >
                    <h3>{product.name}</h3>
                    <button onClick={() => handleDelete(product._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageProducts;