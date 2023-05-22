'use client';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Checkout from '@/app/components/courseConsume/checkout';
import CourseHeader from '@/app/components/courseConsume/CourseHeader';
import CourseReview from '@/app/components/courseConsume/CourseReview';

function CourseDetail() {
  return (
    <div className="grid grid-cols-3 ">
      <div className="lg:ms-8 pb-8 col-span-2 px-4 sm:px-6 lg:px-8">
        <CourseHeader course={course} />
        <div className="mb-8 border rounded-sm">
          <img
            src={course.image}
            alt={course.title}
            className=" w-3/4  h-96 object-cover
          "
          />
        </div>

        <div className="flex">
          <div className="pr-4">
            <div className="my-4" id="description">
              <h3 className="text-2xl font-bold mb-4">Description</h3>
              <p>{course.description}</p>
            </div>
            <div className="my-4" id="syllabus">
              <h3 className="text-2xl font-bold mb-4">Syllabus</h3>
              <ul>
                {course.syllabus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="my-4" id="benefits">
              <h3 className="text-2xl font-bold mb-4">Benefits</h3>
              <ul>
                {course.benefits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <CourseReview course={course} />
          </div>
        </div>
      </div>
      <Checkout course={course} />
    </div>
  );
}

export default CourseDetail;
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
  reviews: [
    {
      id: 1,
      userName: 'Jane Doe',
      userAvatar: 'https://randomuser.me/api/portraits/men/7.jpg',
      date: 'May 1, 2022',
      comment:
        'This course was a great introduction to web development. The instructor was knowledgeable and provided clear explanations. I would recommend this course to anyone who is interested in learning web development.',
    },
    {
      id: 2,
      userName: 'John Smith',
      userAvatar: 'https://randomuser.me/api/portraits/men/9.jpg',
      date: 'May 5, 2022',
      comment:
        'I found this course to be very helpful in learning the basics of web development. The syllabus was well-structured and easy to follow. I particularly enjoyed the sections on React and Vue. Highly recommend!',
    },
    {
      id: 3,
      userName: 'Sarah Johnson',
      userAvatar: 'https://randomuser.me/api/portraits/women/7.jpg',
      date: 'May 10, 2022',
      comment:
        'I really enjoyed this course and learned a lot. The instructor was engaging and the content was well-organized. I appreciated the emphasis on responsive web design and the use of frameworks like React and Vue. Would definitely recommend!',
    },
  ],
  price: '$199',
  duration: '12 weeks',
  level: 'Beginner',
};
