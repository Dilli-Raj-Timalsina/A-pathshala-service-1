'use client';
import Link from 'next/link';
import { React, useState } from 'react';
import { useRouter } from 'next/navigation';
const Signup = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSignUpVisible, setIsSignUpVisible] = useState(true);

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      setIsSignUpVisible(false);
    }
  };
  const router = useRouter();
  const handleClick = (e) => {
    router.push('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/');
    // Handle form submission here
  };

  return (
    <div className="fixed top-0 left-0  w-screen overflow-auto bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg   p-4">
        <div className="flex items-center gap-2 justify-between">
          <h2 className="text-2xl items-center flex text-center font-bold mb-4">
            Sign Up
          </h2>
          <button
            aria-label="Close"
            onClick={handleClick}
            className="text-gray-700 hover:text-gray-900"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-x-circle"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
          </button>
        </div>
        <div className="flex gap-4">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-4">
            Sign Up with Google
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
            Sign Up with Facebook
          </button>
        </div>
        <div className="text-gray-700 mb-4">
          Already have an account?{' '}
          <Link href="/login" className="text-green-500 hover:text-green-700">
            Log in here
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              id="username"
              name="username"
              type="text"
              required
            />
          </div>
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
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="border border-gray-400 p-2 w-full"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
              disabled={!password || password !== confirmPassword}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
