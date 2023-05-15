'use client';
import { useState } from 'react';
import Link from 'next/link';
const CategorySidebar = ({ setIsClosed }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const handleCategoryClick = (categoryId) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  return (
    <aside className=" bg-course-sidebar-gradient  text-black w-full md:w-1/3 lg:w-1/4 py-4 md:py-8 lg:py-12 px-4 md:px-6 lg:px-8">
      <div className="flex justify-between">
        <h2 className="text-lg md:text-xl font-bold mb-4">Categories</h2>
        <button onClick={() => setIsClosed(true)}>
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6L6 18" />
            <path d="M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav>
        <ul>
          {categories.map((category) => (
            <li key={category.id} className="mb-4 md:mb-6 lg:mb-8">
              <button
                className="text-lg font-medium flex items-center justify-between w-full px-2 md:px-4 py-3 rounded-lg hover:bg-white hover:rounded-xl transition-colors duration-100 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:bg-white"
                onClick={() => handleCategoryClick(category.id)}
              >
                <span>{category.name}</span>
                <svg
                  className={`w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 ${
                    activeCategory === category.id ? 'transform rotate-180' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {activeCategory === category.id && (
                <ul className="mt-2 text-center">
                  {category.subcategories.map((subcategory) => (
                    <li key={subcategory.id} className="mb-2">
                      <Link
                        className="hover:bg-gray-200 hover:rounded-md px-6 transition-colors duration-100 focus:outline-none focus:bg-white text-md md:text-lg lg:text-xl"
                        href={`/categories/${category.id}/${subcategory.id}`}
                      >
                        {subcategory.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default CategorySidebar;
const categories = [
  {
    id: 1,
    name: 'Primary',
    subcategories: [
      {
        id: 1,
        name: 'Class 6',
      },
      {
        id: 2,
        name: 'Class 7',
      },
      {
        id: 3,
        name: 'Class 8',
      },
    ],
  },
  {
    id: 2,
    name: 'Secondary',
    subcategories: [
      {
        id: 4,
        name: 'Class 9',
      },
      {
        id: 5,
        name: 'SEE',
      },
    ],
  },
  {
    id: 3,
    name: '+2',
    subcategories: [
      {
        id: 7,
        name: 'Class 11',
      },
      {
        id: 8,
        name: 'Class 12',
      },
    ],
  },
  {
    id: 4,
    name: 'Bachelors',
    subcategories: [
      {
        id: 9,
        name: 'Engineering',
      },
      {
        id: 10,
        name: 'Commerce',
      },
      {
        id: 11,
        name: 'Management',
      },
    ],
  },
];
