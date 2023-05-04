import Signup from '../components/navbar/Signup';
import React from 'react';
//import { Metadata } from 'next';
export const metadata = {
  title: 'Sign Up',
};
// export const generateMetadata = ({ params }) => {
//   return (title = 'Sign Up'), (description = 'Sign Up Page for A+ Pathshala');
// };
const SingupPage = () => {
  return (
    <>
      <Signup />
    </>
  );
};

export default SingupPage;
