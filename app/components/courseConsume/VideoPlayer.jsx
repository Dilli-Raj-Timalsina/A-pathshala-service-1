import React from 'react';
import Image from 'next/image';
const VideoPlayer = ({ src, setShowVideo }) => {
  const closePlayer = (e) => {
    e.preventDefault();
    setShowVideo(false);
  };
  return (
    <div className="fixed  top-1/4 z-10 w-1/2 h-1/2 bg-opacity-0 ">
      <div className="flex bg-black flex-col">
        <div className="flex justify-end me-2">
          <button onClick={(e) => closePlayer(e)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="w-8 h-8 py-2"
            >
              <path
                fill="#FFF"
                d="M9.414 8l6.293-6.293c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0L8 6.586 1.707.293c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414L6.586 8 .293 14.293c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293L8 9.414l6.293 6.293c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023 0-1.414L9.414 8z"
              />
            </svg>
          </button>
        </div>
        <video className=" rounded-md " width={640} height={360} controls>
          <source
            src="https://a-pathshala-service-2.onrender.com/api/v1/course/getCourseVideo/646cc45889de1369e32c43a7"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default VideoPlayer;
