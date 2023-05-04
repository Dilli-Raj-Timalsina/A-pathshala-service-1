'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Signup from './Signup';
// import { FaTimes } from 'react-icons/fa';
// import Signup from './Signup';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignup, setShowSignup] = useState(false);
  const handleClick = () => {
    router.push('/');
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login form submission here
  };

  const handleSignupClick = () => {
    router.push('/signup');
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8">
        <div className="flex justify-end">
          <button
            aria-label="Close"
            className="text-gray-700 hover:text-gray-900"
            onClick={() => console.log('Close Login Modal')}
          >
            <button onClick={handleClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-x-circle"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
              </svg>
            </button>
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-4">Log In</h2>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-4">
          Log In with Google
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
          Log In with Facebook
        </button>
        <p className="text-gray-700 mb-4">
          Don't have an account?{' '}
          <button
            className="text-green-500 hover:text-green-700"
            onClick={handleSignupClick}
          >
            Sign Up here
          </button>
        </p>
        <form onSubmit={handleLoginSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
              disabled={!email || !password}
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
