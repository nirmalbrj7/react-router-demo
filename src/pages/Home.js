import React, { useEffect } from 'react';

const Home = ({ visits, setVisits }) => {
  useEffect(() => {
    setVisits(prev => prev + 1);
  }, [setVisits]);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page.</p>
      <p>Home page visited {visits} times.</p>
    </div>
  );
};

export default Home;
