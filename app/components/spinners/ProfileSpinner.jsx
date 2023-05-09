import React from 'react';

const ProfileSpinner = () => {
  return (
    <>
      <div className="flex w-full flex-1 flex-col items-center justify-center px-20">
        <div
          className={`mt-12 w-1/2  animate-pulse flex-row items-center justify-center space-x-1 rounded-xl border p-6`}
        >
          <div className="flex flex-col space-y-2">
            <div className="h-6 w-11/12 rounded-md bg-gray-300 "></div>
            <div className="h-6 w-10/12 rounded-md bg-gray-300 "></div>
            <div className="h-6 w-11/12 rounded-md bg-gray-300 "></div>
            <div className="h-6 w-11/12 rounded-md bg-gray-300 "></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSpinner;
