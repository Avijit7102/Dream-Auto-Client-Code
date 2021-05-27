import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import DeleteReviewsDetails from './DeleteReviewsDetails';

const DeleteReviews = () => {
    const[reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://floating-wave-39867.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data));
    },[])
    return (
        <div style={{marginLeft: '250px'}}>
            <Sidebar></Sidebar>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">

                {
                    reviews.map(reviews => <DeleteReviewsDetails reviews = {reviews}></DeleteReviewsDetails>)
                }
            </div>
            </div>
        </div>
    );
};

export default DeleteReviews;