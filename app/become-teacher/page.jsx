import React from 'react';
import Image from 'next/image';
import Benefits from '../components/becomeTeacher/Benifits';
import HowItWorks from '../components/becomeTeacher/HowItWorks';
const page = () => {
  return (
    <div className="">
      Teaacher SignUp page
      <Benefits />
      <HowItWorks />
    </div>
  );
};

export default page;
