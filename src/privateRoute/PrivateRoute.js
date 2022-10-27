import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

function PrivateRoute({children}) {
  const {user, loading} = useContext(AuthContext)
  const location = useLocation();
  if(loading===true){ return <div style={{minHeight:"80vh"}}> 
  <div class="spinner" > </div> </div>}
  if(user) {return children}
  else{return <Navigate to="/login" state={{ from : location  }}  replace  />}
}

export default PrivateRoute;