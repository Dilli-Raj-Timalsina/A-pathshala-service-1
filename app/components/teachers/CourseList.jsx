'use client';
import React from 'react';
import CourseCard from '../courses/CourseCard';

const CourseList = ({ courses, teacher, gridColumns }) => {
  // console.log(courses);
  return (
    <>
      {teacher && (
        <h2 className="font-bold text-3xl m-10 text-gray-700 ">
          Popular Courses by {teacher}
        </h2>
      )}
      <div
        className={`grid p-2 gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-${
          gridColumns ? gridColumns : 5
        } xl:grid-cols-4 `}
      >
        {courses?.slice(0, 8).map((course, key) => (
          <CourseCard key={key} course={course} />
        ))}
      </div>
    </>
  );
};

export default CourseList;
