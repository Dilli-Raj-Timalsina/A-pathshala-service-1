'use client';
import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { userContext, cookieContext } from '@/app/layout';
import BounceSpinners from '../spinners/BounceSpinners';
const Signup = () => {
  // const cookieStore = cookies();
  // const jwt = cookieStore.get('jwt');
  // console.log(jwt);
  const { setUser } = useContext(userContext);
  const { setCookie } = useContext(cookieContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };
  const handleGoogle = async () => {
    setLoading(true);
    try {
      const response = await router.push(
        'https://a-pathshala-service-2.onrender.com/auth/google',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response);
      const data = await response.json();
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      console.log('Hello');
      // setLoading(false);
    }
    // const res = await fetch(
    //   'https://a-pathshala-service-2.onrender.com/auth/google',
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   }
    // );
    // const response = await fetch(
    //   'https://a-pathshala-service-2.onrender.com/auth/google/redirect'
    // );
    // const data = await response.json();
    // console.log(data);
    // router.push('/');
  };
  const handleFaceBook = () => {
    fetch();
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const response = await fetch(
        'https://a-pathshala-service-2.onrender.com/api/v1/student/signup',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: username,
            email: email,
            password: password,
            passwordConfirm: password,
          }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        setCookie(data.token);
        console.log(data);
        const profileResponse = await fetch(
          'https://a-pathshala-service-2.onrender.com/api/v1/student/profile',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              authorization: data.token,
            },
            // credentials: 'include',
          }
        );
        console.log(profileResponse);
        if (profileResponse.ok) {
          const profileData = await profileResponse.json();
          console.log('login success' + profileData);
          setLoading(false);
          setUser(profileData);
        }
        router.back();
      } else {
        setLoading(false);
        throw new Error('Something Wend Wrong / signup failed');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const isEmailValid = () => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = () => {
    // Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex  items-center justify-center">
      <div className="bg-white w-full sm:w-1/2 md:w-1/2 lg:w-1/3 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
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
              className="border border-gray-400 rounded-lg p-2 w-full"
              id="username"
              name="username"
              type="text"
              required
              value={username}
              onChange={handleUsernameChange}
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
              className={`border border-gray-400 rounded-lg p-2 w-full ${
                email && !isEmailValid() ? 'border-red-500' : ''
              }`}
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={handleEmailChange}
            />
            {email && !isEmailValid() && (
              <p className="text-red-500 mt-1">Invalid email address</p>
            )}
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
            {password && !isPasswordValid() && (
              <span className="text-red-500 mt-1">
                Password must be at least 8 characters long and contain at least
                one uppercase letter, one lowercase letter, and one digit
              </span>
            )}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className={`bg-green-500  hover:bg-green-700 text-white font-bold py-2 px-4 rounded`}
              disabled={!isEmailValid() || !isPasswordValid() || loading}
            >
              {loading && (
                <span>
                  <BounceSpinners />
                </span>
              )}
              {!loading && <span>Sign up</span>}
            </button>
          </div>
        </form>
        <div className="flex mt-2 justify-center gap-2">
          <button
            onClick={handleGoogle}
            disabled={loading}
            className={` bg-red-500  hover:bg-red-700 whitespace-nowrap text-white font-bold py-2 px-4 rounded mb-4
          `}
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

export default Signup;
// import { useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';

// const Signup = () => {
//   const router = useRouter();
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const handleClick = (e) => {
//     router.push('/');
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//   };

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleConfirmPasswordChange = (e) => {
//     setConfirmPassword(e.target.value);
//   };

//   const isEmailValid = () => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const isPasswordValid = () => {
//     // Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit
//     const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/;
//     return passwordRegex.test(password);
//   };

//   return (
//     <div className="fixed top-0 left-0  w-screen overflow-auto bg-gray-800 bg-opacity-50 flex items-center justify-center">
//       <div className="bg-white rounded-lg   p-4">
//         <div className="flex items-center gap-2 justify-between">
//           <h2 className="text-2xl items-center flex text-center font-bold mb-4">
//             Sign Up
//           </h2>
//           <button
//             aria-label="Close"
//             onClick={handleClick}
//             className="text-gray-700 hover:text-gray-900"
//           >
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="black"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="feather feather-x-circle"
//             >
//               <circle cx="12" cy="12" r="10"></circle>
//               <line x1="15" y1="9" x2="9" y2="15"></line>
//               <line x1="9" y1="9" x2="15" y2="15"></line>
//             </svg>
//           </button>
//         </div>
//         <div className="flex gap-4">
//           <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-4">
//             Sign Up with Google
//           </button>
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
//             Sign Up with Facebook
//           </button>
//         </div>
//         <div className="text-gray-700 mb-4">
//           Already have an account?{' '}
//           <Link href="/login" className="text-green-500 hover:text-green-700">
//             Log in here
//           </Link>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 font-bold mb-2"
//               htmlFor="username"
//             >
//               Username
//             </label>
//             <input
//               className="border border-gray-400 p-2 w-full"
//               id="username"
//               name="username"
//               type="text"
//               required
//               value={username}
//               onChange={handleUsernameChange}
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 font-bold mb-2"
//               htmlFor="email"
//             >
//               Email
//             </label>
//             <input
//               className={`border border-gray-400 p-2 w-full ${
//                 email && !isEmailValid() ? 'border-red-500' : ''
//               }`}
//               id="email"
//               name="email"
//               type="email"
//               required
//               value={email}
//               onChange={handleEmailChange}
//             />
//             {email && !isEmailValid() && (
//               <p className="text-red-500 mt-1">Invalid email address</p>
//             )}
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 font-bold mb-2"
//               htmlFor="password"
//             >
//               Password
//             </label>
//             <input
//               className={`border border-gray-400 p-2 w-full ${
//                 password && !isPasswordValid() ? 'border-red-500' : ''
//               }`}
//               id="password"
//               name="password"
//               type="password"
//               value={password}
//               onChange={handlePasswordChange}
//               required
//               minLength={8}
//             />
//             {password && !isPasswordValid() && (
//               <p className="text-red-500 mt-1">
//                 Password must be at least 8 characters long and contain at least
//                 one uppercase letter, one lowercase letter, and one digit
//               </p>
//             )}
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 font-bold mb-2"
//               htmlFor="confirmPassword"
//             >
//               Confirm Password
//             </label>
//             <input
//               className={`border border-gray-400 p-2 w-full ${
//                 confirmPassword !== password ? 'border-red-500' : ''
//               }`}
//               id="confirmPassword"
//               name="confirmPassword"
//               type="password"
//               value={confirmPassword}
//               onChange={handleConfirmPasswordChange}
//               required
//               minLength={8}
//             />
//             {confirmPassword !== password && (
//               <p className="text-red-500 mt-1">Passwords do not match</p>
//             )}
//           </div>
//           <div className="flex justify-center">
//             <button
//               className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//               type="submit"
//               disabled={
//                 !isEmailValid() ||
//                 !isPasswordValid() ||
//                 confirmPassword !== password
//               }
//             >
//               Sign Up
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;
