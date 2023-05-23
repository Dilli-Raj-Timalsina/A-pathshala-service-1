import React from 'react';

const Checkout = ({ course }) => {
  return (
    <div class="bg-color-3-100 w-full md:fixed md:top-1/3 md:right-0 md:w-1/2 lg:w-1/3 mb-4 px-2">
      <div class=" rounded-lg shadow-lg overflow-hidden">
        <div class="flex items-center justify-between p-4">
          <div class="flex items-center">
            <div class="rounded-full overflow-hidden mr-4">
              <img
                src={'https://randomuser.me/api/portraits/men/3.jpg'}
                alt="{teacher.name}"
                class="w-12 h-12 object-cover"
              />
            </div>
            <span class="text-gray-900 font-medium">{course.teacher}</span>
          </div>
          <button className=" bg-blue-200 py-1 px-3 rounded-lg text-blue-600">
            Follow
          </button>
        </div>
        <div class="px-4 py-2 border-t border-gray-200 flex items-center justify-between">
          <span class="text-sm font-medium text-gray-900">{course.name}</span>
          <span class="text-sm font-medium text-gray-700">{course.rating}</span>
        </div>
        <div class="px-4 py-2 border-t border-gray-200 flex items-center justify-between">
          <span class="text-sm text-gray-600">Total</span>
          <span class="text-sm font-medium text-gray-900">{course.price}</span>
        </div>
        <div class="px-4 py-2">
          <button class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg mb-2">
            Buy Now
          </button>
          <button class="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
