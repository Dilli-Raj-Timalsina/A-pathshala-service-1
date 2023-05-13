'use client';
import { userContext } from '@/app/layout';
import { courseContext } from '@/app/become-teacher/create-course/page';
import dummyData from '@/app/components/data/DummyData';
// import { useState, useEffect } from 'react';
import TeacherHeader from '@/app/components/teachers/TeacherHeader';
import CourseList from '@/app/components/teachers/CourseList';
import Testimonial from '@/app/components/teachers/Testimonial';
import ContactForm from '@/app/components/teachers/ContactForm';

export async function generateMetadata({ params }) {
  const data = await dummyData.find(
    (teache) => teache.id == parseInt(params.id)
  );
  return { title: data.name };
}

const TeachersPage = ({ params }) => {
  const teacher = dummyData.find((teache) => teache.id == parseInt(params.id));
  return (
    <div className="bg-fuchsia-50">
      <TeacherHeader teacher={teacher} />
      <CourseList courses={teacher.courses} teacher={teacher.name} />
      <div className=" block p-4 font-bold text-2xl text-center">
        Hear from the Student
      </div>
      <Testimonial
        text={testimonials[0].text}
        name={'Bob Smith'}
        image={'https://randomuser.me/api/portraits/men/24.jpg'}
      />
      <ContactForm />
    </div>
  );
};

export default TeachersPage;
const testimonials = [
  {
    name: 'John Doe',
    role: 'Developer',
    image: '/images/testimonials/john-doe.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod velit vel quam fermentum, sed maximus massa congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed auctor, est vel bibendum convallis, sapien sem malesuada mi, nec blandit turpis tellus ac lacus.',
  },
  {
    name: 'Jane Doe',
    role: 'Designer',
    image: '/images/testimonials/jane-doe.jpg',
    text: 'Pellentesque ultricies justo ex, vel molestie neque tincidunt at. Nulla facilisi. Suspendisse potenti. Donec tincidunt, sem eu pellentesque tincidunt, elit est lacinia nulla, at commodo quam lectus sit amet libero. Nam nec diam ac mi commodo venenatis. Sed vel mollis libero.',
  },
  {
    name: 'Bob Smith',
    role: 'Entrepreneur',
    image: '/images/testimonials/bob-smith.jpg',
    text: 'Suspendisse euismod, eros in eleifend vulputate, sapien sapien feugiat turpis, vitae euismod sapien augue ac leo. Donec ut iaculis arcu. Sed sit amet arcu ligula. Maecenas feugiat, nulla sit amet accumsan ornare, elit nibh mollis massa, non ultrices arcu odio vitae dolor.',
  },
];
