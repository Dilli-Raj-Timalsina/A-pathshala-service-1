import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="w-full h-full bg-white shadow-lg rounded-lg p-5">
      <div className="flex items-center gap-x-4 mb-3">
        <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 ">
          {icon} {/* pass SVG icon as prop */}
        </div>
        <div className="flex">
          <h3 className="block text-lg font-semibold text-gray-800">{title}</h3>{' '}
          {/* pass title as prop */}
        </div>
      </div>
      <p className="text-gray-600 ">{description}</p>{' '}
      {/* pass description as prop */}
    </div>
  );
};

export default FeatureCard;
