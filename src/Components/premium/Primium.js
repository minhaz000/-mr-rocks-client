import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Primium(props) {
  const data = useLoaderData()
  console.log( data)
  return (
    <div style={{minHeight:"80vh"}}>
     <h1 className=' my-3 text-primary text-capitalize text-center'> Checkout </h1>
      
   <div className=' m-auto border border-2 text-centerp p-5 my-5' style={{ width:"16rem"}}> 
        <div className=' text-center'> {data.title}</div>
      <div className=' mt-5'> Status : { data.enroll_status} </div>
    <div> <strong>Price : </strong> {data.price}</div>
        <button className=' btn btn-info text-white mt-3 '> Checkout</button>
   </div>

    </div>
  );
}

export default Primium;