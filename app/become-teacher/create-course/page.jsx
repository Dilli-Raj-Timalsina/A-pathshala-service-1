// pages/createCourse.js
'use client';
// import React, { useState } from 'react';

// function CreateCourse() {
//   const [course, setCourse] = useState({
//     title: '',
//     subtitle: '',
//     price: '',
//     level: '',
//     thumbnail: '',
//     sections: [],
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setCourse({ ...course, [name]: value });
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setCourse({ ...course, thumbnail: reader.result });
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const res = await fetch('/api/courses', {
//       method: 'POST',
//       body: JSON.stringify(course),
//     });
//     if (res.ok) {
//       alert('Course created successfully!');
//       setCourse({
//         title: '',
//         subtitle: '',
//         price: '',
//         level: '',
//         thumbnail: '',
//         sections: [],
//       });
//     } else {
//       alert('Failed to create course.');
//     }
//   };

//   return (
//     <div className="flex flex-col mt-10 items-center justify-center min-h-screen bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         encType="multipart/form-data"
//         className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md"
//       >
//         <h1 className="text-3xl font-bold text-gray-800 mb-6">
//           Create a new course
//         </h1>
//         <div className="mb-4">
//           <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
//             Title
//           </label>
//           <input
//             id="title"
//             type="text"
//             name="title"
//             value={course.title}
//             onChange={handleInputChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="subtitle"
//             className="block text-gray-700 font-bold mb-2"
//           >
//             Subtitle
//           </label>
//           <input
//             id="subtitle"
//             type="text"
//             name="subtitle"
//             value={course.subtitle}
//             onChange={handleInputChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
//             Price
//           </label>
//           <input
//             id="price"
//             type="number"
//             name="price"
//             value={course.price}
//             onChange={handleInputChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="level" className="block text-gray-700 font-bold mb-2">
//             Level
//           </label>
//           <select
//             id="level"
//             name="level"
//             value={course.level}
//             onChange={handleInputChange}
//             className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//             required
//           >
//             <option value="">Select level</option>
//             <option value="beginner">Beginner</option>
//             <option value="intermediate">Intermediate</option>
//             <option value="advanced">Advanced</option>
//           </select>
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="thumbnail"
//             className="block text-gray-700 font-bold mb-2"
//           >
//             Thumbnail
//           </label>
//           {course.thumbnail ? (
//             <img
//               src={course.thumbnail}
//               alt="Course thumbnail"
//               className="mb-2"
//               style={{ maxWidth: '100%' }}
//             />
//           ) : null}
//           <div className="flex items-center">
//             <label
//               htmlFor="thumbnail-upload"
//               className="flex-1 cursor-pointer bg-white rounded-md border-gray-300 hover:border-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500"
//             >
//               <svg
//                 className="w-8 h-8 text-gray-400"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path d="M12 4v16m8-8H4" />
//               </svg>
//               <span className="ml-2 text-sm text-gray-600">
//                 Upload a file or drag and drop
//               </span>
//               <input
//                 id="thumbnail-upload"
//                 type="file"
//                 accept="image/*"
//                 className="sr-only"
//                 onChange={handleFileChange}
//               />
//             </label>
//             {course.thumbnail ? (
//               <button
//                 type="button"
//                 className="ml-2 text-red-600 hover:text-red-800 focus:outline-none"
//                 onClick={() => setCourse({ ...course, thumbnail: '' })}
//               >
//                 Remove
//               </button>
//             ) : null}
//           </div>
//         </div>
//         <div className="flex justify-end">
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//           >
//             Create course
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default CreateCourse;
// pages/createCourse.js

import React, { useReducer } from 'react';

const initialState = {
  currentStep: 1,
  title: '',
  subtitle: '',
  price: '',
  level: '',
  thumbnail: '',
  sections: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'nextStep':
      return { ...state, currentStep: state.currentStep + 1 };
    case 'prevStep':
      return { ...state, currentStep: state.currentStep - 1 };
    case 'setTitle':
      return { ...state, title: action.payload };
    case 'setSubtitle':
      return { ...state, subtitle: action.payload };
    case 'setPrice':
      return { ...state, price: action.payload };
    case 'setLevel':
      return { ...state, level: action.payload };
    case 'setThumbnail':
      return { ...state, thumbnail: action.payload };
    case 'addSection':
      return { ...state, sections: [...state.sections, action.payload] };
    default:
      throw new Error();
  }
}

function CreateCourse() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNextStep = () => {
    dispatch({ type: 'nextStep' });
  };

  const handlePrevStep = () => {
    dispatch({ type: 'prevStep' });
  };

  const handleTitleChange = (event) => {
    dispatch({ type: 'setTitle', payload: event.target.value });
  };

  const handleSubtitleChange = (event) => {
    dispatch({ type: 'setSubtitle', payload: event.target.value });
  };

  const handlePriceChange = (event) => {
    dispatch({ type: 'setPrice', payload: event.target.value });
  };

  const handleLevelChange = (event) => {
    dispatch({ type: 'setLevel', payload: event.target.value });
  };

  const handleThumbnailChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      dispatch({ type: 'setThumbnail', payload: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSectionAdd = (section) => {
    dispatch({ type: 'addSection', payload: section });
  };

  const { currentStep, title, subtitle, price, level, thumbnail, sections } =
    state;

  return (
    <div className="flex flex-col mx-auto container  min-h-screen bg-gray-100">
      <div className="w-full min-w-full p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Create a new course
        </h1>
        <div className="mb-4">
          <span className="text-gray-700 font-bold mb-2">
            Step {currentStep} of 2: Course details
          </span>
        </div>
        {currentStep === 1 && (
          <div>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-700 font-bold mb-2"
              >
                Title
              </label>
              <input
                id="title"
                type="text"
                name="title"
                value={title}
                onChange={handleTitleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="subtitle"
                className="block text-gray-700 font-bold mb-2"
              >
                Subtitle
              </label>
              <input
                id="subtitle"
                type="text"
                name="subtitle"
                value={subtitle}
                onChange={handleSubtitleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="price"
                className="block text-gray-700 font-bold mb-2"
              >
                Price
              </label>
              <input
                id="price"
                type="number"
                name="price"
                value={price}
                onChange={handlePriceChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="level"
                className="block text-gray-700 font-bold mb-2"
              >
                Level
              </label>
              <select
                id="level"
                name="level"
                value={level}
                onChange={handleLevelChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="thumbnail"
                className="block text-gray-700 font-bold mb-2"
              >
                Thumbnail
              </label>
              {thumbnail ? (
                <img
                  src={thumbnail}
                  alt="Course thumbnail"
                  className="mb-2"
                  style={{ maxWidth: '100%' }}
                />
              ) : null}
              <div className="flex items-center">
                <label
                  htmlFor="thumbnail-upload"
                  className="flex-1 cursor-pointer bg-white rounded-md border-gray-300 hover:border-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500"
                >
                  <svg
                    className="w-8 h-8 text-gray-400"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 4v16m8-8H4" />
                  </svg>
                  <span className="ml-2 text-sm text-gray-600">
                    Upload a file or drag and drop
                  </span>
                  <input
                    id="thumbnail-upload"
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    onChange={handleThumbnailChange}
                  />
                </label>
                {thumbnail ? (
                  <button
                    type="button"
                    className="ml-2 text-red-600 hover:text-red-800 focus:outline-none"
                    onClick={() =>
                      dispatch({ type: 'setThumbnail', payload: '' })
                    }
                  >
                    Remove
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <div className="mb-4">
              <span className="text-gray-700 font-bold mb-2">
                Step {currentStep} of 2: Course sections
              </span>
            </div>
            <SectionList sections={sections} onAddSection={handleSectionAdd} />
          </div>
        )}
        <div className="flex justify-end">
          {currentStep > 1 && (
            <button
              type="button"
              className="mr-2 bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
              onClick={handlePrevStep}
            >
              Previous
            </button>
          )}
          {currentStep < 2 ? (
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              onClick={handleNextStep}
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Create course
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function SectionList({ sections, onAddSection }) {
  const handleAddSection = () => {
    onAddSection({ title: '', lessons: [] });
  };

  return (
    <div>
      {sections.map((section, index) => (
        <div key={index} className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-700 font-bold">Section {index + 1}</span>
            <button
              type="button"
              className="text-red-600 hover:text-red-800 focus:outline-none"
              onClick={() => onAddSection({ title: '', lessons: [] })}
            >
              Remove
            </button>
          </div>
          <div className="mb-4">
            <label
              htmlFor={`section-${index}-title`}
              className="block text-gray-700 font-bold mb-2"
            >
              Title
            </label>
            <input
              id={`section-${index}-title`}
              type="text"
              name={`section-${index}-title`}
              value={section.title}
              onChange={(event) =>
                onAddSection({ ...section, title: event.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <LessonList sectionIndex={index} lessons={section.lessons} />
        </div>
      ))}
      <div className="flex justify-end">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddSection}
        >
          Add section
        </button>
      </div>
    </div>
  );
}
function LessonList({ sectionIndex, lessons, dispatch }) {
  const handleAddLesson = () => {
    const newLessons = [...lessons, { title: '', videoUrl: '' }];
    dispatch({
      type: 'setSectionLessons',
      payload: { sectionIndex, lessons: newLessons },
    });
  };

  return (
    <div>
      {lessons.map((lesson, index) => (
        <div key={index} className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-700 font-bold">Lesson {index + 1}</span>
            <button
              type="button"
              className="text-red-600 hover:text-red-800 focus:outline-none"
              onClick={() =>
                dispatch({
                  type: 'removeSectionLesson',
                  payload: { sectionIndex, lessonIndex: index },
                })
              }
            >
              Remove
            </button>
          </div>
          <div className="mb-4">
            <label
              htmlFor={`section-${sectionIndex}-lesson-${index}-title`}
              className="block text-gray-700 font-bold mb-2"
            >
              Title
            </label>
            <input
              id={`section-${sectionIndex}-lesson-${index}-title`}
              type="text"
              name={`section-${sectionIndex}-lesson-${index}-title`}
              value={lesson.title}
              onChange={(event) =>
                dispatch({
                  type: 'updateSectionLesson',
                  payload: {
                    sectionIndex,
                    lessonIndex: index,
                    field: 'title',
                    value: event.target.value,
                  },
                })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor={`section-${sectionIndex}-lesson-${index}-video`}
              className="block text-gray-700 font-bold mb-2"
            >
              Video URL
            </label>
            <input
              id={`section-${sectionIndex}-lesson-${index}-video`}
              type="text"
              name={`section-${sectionIndex}-lesson-${index}-video`}
              value={lesson.videoUrl}
              onChange={(event) =>
                dispatch({
                  type: 'updateSectionLesson',
                  payload: {
                    sectionIndex,
                    lessonIndex: index,
                    field: 'videoUrl',
                    value: event.target.value,
                  },
                })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>
      ))}
      <div className="flex justify-end">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddLesson}
        >
          Add lesson
        </button>
      </div>
    </div>
  );
}

export default CreateCourse;
