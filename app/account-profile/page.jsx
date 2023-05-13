'use client';
import { cookieContext, userContext } from '../layout';
import { courseContext } from '../become-teacher/create-course/page';
import React, { useContext } from 'react';
const GetProfileData = async () => {
  const { user } = useContext(userContext);
  const { cookie } = useContext(cookieContext);
  const res = await fetch(
    'https://a-pathshala-service-2.onrender.com/api/v1/user/profile',
    {
      method: 'POST', // Specify the method as POST
      headers: {
        'Content-Type': 'application/json',
        authorization: cookie,
        // Specify that the request body is in JSON format
      },
      body: JSON.stringify({ _id: user._id }), // Convert the body object to a JSON string
    }
  );
  return res.json();
};
const Page = async () => {
  const { user } = useContext(userContext);

  if (!user?._id) {
    return <>Pease log in</>;
  }
  const data = await GetProfileData();
  console.log(data);
  return <div>Welcome back{user.name}</div>;
};

export default Page;
// import { useState } from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
// import { useRouter } from 'next/router';
// import { FaPlay } from 'react-icons/fa';

// function Section({ name, title, videos, materials }) {
//   return (
//     <div className="my-8">
//       <h2 className="text-2xl font-bold">{title}</h2>
//       <p className="text-gray-500">{name}</p>
//       {videos.map((video, index) => (
//         <div key={index} className="my-4 flex items-center">
//           <FaPlay className="mr-2 text-gray-500" />
//           <span className="text-gray-500">{video.title}</span>
//         </div>
//       ))}
//       {materials.map((material, index) => (
//         <div key={index} className="my-4 flex items-center">
//           <Image
//             src={material.image}
//             width={40}
//             height={40}
//             alt={material.title}
//             className="mr-2 rounded-lg"
//           />
//           <span className="text-gray-500">{material.title}</span>
//         </div>
//       ))}
//     </div>
//   );
// }

// export  function CoursePage({ course }) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const router = useRouter();

//   if (!course) {
//     router.push('/404');
//     return null;
//   }

//   const { title, subtitle, requirements, description, price, discount, language, sections } = course;
//   const activeSection = sections[activeIndex];

//   return (
//     <div className="max-w-screen-lg mx-auto">
//       <Head>
//         <title>{title} - My Courses</title>
//         <meta name="description" content={description} />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <div className="flex justify-between items-center py-8">
//         <div>
//           <h1 className="text-3xl font-bold">{title}</h1>
//           <p className="text-gray-500">{subtitle}</p>
//         </div>
//         <div className="flex items-center">
//           <span className="text-2xl font-bold">${price - discount}</span>
//           <span className="text-gray-500 ml-2 line-through">${price}</span>
//         </div>
//       </div>

//       <div className="grid grid-cols-12 gap-8">
//         <div className="col-span-3">
//           <div className="sticky top-16">
//             <p className="text-gray-500 mb-2">Sections</p>
//             <ul>
//               {sections.map((section, index) => (
//                 <li
//                   key={index}
//                   className={`py-2 cursor-pointer ${
//                     index === activeIndex ? 'text-green-500 font-bold' : 'text-gray-500'
//                   }`}
//                   onClick={() => setActiveIndex(index)}
//                 >
//                   {section.title}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         <div className="col-span-9">
//           <Section {...activeSection} />
//           <p className="my-8">{description}</p>
//           <p className="text-gray-500">
//             <span className="font-bold">Requirements: </span>
//             {requirements}
//           </p>
//           <p className="text-gray-500">
//             <span className="font-bold">Language: </span>
//             {language}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
