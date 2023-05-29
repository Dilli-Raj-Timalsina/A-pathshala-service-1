'use client';
import CourseData from '../data/CourseData';
// import { createContext, useContext, useEffect, useState } from 'react';
// import CourseCard from '../teacherProfile/CourseCard';
// import { featuredTeachers } from '../PopularTeachersList';

// async function getCourses() {
//   const cour = await featuredTeachers.flatMap((teachers) => teachers.courses);
//   return cour;
// }

// // Create a new context for the courses data
// const CoursesContext = createContext();

// // Define the Courses component
// const Courses = () => {
//   const { courses, setCourses } = useContext(CoursesContext);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterOptions, setFilterOptions] = useState({
//     sort: 'default',
//     order: 'asc',
//   });

//   useEffect(() => {
//     async function fetchCourses() {
//       const courses = await getCourses();
//       setCourses(courses);
//     }
//     fetchCourses();
//   }, [setCourses]);

//   // Filter the courses based on the search term and filter options
//   const filteredCourses = courses
//     .filter((course) =>
//       course.title.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     .sort((a, b) => {
//       if (filterOptions.sort === 'title') {
//         return filterOptions.order === 'asc'
//           ? a.title.localeCompare(b.title)
//           : b.title.localeCompare(a.title);
//       } else if (filterOptions.sort === 'rating') {
//         return filterOptions.order === 'asc'
//           ? a.rating - b.rating
//           : b.rating - a.rating;
//       } else {
//         return 0;
//       }
//     });

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-4">
//         <input
//           type="text"
//           placeholder="Search courses"
//           value={searchTerm}
//           onChange={(event) => setSearchTerm(event.target.value)}
//           className="w-full p-2 border border-gray-300 rounded-md mr-4"
//         />
//         <select
//           value={filterOptions.sort}
//           onChange={(event) =>
//             setFilterOptions({
//               ...filterOptions,
//               sort: event.target.value,
//             })
//           }
//           className="p-2 border border-gray-300 rounded-md mr-4"
//         >
//           <option value="default">Sort by:</option>
//           <option value="title">Title</option>
//           <option value="rating">Rating</option>
//         </select>
//         <select
//           value={filterOptions.order}
//           onChange={(event) =>
//             setFilterOptions({
//               ...filterOptions,
//               order: event.target.value,
//             })
//           }
//           className="p-2 border border-gray-300 rounded-md"
//         >
//           <option value="asc">Ascending</option>
//           <option value="desc">Descending</option>
//         </select>
//       </div>
//       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//         {filteredCourses.map((course) => (
//           <CourseCard key={course.id} course={course} />
//         ))}
//       </div>
//     </div>
//   );
// };

// // Define a new component that provides the courses data to the context
// const CoursesProvider = ({ children }) => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     async function fetchCourses() {
//       const courses = await getCourses();
//       setCourses(courses);
//     }
//     fetchCourses();
//   }, []);

//   return (
//     <CoursesContext.Provider value={{ courses, setCourses }}>
//       {children}
//     </CoursesContext.Provider>
//   );
// };

// export { CoursesProvider, Courses };
import { useState } from 'react';
import CourseFilter from './CourseFilters';
import CourseList from '../teachers/CourseList';
import CourseItemsByLevel from './CourseItemsByLevels';
import CategorySidebar from './CategorySideBar';
const Courses = () => {
  const COURSES = CourseData;
  const [filteredCourses, setFilteredCourses] = useState(COURSES);
  const [isClosed, setIsClosed] = useState(true);

  console.log(filteredCourses);
  console.log('Showing filtered COurses' + filteredCourses);
  const handleFilterChange = ({ category = '', search = '' }) => {
    let courses = COURSES;
    if (category) {
      courses = COURSES.filter((course) => course.category === category);
    }
    if (search) {
      const searchTerm = search.toLowerCase();
      courses = COURSES.filter(
        (course) =>
          course.title.toLowerCase().includes(searchTerm) ||
          course?.description?.toLowerCase().includes(searchTerm)
      );
    }
    setFilteredCourses(courses);
    console.log(filteredCourses);
  };

  const handleOpen = (e) => {
    e.preventDefault();
    setIsClosed(false);
  };
  return (
    <>
      <div className="flex ">
        {isClosed ? (
          // <button onClick={handleOpen} className="block">
          <svg
            className="w-8 h-8 ms-3 mt-3 me-3 hover:cursor-pointer"
            onClick={handleOpen}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12H3" />
            <path d="M21 6H3" />
            <path d="M21 18H3" />
          </svg>
        ) : (
          // </button>
          <CategorySidebar setIsClosed={setIsClosed} />
        )}
        <div className="container mx-auto">
          <CourseFilter onFilterChange={handleFilterChange} />
          <CourseList courses={filteredCourses} gridColumns={3} />
          <h2 className=" flex justify-center items-center text-3xl m-6 font-bold">
            Explore Courses Levelwise
          </h2>
          <CourseItemsByLevel />
        </div>
      </div>
    </>
  );
};

export default Courses;
