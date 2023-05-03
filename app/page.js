import PopularCourses from './components/courses/PopularCourses/PopularCourses';
import PopularTeachers from './components/courses/PopularTeachers/PopularTeachers';
import Hero from './components/hero/HeroSection';
// import { Suspense } from 'react';
export default function Home() {
  return (
    <div className="bg-content-white-gradient">
      {/* <Suspense fallback={<p>Loading feed....</p>}> */}
      <Hero />
      {/* </Suspense> */}

      <div className="my-4">
        {/* <Suspense fallback={<p>Loading data....</p>}> */}
        <PopularTeachers />
        <PopularCourses />
        {/* </Suspense> */}
      </div>
    </div>
  );
}
