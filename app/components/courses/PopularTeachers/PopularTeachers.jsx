'use client';
import dummyData from '../../data/DummyData';
import { useState, useEffect, Suspense } from 'react';
import PopularTeacherCard from './PopularTeacherCard';
import { SkeletonCard } from '../../spinners/Skeleton';
const PopularTeachers = () => {
  const [popTeacher, setPopTeacher] = useState([]);
  useEffect(() => {
    const result = dummyData
      .filter((teacher) => teacher.rating >= 4.5)
      .sort((a, b) => a.rating - b.rating)
      .slice(0, 5);
    setPopTeacher(result);
  }, []);
  console.log(popTeacher);
  return (
    <>
      {' '}
      <h2
        id="popular_teachers"
        className="font-bold text-3xl m-10 text-black  ms-12"
      >
        Popular Teachers{' '}
      </h2>
      <div className="grid md:grid-cols-3 gap-2 lg:grid-cols-4 min-w-full">
        {popTeacher.map((teacher, ind) => (
          <Suspense key={ind} fallback={<SkeletonCard />}>
            <PopularTeacherCard key={ind} teacher={teacher} />
          </Suspense>
        ))}
      </div>
    </>
  );
};

export default PopularTeachers;
