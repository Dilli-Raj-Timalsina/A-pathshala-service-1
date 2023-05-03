import CourseData from '../data/CourseData';
import CourseCard from './CourseCard';

const groupBy = (array, key) => {
  return array.reduce((result, item) => {
    (result[item[key]] = result[item[key]] || []).push(item);
    return result;
  }, {});
};

const CourseItemsByLevel = () => {
  const coursesByLevel = groupBy(CourseData, 'level');

  return (
    <div className="container mx-auto px-4">
      {Object.entries(coursesByLevel)
        .slice(0, 8)
        .map(([level, courses]) => (
          <div key={level} className="mb-8">
            <h2 className="text-2xl my-10 px-10 font-extrabold bg-teal-100 z-10 bg-gray-100 shadow-lg rounded-lg  mb-4">
              {level}
            </h2>
            <div className="courses grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {courses.slice(0, 8).map((course, val) => (
                <CourseCard key={val} course={course} />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default CourseItemsByLevel;
