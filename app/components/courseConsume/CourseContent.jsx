'use client';
import { useState } from 'react';
import VideoPlayer from './VideoPlayer';
const CourseContent = () => {
  const [expandedSections, setExpandedSections] = useState([]);
  const [showVideo, setShowVideo] = useState(false);
  const sections = [
    {
      id: 1,
      name: 'Section 1',
      title: 'Introduction to the Course',
      videos: [
        {
          id: 1,
          title: 'Video 1',
          free: true,
          url: 'https://example.com/video-1.mp4',
        },
        {
          id: 2,
          title: 'Video 2',
          free: false,
          url: 'https://example.com/video-1.mp4',
        },
      ],
      studyMaterials: [
        {
          id: 1,
          title: 'Study Material 1',
          url: 'https://example.com/study-material-1.pdf',
        },
        {
          id: 2,
          title: 'Study Material 2',
          url: 'https://example.com/study-material-2.pdf',
        },
      ],
    },
    {
      id: 2,
      name: 'Section 2',
      title: 'Fundamentals of Programming',
      videos: [
        {
          id: 3,
          title: 'Video 3',
          free: true,
          url: 'https://example.com/video-3.mp4',
        },
        {
          id: 4,
          title: 'Video 4',
          free: false,
          url: 'https://example.com/video-4.mp4',
        },
      ],
      studyMaterials: [
        {
          id: 3,
          title: 'Study Material 3',
          url: 'https://example.com/study-material-3.pdf',
        },
        {
          id: 4,
          title: 'Study Material 4',
          url: 'https://example.com/study-material-4.pdf',
        },
      ],
    },
    {
      id: 3,
      name: 'Section 3',
      title: 'Web Development with React',
      videos: [
        {
          id: 5,
          title: 'Video 5',
          free: true,
          url: 'https://example.com/video-5.mp4',
        },
        {
          id: 6,
          title: 'Video 6',
          free: false,
          url: 'https://example.com/video-6.mp4',
        },
        {
          id: 7,
          title: 'Video 7',
          free: false,
          url: 'https://example.com/video-7.mp4',
        },
      ],
      studyMaterials: [
        {
          id: 5,
          title: 'Study Material 5',
          url: 'https://example.com/study-material-5.pdf',
        },
        {
          id: 6,
          title: 'Study Material 6',
          url: 'https://example.com/study-material-6.pdf',
        },
      ],
    },
    // Add more sections here
  ];

  const toggleSection = (sectionId) => {
    if (expandedSections.includes(sectionId)) {
      setExpandedSections(expandedSections.filter((id) => id !== sectionId));
    } else {
      setExpandedSections([...expandedSections, sectionId]);
    }
  };

  const isSectionExpanded = (sectionId) => {
    return expandedSections.includes(sectionId);
  };

  return (
    <>
      <h3 className="text-2xl py-2 font-bold">Course Content</h3>
      <div className=" flex-col  border-2  ">
        {sections.map((section) => (
          <div
            key={section.id}
            className=" py-4 bg-pink-100/20 justify-center items-center ps-8 px-3 rounded-md  "
          >
            <div
              className="flex items-center justify-around cursor-pointer"
              onClick={() => toggleSection(section.id)}
            >
              {' '}
              <h2 className="text-lg font-bold">
                {section.name}: {section.title}
              </h2>
              <svg
                className={`ml-4 h-6 w-6 transform ${
                  isSectionExpanded(section.id) ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {isSectionExpanded(section.id) && (
              <div className="flex bg-white ps-20 flex-col mt-4">
                {section.videos.map((video) => (
                  <div key={video.id} className="flex items-center mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      className=" mx-3 h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 3.5a1 1 0 00-1 1v7a1 1 0 001 1h10a1 1 0 001-1v-7a1 1 0 00-1-1H3zm-3 1a3 3 0 013-3h10a3 3 0 013 3v7a3 3 0 01-3 3H3a3 3 0 01-3-3v-7z"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.788 5.363a1 1 0 011.035.068l2.5 1.75a1 1 0 010 1.638l-2.5 1.75A1 1 0 016.25 9.75v-3.5a1 1 0 01.538-.887z"
                      ></path>
                    </svg>
                    {showVideo && (
                      <VideoPlayer
                        setShowVideo={setShowVideo}
                        url={'/video-1.mp4'}
                      />
                    )}
                    {video.free ? (
                      <button
                        onClick={() => setShowVideo(() => !showVideo)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <span>{video.title}</span>
                      </button>
                    ) : (
                      <div className="flex items-center">
                        <span>{video.title}</span>

                        <img
                          src="/locked.svg"
                          className=" ms-3 h-5 w-5"
                          alt=""
                        />
                      </div>
                    )}
                  </div>
                ))}
                <div className="mt-4">
                  <ul className="list-disc list-inside">
                    {section.studyMaterials.map((material) => (
                      <li key={material.id} className=" list-none ps-3 ">
                        <a href={material.url}>{material.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default CourseContent;
