import React from 'react';

const BounceSpinners = () => {
  return (
    <div className="flex  justify-center">
      <div className="relative py-1 inline-flex">
        <div className="h-3 w-3 bg-white rounded-full animate-ping"></div>
        <div className="h-3 w-3 bg-white rounded-full animate-ping mx-1"></div>
        <div className="h-3 w-3 bg-white rounded-full animate-ping"></div>
      </div>
    </div>
  );
};

export default BounceSpinners;
