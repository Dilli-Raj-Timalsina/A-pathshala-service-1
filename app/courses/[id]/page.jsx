import Checkout from '@/app/components/courseConsume/Checkout';
import CourseContent from '@/app/components/courseConsume/CourseContent';
import CourseHeader from '@/app/components/courseConsume/CourseHeader';
import CourseReview from '@/app/components/courseConsume/CourseReview';
import CourseTeachers from '@/app/components/courseConsume/CourseTeachers';
import CourseBenefits from '@/app/components/courseConsume/CourseBenefits';
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
              <CourseBenefits course={course} />
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
  title: 'Ignite Your Career with a 15-Day Computer Science Bootcamp',
  rating: '',
  teachers: [
    'Dilli Raj Timalsina',
    'Prince Singh',
    'Ayushman Khan',
    'Bishworaj Poudel',
    'Jiwan Bhattrai',
    'Nishant Phuyal',
    'Whole A+ Team',
  ],
  image: '/a.png',
  description:
    'This comprehensive computer science and technology course covers various topics, including an introduction to the field, different domains of computer science, theory and foundational subjects, programming language selection, company creation and operation, startup types and stages, software development, competitive programming, JavaScript basics, open-source contribution, hiring processes, global opportunities, freelancing, networking, cybersecurity, software companies in Nepal, and more. Taught by experienced instructors and industry professionals, this course provides valuable insights and knowledge to help you navigate the world of computer science and technology.',

  benefits: [
    'Gain a solid foundation in computer science and technology',
    'Explore different domains and career options within the field',
    'Learn theory and foundational subjects essential for success',
    'Choose the right programming language to start with',
    'Understand the process of company creation and operation',
    'Discover the differences between big tech giants and startups',
    'Learn about software development and contribute to real projects',
    'Explore competitive programming and improve coding skills',
    'Master JavaScript basics and backend development',
    'Contribute to open-source projects and build your portfolio',
    'Gain insights into hiring processes and salary structures',
    'Explore global opportunities and internships',
    'Learn about freelancing and contract-based work',
    'Discover networking and cybersecurity concepts',
    'Understand the software industry in Nepal and its opportunities',
    'Get valuable advice from industry professionals',
    'Learn about the A+ Pathshala and its career-shaping opportunities',
    'And much more!',
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
  price: '1000',
  duration: '15 days',
  level: 'Beginner',
};
