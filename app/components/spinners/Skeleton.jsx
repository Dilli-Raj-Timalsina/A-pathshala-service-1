import React from 'react';
export const SkeletonCard = () => {
  return (
    <>
      <div className="flex w-full flex-1 flex-col items-center  px-20">
        <div
          className={`mt-12 w-1/2  animate-pulse flex-row items-center justify-center space-x-1 rounded-xl border p-6`}
        >
          <div className="flex flex-col space-y-2">
            <div className="h-full w-max rounded-md bg-gray-300 "></div>
            <div className="h-full w-max rounded-md bg-gray-300 "></div>
            <div className="h-full w-max rounded-md bg-gray-300 "></div>
            <div className="h-full w-max rounded-md bg-gray-300 "></div>
          </div>
        </div>
      </div>
    </>
  );
};
