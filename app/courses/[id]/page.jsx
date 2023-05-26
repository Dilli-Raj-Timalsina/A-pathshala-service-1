import Checkout from '@/app/components/courseConsume/Checkout';
import CourseContent from '@/app/components/courseConsume/CourseContent';
import CourseHeader from '@/app/components/courseConsume/CourseHeader';
import CourseReview from '@/app/components/courseConsume/CourseReview';
import CourseTeachers from '@/app/components/courseConsume/CourseTeachers';
const getCourse = async (id) => {
  const res = await fetch(
    `https://a-pathshala-service-2.onrender.com/api/v1/course/getCourseMetaData`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id: id }),
    }
  );
  const data = await res.json();
  return data;
};
async function CourseDetail({ params }) {
  const data = await getCourse('646cc45889de1369e32c43a7');
  console.log(data);
  return (
    <div className="grid  grid-cols-3 ">
      <div className="lg:ms-8 relative pb-8 col-span-2 px-4 sm:px-6 lg:px-8">
        <CourseHeader course={course} />

        <div className="flex">
          <div className="pr-4">
            <div className="my-4" id="description">
              <h3 className="text-2xl font-bold mb-4">Description</h3>
              <p>{course.description}</p>
            </div>
            <CourseTeachers />
            <CourseContent />
            {/* <div className="my-4" id="syllabus">
              <h3 className="text-2xl font-bold mb-4">Syllabus</h3>
              <ul>
                {course.syllabus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div> */}
            <div className="my-4" id="benefits">
              <h3 className="text-2xl font-bold mb-4">Benefits</h3>
              <ul className="grid grid-cols-2 gap-2">
                {course.benefits.map((item) => (
                  <li className=" list-none flex" key={item}>
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                        fill="currentColor"
                        fillOpacity="0.1"
                      ></path>
                      <path
                        d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                        fill="currentColor"
                      ></path>
                    </svg>{' '}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <CourseReview course={course} />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Checkout course={course} />
      </div>
    </div>
  );
}

export default CourseDetail;
const course = {
  title: 'Introduction to Web Development',
  rating: '4.5',
  teacher: 'John Smith',
  image: '/a.png',
  description:
    'This session will be conducted by popular tech personalities from across the globe who proved their worth and showing their amazing skills. do not miss this golden opportunity which is being offered for free.Register now and mark the date as we are just 1 week away from it to happen',
  syllabus: [
    'Introduction to HTML',
    'Introduction to CSS',
    'Introduction to JavaScript',
    'Responsive Web Design',
    'React Basics',
    'Vue Basics',
  ],
  benefits: [
    'Learn the basics of web development',
    'Create responsive web pages',
    'Use popular frameworks like React and Vue',
    'Get a solid foundation for a career in web development',
  ],
  reviews: [
    {
      id: 1,
      userName: 'Jane Doe',
      userAvatar: 'https://randomuser.me/api/portraits/men/7.jpg',
      date: 'May 1, 2022',
      comment:
        'This course was a great introduction to web development. The instructor was knowledgeable and provided clear explanations. I would recommend this course to anyone who is interested in learning web development.',
    },
    {
      id: 2,
      userName: 'John Smith',
      userAvatar: 'https://randomuser.me/api/portraits/men/9.jpg',
      date: 'May 5, 2022',
      comment:
        'I found this course to be very helpful in learning the basics of web development. The syllabus was well-structured and easy to follow. I particularly enjoyed the sections on React and Vue. Highly recommend!',
    },
    {
      id: 3,
      userName: 'Sarah Johnson',
      userAvatar: 'https://randomuser.me/api/portraits/women/7.jpg',
      date: 'May 10, 2022',
      comment:
        'I really enjoyed this course and learned a lot. The instructor was engaging and the content was well-organized. I appreciated the emphasis on responsive web design and the use of frameworks like React and Vue. Would definitely recommend!',
    },
  ],
  price: '$199',
  duration: '12 weeks',
  level: 'Beginner',
};
