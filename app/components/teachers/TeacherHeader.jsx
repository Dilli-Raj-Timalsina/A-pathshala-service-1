const TeacherHeader = ({ teacher }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 lg:flex lg:flex-col lg:items-center">
      <div className="lg:w-1/2 lg:mb-8">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase mb-2">
          {teacher.category}
        </h2>
        <h1 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-4">
          {teacher.name}
        </h1>
        <div className="text-lg leading-8 font-medium text-gray-500 mb-8">
          {teacher.bio}
        </div>
      </div>
      <div className="lg:w-1/2 lg:pl-8 flex items-center justify-center">
        <div className="rounded-full overflow-hidden w-48 h-48">
          <img
            src={teacher.image}
            alt={teacher.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TeacherHeader;
