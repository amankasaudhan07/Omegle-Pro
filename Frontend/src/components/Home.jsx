import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between bg-gray-100 dark:bg-gray-900 px-6 md:px-24 py-12">
      
      {/* Left Section */}
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
          Talk to strangers,
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 dark:text-gray-300 mt-4">
          Make friends!
        </h2>
        <button 
          className="mt-8 px-6 py-3 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition duration-300 ease-in-out"
          onClick={() => { navigate('/newChat') }}
        >
          Start Chatting
        </button>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2">
        <img 
          src="https://www.chitchat.gg/_astro/features-03-image-03.DvTmJlRy_1U4Q07.webp" 
          alt="Talk to strangers" 
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;
