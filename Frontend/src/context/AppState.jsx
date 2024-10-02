import React, { useEffect, useState } from 'react'
import AppContext from './AppContext';
import axios from 'axios'


const AppState = (props) => {
    // const url = "http://localhost:5000/api" 
    const url = "https://omegle-pro.onrender.com" 
   
     const [authenticated,setauthenticated]=useState(false);
     const [token,setToken]=useState('');
     useEffect(()=>{
        const temp =localStorage.getItem('token')
        if(temp)setauthenticated(true);
        setToken(temp);
     },[token])

     // register user
     const register = async (fullname,username,password) => {
        
        try{
            const api = await axios.post(`${url}/api/user/register`,{fullname,username,password},{
                headers:{
                    "Content-Type":"Application/json",
                },
                withCredentials:true,
        });
        
        console.log("user register",api);
        return api.data;
        }catch(err){
            console.log(err)
        }
   };

    // login user
    const login = async (username,password) => {
        const api = await axios.post(`${url}/api/user/login`,{username,password},{
            headers:{
                "Content-Type":"Application/json",
            },
            withCredentials:true,
    });
    
    console.log("user login",api);
    if(api.data.success){
        localStorage.setItem('token',api.data.token);
        setauthenticated(true);
    }
    return api.data;
   };  

    //logout
    const logout = async ()=>{
        const api = await axios.get(`${url}/api/user/logout`,{
            headers:{
                "Content-Type":"Application/json",
            },
            withCredentials:true,
    });
      if(api.data.success){
          setauthenticated(false);
          localStorage.removeItem('token');
         console.log(api.data.message);
      }
  
     }



  return (
    <AppContext.Provider value={{register,login,logout,authenticated}}>{props.children}</AppContext.Provider>
  )
}

export default AppState