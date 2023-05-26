import Link from 'next/link';
import React from 'react';

const Hero1 = () => {
  return (
    <div>
      <div class="relative overflow-hidden">
        <div
          aria-hidden="true"
          class="flex absolute -top-96 left-1/2 transform -translate-x-1/2"
        >
          <div class="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] "></div>
          <div class="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] "></div>
        </div>

        <div class="relative z-10">
          <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
            <div class="max-w-2xl text-center mx-auto">
              <p class="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent ">
                A+ Pathshala: A vision for 2023
              </p>

              <div class="mt-5 max-w-2xl">
                <h1 class="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl ">
                  The Intuitive Web Solutions
                </h1>
              </div>

              <div class="mt-5 max-w-3xl">
                <p class="text-lg text-gray-600 ">
                  Preline UI is an open-source set of prebuilt UI components,
                  ready-to-use examples and Figma design system based on the
                  utility-first Tailwind CSS framework.
                </p>
              </div>

              <div class="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
                <Link
                  href="#upcoming-courses"
                  class="inline-flex scroll-smooth justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 "
                >
                  Get started
                  <svg
                    class="w-3 h-3"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
