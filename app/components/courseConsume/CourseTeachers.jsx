import Image from 'next/image';
const teachers = [
  {
    name: 'Bishwaraj',
    tag: 'Youtuber with 200k+ Subscribers',
    position: 'Lead Instructor',
    image: '/bishwaraj.jpg',
  },
  {
    name: 'Jeevan',
    tag: 'Founder of Nepal Online School and  Cyber Security Expert',
    position: 'Teaching Assistant',
    image: '/jeevan.png',
  },
  {
    name: 'Nishcal',
    tag: 'Backend Developer',
    position: 'Teaching Assistant',
    image: '/jeevan2.png',
  },
];

const CourseTeachers = () => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        Your Teachers For this Bootcamp{' '}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {teachers.map((teacher) => (
          <div key={teacher.name} className="flex flex-col items-center">
            <div className="w-28 h-28  mb-2">
              <Image
                src={teacher.image}
                height={100}
                width={100}
                alt={teacher.name}
                className="rounded-xl overflow-hidden"
              />
            </div>
            <div className="text-lg font-medium text-center mb-1">
              {teacher.name}
            </div>
            <div className="text-gray-500 text-center">{teacher.position}</div>
            <div className="text-gray-500 text-center">{teacher.tag}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseTeachers;
