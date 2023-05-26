import React from 'react';
import Link from 'next/link';
const CourseHeader = ({ course }) => {
  return (
    <>
      <div className="w-full">
        <h1 className="text-4xl pt-2 font-bold text-gray-900 mb-4">
          {course.title}
        </h1>
      </div>
      <div className="flex border-b pb-2 items-center justify-between mb-4">
        <div className="flex  items-center">
          <p className=" flex font-medium text-gray-900 mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <defs>
                <linearGradient id="rating_gradient">
                  <stop offset="50%" stop-color="rgba(243,198,63,1)" />
                  <stop offset="50%" stop-color="rgba(243,198,63,1)" />
                </linearGradient>
              </defs>
              <path
                d="M11.2367 2.20032C11.5192 1.52111 12.4814 1.52112 12.7639 2.20033L15.0875 7.78692C15.2066 8.07326 15.4759 8.2689 15.785 8.29369L21.8162 8.7772C22.5495 8.83599 22.8468 9.75107 22.2881 10.2296L17.693 14.1659C17.4575 14.3676 17.3546 14.6842 17.4266 14.9858L18.8305 20.8712C19.0012 21.5868 18.2227 22.1523 17.595 21.7689L12.4314 18.615C12.1668 18.4534 11.8339 18.4534 11.5693 18.615L6.4057 21.7689C5.77793 22.1523 4.99951 21.5868 5.17019 20.8712L6.57408 14.9858C6.64604 14.6842 6.54318 14.3676 6.30766 14.1659L1.71252 10.2296C1.15385 9.75107 1.45118 8.83599 2.18445 8.7772L8.21565 8.29369C8.52477 8.2689 8.79405 8.07326 8.91315 7.78692L11.2367 2.20032Z"
                fill="url(#rating_gradient)"
              />
              <path
                d="M11.6984 2.39234C11.8101 2.12378 12.1906 2.12378 12.3023 2.39234L14.6259 7.97894C14.817 8.43839 15.249 8.75232 15.7451 8.79209L21.7763 9.27561C22.0662 9.29885 22.1838 9.66068 21.9629 9.84991L17.3677 13.7861C16.9898 14.1099 16.8248 14.6178 16.9402 15.1018L18.3441 20.9873C18.4116 21.2702 18.1038 21.4938 17.8556 21.3422L12.692 18.1883C12.2674 17.9289 11.7333 17.9289 11.3086 18.1883L6.14508 21.3422C5.89685 21.4938 5.58906 21.2702 5.65655 20.9873L7.06044 15.1018C7.1759 14.6178 7.01086 14.1099 6.63294 13.7861L2.0378 9.8499C1.8169 9.66068 1.93447 9.29885 2.2244 9.27561L8.25561 8.79209C8.75163 8.75232 9.18371 8.43839 9.37481 7.97894L11.6984 2.39234Z"
                stroke="rgba(0,0,0,0)"
              />
            </svg>
            {course.rating} |{'  '}
            <Link href={'#'} className={'text-blue-500'}>
              {' ' + course.teacher}
            </Link>
          </p>
        </div>
        <div className="flex items-center">
          <button className="mr-4 flex pe-2 bg-blue-200 py-1 px-3 rounded-lg text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#535ce8"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M3,12c0,1.654,1.346,3,3,3c0.794,0,1.512-0.315,2.049-0.82l5.991,3.424C14.022,17.734,14,17.864,14,18c0,1.654,1.346,3,3,3 s3-1.346,3-3s-1.346-3-3-3c-0.794,0-1.512,0.315-2.049,0.82L8.96,12.397C8.978,12.266,9,12.136,9,12s-0.022-0.266-0.04-0.397 l5.991-3.423C15.488,8.685,16.206,9,17,9c1.654,0,3-1.346,3-3s-1.346-3-3-3s-3,1.346-3,3c0,0.136,0.022,0.266,0.04,0.397 L8.049,9.82C7.512,9.315,6.794,9,6,9C4.346,9,3,10.346,3,12z" />
            </svg>
            Share
          </button>
          <button className="flex items-center bg-blue-700 py-1 px-3 text-white rounded-lg">
            <svg
              className="pe-2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 32 32"
            >
              <path
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="square"
                strokeMiterlimit="10"
                d="M28.604,5.396 c-3.195-3.195-8.376-3.195-11.571,0C16.639,5.79,16.297,6.215,16,6.661c-0.297-0.446-0.639-0.871-1.033-1.264 c-3.195-3.195-8.376-3.195-11.571,0c-3.195,3.195-3.195,8.376,0,11.571L16,29.571l12.604-12.604 C31.799,13.772,31.799,8.592,28.604,5.396z"
                strokeLinejoin="miter"
              />
            </svg>
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default CourseHeader;
