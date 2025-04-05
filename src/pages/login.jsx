// src/components/Login.jsx
import React from 'react';

const Login = ({ onClose, onLogin }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>
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
        <button 
          onClick={onLogin} 
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
        >
          Login
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

export default Login;