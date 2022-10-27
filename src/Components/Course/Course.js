import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

function Course(props) {
    const data = useLoaderData( )
   
    return (
        <div className='col-12 col-md-8 col-lg-9'>
            <div className='row mx-2 mt-5 gx-5 p-2 '>
            { data ? data.data.map( course => { return (
                <div key={course.id} class="card border border-1  col-12 g-3" >
                    <div className='row my-3 mx-2 '> 
                        <div className=' col-6 my-2'> 
                        <img src={course.thumbnail} class=" img-fluid " alt="..."/>
                        </div>
                    
                    <div class="card-body col-6">
                        <h5 class="card-title">{course.title}</h5>
                        <p class="card-text">{ course.short_des} </p>
                        <Link to={`/course/${course.id}`} class="btn btn-primary text-white float-end"> View details</Link>
                    </div>
                    </div>
                </div>
            )} ) : null }
            
            
                 
            </div>
        </div>
    );
}

export default Course;