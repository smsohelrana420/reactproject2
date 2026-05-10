import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useState } from 'react'
import { auth } from '../firebase/firebase.config';

export const AuthContext= createContext(null);

const AuthProvider = ({children}) => {

  const [user,setUser]=useState(null)

    const createUserWithPass=(email,password)=>{
      return  createUserWithEmailAndPassword(auth,email,password)
    }

    const signInWithEmailPass=(email,password)=>{
      return signInWithEmailAndPassword(auth,email,password)
    }

    onAuthStateChanged(auth,(user) =>{
      if(user){
        console.log("sign In User");
        setUser(user)
        
      }else{
        console.log("User Sign Out");
        setUser(null)
        
      }
    })

    const handleSignOut=()=>{
      signOut(auth)
    }

    const authInformation = {
      user,
      handleSignOut,
      createUserWithPass,
      signInWithEmailPass,
    };
  return (
    <AuthContext.Provider value={authInformation}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider