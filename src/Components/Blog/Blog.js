import React from 'react';

function Blog(props) {
    return (
        <div className='row'>
            <div className='col-12 col-md-6 col-lg-8'> 
                <h3>Question  </h3>
                <p> koi </p>
                <h3>Question  </h3>
                <p> koi </p>
            </div>
            <div className='col-12 col-md-6 col-lg-4 '> 
                <div className="mx-2"><img className=' img-fluid me-2' src="/img/Learning-pana.png" alt="" /></div>
            </div>
            <div className='col-12'>
            <h3>Question  </h3>
                <p> koi </p>  
             <h3>Question  </h3>
                <p> koi </p>
            </div>


        </div>
    );
}

export default Blog;