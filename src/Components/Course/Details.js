import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Details(props) {
    const data = useLoaderData()
    console.log( data)
    return (
        <div className='col-12 col-md-8 col-9'>
         <div className=' my-5'>
         <h3 className='text-primary text-center'>{data.title}  </h3>
         <img src={ data.thumbnail} alt="" />
                <p><b>Des : </b> {data.description}  </p>
                <p><b>Price : </b> {data.price}  </p>
                <p><b>Status : </b> {data.enroll_status}  </p>

         </div>
        </div>
    );
}

export default Details;