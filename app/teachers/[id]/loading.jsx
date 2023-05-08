import ProfileSpinner from '@/app/components/spinners/ProfileSpinner';
import React from 'react';

const loading = () => {
  return (
    <div className="text-3xl flex text-center justify-center h-full w-max font-extrabold ">
      <ProfileSpinner />
    </div>
  );
};

export default loading;
