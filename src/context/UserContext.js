import React, { createContext } from 'react';
import { useState } from 'react';
import {app} from '../firebase/firebase.config'
import {getAuth, GithubAuthProvider, GoogleAuthProvider,createUserWithEmailAndPassword, signInWithPopup,signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from 'firebase/auth'
import { useEffect } from 'react';
const AuthContext = createContext() 
function UserContext(props) {
// Primary  States 
    const [darkMood,setDarkMood] = useState(false)
    const [user , setUser] =useState(null)
    const [loading , setLoading] =useState(true)
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider()
// Fuction 
    const googleLogin = ()=>{ 
                return   signInWithPopup(auth , googleProvider )
    }
    const gitLogin = ()=>{ 
        return   signInWithPopup(auth, gitProvider )
    }
    const emailLogin =(user)=>{ 
 
        return  signInWithEmailAndPassword(auth,user.email , user.password)
    }
    const emailSignUp = (user)=>{
        console.log(user)
        return  createUserWithEmailAndPassword(auth,user.email, user.password)
    }    
    const Update = (user)=>{
        return updateProfile( auth.currentUser ,{displayName: user.name , photoURL:user.photo })
    }
    const logOut = ()=>{
       return signOut(auth)
    }

 useEffect( ()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser); setLoading(false)
    } )
    return ()=>  unSubscribe()

 } ,[])

const contextInfo={darkMood, user, setDarkMood  ,googleLogin ,gitLogin,emailLogin , emailSignUp , Update,logOut, loading}
    return (
        <AuthContext.Provider value={contextInfo}> 
            {props.children}
        </AuthContext.Provider>
    );
}

export default UserContext;
export {AuthContext}