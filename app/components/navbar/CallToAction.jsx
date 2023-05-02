import React from 'react';
import Login from './Login';

import Link from 'next/link';
const CallToAction = () => {
  return (
    <div className="flex gap-2">
      <Link
        href={'/signup'}
        className="rounded-xl whitespace-nowrap my-0 py-1 px-2 text-white bg-cta-green-gradient"
      >
        Sign Up
      </Link>
      <Link
        href={'/login'}
        className="rounded-xl whitespace-nowrap my-0 py-1 px-2 text-white bg-cta-green-gradient"
      >
        Login
      </Link>
    </div>
  );
};

export default CallToAction;
