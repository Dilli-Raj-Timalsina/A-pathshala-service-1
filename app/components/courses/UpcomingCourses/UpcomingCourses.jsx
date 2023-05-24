import React from 'react';
import CourseCard from '../CourseCard';

const UpcomingCourses = () => {
  const course = {
    title: 'Introduction to Web Development',
    rating: '4.5',
    teacher: 'John Smith',
    image: '/a.png',
    description:
      'In this course, you will learn the basics of web development, including HTML, CSS, and JavaScript. You will also learn how to create responsive web pages and how to use popular frameworks like React and Vue.',
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
    <div>
      <h1 className="text-2xl font-semibold my-2 mx-4">Our Upcoming Courses</h1>
      <div className="grid ms-8 md:grid-cols-3 gap-3 mx-6 lg:grid-cols-4">
        <CourseCard course={course} />
      </div>
    </div>
  );
};

export default UpcomingCourses;
