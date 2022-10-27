import React from 'react';
import { Link } from 'react-router-dom';

function Err404(props) {
  return (
    <div>  
      <div className='err404'>
        <span className=' d-block'>
        <Link  to='/'> Go to Home </Link> 
        <img src="/img/404.png" alt="" style={{ Width:"50vw " }} />
        </span> 
      </div>
       
    </div>
  );
}

export default Err404;