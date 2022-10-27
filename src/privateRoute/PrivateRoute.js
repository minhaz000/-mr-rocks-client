import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

function PrivateRoute(props) {
  const {user} = useContext(AuthContext)
  if(user) {
  return (
    <div>
      {props.children}
    </div>
  )}
  else{
   return <Navigate to="/login"  />
  }
}

export default PrivateRoute;