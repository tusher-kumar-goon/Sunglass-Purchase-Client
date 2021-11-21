import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';



const Reviews = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        // use Axious
        axios.post('https://whispering-sierra-52339.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully data');
                    reset();
                }
            })
    }
    return (
        <div className='add-product'>
            <h2>Rate me</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input   {...register("name", { required: true, maxLength: 20 })}
                    placeholder='Name' />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price", { required: true, min: 1, max: 5 })} placeholder="Rate me out of 5" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Reviews;