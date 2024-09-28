import React from 'react'
import AppContext from './AppContext';
import axios from 'axios'


const AppState = (props) => {
    const url = "http://localhost:5000/api" 
   

     // register user
     const register = async (fullname,username,password) => {
        
        try{
            const api = await axios.post(`${url}/user/register`,{fullname,username,password},{
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
        const api = await axios.post(`${url}/user/login`,{username,password},{
            headers:{
                "Content-Type":"Application/json",
            },
            withCredentials:true,
    });
    
    console.log("user login",api);
    

    if(api.data.success){

        
        localStorage.setItem('token',api.data.token);
    }
    return api.data;
   };



  return (
    <AppContext.Provider value={{register,login}}>{props.children}</AppContext.Provider>
  )
}

export default AppState