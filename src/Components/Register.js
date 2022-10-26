import React from 'react';
import { Link} from 'react-router-dom'
function Register(props) {
  return (
    <div className='container my-5 login'>
    <h2 className=' text-center text-capitalize mb-5'> Register your information </h2>
    <form className="row g-3">
        <div className="col-md-12">
            <label htmlFor="inputEmail4" className="form-label">
            Email
            </label>
            <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-12">
            <label htmlFor="inputPassword4" className="form-label">
            Password
            </label>
            <input type="password" className="form-control" id="inputPassword4" />
        </div>
        <div className="col-md-12">
            <label htmlFor="inputPassword4" className="form-label">
            Display Name
            </label>
            <input type="text" className="form-control" id="inputPassword4" />
        </div>
        <div className="col-md-12">
            <label htmlFor="inputPassword4" className="form-label">
            Photo Url
            </label>
            <input type="text" className="form-control" id="inputPassword4" />
        </div>
        <button class="btn btn-success  float-right mt-4 mb-2"
                type="submit">
             Sing Up
        </button>   
        <div className='text-capitalize text-center'> already have an account ? <Link to='/login'> Login</Link> </div>
         <button class="btn btn-info  float-right text-white"
                type="submit"> <i class="fa-brands fa-google mx-3"></i>
             Continue With Google
        </button>
        <button class="btn btn-primary  float-right text-white"
                type="submit"> <i class="fa-brands fa-github mx-3"></i>
            Continue With Github
        </button>
       

</form>
</div>
  );
}

export default Register;