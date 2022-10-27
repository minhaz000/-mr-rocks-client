import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
import toast from 'react-hot-toast';

function Login(props) {
    const [getUserData , setGetUserData] = 
    useState({email:"",password :""}) 
    const {googleLogin,gitLogin,emailLogin} = useContext(AuthContext)
   
    const HandleChange = (event)=>{
        const name = event.target.name
        const value = event.target.value
     setGetUserData(pre => { return {...pre, [name]:value } } ) 
    }  
    const HandleSubmit = (e)=>{
        e.preventDefault();
        emailLogin(getUserData).then(res => {
            toast.success(" Login Successfully " )
        })
        .catch( err=> toast.error(err.message ) )

    }

    const HandleGoogleLogin = (event)=>{
        event.preventDefault();
        googleLogin().then( res => toast.success(" Login Successfully " ) )
        .catch( err=> toast.error(err.message ) )

    }
    const HandleGitLogin = (event)=>{
        event.preventDefault();
        gitLogin().then( res =>toast.success(" Login Successfully " ) )
        .catch( err=> toast.error(err.message ) )
    }
    const notify = () => toast('Here is your toast.');
    return ( <div className="row"> 
        <div className="col-8 col-md-4 mx-3"> <img className=' img-fluid ms-5 mt-5' src="/img/Fingerprint-bro.png" alt="" /></div>
        <div className='container my-5 login'>
            <h2 className=' text-center text-capitalize mb-5'> Log in </h2>
            <form className="row g-3" onSubmit={HandleSubmit}>
                <div className="col-md-12">
                    <label htmlFor="inputEmail4" className="form-label">
                    Email
                    </label>
                    <input type="email" onChange={  HandleChange} name="email"  className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-12">
                    <label htmlFor="inputPassword4" className="form-label">
                    Password
                    </label>
                    <input type="password" onChange={HandleChange} name="password" className="form-control" id="inputPassword4" />
                </div>
                <button className="btn btn-success  float-right mt-4 mb-2"
                        type="submit">
                     Login
                </button> 
                <div className='text-capitalize text-center'>  don't have an account ? <Link to='/register'> Resgister</Link> </div>
                 <button onClick={e=>HandleGoogleLogin(e) } className="btn btn-info  float-right text-white"
                        type="submit"> <i className="fa-brands fa-google mx-3"></i>
                     Continue With Google
                </button>
                <button className="btn btn-primary  float-right text-white" onClick={e=>HandleGitLogin(e)}
                        type="submit"> <i className="fa-brands fa-github mx-3"></i>
                    Continue With Github
                </button>

               

  
</form>
        </div>
        <button onClick={notify}>Make me a toast</button>
      
        </div>
    );
}

export default Login;