'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
function NavLink({ href, label }) {
  const seleted =
    'text-black' +
    ' hover:text-gray-900 px-2 rounded-md text-xl shadow-sm font-bold';
  const others =
    'text-blue-500 hover:text-gray-900 px-2 rounded-md text-sm font-bold';
  const currRoute = usePathname();
  return (
    <Link href={href} className={`${currRoute === href ? seleted : others}`}>
      {label}
    </Link>
  );
}
export default NavLink;
