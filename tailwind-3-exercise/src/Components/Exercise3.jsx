import React, { useState } from "react";
import { Link } from "react-router-dom";

const Exercise3 = () => {
  return (
    <div className="p-4">
      <div className="max-w-120 mx-auto p-6">
        <h1 className="text-2xl font-bold text-center bg-amber-500 p-4 m-2 rounded-2xl">
          Stats Dashboard
        </h1>
        <div className="grid grid-cols-2 w-full gap-2 h-64">
          <div className="bg-red-600 text-center font-bold text-50 rounded-lg hover:scale-110 hover:bg-red-700 ">
            <h2>Total Sales:</h2> ₦2.5M (+12% ↑)
          </div>
          <div className=" text-center  bg-orange-600 font-bold rounded-lg hover:scale-110 hover:bg-orange-700">
            Orders: 1,234 (+8% ↑)
          </div>
          <div className=" text-center  bg-amber-600 font-bold rounded-lg hover:scale-110 hover:bg-amber-700">
            Customers: 567 (+23% ↑)
          </div>
          <div className=" text-center bg-yellow-600 font-bold rounded-lg hover:scale-110 hover:bg-yellow-700">
            Revenue: ₦4.2M (+15% ↑)
          </div>
        </div>
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
          to="/exercise2"
          className="bg-amber-800 hover:bg-amber-900 active:bg-amber-950 text-white font-bold py-2 px-4 rounded"
        >
          Exercise 2
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

export default Exercise3;
