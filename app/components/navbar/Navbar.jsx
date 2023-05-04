'use client';
import NavItems from './NavItems';
import SearchBar from './SearchBar';
import Logo from './Logo';
import React from 'react';
// import { useState } from 'react';
import CallToAction from './CallToAction';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentUrl = usePathname();

  return (
    <nav className="flex flex-col bg-nav-light-blue-gradient sm:flex-row justify-evenly items-center py-4">
      <Logo />
      {currentUrl != '/courses' && <SearchBar />}
      <Link
        href={'/become-teacher'}
        className="text-2xl font-extrabold text-blue-700"
      >
        Become Teacher
      </Link>
      <NavItems />
      <CallToAction />
      {/* <div className="sm:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {/* <HiMenu size={24} /> */}
      {/* </button> */}
      {/* </div> */}
      {/* // {isMobileMenuOpen && <MobileNav />} */}
    </nav>
  );
}
