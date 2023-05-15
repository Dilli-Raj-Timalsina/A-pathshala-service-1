'use client';
import { useContext, useState } from 'react';
import { courseContext } from '@/app/become-teacher/create-course/page';
// import AddSection from './AddSection';
import CleanAddSection from './CleanAddSection';

const CourseBuilder = () => {
  // const { courseId } = useContext(courseContext);
  const [sections, setSections] = useState([
    { name: '', title: '', videos: [], materials: [] },
  ]);
  console.log(sections);
  const handleAddSection = () => {
    setSections([
      ...sections,
      { name: '', title: '', videos: [], materials: [] },
    ]);
  };

  const handleSectionChange = (index, section) => {
    const newSections = [...sections];
    newSections[index] = section;
    setSections(newSections);
  };

  const handleSectionRemove = (index) => {
    const newSections = [...sections];
    newSections.splice(index, 1);
    setSections(newSections);
  };

  const handleSubmit = (e) => {
    router.push('/teachers/profile');
    e.preventDefault();
    console.log(sections);
    // Send data to backend server
  };

  return (
    <div className="flex flex-col pt-10 items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md"
      >
        {sections.map((section, index) => (
          <div key={index}>
            <CleanAddSection
              section={section}
              onChange={(section) => handleSectionChange(index, section)}
              onRemove={() => handleSectionRemove(index)}
            />
          </div>
        ))}
        <div className="mb-6">
          <button
            type="button"
            className=" bg-sidebar-green-gradient hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={handleAddSection}
          >
            Add Another Section
          </button>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Save Course
        </button>
      </form>
    </div>
  );
};

export default CourseBuilder;
