'use client';
import dummyData from '../../data/DummyData';
import { useState, useEffect } from 'react';
import PopularTeacherCard from './PopularTeacherCard';
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
      <h2 className="font-bold text-3xl text-black m-2 ms-12">
        Popular Teachers{' '}
      </h2>
      <div className="grid md:grid-cols-3 gap-2 lg:grid-cols-5 min-w-full">
        {popTeacher.map((teacher, ind) => (
          <PopularTeacherCard key={ind} teacher={teacher} />
        ))}
      </div>
    </>
  );
};

export default PopularTeachers;
