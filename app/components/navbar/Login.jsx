'use client';
import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import { userContext } from '@/app/layout';
const Login = async () => {
  // const { setUser } = useContext(userContext);
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleClick = () => {
    router.push('/');
  };
  const handleGoogleLogin = async () => {
    e.preventDefault();
    try {
      router
        .push('https://a-pathshala-service-2.onrender.com/auth/google', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          if (response.status == 'success') router.push('/');
        });
    } catch (error) {
      console.error(error);
    }
  };
  const handleFacebookLogin = () => {
    e.preventDefault();
    try {
      const res = router.push(
        'https://a-pathshala-service-2.onrender.com/auth/google',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (res.ok) {
        const data = res.json();
        router.back();
      }
    } catch (error) {
      console.error(error);
    }
  };
  //  Handeling Manual Log In here
  const handleSubmit = () => {};
  const handleGoogle = () => {};

  const handleFaceBook = () => {};

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(
        'https://a-pathshala-service-2.onrender.com/api/v1/student/signup',
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
          router.back();
        });
    } catch (error) {
      console.log(error);
    }

    // Handle login form submission here
  };

  const handleSignupClick = () => {
    e.preventDefault();
    router.push('/signup');
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  // const handlePasswordChange = () => {
  //   e.preventDefault();
  //   setPassword(e.target.value);
  // };
  // const handleEmailChange = (e) => {
  //   e.preventDefault();
  //   setEmail(e.target.value);
  // };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-full sm:w-1/2 md:w-1/2 lg:w-1/3 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <button
            aria-label="Close"
            onClick={handleSignupClick}
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
          Dont have an account?{' '}
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
              className={`border border-gray-400 p-2 rounded-lg w-full ${
                password && !isPasswordValid() ? 'border-red-500' : ''
              }`}
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
              Login
            </button>
          </div>
        </form>
        <div className="flex mt-2 justify-center gap-2">
          <button
            onClick={handleGoogle}
            className="bg-red-500 hover:bg-red-700 whitespace-nowrap text-white font-bold py-2 px-4 rounded mb-4"
          >
            Log In with Google
          </button>
          <button
            onClick={handleFaceBook}
            className="bg-blue-500 hover:bg-blue-700 whitespace-nowrap text-white font-bold py-2 px-4 rounded mb-4"
          >
            Log In with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
