import PopularCourses from './components/courses/PopularCourses/PopularCourses';
import PopularTeachers from './components/courses/PopularTeachers/PopularTeachers';
import Hero from './components/hero/HeroSection';
export default function Home() {
  return (
    <div className="bg-content-white-gradient">
      <Hero />
      <div className="my-4">
        <PopularCourses />
        <PopularTeachers />
      </div>
    </div>
  );
}
