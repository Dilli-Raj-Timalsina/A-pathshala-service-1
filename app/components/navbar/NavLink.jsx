import React from 'react';
import Link from 'next/link';
function NavLink({ href, label }) {
  return (
    <Link
      href={href}
      className="text-blue-500 hover:text-gray-900 px-2 rounded-md text-sm font-bold"
    >
      {label}
    </Link>
  );
}
export default NavLink;
