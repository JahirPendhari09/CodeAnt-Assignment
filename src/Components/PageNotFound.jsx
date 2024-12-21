import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className='text-left p-10'>
      <h1 className='text-2xl'>404</h1>
      <p className='text-xl '>Oops! The page you are looking for does not exist.</p>
      <Link to="/dashboard"> <span className='text-xl text-blue-400'> Go to Dashboad</span></Link>
    </div>
  );
};

export default PageNotFound;
