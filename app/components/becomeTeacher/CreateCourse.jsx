import React from 'react';
import Link from 'next/link';
const CreateCourse = () => {
  return (
    <div className="container bg-white rounded-lg pt-4 mx-auto w-full text-center shadow-md text-3xl font-bold">
      Create A Course And Reach Out Nationwide
      <div className="m-4 mb-0 pb-2">
        <Link
          href="become-teacher/create-course"
          className=" hover:bg-gray-200 bg-cta-blue-gradient text-white font-bold py-2 px-4 rounded-lg inline-flex items-center"
        >
          Create Course
        </Link>
      </div>
    </div>
  );
};

export default CreateCourse;
