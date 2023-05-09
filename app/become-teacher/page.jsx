import React from 'react';
import Image from 'next/image';
import Benefits from '../components/becomeTeacher/Benifits';
import CreateCourse from '../components/becomeTeacher/CreateCourse';
import HowItWorks from '../components/becomeTeacher/HowItWorks';
const page = () => {
  return (
    <div className="">
      <CreateCourse />

      <Benefits />
      <HowItWorks />
    </div>
  );
};

export default page;
