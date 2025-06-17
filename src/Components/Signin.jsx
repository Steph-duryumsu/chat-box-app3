// import React from 'react';
// import './App.css';
// import { Link } from 'react-router-dom';


const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Slanted Image Panel */}
      <div className="absolute top-0 left-0 h-full w-2/5 transform -skew-x-6 overflow-hidden">
        <img
          src={aiImage}
          alt="Decorative"
          className="h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-black opacity-30" />
      </div>

      {/* Glass Form */}
      <div className="relative z-10 w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-10 flex flex-col gap-6">
        <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
        <p className="text-sm text-gray-300">Sign in to your account</p>

        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-md bg-white/20 placeholder-white text-white focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-md bg-white/20 placeholder-white text-white focus:outline-none"
          />
          <button className="bg-white text-black font-semibold py-2 rounded-lg hover:bg-gray-200 transition">
            Sign In
          </button>
        </form>

        <p className="text-sm text-gray-400 text-center">
          Don't have an account? <a href="#" className="underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default App;
