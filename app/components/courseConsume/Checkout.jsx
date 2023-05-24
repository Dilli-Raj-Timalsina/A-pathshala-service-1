import React from 'react';

const Checkout = ({ course }) => {
  return (
    <div className="bg-color-3-100 w-full fixed bottom-0 md:right-0 md:w-1/2 lg:w-1/3 mb-4 px-2">
      <div className="mb-8 w-full border rounded-sm">
        <video className=" rounded-md " width={640} height={360} controls>
          <source
            src="https://a-pathshala-service-2.onrender.com/api/v1/course/getCourseVideo/646cc45889de1369e32c43a7"
            type="video/mp4"
          />
        </video>
      </div>
      <div className=" rounded-lg shadow-lg overflow-hidden">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <div className="rounded-full overflow-hidden mr-4">
              <img
                src={'https://randomuser.me/api/portraits/men/3.jpg'}
                alt="{teacher.name}"
                className="w-12 h-12 object-cover"
              />
            </div>
            <span className="text-gray-900 font-medium">{course.teacher}</span>
          </div>
          <button classNameName=" bg-blue-200 py-1 px-3 rounded-lg text-blue-600">
            Follow
          </button>
        </div>
        <div className="px-4 py-2 border-t border-gray-200 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-900">
            {course.name}
          </span>
          <span className="text-sm font-medium text-gray-700">
            {course.rating}
          </span>
        </div>
        <div className="px-4 py-2 border-t border-gray-200 flex items-center justify-between">
          <span className="text-sm text-gray-600">Total</span>
          <span className="text-sm font-medium text-gray-900">
            {course.price}
          </span>
        </div>
        <div className="px-4 py-2">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg mb-2">
            Buy Now
          </button>
          <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
