import React from 'react';
import Sidebar from '../../../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useState } from 'react';

const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const [reviewImageURL, setReviewImageURL] = useState(null);

    const onSubmit = data => {
        const reviewData = {
            name: data.name,
            imageURL: reviewImageURL,
            description: data.description
        }
        const url = `https://floating-wave-39867.herokuapp.com/addReview`;
        fetch(url, {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(reviewData)
        })
        .then(res => console.log('review added', res))
    }

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '0c727747ce6c8fbed0984778ce8881f8');
        imageData.append('image',event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
        imageData)
          .then(function (response) {
            
            setReviewImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
        
    }
    return (
        <div>
            <Sidebar></Sidebar>
            <div style={{marginLeft: '250px'}} className="makeAdmin text-center mt-5">
                <h4 style={{color:'#DAA520'}}className="border-bottom pb-2">Add Your Feedback</h4>
                <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                    <p style={{fontWeight:'bold',color:'#008080'}}>Full Name: </p>
                    <input className="w-25 border border-success rounded-pill pl-2" name ="name" placeholder="name" {...register("name")} />
                    <br/>
                    <br/>
                   
                    <p style={{fontWeight:'bold',color:'#008080'}}>description </p>
                    <input className="w-25 border border-success rounded-pill pl-2" name = "email" placeholder="description" {...register("description")} /> <br/> <br/>
                    <p  style={{fontWeight:'bold',color:'#008080'}}>Upload Image</p>

                    <input onChange={handleImageUpload} className="responsiveAddImage w-25 border border-success rounded-pill pl-2" name="imageURL" type="file"/> <br/> <br/>
                    <button className="w-25 border border-success rounded-pill pl-2 btn-brand text-white" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddReview;