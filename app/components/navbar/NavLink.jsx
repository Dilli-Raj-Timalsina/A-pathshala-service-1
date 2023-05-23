'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavLink({ href, label }) {
  const selected = 'text-blue-500';
  const others = 'hover:text-gray-900 px-2 rounded-md text-sm font-bold';

  const currRoute = usePathname();

  return (
    <>
      <div className="relative">
        <Link
          href={href}
          className={` ${
            currRoute === href ? selected : others
          } hover:border-b-4 pb-1 hover:text-blue-500 hover:rounded-sm hover:border-blue-500`}
        >
          {label}
        </Link>
        {currRoute == href && (
          <div className="absolute inset-x-0 -bottom-1 h-1 mt-2 pb-1 rounded-sm bg-blue-500"></div>
        )}
      </div>
    </>
  );
}

export default NavLink;
