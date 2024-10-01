import React from 'react'



const About = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 py-12 h-screen">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          About Our Chat Platform
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXX_WN-5ur-MBoGOFxVprs5dpltBVMgeR3-g&s"
              alt="Chat Illustration"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg md:text-xl lg:text-2xl mb-6 leading-relaxed">
              Our platform connects people around the world, allowing you to chat
              with strangers instantly and anonymously. With a single click, you can
              start conversations with new people, explore different cultures, and
              have fun!
            </p>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 leading-relaxed">
              Whether you're looking for a friendly chat, someone to share your
              thoughts with, or just want to meet new faces, our chat platform offers
              a seamless and user-friendly experience.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 leading-relaxed">
              Stay safe and enjoy meaningful conversations. Connect. Chat. Explore.
            </p>
            <a
              href="/newChat"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
            >
              Start Chatting Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
    
