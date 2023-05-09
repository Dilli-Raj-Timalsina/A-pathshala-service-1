import PopularCourses from './components/courses/PopularCourses/PopularCourses';
import PopularTeachers from './components/courses/PopularTeachers/PopularTeachers';
import Hero from './components/hero/HeroSection';
import React from 'react';
export default function Home() {
  return (
    <div className="bg-content-white-gradient">
      <Hero />

      <div className="py-2 mb-4">
        <PopularTeachers />
        <PopularCourses />
      </div>
    </div>
  );
}
