import React from 'react';
import Link from 'next/link';

const CourseCard = ({ title, description, url, price, image, level }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h2>
        <div className="text-gray-700 text-sm mb-4">{description}</div>
        <div className="flex justify-between items-center">
          <div className="text-gray-600 text-lg font-medium">{level}</div>
          <div className="text-gray-600 text-lg font-medium">{price}</div>
        </div>
        <Link href={url}>
          <a className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold py-2 px-4 mt-4 rounded transition duration-200">
            View Course
          </a>
        </Link>
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