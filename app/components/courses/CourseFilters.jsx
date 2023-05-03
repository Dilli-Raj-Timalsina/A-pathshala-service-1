// import { SearchIcon } from '@heroicons/react/solid';
// import { FilterIcon } from '@heroicons/react/outline';

// export default function CourseFilters() {
//   return (
//     <div className="flex flex-col pt-6 md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
//       <div className="relative">
//         <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
//           <img
//             src="/search.svg"
//             className="h-5 w-5 text-gray-400"
//             aria-hidden="true"
//           />
//         </span>
//         <input
//           type="text"
//           className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:ring focus:ring-blue-300 focus:ring-opacity-50 sm:text-sm"
//           placeholder="Search for courses"
//         />
//       </div>
//       <div className="relative">
//         <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
//           <img
//             src="/filter.svg"
//             className="h-5 w-5 text-gray-400"
//             aria-hidden="true"
//           />
//         </span>
//         <select
//           className="block appearance-none  w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 ps-12 rounded-md shadow-sm leading-5 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
//           defaultValue=""
//         >
//           <option value="" disabled>
//             Filter by category
//           </option>
//           <option>Programming</option>
//           <option>Design</option>
//           <option>Marketing</option>
//         </select>
//       </div>
//       <div className="relative">
//         <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
//           <img
//             src="/filter.svg"
//             className="h-5 w-5 text-gray-400"
//             aria-hidden="true"
//           />
//         </span>
//         <select
//           className="block appearance-none ps-12 w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-md shadow-sm leading-5 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
//           defaultValue=""
//         >
//           <option value="" disabled>
//             Filter by level
//           </option>
//           <option>Beginner</option>
//           <option>Intermediate</option>
//           <option>Advanced</option>
//         </select>
//       </div>
//       <div className="relative">
//         <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
//           <img
//             src="/filter.svg"
//             className="h-5 w-5 text-gray-400"
//             aria-hidden="true"
//           />
//         </span>
//         <select
//           className="block appearance-none ps-12 w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-md shadow-sm leading-5 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
//           defaultValue=""
//         >
//           <option value="" disabled>
//             Filter by type
//           </option>
//           <option>On-demand</option>
//           <option>Live</option>
//           <option>Hybrid</option>
//         </select>
//       </div>
//       <div className="relative">
//         <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
//           <img
//             src="filter.svg"
//             className="h-5 w-5 text-gray-400"
//             aria-hidden="true"
//           />
//         </span>
//         <select
//           className="block appearance-none ps-12 w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-md shadow-sm leading-5 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
//           defaultValue=""
//         >
//           <option value="" disabled>
//             Filter by price
//           </option>
//           <option>Free</option>
//           <option>Under $50</option>
//           <option>Under $100</option>
//         </select>
//       </div>
//     </div>
//   );
// }
'use client';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';
const CATEGORIES = [
  'Business',
  'Technology',
  'Creative Arts',
  'Health and Wellness',
  'Personal Development',
];

const CourseFilter = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);

  const handleCategoryClick = (category) => {
    onFilterChange({ category });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onFilterChange({ search: debouncedSearchTerm });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <form onSubmit={handleSearchSubmit} type="submit">
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="search"
          >
            Search courses
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="search"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Categories
          </label>
          <div className="flex flex-wrap -mx-2">
            <Categories
              categories={CATEGORIES}
              onCategoryClick={handleCategoryClick}
            />
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

const Categories = ({ categories, onCategoryClick }) => {
  return categories.map((category, val) => (
    <button
      key={val}
      className="bg-gray-200 rounded-full py-2 px-4 text-gray-700 font-bold mr-2 mb-2"
      onClick={() => onCategoryClick(category)}
    >
      {category}
    </button>
  ));
};

export default CourseFilter;
