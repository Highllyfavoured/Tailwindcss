import React from 'react';
import { Link } from 'react-router-dom'; 

const Exercise1 = () => {
  return(
    <div className='p-8'>
      <div className='p-3 max-w-100 mx-auto w-full bg-amber-600 rounded-2xl'>
        <img
          src="/close-up-portrait-yorkshire-dog.jpg"
          alt='laptop'
          className='w-full h-70 object-contain hover:scale-105 '
        />
        <div className='p-3 bg-amber-500 rounded-2xl'> 
        <p className='hover:text-green-600 transition-all'>Name: Cute Yorshire Dog</p>
        <p>Price: N1,000,000</p>
        <button className='bg-amber-600 p-1 rounded-2xl hover:bg-amber-700 transition-all' >Add to Cart</button>
        </div> 
      </div>
      <div>
        {/* Navigation Links */}
        <p className="mt-8 font-bold text-lg text-gray-800">
          Click Here to Navigate to Other Exercises:
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link
            to="/"
            className="bg-[#333] hover:bg-[#333]/70 active:bg-[#333]/80 text-white font-bold py-2 px-4 rounded"
          >
            Home
          </Link>
          <Link
            to="/exercise2"
            className="bg-[#333] hover:bg-[#333]/70 active:bg-[#333]/80 text-white font-bold py-2 px-4 rounded"
          >
            Exercise 2
          </Link>
          <Link
            to="/exercise3"
            className="bg-[#333] hover:bg-[#333]/70 active:bg-[#333]/80 text-white font-bold py-2 px-4 rounded"
          >
            Exercise 3
          </Link>
          <Link
            to="/exercise4"
            className="bg-[#333] hover:bg-[#333]/70 active:bg-[#333]/80 text-white font-bold py-2 px-4 rounded"
          >
            Exercise 4
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Exercise1;
