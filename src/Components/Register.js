import React ,{ useContext, useState }from 'react';
import { Link} from 'react-router-dom'
import { AuthContext } from '../context/UserContext';
import toast  from 'react-hot-toast';

function Register(props) {
    const [getUserData , setGetUserData] = 
    useState({email:"",password:"",name:"",photo:"",cpassword:"" }) 
    const {googleLogin,gitLogin,emailSignUp,Update} = useContext(AuthContext)
   
    const HandleChange = (event)=>{
        const name = event.target.name
        const value = event.target.value
     setGetUserData(pre => { return {...pre, [name]:value } } ) 
    }  
    const HandleSubmit = (e)=>{
        e.preventDefault(); 
        emailSignUp(getUserData).then(res => {
            Update(getUserData).then( ()=> toast.success(" Sing Up Successfully " ) ) 
        } )
        .catch( err=> toast.error(err.message ) )
       
       

    }

    const HandleGoogleLogin = (event)=>{
        event.preventDefault();
        googleLogin().then( res => toast.success(" Sing Up Successfully " ) )
        .catch( err=> toast.error(err.message ) )

    }
    const HandleGitLogin = (event)=>{
        event.preventDefault();
        gitLogin().then( res => toast.success(" Sing Up Successfully " ) )
        .catch( err=> toast.error(err.message ) )
    }
  return (
    <div className='container my-5 login'>
    <h2 className=' text-center text-capitalize mb-5'> Register your information </h2>
    <form className="row g-3" onSubmit={HandleSubmit}>
        <div className="col-md-12">
            <label htmlFor="inputEmail4" className="form-label">
            Email
            </label>
            <input type="email" name="email" onChange={HandleChange} className="form-control" id="inputEmail4" />
        </div>
        
        <div className="col-md-12">
            <label htmlFor="inputPassword5" className="form-label">
            Display Name
            </label>
            <input type="text" name='name' onChange={HandleChange} className="form-control" id="inputPassword5" />
        </div>
        <div className="col-md-12">
            <label htmlFor="inputPassword6" className="form-label">
            Photo Url
            </label>
            <input type="text" name="photo" onChange={HandleChange} className="form-control" id="inputPassword6" />
        </div>
        <div className="col-md-12">
            <label htmlFor="inputPassword4" className="form-label">
            Password
            </label>
            <input type="password" name='password' onChange={HandleChange} className="form-control" id="inputPassword4" />
        </div>
        <div className="col-md-12">
            <label htmlFor="inputPassword10" className="form-label">
            Confirm Password
            </label>
            <input type="password" name='cpassword' onChange={HandleChange} className="form-control" id="inputPassword10" />
        </div>
        <button className={ getUserData.password === getUserData.cpassword ? "btn btn-success  float-right mt-4 mb-2": " btn btn-dark  float-right mt-4 mb-2 disable " }
                type="submit">
             Sing Up
        </button>   
        <div className='text-capitalize text-center'> already have an account ? <Link to='/login'> Login</Link> </div>
         <button className="btn btn-info  float-right text-white" onClick={HandleGoogleLogin}
                type="submit"> <i className="fa-brands fa-google mx-3"></i>
             Continue With Google
        </button>
        <button className="btn btn-primary  float-right text-white" onClick={HandleGitLogin}
                type="submit"> <i className="fa-brands fa-github mx-3"></i>
            Continue With Github
        </button>
        

</form>



</div>
  );
}

export default Register;