import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Reviews.css'

const Review = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://whispering-sierra-52339.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    return (
        <div>
            <Container>

                <div>
                    <div className="pn_reviews my-5">
                        <div>
                            <div className="row">
                                <div className="col-md-12">
                                    <h1 className="text-center pb-4">Reviews of our valuable clients</h1>
                                    <p className="text-center">Client’s Great Feedback</p>
                                </div>

                                {reviews.map(review =>
                                    <div key={review._id} className="col-md-12 col-lg-4">
                                        <div className="pn_testimonial_box mt-4">
                                            <p className="text-justify">{review.description.slice(0, 150)}</p>


                                            <div className="row pt-3">
                                                <div className="col-md-6 pn_review_profile"><img src={review.avatar} className="border-radius-12 float-right" alt="" /> <span> {review.name} </span> </div>
                                                <div className="col-md-6 pn_review_rating d-flex justify-content-end"> {review.price} {review.rating} &nbsp; <img className="image-radius aligncenter" src="https://desklib.com/static/src/assets/images/v2/star_rating.svg" alt="" /> </div>
                                            </div>
                                        </div>
                                    </div>)
                                }


                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Review;


// import React, { useEffect, useState } from 'react';

// const Reviews = () => {

//     const [reviews, setReviews] = useState([])
//     useEffect(() => {
//         fetch('https://whispering-sierra-52339.herokuapp.com/reviews')
//             .then(res => res.json())
//             .then(data => setReviews(data))
//     }, [])
//     return (
//         <div>
//             <h2>this is review</h2>
//             <div className='product-container '>
//                 {
//                     reviews.map(product => <div>{ }</div>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default Reviews;
