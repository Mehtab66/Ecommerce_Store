// src/components/Signup.jsx
import React from 'react';

const Signup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Signup</h2>
        <input 
          type="text" 
          placeholder="Full Name" 
          className="w-full p-2 mb-4 border rounded-lg" 
        />
        <input 
          type="email" 
          placeholder="Email" 
          className="w-full p-2 mb-4 border rounded-lg" 
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="w-full p-2 mb-4 border rounded-lg" 
        />
        <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
          Signup
        </button>
        <button 
          onClick={onClose} 
          className="mt-4 text-gray-600 hover:underline"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Signup;