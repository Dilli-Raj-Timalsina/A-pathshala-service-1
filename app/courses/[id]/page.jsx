import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBookmark } from '@fortawesome/free-solid-svg-icons'
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
// import Image from 'next/image'

const dummyCourse = {
  title: 'Learn Next.js with Tailwind CSS',
  subtitle: 'Build modern, performant web applications',
  requirements: [
    'Basic knowledge of JavaScript and React',
    'Good understanding of HTML and CSS',
  ],
  description:
    'This course will teach you how to build web applications using Next.js and Tailwind CSS. You will learn the fundamentals of both technologies and create a stunning, responsive, and performant project.',
  price: 99,
  discount: 20,
  language: 'English',
  thumbnail: 'https://randomuser.me/api/portraits/women/17.jpg',
};

const CoursePage = ({ params }) => {
  const course = dummyCourse;
  const discountedPrice = course.price - (course.price * course.discount) / 100;

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8 grid md:grid-cols-2 gap-10">
        <div className="bg-white shadow-lg rounded-lg overflow-clip">
          <div className="">
            <img
              src={'/learn.jpg'}
              alt={course.title}
              layout="fill"
              objectFit="cover"
              className="w-full"
            />
          </div>
          <div className="p-6 pt-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {course.title}
            </h2>
            <p className="text-gray-500 text-lg mb-4">{course.subtitle}</p>
            <hr className="my-4" />
            <p className="text-gray-700 leading-relaxed mb-6">
              {course.description}
            </p>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <span className="text-gray-600 font-semibold">Price:</span>
                <span className="text-gray-800 font-semibold ml-2">
                  <del className="text-gray-500">
                    ${course.price.toFixed(2)}
                  </del>{' '}
                  ${discountedPrice.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-semibold">Language:</span>
                <span className="text-gray-800 font-semibold ml-2">
                  {course.language}
                </span>
              </div>
            </div>
            <div className="mb-4">
              <span className="text-gray-600 font-semibold">Requirements:</span>
              <ul className="list-disc pl-6 mt-2">{course.requirements}</ul>
            </div>
            <div className="flex justify-between items-center">
              <button className="bg-blue-600 text-white px-6 py-2 rounded font-semibold flex items-center justify-center gap-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                {/* <FontAwesomeIcon icon={faShoppingCart} /> */}
                Buy Course
              </button>
              <button className="bg-gray-200 text-gray-800 px-4 py-2 ml-4 rounded font-semibold flex items-center justify-center gap-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                {/* <FontAwesomeIcon icon={faBookmark} /> */}
                Bookmark
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="h-64 bg-gray-500"></div>
          <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Course Curriculum
            </h2>
            <hr className="my-4" />
            <p className="text-gray-700 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              orci sit amet felis fermentum pellentesque. Sed malesuada urna eu
              sapien fringilla, in bibendum nibh hendrerit. Praesent euismod
              risus et purus hendrerit, sed tristique purus tincidunt. Sed
              consequat sapien quis eros feugiat, nec iaculis purus ultrices.
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li className="text-gray-700 leading-relaxed">
                Introduction to Next.js
              </li>
              <li className="text-gray-700 leading-relaxed">
                Styling with Tailwind CSS
              </li>
              <li className="text-gray-700 leading-relaxed">
                Building a responsive layout
              </li>
              <li className="text-gray-700 leading-relaxed">
                Optimizing for performance
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
