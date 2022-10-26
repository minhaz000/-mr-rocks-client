import React from 'react';
import { Link } from 'react-router-dom';

function SideBar(props) {
    return (
        <div className='col-12 col-md-4 col-lg-3 '>
            
            <ul className=' d-block px-2 Course-menu'> 
                <li className=' d-block  '> 
                    <Link className=' text-decoration-none text-white  fw-bold' to="/course"> Home</Link> 
                 </li>  
                 <li className=' d-block  '> 
                    <Link className=' text-decoration-none text-white  fw-bold' to="/course"> Home</Link> 
                 </li>
               
            </ul>
        </div>
    );
}

export default SideBar;