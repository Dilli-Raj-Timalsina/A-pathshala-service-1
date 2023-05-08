'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import BounceSpinners from '../spinners/BounceSpinners';
const Login2 = () => {
  const [email, setEmail] = useState('');
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    console.log(email, password);
    try {
      await fetch(
        'https://a-pathshala-service-2.onrender.com/api/v1/student/login',
        {
          method: 'POST',
          body: JSON.stringify({
            email,
            password,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          // setUser(data);
          console.log(data);
          setLoading(false);
          router.back();
        });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    // router.back();
    // TODO: Handle login with email and password
  };

  const handleCloseClick = () => {
    router.back();
    // TODO: Handle sign up click
  };

  const handleGoogle = async () => {
    // try {
    //   const { code } = await router.push(
    //     'https://accounts.google.com/o/oauth2/v2/auth?' +
    //       new URLSearchParams({
    //         client_id: process.env.GOOGLE_CLIENT_ID,
    //         redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL}/auth/google/redirect`,
    //         response_type: 'code',
    //         scope: 'email profile openid',
    //       })
    //   );
    //   const response = await fetch('/api/auth/google', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ code }),
    //   });
    //   const data = await response.json();
    //   console.log(data);
    //   // TODO: Handle successful login
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const handleFacebook = async () => {
    // try {
    //   const { authResponse } = await new Promise(window.FB.login);
    //   const response = await fetch('/api/auth/facebook', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ accessToken: authResponse.accessToken }),
    //   });
    //   const data = await response.json();
    //   console.log(data);
    //   // TODO: Handle successful login
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white  min-w-fit sm:w-1/2 md:w-1/2 lg:w-1/3 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <button
            aria-label="Close"
            onClick={handleCloseClick}
            className="text-gray-700 hover:text-gray-900"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-x-circle"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
          </button>
        </div>
        <div className="text-gray-700 mb-4">
          Don't have an account?{' '}
          <Link href="/signup" className="text-green-500 hover:text-green-700">
            Sign Up here
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={`border border-gray-400 rounded-lg p-2 w-full `}
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={handleEmailChange}
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
              className={`border border-gray-400 p-2 rounded-lg w-full`}
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              {loading && (
                <span>
                  <BounceSpinners />
                </span>
              )}
              {!loading && <span>Log In</span>}
            </button>
          </div>
        </form>
        <div className="flex mt-2 justify-center sm:gap-1 gap-2">
          <button
            onClick={handleGoogle}
            className="bg-red-500 hover:bg-red-700 md:text-sm whitespace-nowrap text-white font-bold py-2 px-4 rounded mb-4"
          >
            Log In with Google
          </button>
          <button
            onClick={handleFacebook}
            className="bg-blue-500 hover:bg-blue-700 whitespace-nowrap text-white font-bold py-2 px-4 rounded mb-4"
          >
            Log In with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login2;
