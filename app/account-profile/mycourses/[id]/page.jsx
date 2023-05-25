import React from 'react';

const CourseContent = ({ params }) => {
  const { id } = params;
  console.log(id);
  return <div>CourseContent</div>;
};

export default CourseContent;
