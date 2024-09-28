import React from 'react'
import { useEffect,useState,useContext } from 'react'
import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
   const {register} = useContext(AppContext);
   const navigate =useNavigate();
    const [formdata, setformdata]=useState({
        fullname:"",
        username:"",
        password:""
    });

    const changeHandler=(event)=> {

        setformdata( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ) )
      
      }


      const handleSignup = async (e)=>{
           e.preventDefault() ;
           
           console.log("FormData :",formdata);
            const {fullname,username,password}=formdata
           const res=await register(fullname,username,password);

           if(res.success)
             navigate('/login');
      }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
                <form onSubmit={handleSignup}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                        <input
                            type="text"
                            name="fullname"
                            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={formdata.fullname}
                            onChange={changeHandler}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
                        <input
                            type="text"
                            name="username"
                            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={formdata.username}
                            onChange={changeHandler}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                        <input
                            type="password"
                            name="password"
                            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={formdata.password}
                            onChange={changeHandler}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Sign Up
                    </button>
                </form>
               
            </div>

            
        </div>
    )
}

export default Register