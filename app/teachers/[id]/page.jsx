'use client';
import React from 'react';
import dummyData from '@/app/components/data/DummyData';
import { useState, useEffect } from 'react';
import TeacherHeader from '@/app/components/teachers/TeacherHeader';
import CourseList from '@/app/components/teachers/CourseList';

const TeachersPage = ({ params }) => {
  const [teacher, setTeacher] = useState({});
  useEffect(() => {
    const data = dummyData.find((teache) => teache.id == parseInt(params.id));
    setTeacher(data);
    // console.log(data);
  }, []);
  console.log(teacher);
  //   console.log(params.id);

  return (
    <div>
      <TeacherHeader teacher={teacher} />
      <CourseList courses={teacher.courses} />
    </div>
  );
};

export default TeachersPage;
