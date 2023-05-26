import React from 'react';
import CourseCard from '../CourseCard';
import CourseTeachers from '../../courseConsume/CourseTeachers';

const UpcomingCourses = () => {
  const course = {
    id: 1,
    name: 'Introduction to Web Development',
    price: 500,
    enrolled: false,
    title: 'Introduction to Web Development',
    rating: '4.5',
    teacher: 'John Smith',
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
  };
  return (
    <div id="upcoming-courses">
      <h1 className="text-3xl ms-8 font-semibold my-2 mx-4">
        Our Upcoming Courses
      </h1>
      <div className="flex">
        <div className="flex flex-shrink-0 items-center justify-center">
          <CourseCard course={course} />
        </div>
        <CourseTeachers />
      </div>
    </div>
  );
};

export default UpcomingCourses;
