import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
        <h1>My Tech Journey</h1>
        {/* Link to List.js */}
        <Link to={'/skills'}>
        <button variant="raised">
            Nav to Skills
        </button>
        </Link>
        <Link to={'/experiences'}>
        <button variant="raised">
            Nav to Experiences
        </button>
        </Link>
        <Link to={'/shout-outs'}>
        <button variant="raised">
            Nav to Shout Outs
        </button>
        </Link>
    </div>
  );
}

export default Home;
