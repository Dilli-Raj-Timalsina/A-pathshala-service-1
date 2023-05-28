'use client';
import { userContext } from '@/app/layout';
import React from 'react';
import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import UpcomingCourses from '@/app/components/courses/UpcomingCourses/UpcomingCourses';
const Page = () => {
  const { user } = useContext(userContext);
  const router = useRouter();
  if (!user?._id) {
    return <>Pease log in</>;
  }
  const handleEnroll = () => {
    router.push('account-profile/mycourses/checkout');
  };
  const courses = [
    {
      id: 1,
      name: 'Introduction to Web Development',
      price: 500,
      enrolled: false,
      title: 'Introduction to Web Development',
      rating: '4.5',
      teacher: 'Dilli Raj',
      image: '/a.png',
      description:
        'This session will be conducted by popular tech personalities from across the globe who proved their worth and showing their amazing skills. do not miss this golden opportunity which is being offered for free.Register now and mark the date as we are just 1 week away from it to happen',
      syllabus: [
        'Introduction to HTML',
        'Introduction to CSS',
        'Introduction to JavaScript',
        'Responsive Web Design',
        'React Basics',
        'Vue Basics',
      ],
      benefits: [
        'Learn the basics of web development',
        'Create responsive web pages',
        'Use popular frameworks like React and Vue',
        'Get a solid foundation for a career in web development',
      ],
    },
  ];
  return (
    <div className="flex flex-col flex-grow">
      <div className="  py-10">
        <div className="text-2xl font-bold ps-8">
          Welcome Back {user?.name}{' '}
        </div>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-xl font-semibold text-center mb-10">
            YOUR DASHBOARD
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-lg font-bold mb-4">A+ SCORE</p>
              <div className="flex items-center justify-center">
                <p className="text-4xl font-bold text-blue-500">10</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-lg font-bold mb-4">ENROLLED COURSES</p>
              <div className="flex items-center justify-center">
                <p className="text-4xl font-bold text-blue-500">0</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-lg font-bold mb-4 whitespace-nowrap">
                COURSES COMPLETED
              </p>
              <div className="flex items-center justify-center">
                <p className="text-4xl font-bold text-blue-500">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h2 className="text-2xl font-bold mb-4">COURSES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lgand shadow-lg p-6"
            >
              <h3 className="text-lg font-bold mb-2">{course.name}</h3>
              <p className="text-gray-500 mb-4">Rs {course.price}</p>
              {course.enrolled ? (
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                  disabled
                >
                  ENROLLED
                </button>
              ) : (
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                  onClick={() => handleEnroll(course.id)}
                >
                  ENROLL NOW
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
// lets make a dashboard that has 3 modern and catchy boxes with A+ Score, Enrolled Courses and Course Completed
