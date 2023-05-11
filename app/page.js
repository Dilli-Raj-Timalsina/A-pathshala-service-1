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
// import MultiFile from './components/sections/MultiFile';
import UploadFile from './components/sections/MultiFile';
import FileUploadSingle from './components/sections/MultiFile';
import VideoUploadForm from './components/sections/MultiFile';
export default function Home() {
  return (
    <Suspense fallback={<ProfileSpinner />}>
      <div className="bg-content-white-gradient">
        <VideoUploadForm />
        <Hero />

        <div className="py-2 mb-4">
          <PopularTeachers />
          <PopularCourses />
        </div>
      </div>
    </Suspense>
  );
}
