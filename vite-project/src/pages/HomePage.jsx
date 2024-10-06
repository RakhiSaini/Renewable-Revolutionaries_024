import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Presentation Creator</h1>
      <Link to="/editor">
        <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300 ease-in-out">
          Create a Presentation
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
