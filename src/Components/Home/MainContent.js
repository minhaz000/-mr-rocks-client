import React from 'react';
import { Link } from 'react-router-dom';

function MainContent(props) {
    return (
        <div className='container home row mt-5' >

           <div className='col-6'> 
            <img className='img-fluid hero-img' src="/img/FAQ -team.png"  alt="" />
           </div>
           <div className='col-6 text-capitalize'>
            <h3 className='hero-text '> welcome  to <span className=' text-primary'> MR Rocks</span>  </h3> 
            <p className=' mt-3'> a digital online learning platform .  This platform you will get advanced course focuses on topics like Redis for caching, worker threads and clustering, and integrating image uploads using Node and S3! Students will also learn about event loop steps and how to use AWS S3 to implement scalable uploads</p>
            <Link to="/course" className=' btn btn-danger mt-5 fw-bold float-end'> Enroll Now </Link>
             </div>

        </div>
    );
}

export default MainContent;