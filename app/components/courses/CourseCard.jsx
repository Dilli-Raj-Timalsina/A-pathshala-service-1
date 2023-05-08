import React from 'react';
import Link from 'next/link';
import { Source_Sans_Pro } from 'next/font/google';
const ssp = Source_Sans_Pro({
  weight: ['600'],
  subsets: ['cyrillic'],
});
const CourseCard = ({ course }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-center">
          <h2
            className={
              ssp.className + ' text-xl line-clamp-1  text-gray-900 mb-4'
            }
          >
            {course.title}
          </h2>
          <div className="text-gray-700 text-sm mb-4">{course.duration}</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-gray-600 text-lg font-medium">
            {course.level}
          </div>
          <div className="text-gray-600 whitespace-nowrap line-clamp-0 text-lg font-medium">
            Rs {course.price}
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <Link
            href={'/courses/1'}
            className="inline-block whitespace-nowrap bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2 px-4 mt-4 rounded transition duration-200"
          >
            View Course
          </Link>
          <Link
            href={course.url ? course.url : '/courses'}
            className="inline-block bg-indigo-500 whitespace-nowrap hover:bg-indigo-600 text-white text-sm font-semibold py-2 px-4 mt-4 rounded transition duration-200"
          >
            Buy Now
          </Link>
        </div>
        {/* <Link
          href={course.image}
          className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold py-2 px-4 mt-4 rounded transition duration-200"
        >
          View Course
        </Link> */}
      </div>
    </div>
  );
};

export default CourseCard;

// MIGHT BE THIS

// import React from 'react';

// const CourseCard = ({ course }) => {
//   return (
//     <div>
//       <h2>{course.title}</h2>
//       <p>{course.description}</p>
//       <a href={course.url}>Enroll now</a>
//     </div>
//   );
// };

// export default CourseCard;
