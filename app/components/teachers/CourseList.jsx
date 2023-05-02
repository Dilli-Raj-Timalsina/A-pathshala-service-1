'use client';
import CourseCard from '../courses/CourseCard';

const CourseList = ({ courses }) => {
  console.log(courses);
  return (
    <div className="flex flex-wrap justify-center -mx-4">
      {courses?.map((course, key) => (
        <CourseCard key={key} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
