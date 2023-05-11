'use client';
import React, { createContext, useState } from 'react';
// import CreateCourse from '@/app/components/becomeTeacher/CreateCourse'
import CreateNewCourse from '@/app/components/sections/CreateNewCourse';
import CourseBuilder from '@/app/components/sections/CourseBuilder';
export const courseContext = createContext();
const AddCourse = () => {
  const [courseId, setCourseId] = useState('');
  const [next, setNext] = useState(false);
  return (
    <div>
      <courseContext.Provider value={{ courseId, setCourseId }}>
        {!next && <CreateNewCourse setNext={setNext} />}
        {next && (
          <h2 className="text-2xl flex text-center justify-center pt-3 font-bold ">
            Add Sections To This Course
          </h2>
        )}
        {next && <CourseBuilder />}
        {/* {next && <MultipleSections />} */}
      </courseContext.Provider>
    </div>
  );
};

export default AddCourse;
