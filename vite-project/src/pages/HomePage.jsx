import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/editor">
        <button>Create a Presentation</button>
      </Link>
    </div>
  );
};

export default HomePage;
