'use client';
import NavItems from './NavItems';
import SearchBar from './SearchBar';
import Logo from './Logo';
import CallToAction from './CallToAction';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import Profile from './Profile';
import { useRouter } from 'next/navigation';
import { userContext, cookieContext } from '@/app/layout';
// async function getUserData() {
//   const res = await fetch(
//     'https://a-pathshala-service-2.onrender.com/api/v1/student/login'
//   );
//   return res.json();
// }
export default function Navbar() {
  const { setUser } = useContext(userContext);
  // console.log(cookie);
  const router = useRouter();
  const [toggleProfile, setToggleProfile] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const currentUrl = usePathname();
  const { user } = useContext(userContext);
  const { setCookie } = useContext(cookieContext);
  useEffect(() => {
    if (user?._id) {
      setIsLoggedIn(true);
    }
  }, [user]);

  const handleProfileClick = () => {};
  const handleLogout = async () => {
    try {
      const res = await fetch(
        'https://a-pathshala-service-2.onrender.com/api/v1/student/logout'
      );
      if (res.ok) {
        setIsLoggedIn(false);
        setUser({});
        setCookie(null);
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav
      className="flex flex-col bg-white sm:flex-row justify-evenly items-center pt-4
 border-b-gray-200 border-2
    "
    >
      <Logo />
      {currentUrl != '/courses' && <SearchBar />}
      {/* <Link
        href={'/become-teacher'}
        className="text-3xl px-2 rounded-md shadow-lg whitespace-nowrap font-bold text-primary-600"
      >
        Become Teacher
      </Link> */}
      <NavItems />

      {!isLoggedIn && <CallToAction />}

      {isLoggedIn && (
        <div className="relative ">
          <button
            onClick={handleProfileClick}
            // onMouseLeave={() => setToggleProfile(false)}
            onMouseEnter={() => setToggleProfile(true)}
          >
            <Profile />
          </button>
          {toggleProfile ? (
            <div
              className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200"
              // onMouseEnter={() => setToggleProfile(true)}
              onMouseLeave={() => setToggleProfile(false)}
            >
              <button
                className="flex items-center focus:outline-none"
                // onClick={toggleDropdown}
              >
                {!user?.img ? (
                  <span className="bg-blue-400 text-lg text-white m-2 z-50 flex justify-center items-center h-10 w-10  rounded-full text-center">
                    {user.name[0]}
                  </span>
                ) : (
                  <img
                    src={'/icon.svg'}
                    width={39}
                    height={39}
                    className=" rounded-full mr-2"
                    alt="Profile"
                  />
                )}
                <span className="text-gray-700 font-medium">{user.name}</span>
              </button>
              <Link
                href="/account-profile/mycourses"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                View Profile
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                My Cart
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                Wishlist
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                Saved
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                Courses
              </Link>
              {isLoggedIn && (
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  Logout
                </button>
              )}
            </div>
          ) : (
            ''
          )}
        </div>
      )}

      {/* <div className="sm:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {/* <HiMenu size={24} /> */}
      {/* </button> */}
      {/* </div> */}
      {/* // {isMobileMenuOpen && <MobileNav />} */}
    </nav>
  );
}
