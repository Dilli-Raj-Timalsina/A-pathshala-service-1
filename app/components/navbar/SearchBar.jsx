'use client';
import { useState } from 'react';
const SearchBar = () => {
  const [query, setQuery] = useState('');

  const options = [
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'Computer Science',
    'Statistics',
  ];

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="relative">
      <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
        <img
          src="/search.svg"
          className="h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </span>
      <input
        type="text"
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:ring focus:ring-blue-300 focus:ring-opacity-50 sm:text-sm"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        list="options"
      />
      <datalist id="options">
        {options
          .filter((option) =>
            option.toLowerCase().includes(query.toLowerCase())
          )
          .map((option, index) => (
            <option key={index} value={option} />
          ))}
      </datalist>
    </div>
  );
};

export default SearchBar;
