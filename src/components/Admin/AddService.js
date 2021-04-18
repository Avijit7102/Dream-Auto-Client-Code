import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useState } from 'react';
const AddService = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const serviceData = {
            name: data.name,
            imageURL: imageURL,
            description: data.description,
            price: data.price
        }
        //console.log('service Data:',serviceData);

        const url = `https://floating-wave-39867.herokuapp.com/addService`;
        fetch(url, {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(serviceData)
        })
        .then(res => console.log('server side res', res))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '0c727747ce6c8fbed0984778ce8881f8');
        imageData.append('image',event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
        imageData)
          .then(function (response) {
            
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
        
    }
    return (
        <div>
            <Sidebar></Sidebar>
            <div style={{ marginLeft: '250px'}} className="addService text-center mt-5">
                <h4 style={{color:'#003399', fontWeight:'bold', borderBottom:'1px solid black'}}>Add More Service</h4>
                <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                    <p style={{fontWeight:'bold',color:'#008080'}}>Service Name: </p>
                    <input className="w-25 border border-success rounded-pill pl-2" name ="name" placeholder="name" {...register("name")} />
                    <br/>
                    <br/>
                    <p style={{fontWeight:'bold',color:'#008080'}}>Price: </p>
                    <input className="w-25 border border-success rounded-pill pl-2" name = "price" placeholder="price" {...register("price")} /> <br/> <br/>
                    <p style={{fontWeight:'bold',color:'#008080'}}>Description: </p>
                    <input className="w-25 border border-success rounded-pill pl-2" name="description" placeholder="description"{...register("description")} /> <br/> <br/>

                    <p  style={{fontWeight:'bold',color:'#008080'}}>Upload Image</p>

                    <input onChange={handleImageUpload} className="responsiveAddImage w-25 border border-success rounded-pill pl-2" name="imageURL" type="file"/> <br/> <br/>
                    <button className="w-25 border border-success rounded-pill pl-2 btn-brand text-white" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddService;