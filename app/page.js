export const metadata = {
  title: 'A+ Pathshala',
  description: 'This Platform Empowers Individual Teachers ',
  icons: {
    icon: '/icon.svg',
  },
};
import PopularCourses from './components/courses/PopularCourses/PopularCourses';
import PopularTeachers from './components/courses/PopularTeachers/PopularTeachers';
import Hero from './components/hero/HeroSection';
import React, { Suspense } from 'react';
import ProfileSpinner from './components/spinners/ProfileSpinner';
export default function Home() {
  return (
    <Suspense fallback={<ProfileSpinner />}>
      <div className="bg-content-white-gradient">
        <Hero />

        <div className="py-2 mb-4">
          <PopularTeachers />
          <PopularCourses />
        </div>
      </div>
    </Suspense>
  );
}
