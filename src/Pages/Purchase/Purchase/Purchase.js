import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './Purchase.css'
import Header from '../../Shared/Header/Header';
import { Card } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';


const OrderPlaced = () => {
    const { user } = useAuth()
    const { productId } = useParams();
    const [product, setProduct] = useState([]);


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {

        data.status = 'pending';
        data.img = product.img

        axios.post(`http://localhost:5000/orders`, data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Order Placed SuccessFully');
                    reset();
                }
            })

    }

    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [])

    // const ExactIteam = data.filter(td => td._id === id);

    return (
        <>
            <Header></Header>
            <div className='d-flex '>
                <div className='row ms-5'>
                    <div className='col-md-6'>
                        <div className="mt-2 details-card ">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={product.img} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Title>${product.price}</Card.Title>
                                    <Card.Text>
                                        {product.details}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                    </div>
                    <div className='col-md-6'>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="input-style py-3">
                                <input {...register("name", { required: true })} placeholder="Your Name" value={user?.displayName} />
                                {/* errors will return when field validation fails  */}
                                <input {...register("email", { required: true })} placeholder="Your Email" value={user?.email} />

                                {/* errors will return when field validation fails  */}
                                <input {...register("address", { required: true })} placeholder="Your Address" />

                                <input type="number" {...register("phone", { required: true })} placeholder="Phone" />

                                {/* errors will return when field validation fails  */}
                                <textarea {...register("description", { required: true })} placeholder="Description" />
                                {errors.exampleRequired && <span className="text-warning">This field is required</span>}

                                <input className="submit-btn" type="submit" value="Buy" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    );
};

export default OrderPlaced;







