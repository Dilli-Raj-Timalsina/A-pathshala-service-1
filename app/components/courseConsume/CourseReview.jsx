import React from 'react';

const CourseReview = ({ course }) => {
  return (
    <div id="review" className={`my-4`}>
      <h3 className="text-2xl font-bold mb-4">Reviews</h3>
      <ul className="grid grid-cols-2">
        {course.reviews?.map((review) => (
          <li key={review.id} className="  px-2 py-2">
            <div className="flex items-center mb-2">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img
                  src={review.userAvatar}
                  alt={review.userName}
                  width={48}
                  height={48}
                />
              </div>
              <div>
                <p className="text-lg font-medium text-gray-900">
                  {review.userName}
                </p>
                <p className="text-gray-600">{review.date}</p>
              </div>
            </div>
            <p className="text-sm text-gray-900">{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseReview;
