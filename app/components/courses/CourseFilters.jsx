import { SearchIcon } from '@heroicons/react/solid'
import { FilterIcon } from '@heroicons/react/outline'

export default function CourseFilters() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
      <div className="relative">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:ring focus:ring-blue-300 focus:ring-opacity-50 sm:text-sm"
          placeholder="Search for courses"
        />
      </div>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <FilterIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
        <select
          className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-md shadow-sm leading-5 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
          defaultValue=""
        >
          <option value="" disabled>Filter by category</option>
          <option>Programming</option>
          <option>Design</option>
          <option>Marketing</option>
        </select>
      </div>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <FilterIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
        <select
          className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-md shadow-sm leading-5 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
          defaultValue=""
        >
          <option value="" disabled>Filter by level</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
      </div>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <FilterIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
        <select
          className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-md shadow-sm leading-5 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
          defaultValue=""
        >
          <option value="" disabled>Filter by type</option>
          <option>On-demand</option>
          <option>Live</option>
          <option>Hybrid</option>
        </select>
      </div>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <FilterIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
        <select
          className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-md shadow-sm leading-5 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
          defaultValue=""
        >
          <option value="" disabled>Filter by price</option>
          <option>Free</option>
          <option>Under $50</option>
          <option>Under $100</option>
        </select>
      </div>
    </div>
  );
}