import { useState } from 'react';
import { Link } from 'react-router-dom'; 


const Exercise2 = () => {

  return (
    <div className='p-4'>
      <div className='max-w-100 mx-auto bg-amber-800 p-4 rounded-2xl'>
        <h2 className='mb-3 text-center text-2xl font-bold'>Professional Login Page</h2>
        <label>Email:</label>
        <input
        type="text"
        placeholder="Enter your email"
        className="w-full px-4 py-3 border-2 border-amber-500 rounded-lg focus:border-amber-600 focus:ring-4 focus:ring-amber-200 focus:outline-none"
      />
        <label>Password:</label>
        <input
        type="text"
        placeholder="Enter your Password"
        className="w-full px-4 py-3 border-2 border-amber-500 rounded-lg focus:border-amber-600 focus:ring-4 focus:ring-amber-200 focus:outline-none"
      />
      <button className="mt-4 bg-amber-600 hover:bg-amber-700 hover:text-white px-4 py-2 rounded transition-all">
          Submit
        </button>
      </div> 

    {/* Navigation Links */}
        <p className="mt-8 font-bold text-lg text-gray-800">
          Click Here to Navigate to Other Exercises:
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link
            to="/"
            className="bg-amber-800 hover:bg-amber-900 active:bg-amber-950 text-white font-bold py-2 px-4 rounded"
          >
            Home
          </Link>
          <Link
            to="/exercise1"
            className="bg-amber-800 hover:bg-amber-900 active:bg-amber-950 text-white font-bold py-2 px-4 rounded"
          >
            Exercise 1
          </Link>
          <Link
            to="/exercise3"
            className="bg-amber-800 hover:bg-amber-900 active:bg-amber-950 text-white font-bold py-2 px-4 rounded"
          >
            Exercise 3
          </Link>
          <Link
            to="/exercise4"
            className="bg-amber-800 hover:bg-amber-900 active:bg-amber-950 text-white font-bold py-2 px-4 rounded"
          >
            Exercise 4
          </Link>
        </div>
      </div>
  );
};

export default Exercise2;
