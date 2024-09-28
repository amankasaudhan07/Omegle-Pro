import React from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {
 const navigate = useNavigate();

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen bg-gray-100 px-6 md:px-24 py-12">
      
      {/* Left Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-800 md:text-6xl">
          Talk to strangers,
        </h1>
        <h2 className="text-2xl font-semibold text-gray-600 mt-2 md:text-4xl">
          Make friends!
        </h2>
        <button className="mt-8 px-6 py-3 text-lg bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg"
         onClick={()=>{navigate('/newChat')}}>
          Start Chatting
        </button>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img 
          src="https://source.unsplash.com/random/800x600" 
          alt="Talk to strangers" 
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

    </div>
  );
};

export default Home;
