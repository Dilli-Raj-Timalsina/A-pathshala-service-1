import React from 'react';
import FeatureCard from './FeaturedCard';
const features = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        id="award"
      >
        <path
          fill="#0092E4"
          d="M20.87,17.25l-2.71-4.68A6.9,6.9,0,0,0,19,9.25a7,7,0,0,0-14,0,6.9,6.9,0,0,0,.84,3.32L3.13,17.25A1,1,0,0,0,4,18.75l2.87,0,1.46,2.46a1,1,0,0,0,.18.22,1,1,0,0,0,.69.28h.14a1,1,0,0,0,.73-.49L12,17.9l1.93,3.35a1,1,0,0,0,.73.48h.14a1,1,0,0,0,.7-.28.87.87,0,0,0,.17-.21l1.46-2.46,2.87,0a1,1,0,0,0,.87-.5A1,1,0,0,0,20.87,17.25ZM9.19,18.78,8.3,17.29a1,1,0,0,0-.85-.49l-1.73,0,1.43-2.48a7,7,0,0,0,3.57,1.84ZM12,14.25a5,5,0,1,1,5-5A5,5,0,0,1,12,14.25Zm4.55,2.55a1,1,0,0,0-.85.49l-.89,1.49-1.52-2.65a7.06,7.06,0,0,0,3.56-1.84l1.43,2.48Z"
        ></path>
      </svg>
    ),
    title: 'Expert-selected courses',
    description:
      "Our team of experts hand-picks the best courses in each subject area, so you can be sure you're getting the highest quality education.",
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        id="shield-check"
      >
        <path
          fill="#0092E4"
          d="M19.63,3.65a1,1,0,0,0-.84-.2,8,8,0,0,1-6.22-1.27,1,1,0,0,0-1.14,0A8,8,0,0,1,5.21,3.45a1,1,0,0,0-.84.2A1,1,0,0,0,4,4.43v7.45a9,9,0,0,0,3.77,7.33l3.65,2.6a1,1,0,0,0,1.16,0l3.65-2.6A9,9,0,0,0,20,11.88V4.43A1,1,0,0,0,19.63,3.65ZM18,11.88a7,7,0,0,1-2.93,5.7L12,19.77,8.93,17.58A7,7,0,0,1,6,11.88V5.58a10,10,0,0,0,6-1.39,10,10,0,0,0,6,1.39ZM13.54,9.59l-2.69,2.7-.89-.9a1,1,0,0,0-1.42,1.42l1.6,1.6a1,1,0,0,0,1.42,0L15,11a1,1,0,0,0-1.42-1.42Z"
        ></path>
      </svg>
    ),
    title: 'Verified instructors',
    description:
      "All of our instructors are verified experts in their fields, so you can trust that you're learning from the best.",
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        id="dollar-sign"
      >
        <path
          fill="#0092E4"
          d="M14,11H10a2,2,0,0,1,0-4h5a1,1,0,0,1,1,1,1,1,0,0,0,2,0,3,3,0,0,0-3-3H13V3a1,1,0,0,0-2,0V5H10a4,4,0,0,0,0,8h4a2,2,0,0,1,0,4H9a1,1,0,0,1-1-1,1,1,0,0,0-2,0,3,3,0,0,0,3,3h2v2a1,1,0,0,0,2,0V19h1a4,4,0,0,0,0-8Z"
        ></path>
      </svg>
    ),
    title: 'Earn Salary upto 3x More',
    description:
      'With our Quality Course, you can earn upto 3x more than your current salary.',
  },
  {
    id: 4,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="globe">
        <path
          fill="#0092E4"
          d="M21.41,8.64s0,0,0-.05a10,10,0,0,0-18.78,0s0,0,0,.05a9.86,9.86,0,0,0,0,6.72s0,0,0,.05a10,10,0,0,0,18.78,0s0,0,0-.05a9.86,9.86,0,0,0,0-6.72ZM4.26,14a7.82,7.82,0,0,1,0-4H6.12a16.73,16.73,0,0,0,0,4Zm.82,2h1.4a12.15,12.15,0,0,0,1,2.57A8,8,0,0,1,5.08,16Zm1.4-8H5.08A8,8,0,0,1,7.45,5.43,12.15,12.15,0,0,0,6.48,8ZM11,19.7A6.34,6.34,0,0,1,8.57,16H11ZM11,14H8.14a14.36,14.36,0,0,1,0-4H11Zm0-6H8.57A6.34,6.34,0,0,1,11,4.3Zm7.92,0h-1.4a12.15,12.15,0,0,0-1-2.57A8,8,0,0,1,18.92,8ZM13,4.3A6.34,6.34,0,0,1,15.43,8H13Zm0,15.4V16h2.43A6.34,6.34,0,0,1,13,19.7ZM15.86,14H13V10h2.86a14.36,14.36,0,0,1,0,4Zm.69,4.57a12.15,12.15,0,0,0,1-2.57h1.4A8,8,0,0,1,16.55,18.57ZM19.74,14H17.88A16.16,16.16,0,0,0,18,12a16.28,16.28,0,0,0-.12-2h1.86a7.82,7.82,0,0,1,0,4Z"
        ></path>
      </svg>
    ),
    title: 'Global Industry Level Curriculum',
    description:
      'Keeping in Mind the Industry Standards, we have designed our curriculum to make you Industry Ready.',
  },
  {
    id: 5,
    icon: <svg>...</svg>,
    title: 'Flexible scheduling',
    description:
      'Our courses are self-paced, so you can learn on your own schedule and at your own speed.',
  },
  {
    id: 6,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        id="comment-alt-check"
      >
        <path
          fill="#0092E4"
          d="M6.77,9.15l5.44-5.44a1,1,0,1,0-1.42-1.42L6.06,7,4.21,5.17A1,1,0,0,0,2.79,6.59L5.35,9.15a1,1,0,0,0,1.42,0ZM18.5,6H13a1,1,0,0,0,0,2h5.5a1,1,0,0,1,1,1v9.72l-1.57-1.45a1,1,0,0,0-.68-.27H8.5a1,1,0,0,1-1-1V12.5a1,1,0,0,0-2,0V16a3,3,0,0,0,3,3h8.36l3,2.73a1,1,0,0,0,.68.27,1.1,1.1,0,0,0,.4-.08,1,1,0,0,0,.6-.92V9A3,3,0,0,0,18.5,6Z"
        ></path>
      </svg>
    ),
    title: 'Community support',
    description:
      'Join our community of learners to connect with peers, share ideas, and get support from instructors and mentors.',
  },
];
const FeatureList = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <h2 className="text-2xl mb-2 font-extrabold text-center text-gray-900 sm:text-4xl">
        Why choose us?
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};
export default FeatureList;
