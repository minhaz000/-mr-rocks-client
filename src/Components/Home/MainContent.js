import React from 'react';
import { Link } from 'react-router-dom';

function MainContent(props) {
    return (
        <div className='container home row mt-5' >

           <div className='col-6'> 
            <img className='img-fluid hero-img' src="/img/FAQ -team.png"  alt="" />
           </div>
           <div className='col-6'>
            <h3 className='hero-text'> Welcome to our Cours soft werwe</h3> 
            <p className=' mt-3'> this is the  </p>
            <Link to="/course" className=' btn btn-danger mt-5 fw-bold float-end'> Start Cursse </Link>
             </div>

        </div>
    );
}

export default MainContent;