'use client';
import { useEffect, useState } from 'react';
import CourseData from '../../data/CourseData';
import CourseCard from '../CourseCard';
const PopularCourses = () => {
  const [PopularCourses, setPopularCourses] = useState([]);
  useEffect(() => {
    const result = CourseData.filter((course) => course.rating >= 4.5)
      .sort((a, b) => a.rating - b.rating)
      .slice(0, 4);
    setPopularCourses(result);
  }, []);

  return (
    <>
      <h2 className="font-bold text-3xl text-black m-10 ms-12">
        Popular Courses{' '}
      </h2>
      <div className="grid md:grid-cols-3 gap-6 mx-6 lg:grid-cols-4 xl:grid-cols-5">
        {PopularCourses.map((course, ind) => (
          <CourseCard key={ind} course={course} />
        ))}
      </div>
    </>
  );
};

export default PopularCourses;
