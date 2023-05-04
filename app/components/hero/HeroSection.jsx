import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="p-3 mx-auto flex flex-col lg:flex-row items-center justify-between px-4 py-16 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="lg:w-1/2 mb-6 lg:mb-0 text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white">
          Empower your teaching with our edtech platform
        </h1>
        <div className="text-gray-200 text-xl lg:text-2xl mb-8">
          Transform your teaching with our state-of-the-art platform. Reach
          students worldwide with cutting-edge tools and resources that enable
          you to create exceptional learning experiences.
        </div>
        <div className="flex justify-center gap-5 items-center">
          <Link
            href="#"
            className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-lg inline-flex items-center"
          >
            <Link href={'#popular_teachers'}>Explore</Link>
          </Link>
          <Link
            href="/signup"
            className=" hover:bg-gray-200 bg-cta-blue-gradient text-white font-bold py-2 px-4 rounded-lg inline-flex items-center"
          >
            Join for Free
          </Link>
        </div>
      </div>
      <div className="lg:w-1/2">
        <Image
          src="/hero.jpg"
          alt="Hero image"
          width={800}
          height={600}
          className="rounded-lg shadow-xl"
        />
      </div>
    </div>
  );
};

export default Hero;
