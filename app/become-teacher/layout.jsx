import React from 'react';
import Benefits from '../components/becomeTeacher/Benifits';
import CreateCourse from '../components/becomeTeacher/CreateCourse';

const layout = ({ children }) => {
  return (
    <div className="bg-gray-100">
      <CreateCourse />
      {children}
    </div>
  );
};

export default layout;
