import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ReviewsDetails from './ReviewsDetails';


const Reviews = () => {
    const [reviewsData, setReviewsData] = useState([])
    useEffect(() => {
        fetch('https://floating-wave-39867.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviewsData(data))
    }, [])
    return (
        <div>
            <div>
                <h4 style={{color:'#003399'}} className="text-center mt-5">Our Reviews</h4>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row pt-5">
                    {
                        reviewsData.map(review => <ReviewsDetails review={review}></ReviewsDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;