import React, { useState, useContext } from 'react';
import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const { register } = useContext(AppContext);
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    fullname: '',
    username: '',
    password: '',
  });

  const changeHandler = (event) => {
    setFormdata((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log('FormData:', formdata);
    const { fullname, username, password } = formdata;
    const res = await register(fullname, username, password);

    if (res.success) navigate('/login');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Sign Up
        </h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
              Name:
            </label>
            <input
              type="text"
              name="fullname"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-black dark:text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={formdata.fullname}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
              Username:
            </label>
            <input
              type="text"
              name="username"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-black dark:text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={formdata.username}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
              Password:
            </label>
            <input
              type="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg ttext-black dark:text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={formdata.password}
              onChange={changeHandler}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
