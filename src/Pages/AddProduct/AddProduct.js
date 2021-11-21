import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddProduct.css'


const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        // use Axious
        axios.post('https://whispering-sierra-52339.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully data');
                    reset();
                }
            })
    }
    return (
        <div className='add-product'>
            <h2>Add a Product by admin</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })}
                    placeholder='Name' />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="image url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;