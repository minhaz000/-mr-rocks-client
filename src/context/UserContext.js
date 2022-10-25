import React, { createContext } from 'react';

const AuthContext = createContext() 
function UserContext(props) {


const contextInfo={ name:" me" }
    return (
        <AuthContext.Provider value={contextInfo}> 
            {props.children}
        </AuthContext.Provider>
    );
}

export default UserContext;
export {AuthContext}