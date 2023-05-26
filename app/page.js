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
import UpcomingCourses from './components/courses/UpcomingCourses/UpcomingCourses';
import FeatureList from './components/courses/UpcomingCourses/FeaturedList';
import Hero1 from './components/hero/Hero1';
export default function Home() {
  return (
    <Suspense fallback={<ProfileSpinner />}>
      <div className="">
        <Hero1 />

        <div className="py-2 mb-4 md:mx-12 lg:mx-24">
          {/* <PopularTeachers /> */}
          {/* <PopularCourses /> */}

          <UpcomingCourses />
          <FeatureList />
        </div>
      </div>
    </Suspense>
  );
}
