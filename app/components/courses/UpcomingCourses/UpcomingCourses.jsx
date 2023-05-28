import React from 'react';
import CourseCard from '../CourseCard';
import CourseTeachers from '../../courseConsume/CourseTeachers';

const UpcomingCourses = () => {
  const course = {
    title:
      'Mastering Computer Science and Technology: From Fundamentals to Industry Insights',
    rating: '',
    teachers: [
      'Dilli Raj Timalsina',
      'Prince Singh',
      'Ayushman Khan',
      'Bishworaj Poudel',
      'Jiwan Bhattrai',
      'Nishant Phuyal',
      'Whole A+ Team',
    ],
    image: '/a.png',
    description:
      'Join this comprehensive computer science and technology course to gain mastery from the fundamentals to industry insights. Discover the diverse domains of computer science, theory and foundational subjects, programming language selection, company creation and operation, startup strategies, software development, competitive programming, JavaScript essentials, open-source contribution, hiring processes, global opportunities, freelancing, cybersecurity, and much more. Learn from experienced instructors and industry professionals, and unleash your potential in the world of computer science and technology.',

    benefits: [
      'Gain mastery in computer science and technology',
      'Explore diverse domains and career opportunities',
      'Master theory and foundational subjects',
      'Choose the ideal programming language for your journey',
      'Understand the ins and outs of company creation and operation',
      'Navigate the startup landscape with confidence',
      'Master software development and contribute to real projects',
      'Unlock your coding skills with competitive programming',
      'Excel in JavaScript and backend development',
      'Contribute to open-source projects and enhance your portfolio',
      'Ace the hiring processes and salary negotiations',
      'Unlock global opportunities and internships',
      'Flourish as a freelancer and contract-based professional',
      'Enhance your knowledge in networking and cybersecurity',
      "Get insights into Nepal's software industry and opportunities",
      'Learn from industry professionals and their success stories',
      "Shape your career with A+ Pathshala's career-shaping opportunities",
      'And much more!',
    ],

    price: ' 800',
    duration: '15 Days',
    level: 'Beginner',
  };

  return (
    <div id="upcoming-courses">
      <h1 className="text-3xl ms-8 font-semibold my-2 mx-4">
        Our Upcoming Courses
      </h1>
      <div className="shadow-md border">
        <div className="flex  items-center justify-center">
          <CourseCard course={course} />
        </div>
        <CourseTeachers />
      </div>
    </div>
  );
};

export default UpcomingCourses;
