'use client';
import { useState } from 'react';
import VideoPlayer from './VideoPlayer';
const CourseContent = () => {
  const [expandedSections, setExpandedSections] = useState([]);
  const [showVideo, setShowVideo] = useState(false);
  // const sections = [
  //   {
  //     id: 1,
  //     name: 'Section 1',
  //     title: 'Introduction to the Course',
  //     videos: [
  //       {
  //         id: 1,
  //         title: 'Video 1',
  //         free: true,
  //         url: 'https://example.com/video-1.mp4',
  //       },
  //       {
  //         id: 2,
  //         title: 'Video 2',
  //         free: false,
  //         url: 'https://example.com/video-1.mp4',
  //       },
  //     ],
  //     studyMaterials: [
  //       {
  //         id: 1,
  //         title: 'Study Material 1',
  //         url: 'https://example.com/study-material-1.pdf',
  //       },
  //       {
  //         id: 2,
  //         title: 'Study Material 2',
  //         url: 'https://example.com/study-material-2.pdf',
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: 'Section 2',
  //     title: 'Fundamentals of Programming',
  //     videos: [
  //       {
  //         id: 3,
  //         title: 'Video 3',
  //         free: true,
  //         url: 'https://example.com/video-3.mp4',
  //       },
  //       {
  //         id: 4,
  //         title: 'Video 4',
  //         free: false,
  //         url: 'https://example.com/video-4.mp4',
  //       },
  //     ],
  //     studyMaterials: [
  //       {
  //         id: 3,
  //         title: 'Study Material 3',
  //         url: 'https://example.com/study-material-3.pdf',
  //       },
  //       {
  //         id: 4,
  //         title: 'Study Material 4',
  //         url: 'https://example.com/study-material-4.pdf',
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     name: 'Section 3',
  //     title: 'Web Development with React',
  //     videos: [
  //       {
  //         id: 5,
  //         title: 'Video 5',
  //         free: true,
  //         url: 'https://example.com/video-5.mp4',
  //       },
  //       {
  //         id: 6,
  //         title: 'Video 6',
  //         free: false,
  //         url: 'https://example.com/video-6.mp4',
  //       },
  //       {
  //         id: 7,
  //         title: 'Video 7',
  //         free: false,
  //         url: 'https://example.com/video-7.mp4',
  //       },
  //     ],
  //     studyMaterials: [
  //       {
  //         id: 5,
  //         title: 'Study Material 5',
  //         url: 'https://example.com/study-material-5.pdf',
  //       },
  //       {
  //         id: 6,
  //         title: 'Study Material 6',
  //         url: 'https://example.com/study-material-6.pdf',
  //       },
  //     ],
  //   },
  //   // Add more sections here
  // ];

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
              className="flex items-center px-8 justify-between cursor-pointer"
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
                {section.topics.map((video) => (
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
                    {section.studyMaterials?.map((material) => (
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

const sections = [
  {
    id: 1,
    name: 'Section 1',
    title: 'Introduction to Computer Science and Technology',
    topics: [
      {
        id: 1,
        title: 'Introduction to the field of Computer Science and Technology',
        free: false,
        url: '',
      },
      {
        id: 2,
        title:
          'Different domains of computer science e.g mobile,web,cloud,devops,networking,AI/ML',
        free: false,
        url: '',
      },
      {
        id: 3,
        title:
          'All about theory and foundational subjects and its importance e.g operating system, DBMS , Computer Networks, OOPS , 1 programming language',
        free: false,
        url: '',
      },
      {
        id: 4,
        title:
          'Which programming language to choose initially? java/c/c++/python/javascript',
        free: false,
        url: '',
      },
      {
        id: 5,
        title:
          'How to learn these subjects? Is it necessary initially to be expert at programming?',
        free: false,
        url: '',
      },
      {
        id: 6,
        title:
          'How to choose a particular Domain of a computer science and technology as a beginner?',
        free: false,
        url: '',
      },
      {
        id: 7,
        title: 'Assignment for lecture 1',
        free: false,
        url: '',
      },
    ],
  },
  {
    id: 2,
    name: 'Section 2',
    title: 'How a Company is Created',
    topics: [
      {
        id: 1,
        title:
          'How a company ran previously when there were no internet and how it is now?',
        free: false,
        url: '',
      },
      {
        id: 2,
        title: 'Types of company e.g Big tech Giant vs startups',
        free: false,
        url: '',
      },
      {
        id: 3,
        title:
          'Types and stages of startup e.g series A funded, series B funded, IPO',
        free: false,
        url: '',
      },
      {
        id: 4,
        title:
          'Your growth in startup / risks in startup as an engineer vs in Big tech giants',
        free: false,
        url: '',
      },
      {
        id: 5,
        title: 'Service based company vs product based company',
        free: false,
        url: '',
      },
      {
        id: 6,
        title: 'All about startup and company culture in Nepal',
        free: false,
        url: '',
      },
      {
        id: 7,
        title:
          'Why Nepalese aspire to go to Australia and wash dishes? why Nepal is one of the poorest countries? Is it only because of politics? Is there a way that we can change the culture of Nepali going to Australia not to wash dishes and earn 1 lakh a month instead going to Australia to do engineering and earn 10 lakh a month?',
        free: false,
        url: '',
      },
      {
        id: 8,
        title:
          "Or even How can we bring all Big Tech Giant offices in Nepal, is there a way? Yes… That’s you, the country's economy is dependent on you",
        free: false,
        url: '',
      },
      {
        id: 9,
        title:
          'Before Learning hiring process and skill required to be a global engineer let’s basics of DSA',
        free: false,
        url: '',
      },
      {
        id: 10,
        title: 'In the next lecture, we will start learning DSA for 4 days',
        free: false,
        url: '',
      },
    ],
  },
  {
    id: 3,
    name: 'Section 3',
    title: 'DSA - Dilli Raj Timalsina',
    topics: [
      {
        id: 1,
        title: 'We will learn DSA for Next 3 days',
        free: false,
        url: '',
      },
      {
        id: 2,
        title:
          'Topics: Sorting, Searching, Binary search, time and space complexity',
        free: false,
        url: '',
      },
      {
        id: 3,
        title:
          'We will create leetcode and gfg account and will solve 5 easy questions',
        free: false,
        url: '',
      },
      {
        id: 4,
        title:
          'We will learn topics like sorting, searching, binary search, time and space complexity',
        free: false,
        url: '',
      },
    ],
  },
  {
    id: 4,
    name: 'Section 4',
    title: 'How to Succeed in DSA - Prince Singh',
    topics: [
      {
        id: 1,
        title: 'How to succeed in DSA',
        free: false,
        url: '',
      },
      {
        id: 2,
        title:
          'How to be consistent and connect with like-minded great folks from outside Nepal',
        free: false,
        url: '',
      },
      {
        id: 3,
        title:
          'How much time it requires to learn DSA and crack coding interviews',
        free: false,
        url: '',
      },
      {
        id: 4,
        title: 'How to maintain LinkedIn, LeetCode, and GFG',
        free: false,
        url: '',
      },
      {
        id: 5,
        title: 'Prince impact on Indian DSA culture, some of the tweet reply',
        free: false,
        url: '',
      },
    ],
  },
  {
    id: 5,
    name: 'Section 5',
    title: 'All about Competitive Programming - Ayushman Khan',
    topics: [
      {
        id: 1,
        title:
          'All about competitive programming – getting started with competitive programming',
        free: false,
        url: '',
      },
      {
        id: 2,
        title: 'How to maintain CP profile',
        free: false,
        url: '',
      },
    ],
  },
  {
    id: 6,
    name: 'Section 6',
    title:
      'Basics of JavaScript and Open Source Contribution - Dilli Raj Timalsina',
    topics: [
      {
        id: 1,
        title:
          'Here we will learn basics of JavaScript and start contributing to the backend of A+ Pathshala service 1',
        free: false,
        url: '',
      },
      {
        id: 2,
        title: 'Basics of Git and GitHub (version control system)',
        free: false,
        url: '',
      },
      {
        id: 3,
        title:
          'Development: 2 types - i) doing 1000 projects and learning 1000 languages, ii) learning the basic fundamental tech stack and contributing to a large codebase which is actually a profitable company and has a huge user base, let’s say more than 100k+ users',
        free: false,
        url: '',
      },
      {
        id: 4,
        title: 'All about the open-source world and open-source contribution',
        free: false,
        url: '',
      },
      {
        id: 5,
        title:
          'Our first open-source contribution: contributing to A+ Pathshala backend service, i.e., we will add email service functionality in A+ Pathshala',
        free: false,
        url: '',
      },
      {
        id: 6,
        title: 'All about good first issues',
        free: false,
        url: '',
      },
    ],
  },
  {
    id: 7,
    name: 'Section 7',
    title: 'Hiring Process and Salary Structure - Dilli Raj Timalsina',
    topics: [
      {
        id: 1,
        title: 'All about the hiring process in Big Tech Giants',
        free: false,
        url: '',
      },
      {
        id: 2,
        title: 'All about the hiring process in startups',
        free: false,
        url: '',
      },
      {
        id: 3,
        title: 'All about the hiring process in service-based companies',
        free: false,
        url: '',
      },
      {
        id: 4,
        title: 'All about Salary structure in FAANG vs startup',
        free: false,
        url: '',
      },
      {
        id: 5,
        title:
          'All about base pay + stock stipend + joining bonus + extra expenditure',
        free: false,
        url: '',
      },
    ],
  },
  {
    id: 8,
    name: 'Section 8',
    title: 'Global Opportunities and GSOC - Dilli Raj Timalsina',
    topics: [
      {
        id: 1,
        title: 'All about global opportunities: ',
        free: false,
        url: '',
      },
      {
        id: 2,
        title:
          'We will target GSOC for next year, for that you have to stay connected with A+ Pathshala',
        free: false,
        url: '',
      },
      {
        id: 3,
        title: 'Strategies to target for Next GSOC',
        free: false,
        url: '',
      },
    ],
  },
  {
    id: 9,
    name: 'Section 9',
    title: 'Freelancing and Contract-based Work - Biplop Karki',
    topics: [
      {
        id: 1,
        title: 'All about freelancing and contract-based work',
        free: false,
        url: '',
      },
      {
        id: 2,
        title: 'Nepali client vs US client in terms of pay',
        free: false,
        url: '',
      },
      {
        id: 3,
        title:
          'How to create a freelancing profile, how to find clients as a freshman',
        free: false,
        url: '',
      },
      {
        id: 4,
        title: 'What are PRs',
        free: false,
        url: '',
      },
      {
        id: 5,
        title: 'How to manage PRs',
        free: false,
        url: '',
      },
      {
        id: 6,
        title: 'How to create credibility for clients as a newbie',
        free: false,
        url: '',
      },
      {
        id: 7,
        title: 'All about Replit, Upwork, and Freelance.com',
        free: false,
        url: '',
      },
      {
        id: 8,
        title:
          'You will get a chance to interview with the founder of Freelance.com',
        free: false,
        url: '',
      },
    ],
  },
  {
    id: 10,
    name: 'Section 10',
    title: 'From Nepal to Google - Avishkar Jang Gurung',
    topics: [
      {
        id: 1,
        title: 'His life journey',
        free: false,
        url: '',
      },
      {
        id: 2,
        title: 'Challenges faced as a Nepali',
        free: false,
        url: '',
      },
      {
        id: 3,
        title: 'His experience of being a part of Google, California',
        free: false,
        url: '',
      },
      {
        id: 4,
        title:
          'His life journey: being a part of MI7 Solutions and founding of CloudFactory',
        free: false,
        url: '',
      },
      {
        id: 5,
        title: 'Advice for Nepali engineers to reach Google',
        free: false,
        url: '',
      },
      {
        id: 6,
        title: 'Words for future aspiring engineers',
        free: false,
        url: '',
      },
    ],
  },
  {
    id: 11,
    name: 'Section 11',
    title: 'Software Companies in Nepal - Bishworaj Poudel',
    topics: [
      {
        id: 1,
        title: 'All about software companies in Nepal',
        free: true,
        url: '',
      },
      {
        id: 2,
        title: 'Hiring in companies like esewa, khalti, and all',
        free: true,
        url: '',
      },
      {
        id: 3,
        title:
          'Salary of software engineer in Nepal for experienced and for fresher',
        free: true,
        url: '',
      },
      {
        id: 4,
        title: 'Internship stipend in Nepal',
        free: true,
        url: '',
      },
      {
        id: 5,
        title: 'All about Application Development',
        free: true,
        url: '',
      },
      {
        id: 6,
        title: 'Basics of Flutter',
        free: true,
        url: '',
      },
      {
        id: 7,
        title: 'Roadmap to become a Flutter developer',
        free: true,
        url: '',
      },
    ],
  },
  {
    id: 12,
    name: 'Section 12',
    title: 'Cyber Security and Networking - Jiwan Bhattrai',
    topics: [
      {
        id: 1,
        title: 'All about cyber security',
        free: true,
        url: '',
      },
      {
        id: 2,
        title: 'All about ethical hacking',
        free: true,
        url: '',
      },
      {
        id: 3,
        title: 'All about Networking',
        free: true,
        url: '',
      },
      {
        id: 4,
        title: 'Roadmap to become Networking experts',
        free: true,
        url: '',
      },
      {
        id: 5,
        title: 'Career option as a Network Engineer',
        free: true,
        url: '',
      },
      {
        id: 6,
        title: 'Some basic fundamentals of Networking',
        free: true,
        url: '',
      },
    ],
  },
  {
    id: 13,
    name: 'Section 13',
    title: 'Company Culture and Education System - Nishant Phuyal',
    topics: [
      {
        id: 1,
        title: 'Nishant Phuyal: Founder and CEO of XYZ company in Nepal',
        free: true,
        url: '',
      },
      {
        id: 2,
        title:
          'All about company culture, salary, and types of projects in Nepal',
        free: true,
        url: '',
      },
      {
        id: 3,
        title: 'All about our education system',
        free: true,
        url: '',
      },
      {
        id: 4,
        title: 'How our education system alone is not enough',
        free: true,
        url: '',
      },
    ],
  },
  {
    id: 14,
    name: 'Section 14',
    title: 'Shaping Your Career and A+ Pathshala - Whole A+ Team',
    topics: [],
  },
];

// const sections = [
//   {
//     id: 1,
//     name: 'Section 1',
//     title: 'Introduction to Computer Science and Technology',
//     topics: [
//       {
//         id: 1,
//         title: 'Introduction to the field of Computer Science and Technology',
//         free: false,
//         url: '',
//       },
//       {
//         id: 2,
//         title: 'Different domains of computer science',
//         free: true,
//         url: '',
//       },
//       {
//         id: 3,
//         title: 'All about theory and foundational subjects and its importance',
//         free: true,
//         url: '',
//       },
//       {
//         id: 4,
//         title: 'Which programming language to choose initially?',
//         free: true,
//         url: '',
//       },
//       {
//         id: 5,
//         title:
//           'How to choose a particular domain of computer science and technology as a beginner?',
//         free: true,
//         url: '',
//       },
//       {
//         id: 6,
//         title: 'Assignment for lecture 1',
//         free: true,
//         url: '',
//       },
//     ],
//     studyMaterials: [],
//   },
//   {
//     id: 2,
//     name: 'Section 2',
//     title: 'Building a Career in Computer Science and Technology',
//     topics: [
//       {
//         id: 7,
//         title: 'How a company is created?',
//         free: true,
//         url: '',
//       },
//       {
//         id: 8,
//         title: 'Types of companies: Big Tech Giant vs startups',
//         free: true,
//         url: '',
//       },
//       {
//         id: 9,
//         title:
//           'Types and stages of startup: series A funded, series B funded, IPO',
//         free: true,
//         url: '',
//       },
//       {
//         id: 10,
//         title:
//           'Your growth in startup / risks in startup as an engineer vs in Big Tech giants',
//         free: true,
//         url: '',
//       },
//       {
//         id: 11,
//         title: 'Service based company vs product based company',
//         free: true,
//         url: '',
//       },
//       {
//         id: 12,
//         title: 'All about startup and company culture in Nepal',
//         free: true,
//         url: '',
//       },
//       {
//         id: 13,
//         title:
//           'Why Nepalese aspire to go to Australia and wash dishes? Why Nepal is one of the poorest countries? Is it only because of politics? Is there a way that we can change the culture of Nepali going to Australia not to wash dish and earn 1 lakh a month instead going to Australia to do engineering and earn 10 lakh a month?',
//         free: true,
//         url: '',
//       },
//       {
//         id: 14,
//         title:
//           'Howcan we bring all Big Tech Giant office in Nepal? Is there a way?',
//         free: true,
//         url: '',
//       },
//       {
//         id: 15,
//         title:
//           'Before learning hiring process and skill required to be global engineer let’s learn basics of DSA',
//         free: true,
//         url: '',
//       },
//     ],
//     studyMaterials: [],
//   },
//   {
//     id: 3,
//     name: 'Section 3',
//     title: 'Data Structures and Algorithms',
//     topics: [
//       {
//         id: 16,
//         title: 'Sorting, Searching, Binary search, time and space complexity',
//         free: true,
//         url: '',
//       },
//       {
//         id: 17,
//         title: 'Creating leetcode and gfg account and solving 5 easy questions',
//         free: true,
//         url: '',
//       },
//       {
//         id: 18,
//         title: 'How to succeed in DSA',
//         free: true,
//         url: '',
//       },
//       {
//         id: 19,
//         title:
//           'How to be consistent and connect with like-minded great folks from outside Nepal?',
//         free: true,
//         url: '',
//       },
//       {
//         id: 20,
//         title:
//           'How much time it requires to learn DSA and crack coding interviews?',
//         free: true,
//         url: '',
//       },
//       {
//         id: 21,
//         title: 'How to maintain LinkedIn, Leetcode, and GFG',
//         free: true,
//         url: '',
//       },
//     ],
//     studyMaterials: [],
//   },
//   {
//     id: 4,
//     name: 'Section 4',
//     title: 'Building Projects and Contributing to Open Source',
//     topics: [
//       {
//         id: 22,
//         title:
//           'Basics of Javascript and starting to contribute to backend of A+ Pathshala service',
//         free: true,
//         url: '',
//       },
//       {
//         id: 23,
//         title: 'Basics of Git and Github (version control system)',
//         free: true,
//         url: '',
//       },
//       {
//         id: 24,
//         title:
//           'Development: doing 1000 projects and learning 1000 languages vs learning basic fundamental tech stack and contributing to large code base which is actually a profitable company and has huge users',
//         free: true,
//         url: '',
//       },
//       {
//         id: 25,
//         title: 'All about the open-source world and open-source contribution',
//         free: true,
//         url: '',
//       },
//       {
//         id: 26,
//         title:
//           'Our first open-source contribution: contributing to A+ Pathshala backend service. Adding email service functionality in A+ Pathshala',
//         free: true,
//         url: '',
//       },
//       {
//         id: 27,
//         title: 'All about good first issues',
//         free: true,
//         url: '',
//       },
//       {
//         id: 28,
//         title: 'All about hiring process in Big-Tech giants',
//         free: true,
//         url: '',
//       },
//       {
//         id: 29,
//         title: 'All about hiring process in startups',
//         free: true,
//         url: '',
//       },
//       {
//         id: 30,
//         title: 'All about hiring process in service-based companies',
//         free: true,
//         url: '',
//       },
//       {
//         id: 31,
//         title: 'All about salary structure in FAANG vs startups',
//         free: true,
//         url: '',
//       },
//       {
//         id: 32,
//         title:
//           'All about base pay + stock stipend + joining bonus + extra expenditure',
//         free: true,
//         url: '',
//       },
//     ],
//     studyMaterials: [],
//   },
//   {
//     id: 5,
//     name: 'Section 5',
//     title:
//       'Opportunities and Entrepreneurship in Computer Science and Technology',
//     topics: [
//       {
//         id: 33,
//         title:
//           'All about global opportunities: Mozilla Open Source Student Network (OSSN), GitHub Student Developer Pack, Google Summer of Code, Google Summer of Docs, Microsoft Internship Program, MLH fellowship',
//         free: true,
//         url: '',
//       },
//       {
//         id: 34,
//         title: 'Targeting GSOC for next year',
//         free: true,
//         url: '',
//       },
//       {
//         id: 35,
//         title: 'Strategies to target for next GSOC',
//         free: true,
//         url: '',
//       },
//       {
//         id: 36,
//         title: 'All about freelancing and contract-based work',
//         free: true,
//         url: '',
//       },
//       {
//         id: 37,
//         title:
//           'Creating a freelancing profile, finding clients as a freshman, and managing PRs',
//         free: true,
//         url: '',
//       },
//       {
//         id: 38,
//         title:
//           'Competitive edge for developers to enter into the world of entrepreneurship and startups',
//         free: true,
//         url: '',
//       },
//       {
//         id: 39,
//         title: 'All about software companies in Nepal',
//         free: true,
//         url: '',
//       },
//       {
//         id: 40,
//         title: 'Hiring in companies like eSewa, Khalti, and all',
//         free: true,
//         url: '',
//       },
//       {
//         id: 41,
//         title:
//           'Salary of software engineer in Nepal for experienced and for fresher',
//         free: true,
//         url: '',
//       },
//       {
//         id: 42,
//         title: 'Internship stipend in Nepal',
//         free: true,
//         url: '',
//       },
//       {
//         id: 43,
//         title: 'All about application development and basics of Flutter',
//         free: true,
//         url: '',
//       },
//       {
//         id: 44,
//         title: 'Roadmap to become a Flutter developer',
//         free: true,
//         url: '',
//       },
//       {
//         id: 45,
//         title: 'All about cybersecurity, ethical hacking, and networking',
//         free: true,
//         url: '',
//       },
//       {
//         id: 46,
//         title:
//           'Roadmap to become a networking expert and career options as a network engineer',
//         free: true,
//         url: '',
//       },
//       {
//         id: 47,
//         title:
//           'Founder and CEO of XYZ company in Nepal sharing insights on company culture, salary, and types of projects in Nepal',
//         free: true,
//         url: '',
//       },
//       {
//         id: 48,
//         title:
//           'Learning by doing, importance of blogging, learning in public philosophy, all about public profile, how to get out of education system trap, how to manage attendance, importance of documentation, project-based learning approach',
//         free: true,
//         url: '',
//       },
//       {
//         id: 49,
//         title:
//           'How AI is gonna change the world and how to get started with AI',
//         free: true,
//         url: '',
//       },
//     ],
//     studyMaterials: [],
//   },
// ];
