import React from 'react';
import history from '../../../images/history.jpg';
import './History.css'

const History = () => {
    return (
        <div className='row extra-banner mx-3'>
            <div className='col-md-6 col-sm-12'>
                <h2>Special Offer</h2>
                <h4>Sale OFF 20% all products</h4>
                <p className='extra-text'>Our store is more than just another average online retailer. We sell not only top quality products, but give our customers a positive online shopping experience.We are offering you the unique goods because our product is the real treasure. If you are a true fan, you’ll love it. We have a tremendous variety in comparison to all of our competitors. Our collection is like a sea pearl among simple stones.</p>
            </div>
            <div className='col-md-6 col-sm-12'>
                <img className='extra-section ' src={history} alt="" />
            </div>
        </div>
    );
};

export default History;