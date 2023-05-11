'use client';
import React, { useContext } from 'react';
import Link from 'next/link';
import { userContext } from '@/app/layout';
import { useRouter } from 'next/navigation';
const CreateCourse = () => {
  const router = useRouter();
  const { user } = useContext(userContext);
  const handleCreateCourse = (e) => {
    e.preventDefault();
    if (!user._id) {
      router.push('/login');
    } else {
      router.push('become-teacher/create-course');
    }
  };
  // href="become-teacher/create-course"

  return (
    <div className="container bg-white rounded-lg pt-4 mx-auto w-full text-center shadow-md text-3xl font-bold">
      Create A Course And Reach Out Nationwide
      <div className="m-4 mb-0 flex justify-center gap-3 pb-2">
        <button
          onClick={handleCreateCourse}
          className=" hover:bg-gray-200 bg-cta-blue-gradient text-white font-bold py-2 px-4 rounded-lg inline-flex items-center"
        >
          Create Course
        </button>
        <Link
          href="become-teacher/#howthisworks"
          className=" hover:bg-gray-200 bg-cta-green-gradient text-white  text-sm p-2 rounded-lg inline-flex items-center"
        >
          How This Works ?
        </Link>
      </div>
    </div>
  );
};

export default CreateCourse;
