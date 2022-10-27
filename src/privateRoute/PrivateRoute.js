import React from 'react';

function PrivateRoute(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}

export default PrivateRoute;